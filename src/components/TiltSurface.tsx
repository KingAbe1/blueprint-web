"use client";

import { useCallback, useEffect, useRef, type ReactNode } from "react";

type TiltSurfaceProps = {
  children: ReactNode;
  className?: string;
  variant: "hero" | "card";
};

function canUsePointerTilt() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export function TiltSurface({ children, className = "", variant }: TiltSurfaceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const tracking = useRef(false);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const updateGlow = useCallback((x: number, y: number, active: boolean) => {
    if (variant !== "hero") return;
    const visual = ref.current?.closest(".hero-visual");
    const glow = visual?.querySelector<HTMLElement>(".visual-glow");
    if (!glow) return;
    if (!active) {
      glow.style.removeProperty("opacity");
      glow.style.removeProperty("transform");
      return;
    }
    const m = Math.min(1, Math.hypot(x, y) * 2.2);
    glow.style.opacity = String(0.7 + m * 0.18);
    glow.style.transform = `scale(${1 + m * 0.05})`;
  }, [variant]);

  const setPointer = useCallback((x: number, y: number) => {
    const el = ref.current;
    if (!el || reduceMotion.current) return;
    el.style.setProperty("--pointer-x", String(x));
    el.style.setProperty("--pointer-y", String(y));
  }, []);

  const onPointerMove = useCallback(
    (clientX: number, clientY: number) => {
      if (!tracking.current || reduceMotion.current) return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;
      setPointer(x, y);
      updateGlow(x, y, true);
      el.classList.toggle("is-tilted", Math.abs(x) + Math.abs(y) > 0.02);
    },
    [setPointer, updateGlow],
  );

  const onPointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!canUsePointerTilt()) return;
    tracking.current = true;
    ref.current?.classList.add("is-tracking");
    onPointerMove(e.clientX, e.clientY);
  };

  const onPointerMoveEvent = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!canUsePointerTilt()) return;
    onPointerMove(e.clientX, e.clientY);
  };

  const onPointerLeave = () => {
    tracking.current = false;
    const el = ref.current;
    if (!el) return;
    el.classList.remove("is-tracking", "is-tilted");
    setPointer(0, 0);
    updateGlow(0, 0, false);
  };

  const variantClass = variant === "hero" ? "tilt-surface--hero" : "tilt-surface--card";

  return (
    <div
      ref={ref}
      className={`tilt-surface ${variantClass} ${className}`.trim()}
      onPointerEnter={onPointerEnter}
      onPointerMove={onPointerMoveEvent}
      onPointerLeave={onPointerLeave}
    >
      {children}
    </div>
  );
}
