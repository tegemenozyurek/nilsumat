"use client";

import { Header } from "@/components/Header";
import { Calendar } from "@/components/Calendar";
import { LessonApplicationForm } from "@/components/LessonApplicationForm";
import { FaWhatsapp } from "react-icons/fa";

export default function DerslerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white pb-16 pt-20">
        {/* Başlık ve açıklama */}
        <section className="mx-auto mt-10 max-w-6xl px-4 md:mt-14 md:px-8">
          <h1 className="text-2xl font-semibold text-rose-950 md:text-3xl">
            Dersler
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-rose-900/85 md:text-base">
            Ortaokul, LGS, TYT ve AYT seviyelerinde; öğrencinin ihtiyacına göre
            planlanan birebir matematik dersleri sunuyorum. Bu sayfada hangi
            günler ders verdiğimi ve ders almak için başvuru formunu
            bulabilirsiniz.
          </p>
        </section>

        {/* Takvim + Başvuru formu (responsive grid) */}
        <section className="mx-auto mt-8 max-w-6xl px-4 md:mt-10 md:px-8">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            {/* Takvim kartı */}
            <article className="rounded-2xl border border-rose-100 bg-white/90 p-4 shadow-sm md:p-6">
              <h2 className="text-lg font-semibold text-rose-950 md:text-xl">
                Haftalık Ders Takvimi
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-rose-900/80 md:text-sm">
                Şu an için yalnızca{" "}
                <strong className="font-semibold">
                  Salı, Çarşamba, Perşembe ve Cuma
                </strong>{" "}
                günlerinde birebir ders veriyorum. Pazartesi ve hafta sonu için
                ders alınamamaktadır.
              </p>

              <div className="mt-4">
                <Calendar />
              </div>

              <p className="mt-3 text-[11px] text-rose-900/70 md:text-xs">
                Uygun günler içerisinde ders saatleri öğrencinin programına
                göre birlikte planlanır.
              </p>
            </article>

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
