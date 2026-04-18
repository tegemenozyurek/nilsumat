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
              <div className="mt-5 flex justify-center">
                <div className="flex w-full max-w-md flex-col gap-3 rounded-2xl border border-rose-100 bg-white/90 px-4 py-3 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-700">
                      <FaEnvelope className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-500">
                        E-posta
                      </p>
                      <p className="break-all text-sm font-semibold text-rose-950">
                        {email}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 focus-visible:ring-offset-2 sm:w-auto ${
                      copied
                        ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                        : "border-rose-200 bg-rose-50 text-rose-800 hover:bg-rose-100"
                    }`}
                    aria-label="E-posta adresini kopyala"
                  >
                    <FaRegCopy className="h-4 w-4" />
                    {copied ? "Kopyalandı" : "Kopyala"}
                  </button>
                </div>
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
