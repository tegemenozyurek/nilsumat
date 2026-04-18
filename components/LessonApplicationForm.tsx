"use client";

import type {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  InvalidEvent,
} from "react";
import { useState } from "react";

const WEEKDAYS_TR = [
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
] as const;

type Validatable =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

function clearNativeValidity(e: FormEvent<Validatable>) {
  e.currentTarget.setCustomValidity("");
}

const clearSelectValidity: ChangeEventHandler<HTMLSelectElement> = (e) => {
  e.currentTarget.setCustomValidity("");
};

function setTurkishRequiredMessage(
  e: InvalidEvent<Validatable>,
  bosMesaj: string,
) {
  const el = e.currentTarget;
  if (el.validity.valueMissing) {
    el.setCustomValidity(bosMesaj);
    return;
  }
  if (el.validity.typeMismatch) {
    el.setCustomValidity("Lütfen geçerli bir değer girin.");
    return;
  }
  el.setCustomValidity("");
}

function digitsOnlyMax10(value: string): string {
  return value.replace(/\D/g, "").slice(0, 10);
}

function phoneFieldInvalid(e: InvalidEvent<HTMLInputElement>) {
  const el = e.currentTarget;
  if (el.validity.valueMissing) {
    el.setCustomValidity("Lütfen 10 haneli telefon numaranızı girin.");
    return;
  }
  if (el.validity.tooShort || el.validity.tooLong) {
    el.setCustomValidity("Telefon numarası tam olarak 10 haneli olmalıdır.");
    return;
  }
  el.setCustomValidity("");
}

type LessonApplicationFormProps = {
  /** Varsayılan: Ders Bilgi Formu */
  title?: string;
};

export function LessonApplicationForm({
  title = "Ders Bilgi Formu",
}: LessonApplicationFormProps) {
  const [phone, setPhone] = useState("");
  const [mailRedirectNotice, setMailRedirectNotice] = useState(false);

  const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(digitsOnlyMax10(e.target.value));
    e.target.setCustomValidity("");
  };

  return (
    <article className="rounded-2xl border border-rose-100 bg-white/95 p-6 shadow-sm md:p-8">
      <h2 className="text-lg font-semibold text-rose-950 md:text-xl">
        {title}
      </h2>
      <p className="mt-2 text-xs leading-relaxed text-rose-900/80 md:text-sm">
        Aşağıdaki formu doldurarak ders talebinde bulunabilirsiniz. En kısa
        sürede sizinle Eposta veya telefon üzerinden iletişime geçeceğim.
      </p>

      <form
        lang="tr"
        className="mt-4 space-y-3 text-xs md:text-sm"
        onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          const ogrenci = String(fd.get("ogrenci") ?? "").trim();
          const telefon = String(fd.get("telefon") ?? "").trim();
          const sinif = String(fd.get("sinif") ?? "").trim();
          const saat = String(fd.get("saat") ?? "").trim();
          const gunler = (fd.getAll("gunler") as string[]).filter(Boolean);
          const notlar = String(fd.get("notlar") ?? "").trim();

          const subject = "Ders Bilgi Talebi";
          const now = new Date();
          const submittedAt = now.toLocaleString("tr-TR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });
          const body = [
            "Merhaba Nilsu Öğretmenim,",
            "",
            "Ders Bilgi Formu",
            "────────────────────────",
            `Tarih/Saat : ${submittedAt}`,
            "",
            "Öğrenci Bilgileri",
            `- Ad Soyad  : ${ogrenci}`,
            `- Telefon   : ${telefon}`,
            `- Seviye    : ${sinif}`,
            "",
            "Ders Tercihleri",
            `- Saat      : ${saat || "-"}`,
            `- Günler    : ${gunler.length ? gunler.join(", ") : "-"}`,
            "",
            "Kısa Not / Hedefler",
            notlar ? notlar : "-",
            "",
            "Teşekkür ederim.",
          ].join("\n");

          const mailto = `mailto:nilsuugurluu@gmail.com?subject=${encodeURIComponent(
            subject,
          )}&body=${encodeURIComponent(body)}`;

          setMailRedirectNotice(true);
          // Bildirim DOM'a basılsın diye küçük gecikme
          setTimeout(() => {
            window.location.href = mailto;
          }, 120);
        }}
      >
        <div>
          <label className="block text-[11px] font-medium text-rose-900/90 md:text-xs">
            Öğrenci Adı Soyadı
          </label>
          <input
            type="text"
            name="ogrenci"
            required
            onInvalid={(e) =>
              setTurkishRequiredMessage(
                e,
                "Lütfen öğrenci adı ve soyadını yazın.",
              )
            }
            onInput={clearNativeValidity}
            className="mt-1 w-full rounded-lg border border-rose-100 bg-white px-3 py-2 text-sm text-rose-950 shadow-sm outline-none ring-0 focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
          />
        </div>

        <div>
          <label className="block text-[11px] font-medium text-rose-900/90 md:text-xs">
            Telefon
          </label>
          <input
            type="text"
            name="telefon"
            required
            minLength={10}
            maxLength={10}
            inputMode="numeric"
            autoComplete="tel"
            placeholder="Örn. 5XX XXX XX XX"
            value={phone}
            onChange={onPhoneChange}
            onInvalid={phoneFieldInvalid}
            className="mt-1 w-full rounded-lg border border-rose-100 bg-white px-3 py-2 text-sm text-rose-950 shadow-sm outline-none ring-0 focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="block text-[11px] font-medium text-rose-900/90 md:text-xs">
              Sınıf / Seviye
            </label>
            <select
              name="sinif"
              className="mt-1 w-full rounded-lg border border-rose-100 bg-white px-3 py-2 text-sm text-rose-950 shadow-sm outline-none ring-0 focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
              defaultValue=""
              required
              onInvalid={(e) =>
                setTurkishRequiredMessage(e, "Lütfen sınıf veya seviye seçin.")
              }
              onChange={clearSelectValidity}
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
              name="saat"
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
            Gün Tercihi
          </span>
          <div className="mt-2 grid grid-cols-2 gap-2 text-[11px] sm:grid-cols-3 md:text-xs">
            {WEEKDAYS_TR.map((day) => (
              <label
                key={day}
                className="flex items-center gap-2 rounded-lg border border-rose-100 bg-rose-50/70 px-2 py-1.5"
              >
                <input
                  type="checkbox"
                  name="gunler"
                  value={day}
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
            name="notlar"
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

      {mailRedirectNotice && (
        <div
          role="status"
          className="mt-3 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-xs text-rose-800 shadow-sm md:text-sm"
        >
          Mail uygulamanıza yönlendirildiniz. Eğer otomatik açılmadıysa lütfen
          tarayıcı izinlerini kontrol edin.
        </div>
      )}
    </article>
  );
}
