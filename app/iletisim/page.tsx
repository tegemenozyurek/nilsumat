"use client";

import { Header } from "@/components/Header";
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function IletisimPage() {

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white pb-16 pt-20">
        {/* Başlık ve açıklama */}
        <section className="mx-auto mt-10 max-w-6xl px-4 md:mt-14 md:px-8">
          <h1 className="text-2xl font-semibold text-rose-950 md:text-3xl">
            İletişim
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-rose-900/85 md:text-base">
            Dersler hakkında sorularınız için benimle iletişime geçebilirsiniz.
            En kısa sürede size dönüş yapacağım.
          </p>
        </section>

        {/* İletişim bilgileri */}
        <section className="mx-auto mt-8 max-w-6xl px-4 md:mt-12 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {/* İletişim Bilgileri */}
            <div className="rounded-2xl border border-rose-100 bg-white/95 p-6 shadow-sm md:p-8">
              <h2 className="text-xl font-semibold text-rose-950 md:text-2xl">
                İletişim Bilgileri
              </h2>
              <div className="mt-6 grid gap-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/905000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-emerald-100 bg-emerald-50/50 p-4 transition hover:bg-emerald-50 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
                    <FaWhatsapp className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-emerald-900 md:text-base">
                      WhatsApp
                    </p>
                    <p className="mt-1 text-sm text-emerald-700 md:text-base">
                      +90 500 000 00 00
                    </p>
                  </div>
                </a>

                {/* Telefon */}
                <a
                  href="tel:+905000000000"
                  className="flex items-center gap-4 rounded-xl border border-rose-100 bg-white p-4 transition hover:bg-rose-50/50 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-500 text-white shadow-sm">
                    <FaPhone className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-rose-900 md:text-base">
                      Telefon
                    </p>
                    <p className="mt-1 text-sm text-rose-700 md:text-base">
                      +90 500 000 00 00
                    </p>
                  </div>
                </a>

                {/* E-posta */}
                <a
                  href="mailto:nilsu@example.com"
                  className="flex items-center gap-4 rounded-xl border border-rose-100 bg-white p-4 transition hover:bg-rose-50/50 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-500 text-white shadow-sm">
                    <FaEnvelope className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-rose-900 md:text-base">
                      E-posta
                    </p>
                    <p className="mt-1 text-sm text-rose-700 md:text-base">
                      nilsu@example.com
                    </p>
                  </div>
                </a>

                {/* Konum */}
                <div className="flex items-start gap-4 rounded-xl border border-rose-100 bg-white p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-500 text-white shadow-sm">
                    <FaMapMarkerAlt className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-rose-900 md:text-base">
                      Konum
                    </p>
                    <p className="mt-1 text-sm text-rose-700 md:text-base">
                      İzmir, Türkiye
                    </p>
                    <p className="mt-2 text-xs text-rose-500 md:text-sm">
                      Yüz yüze dersler için konum detayları WhatsApp üzerinden paylaşılır.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ders Günleri */}
            <div className="rounded-2xl border border-rose-100 bg-white/95 p-6 shadow-sm md:p-8">
              <h3 className="text-xl font-semibold text-rose-950 md:text-2xl">
                Ders Günleri
              </h3>
              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-emerald-100 bg-emerald-50/30 p-4">
                  <p className="text-base font-semibold text-emerald-700 md:text-lg">
                    Salı, Çarşamba, Perşembe, Cuma
                  </p>
                </div>
                <div className="rounded-xl border border-rose-100 bg-rose-50/30 p-4">
                  <p className="text-sm text-rose-600 md:text-base">
                    Pazartesi ve hafta sonu ders yapılmamaktadır.
                  </p>
                </div>
              </div>
            </div>
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
