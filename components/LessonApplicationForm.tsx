"use client";

import { useState } from "react";

export function LessonApplicationForm() {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <article className="rounded-2xl border border-rose-100 bg-white/95 p-6 shadow-sm md:p-8">
      <h2 className="text-lg font-semibold text-rose-950 md:text-xl">
        Ders Başvuru Formu
      </h2>
      <p className="mt-2 text-xs leading-relaxed text-rose-900/80 md:text-sm">
        Aşağıdaki formu doldurarak ders talebinde bulunabilirsiniz. En kısa
        sürede sizinle WhatsApp veya telefon üzerinden iletişime geçeceğim.
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

      {showNotification && (
        <div className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs text-emerald-800 shadow-sm md:text-sm">
          {"\u2713"} Başvurunuz gönderildi! En kısa sürede sizinle iletişime
          geçeceğim.
        </div>
      )}
    </article>
  );
}
