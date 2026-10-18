"use client";

import Image from "next/image";
import { brandAppIconSrc, brandLogoMarkSrc } from "@/lib/brandAssets";
import { useSiteTheme } from "@/hooks/useSiteTheme";

type BrandMarkProps = {
  className?: string;
  variant?: "app" | "mark";
  width?: number;
  height?: number;
  priority?: boolean;
};

export function BrandMark({
  className = "wordmark-mark",
  variant = "mark",
  width = 24,
  height = 24,
  priority = false,
}: BrandMarkProps) {
  const isDark = useSiteTheme();
  const src = variant === "app" ? brandAppIconSrc(isDark) : brandLogoMarkSrc(isDark);

  return (
    <Image
      className={className}
      src={src}
      alt=""
      width={width}
      height={height}
      priority={priority}
    />
  );
}
