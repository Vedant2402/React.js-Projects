import React, { useEffect, useRef } from 'react';

/**
 * Animated blurred background for Auth page.
 * - Multiple blobs with rotating colors from theme palette
 * - Smooth cross-fade between colors
 * - Parallax displacement following mouse / touch
 */
// Muted dark theme color cycle (teal / indigo / violet / blue)
const COLORS = [
  '#0f766e', // teal-700
  '#0369a1', // sky-700
  '#4338ca', // indigo-700
  '#6d28d9', // violet-700
  '#1d4ed8', // blue-700
  '#0e7490', // cyan-700
  '#3730a3', // indigo-800
  '#312e81', // indigo-900
];

interface BlobConfig {
  size: number; // px
  speed: number; // color rotation speed factor
  offsetX: number; // initial offset percent
  offsetY: number; // initial offset percent
  colorIndex: number; // starting color index
  el?: HTMLDivElement | null;
}

const makeBlobs = (): BlobConfig[] => [
  { size: 520, speed: 0.25, offsetX: 15, offsetY: 25, colorIndex: 0 },
  { size: 480, speed: 0.35, offsetX: 70, offsetY: 35, colorIndex: 2 },
  { size: 400, speed: 0.45, offsetX: 55, offsetY: 70, colorIndex: 4 },
  { size: 360, speed: 0.30, offsetX: 30, offsetY: 60, colorIndex: 6 },
];

export const AuthBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const blobsRef = useRef<BlobConfig[]>(makeBlobs());
  const animRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Attach elements
  const blobs = blobsRef.current;
  blobs.forEach((b) => {
      const div = document.createElement('div');
      b.el = div;
      div.className = 'absolute rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none transition-colors duration-[4000ms] ease-linear will-change-transform';
      div.style.width = `${b.size}px`;
      div.style.height = `${b.size}px`;
      div.style.left = `${b.offsetX}%`;
      div.style.top = `${b.offsetY}%`;
      div.style.marginLeft = `-${b.size / 2}px`;
      div.style.marginTop = `-${b.size / 2}px`;
      div.style.background = COLORS[b.colorIndex % COLORS.length];
      container.appendChild(div);
    });

    // Color rotation & subtle drift
    const animate = (t: number) => {
  lastTimeRef.current = t;
  blobsRef.current.forEach((b) => {
        if (!b.el) return;
        // Update color over time using speed factor
        const progress = (t * 0.00005 * b.speed + b.colorIndex) % COLORS.length;
        const baseIndex = Math.floor(progress);
        const nextIndex = (baseIndex + 1) % COLORS.length;
        const blend = progress - baseIndex;
        // Simple linear blend in HSL space (approx by converting to number space not accurate but acceptable)
        const c1 = COLORS[baseIndex];
        const c2 = COLORS[nextIndex];
        // Quick hex to rgb
        const hexToRgb = (h: string) => ({
          r: parseInt(h.slice(1, 3), 16),
          g: parseInt(h.slice(3, 5), 16),
          b: parseInt(h.slice(5, 7), 16)
        });
        const r1 = hexToRgb(c1); const r2 = hexToRgb(c2);
        const r = Math.round(r1.r + (r2.r - r1.r) * blend);
        const g = Math.round(r1.g + (r2.g - r1.g) * blend);
        const bcol = Math.round(r1.b + (r2.b - r1.b) * blend);
        b.el.style.background = `rgba(${r},${g},${bcol},0.65)`;
      });

      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);

    // Parallax on pointer move
    const handleMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      blobsRef.current.forEach((b, i) => {
        if (!b.el) return;
        const depth = (i + 1) / blobsRef.current.length; // 0..1
        const tx = x * 60 * depth; // px
        const ty = y * 60 * depth;
        b.el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      });
    };
    window.addEventListener('pointermove', handleMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handleMove);
      if (animRef.current) cancelAnimationFrame(animRef.current);
  blobs.forEach(b => b.el && b.el.remove());
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true" />;
};

export default AuthBackground;
