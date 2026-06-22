#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:3000}"

echo "Testing forms against $BASE_URL"

echo "→ Waitlist (customer)..."
WAITLIST_CUSTOMER=$(curl -s -w "\n%{http_code}" -X POST "$BASE_URL/api/waitlist" \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test Customer",
    "role": "customer",
    "phone": "5551234567",
    "email": "test-customer@example.com",
    "source": "hero"
  }')
HTTP=$(echo "$WAITLIST_CUSTOMER" | tail -1)
BODY=$(echo "$WAITLIST_CUSTOMER" | sed '$d')
if [ "$HTTP" != "200" ]; then
  echo "FAIL waitlist customer: HTTP $HTTP — $BODY"
  exit 1
fi
echo "OK waitlist customer"

echo "→ Waitlist (business)..."
WAITLIST_BUSINESS=$(curl -s -w "\n%{http_code}" -X POST "$BASE_URL/api/waitlist" \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test Owner",
    "role": "business",
    "businessName": "Test Shop",
    "phone": "5559876543",
    "email": "test-business@example.com",
    "source": "benefits"
  }')
HTTP=$(echo "$WAITLIST_BUSINESS" | tail -1)
BODY=$(echo "$WAITLIST_BUSINESS" | sed '$d')
if [ "$HTTP" != "200" ]; then
  echo "FAIL waitlist business: HTTP $HTTP — $BODY"
  exit 1
fi
echo "OK waitlist business"

echo "→ Contact..."
CONTACT=$(curl -s -w "\n%{http_code}" -X POST "$BASE_URL/api/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test-contact@example.com",
    "phone": "5551112222",
    "topic": "General inquiry",
    "description": "This is a pre-launch form test message."
  }')
HTTP=$(echo "$CONTACT" | tail -1)
BODY=$(echo "$CONTACT" | sed '$d')
if [ "$HTTP" != "200" ]; then
  echo "FAIL contact: HTTP $HTTP — $BODY"
  exit 1
fi
echo "OK contact"

echo "→ Waitlist validation (missing business name)..."
VALIDATION=$(curl -s -w "\n%{http_code}" -X POST "$BASE_URL/api/waitlist" \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Bad Request",
    "role": "business",
    "phone": "5551234567",
    "email": "bad@example.com"
  }')
HTTP=$(echo "$VALIDATION" | tail -1)
if [ "$HTTP" != "400" ]; then
  echo "FAIL validation: expected 400, got $HTTP"
  exit 1
fi
echo "OK validation rejects invalid business signup"

echo ""
echo "All form tests passed."
