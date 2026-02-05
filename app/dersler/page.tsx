"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Calendar } from "@/components/Calendar";
import { FaWhatsapp } from "react-icons/fa";

export default function DerslerPage() {
  const [showNotification, setShowNotification] = useState(false);
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

            {/* Başvuru formu */}
            <article className="rounded-2xl border border-rose-100 bg-white/95 p-4 shadow-sm md:p-6">
              <h2 className="text-lg font-semibold text-rose-950 md:text-xl">
                Ders Başvuru Formu
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-rose-900/80 md:text-sm">
                Aşağıdaki formu doldurarak ders talebinde bulunabilirsiniz. En
                kısa sürede sizinle WhatsApp veya telefon üzerinden iletişime
                geçeceğim.
              </p>

              <form
                className="mt-4 space-y-3 text-xs md:text-sm"
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowNotification(true);
                  setTimeout(() => {
                    setShowNotification(false);
                  }, 3000);
                }}
              >
                <div>
                  <label className="block text-[11px] font-medium text-rose-900/90 md:text-xs">
                    Öğrenci Adı Soyadı
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 w-full rounded-lg border border-rose-100 bg-white px-3 py-2 text-sm text-rose-950 shadow-sm outline-none ring-0 focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-[11px] font-medium text-rose-900/90 md:text-xs">
                      Sınıf / Seviye
                    </label>
                    <select
                      className="mt-1 w-full rounded-lg border border-rose-100 bg-white px-3 py-2 text-sm text-rose-950 shadow-sm outline-none ring-0 focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Seçiniz
                      </option>
                      <option value="ortaokul">Ortaokul</option>
                      <option value="lgs">LGS Hazırlık</option>
                      <option value="tyt">TYT</option>
                      <option value="ayt">AYT</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-rose-900/90 md:text-xs">
                      Tercih edilen saat
                    </label>
                    <select
                      className="mt-1 w-full rounded-lg border border-rose-100 bg-white px-3 py-2 text-sm text-rose-950 shadow-sm outline-none ring-0 focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Seçiniz
                      </option>
                      <option value="09-12">09:00 - 12:00</option>
                      <option value="12-15">12:00 - 15:00</option>
                      <option value="15-18">15:00 - 18:00</option>
                      <option value="18-21">18:00 - 21:00</option>
                    </select>
                  </div>
                </div>

                <div>
                  <span className="block text-[11px] font-medium text-rose-900/90 md:text-xs">
                    Tercih edilen günler
                  </span>
                  <p className="text-[11px] text-rose-500 md:text-xs">
                    Dersler sadece Salı, Çarşamba, Perşembe ve Cuma günlerinde
                    yapılmaktadır.
                  </p>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-[11px] md:grid-cols-2 md:text-xs">
                    {["Salı", "Çarşamba", "Perşembe", "Cuma"].map((day) => (
                      <label
                        key={day}
                        className="flex items-center gap-2 rounded-lg border border-rose-100 bg-rose-50/70 px-2 py-1.5"
                      >
                        <input
                          type="checkbox"
                          className="h-3 w-3 rounded border-rose-300 text-pink-500 focus:ring-pink-400"
                        />
                        <span className="text-rose-900/85">{day}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-rose-900/90 md:text-xs">
                    Kısa not / hedefler
                  </label>
                  <textarea
                    rows={3}
                    className="mt-1 w-full resize-none rounded-lg border border-rose-100 bg-white px-3 py-2 text-sm text-rose-950 shadow-sm outline-none ring-0 focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                    placeholder="Öğrencinin durumu, sınav hedefi, özellikle zorlandığı konular vb."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-pink-500 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-pink-600 md:text-sm"
                >
                  Gönder
                </button>
              </form>

              {/* Bildirim */}
              {showNotification && (
                <div className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs text-emerald-800 shadow-sm md:text-sm">
                  ✓ Başvurunuz gönderildi! En kısa sürede sizinle iletişime geçeceğim.
                </div>
              )}
            </article>
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
