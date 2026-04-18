"use client";

import Image from "next/image";
import { useState } from "react";
import { Header } from "@/components/Header";
import { LessonApplicationForm } from "@/components/LessonApplicationForm";
import { FaEnvelope, FaRegCopy } from "react-icons/fa";
import iconsIllustration from "../icons.webp";

export default function IletisimPage() {
  const email = "nilsuugurluu@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Fallback for older browsers / restricted contexts
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      ta.style.top = "0";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white pb-16 pt-20">
        <section className="mx-auto mt-10 max-w-6xl px-4 md:mt-14 md:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">
            <div className="lg:pr-4">
              <h1 className="text-2xl font-semibold text-rose-950 md:text-3xl">
                İletişim
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-rose-900/85 md:text-base">
                Ortaokul, LGS, TYT ve AYT seviyelerinde; öğrencinin ihtiyacına
                göre planlanan birebir matematik dersleri sunuyorum. Derslerim
                hakkında bilgi almak ve ders planlamak için lütfen Ders Bilgi
                Formunu doldurunuz
              </p>
              <div className="mx-auto mt-10 w-full max-w-[96px] sm:mt-14 sm:max-w-[200px] lg:mt-20 lg:max-w-[260px]">
                <Image
                  src={iconsIllustration}
                  alt="Matematik dersleri görseli"
                  className="h-auto w-full"
                  sizes="(max-width: 640px) 96px, (max-width: 1024px) 200px, 260px"
                />
              </div>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-rose-900/85">
                <span className="inline-flex items-center gap-2 font-medium">
                  <FaEnvelope className="h-4 w-4 text-rose-600" aria-hidden="true" />
                  {email}
                </span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1 rounded-md border border-rose-200 bg-white px-2 py-1 text-[12px] font-semibold text-rose-700 shadow-sm transition hover:bg-rose-50"
                  aria-label="E-posta adresini kopyala"
                >
                  <FaRegCopy className="h-4 w-4" />
                  {copied ? "Kopyalandı" : "Kopyala"}
                </button>
              </div>
            </div>
            <LessonApplicationForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/95">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-4 text-[11px] text-slate-600 md:px-8">
          © 2026 Nilsu Uğurlu • Matematik Öğretmeni
        </div>
      </footer>
    </>
  );
}
