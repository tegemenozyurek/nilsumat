"use client";

import { Header } from "@/components/Header";
import { LessonApplicationForm } from "@/components/LessonApplicationForm";
import { FaWhatsapp } from "react-icons/fa";

export default function DerslerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white pb-16 pt-20">
        <section className="mx-auto mt-10 max-w-6xl px-4 md:mt-14 md:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">
            <div className="lg:pr-4">
              <h1 className="text-2xl font-semibold text-rose-950 md:text-3xl">
                Dersler
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-rose-900/85 md:text-base">
                Ortaokul, LGS, TYT ve AYT seviyelerinde; öğrencinin ihtiyacına
                göre planlanan birebir matematik dersleri sunuyorum. Ders
                talebiniz için başvuru formunu doldurabilirsiniz.
              </p>
            </div>
            <LessonApplicationForm />
          </div>
        </section>

        {/* Sabit WhatsApp butonu */}
        <a
          href="https://wa.me/905000000000"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp üzerinden mesaj gönder"
          className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition hover:bg-emerald-600 md:bottom-6 md:right-6"
        >
          <FaWhatsapp className="h-6 w-6" />
        </a>
      </main>

      <footer className="border-t border-slate-200 bg-white/95">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-4 text-[11px] text-slate-600 md:px-8">
          © 2026 Nilsu Uğurlu • Matematik Öğretmeni
        </div>
      </footer>
    </>
  );
}
