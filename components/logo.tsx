import Image from "next/image"
import { BRAND } from "@/lib/constants"
import { cn } from "@/lib/utils"

type LogoProps = {
  className?: string
  iconClassName?: string
  variant?: "default" | "light"
}

export function Logo({
  className,
  iconClassName,
  variant = "default",
}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src={variant === "light" ? BRAND.logoWhite : BRAND.logo}
        alt={`${BRAND.name} logo`}
        width={56}
        height={56}
        priority
        className={cn("h-14 w-14 object-contain", iconClassName)}
      />
    </span>
  )
}
