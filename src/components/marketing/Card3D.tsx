"use client";
import { useRef, useCallback } from "react";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  shadowColor?: string;
}

export default function Card3D({
  children,
  className = "",
  intensity = 12,
  shadowColor = "rgba(22,87,173,0.15)",
}: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;   // 0..1
    const y = (e.clientY - rect.top)  / rect.height;  // 0..1
    const rx =  (y - 0.5) * -intensity * 2;
    const ry =  (x - 0.5) *  intensity * 2;

    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(20px) scale(1.02)`;
    el.style.boxShadow = `
      ${-(x-0.5)*30}px ${-(y-0.5)*30}px 60px ${shadowColor},
      0 32px 80px rgba(0,0,0,0.07),
      0 8px 20px rgba(22,87,173,0.06),
      inset 0 1px 0 rgba(255,255,255,1)
    `;

    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${x*100}% ${y*100}%, rgba(255,255,255,0.5) 0%, transparent 65%)`;
      glareRef.current.style.opacity = "1";
    }
  }, [intensity, shadowColor]);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
    el.style.boxShadow = "";
    if (glareRef.current) glareRef.current.style.opacity = "0";
  }, []);

  return (
    <div
      ref={ref}
      className={`card-3d-base ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* Glare overlay */}
      <div
        ref={glareRef}
        className="absolute inset-0 pointer-events-none z-20 opacity-0 rounded-[inherit] transition-opacity duration-200"
      />
      {children}
    </div>
  );
}
