"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
/**
 * Sayfanın üst navigasyon alanı:
 * - Logo / İsim (el yazısı font)
 * - Masaüstünde linkler
 * - Mobilde burger menü
 */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<"hakkimda" | "iletisim" | "yorumlar" | null>(() => {
    if (pathname === "/iletisim") return "iletisim";
    if (pathname === "/yorumlar") return "yorumlar";
    if (pathname === "/") return "hakkimda";
    return null;
  });

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  useEffect(() => {
    if (pathname === "/iletisim") {
      setActive("iletisim");
    } else if (pathname === "/yorumlar") {
      setActive("yorumlar");
    } else if (pathname === "/") {
      setActive("hakkimda");
    } else {
      setActive(null);
    }
  }, [pathname]);

  const scrollToSection = (id: string) => {
    if (typeof document === "undefined") return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 z-30 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="flex w-full items-center px-4 py-3 md:px-6 lg:px-10">
        {/* Sol: Logo / İsim (en solda) */}
        <div className="flex flex-1 justify-start">
          <Link
            href="/"
            className="flex flex-col leading-tight"
            onClick={(event) => {
              if (pathname === "/") {
                event.preventDefault();
                setActive("hakkimda");
                scrollToSection("hakkimda");
                close();
              }
            }}
          >
            <span
              className="text-2xl font-normal text-rose-700"
              style={{ fontFamily: "var(--font-windsong)" }}
            >
              Nilsu Uğurlu
            </span>
          </Link>
        </div>

        {/* Orta: Hakkımda / İletişim / Yorumlar (masaüstünde ortalı) */}
        <nav
          aria-label="Ana navigasyon"
          className="hidden flex-1 items-center justify-center gap-4 text-xs font-medium text-rose-900/80 md:flex lg:gap-6 lg:text-sm"
        >
          <Link
            href="/"
            onClick={(event) => {
              // Ana sayfadaysak scroll, başka sayfadaysak normal gezinme
              if (pathname === "/") {
                event.preventDefault();
                setActive("hakkimda");
                scrollToSection("hakkimda");
                close();
              }
            }}
            className={`rounded-full border px-3 py-1 transition ${
              active === "hakkimda"
                ? "border-pink-400 bg-pink-50 text-pink-900 shadow-sm"
                : "border-transparent hover:border-pink-300 hover:bg-white/80 hover:text-rose-900"
            }`}
          >
            Hakkımda
          </Link>
          <Link
            href="/iletisim"
            onClick={() => {
              setActive("iletisim");
              close();
            }}
            className={`rounded-full border px-3 py-1 transition ${
              active === "iletisim"
                ? "border-pink-400 bg-pink-50 text-pink-900 shadow-sm"
                : "border-transparent hover:border-pink-300 hover:bg-white/80 hover:text-rose-900"
            }`}
          >
            İletişim
          </Link>
          <Link
            href="/yorumlar"
            onClick={() => {
              setActive("yorumlar");
              close();
            }}
            className={`rounded-full border px-3 py-1 transition ${
              active === "yorumlar"
                ? "border-pink-400 bg-pink-50 text-pink-900 shadow-sm"
                : "border-transparent hover:border-pink-300 hover:bg-white/80 hover:text-rose-900"
            }`}
          >
            Yorumlar
          </Link>
        </nav>

        {/* Sağ: mobil burger */}
        <div className="flex flex-1 items-center justify-end gap-2">
          {/* Mobil burger buton */}
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-[11px] text-slate-800 shadow-sm transition hover:bg-slate-100 md:hidden"
            aria-label="Menüyü aç / kapat"
            aria-expanded={open}
            onClick={toggle}
          >
            <span className="relative flex h-3.5 w-4 items-center justify-center">
              <span
                className={`absolute block h-[2px] w-4 rounded-full bg-slate-800 transition-transform ${
                  open ? "rotate-45" : "-translate-y-[4px]"
                }`}
              />
              <span
                className={`absolute block h-[2px] w-4 rounded-full bg-slate-800 transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute block h-[2px] w-4 rounded-full bg-slate-800 transition-transform ${
                  open ? "-rotate-45" : "translate-y-[4px]"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobil açılır menü */}
      {open && (
        <nav
          aria-label="Mobil navigasyon"
          className="border-t border-slate-200 bg-white/95 md:hidden"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-3 text-[12px] font-medium text-slate-900">
            <Link
              href="/"
              className={`rounded-lg px-2 py-1 hover:bg-rose-100 ${
                active === "hakkimda" ? "bg-pink-50 font-semibold" : ""
              }`}
              onClick={(event) => {
                if (pathname === "/") {
                  event.preventDefault();
                  setActive("hakkimda");
                  scrollToSection("hakkimda");
                  close();
                }
              }}
            >
              Hakkımda
            </Link>
            <Link
              href="/iletisim"
              className={`rounded-lg px-2 py-1 hover:bg-rose-100 ${
                active === "iletisim" ? "bg-pink-50 font-semibold" : ""
              }`}
              onClick={() => {
                setActive("iletisim");
                close();
              }}
            >
              İletişim
            </Link>
            <Link
              href="/yorumlar"
              className={`rounded-lg px-2 py-1 hover:bg-rose-100 ${
                active === "yorumlar" ? "bg-pink-50 font-semibold" : ""
              }`}
              onClick={() => {
                setActive("yorumlar");
                close();
              }}
            >
              Yorumlar
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

