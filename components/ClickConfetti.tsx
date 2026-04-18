"use client";

import { useEffect } from "react";

const SYMBOLS = ["+", "−", "×", "%"] as const;

function isDesktopFinePointer() {
  if (typeof window === "undefined") return false;
  const fine = window.matchMedia?.("(pointer: fine)").matches ?? false;
  const hover = window.matchMedia?.("(hover: hover)").matches ?? false;
  const wide = window.matchMedia?.("(min-width: 1024px)").matches ?? false;
  return fine && hover && wide;
}

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function pick<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function createParticle(x: number, y: number) {
  const el = document.createElement("span");
  el.textContent = pick(SYMBOLS);
  el.style.position = "fixed";
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  el.style.transform = "translate(-50%, -50%)";
  el.style.pointerEvents = "none";
  el.style.userSelect = "none";
  el.style.zIndex = "9999";
  el.style.fontFamily = "var(--font-poppins), system-ui, sans-serif";
  el.style.fontWeight = "700";
  el.style.fontSize = `${rand(12, 18)}px`;
  el.style.opacity = "1";
  el.style.willChange = "transform, opacity";

  const hue = rand(330, 15) % 360; // rose/pink range
  el.style.color = `hsl(${hue} 75% 55%)`;

  const dx = rand(-80, 80);
  const dy = rand(-140, -70);
  const rot = rand(-220, 220);
  const duration = rand(1000, 1400);

  const anim = el.animate(
    [
      { transform: "translate(-50%, -50%) translate(0px, 0px) rotate(0deg)", opacity: 1 },
      {
        transform: `translate(-50%, -50%) translate(${dx}px, ${dy}px) rotate(${rot}deg)`,
        opacity: 0,
      },
    ],
    { duration, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "forwards" },
  );

  anim.onfinish = () => el.remove();
  return el;
}

export function ClickConfetti() {
  useEffect(() => {
    if (!isDesktopFinePointer()) return;

    const onClick = (ev: MouseEvent) => {
      // Ignore clicks on interactive controls to avoid visual noise
      const target = ev.target as HTMLElement | null;
      const tag = target?.tagName?.toLowerCase();
      if (tag && ["a", "button", "input", "select", "textarea", "label"].includes(tag)) return;
      if (target?.closest?.("a,button,input,select,textarea,label")) return;

      const count = 14;
      for (let i = 0; i < count; i++) {
        const p = createParticle(ev.clientX, ev.clientY);
        document.body.appendChild(p);
      }
    };

    window.addEventListener("click", onClick, { passive: true });
    return () => window.removeEventListener("click", onClick);
  }, []);

  return null;
}

