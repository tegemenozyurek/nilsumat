"use client";

import type { ChangeEventHandler, FormEvent, InvalidEvent } from "react";
import { useState } from "react";
import { Header } from "@/components/Header";

const dummyYorumlar = [
  {
    id: 1,
    veliAdi: "Dila S.",
    ogrenciAdi: "",
    sinif: "",
    yorum:
      "Konuları sade anlatması ve sabırlı olması sayesinde matematik artık çok daha anlaşılır. Teşekkür ederim.",
    tarih: "12 Nisan 2026",
  },
  {
    id: 2,
    veliAdi: "Derin A.",
    ogrenciAdi: "",
    sinif: "",
    yorum:
      "Birebir derslerde kendi hızımda ilerleyebilmek çok iyi geldi. Soru çözümlerinde gösterdiği yöntemler işime yarıyor.",
    tarih: "5 Nisan 2026",
  },
  {
    id: 3,
    veliAdi: "Ecem K.",
    ogrenciAdi: "",
    sinif: "",
    yorum:
      "Ders planı düzenli ve net; eksik olduğum yerleri hızlıca fark edip oradan devam ediyoruz. Memnunum.",
    tarih: "28 Mart 2026",
  },
];

const SINIF_LABELS: Record<string, string> = {
  ortaokul: "Ortaokul",
  lgs: "LGS Hazırlık",
  tyt: "TYT",
  ayt: "AYT",
};

export default function YorumlarPage() {
  const [mailRedirectNotice, setMailRedirectNotice] = useState(false);

  type Validatable =
    | HTMLInputElement
    | HTMLSelectElement
    | HTMLTextAreaElement;

  const clearNativeValidity = (e: FormEvent<Validatable>) => {
    e.currentTarget.setCustomValidity("");
  };

  const clearSelectValidity: ChangeEventHandler<HTMLSelectElement> = (e) => {
    e.currentTarget.setCustomValidity("");
  };

  const setTurkishRequiredMessage = (
    e: InvalidEvent<Validatable>,
    emptyMessage: string,
  ) => {
    const el = e.currentTarget;
    if (el.validity.valueMissing) {
      el.setCustomValidity(emptyMessage);
      return;
    }
    if (el.validity.typeMismatch) {
      el.setCustomValidity("Lütfen geçerli bir değer girin.");
      return;
    }
    el.setCustomValidity("");
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white pb-16 pt-20">
        {/* Başlık ve açıklama */}
        <section className="mx-auto mt-10 max-w-6xl px-4 md:mt-14 md:px-8">
          <h1 className="text-2xl font-semibold text-rose-950 md:text-3xl">
            Öğrenci ve Veli Yorumları
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-rose-900/85 md:text-base">
            Öğrencilerim ve velilerimden gelen geri bildirimler. Her öğrencinin
            başarısı benim için en büyük motivasyon kaynağı.
          </p>
        </section>

        {/* Yorumlar (sol) + form (sağ) */}
        <section className="mx-auto mt-8 max-w-6xl px-4 md:mt-10 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-start lg:gap-10">
            <div className="flex min-w-0 flex-col gap-6">
              {dummyYorumlar.map((yorum) => (
                <article
                  key={yorum.id}
                  className="rounded-2xl border border-rose-100 bg-white/95 p-5 shadow-sm"
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-rose-950 md:text-base">
                        {yorum.veliAdi}
                      </h3>
                      {(yorum.ogrenciAdi || yorum.sinif) && (
                        <p className="mt-0.5 text-xs text-rose-600 md:text-sm">
                          {[yorum.ogrenciAdi, yorum.sinif]
                            .filter(Boolean)
                            .join(" • ")}
                        </p>
                      )}
                    </div>
                    <span className="text-[10px] text-rose-400 md:text-xs">
                      {yorum.tarih}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-rose-900/80 md:text-sm">
                    "{yorum.yorum}"
                  </p>
                </article>
              ))}
            </div>

            <article className="min-w-0 rounded-2xl border border-rose-100 bg-white/95 p-5 shadow-sm md:p-6 lg:sticky lg:top-24">
              <h2 className="text-lg font-semibold text-rose-950 md:text-xl">
                Yorum Bırakın
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-rose-900/80 md:text-sm">
                Derslerimiz hakkındaki görüşlerinizi paylaşmak ister misiniz?
                Yorumunuz onaylandıktan sonra bu sayfada yayınlanacaktır.
              </p>

              <form
                lang="tr"
                className="mt-4 space-y-3 text-xs md:text-sm"
                onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  const veli = String(fd.get("veli") ?? "").trim();
                  const ogrenci = String(fd.get("ogrenci") ?? "").trim();
                  const sinifKey = String(fd.get("sinif") ?? "").trim();
                  const yorum = String(fd.get("yorum") ?? "").trim();

                  const subject = "Veli / Öğrenci Yorumu";
                  const now = new Date();
                  const submittedAt = now.toLocaleString("tr-TR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  });
                  const sinifLabel =
                    SINIF_LABELS[sinifKey] ?? (sinifKey || "-");
                  const body = [
                    "Merhaba Nilsu Öğretmenim,",
                    "",
                    "Yorum Bırakın Formu",
                    "────────────────────────",
                    `Tarih/Saat : ${submittedAt}`,
                    "",
                    "Bilgiler",
                    `- Veli adı soyadı : ${veli}`,
                    `- Öğrenci adı      : ${ogrenci}`,
                    `- Sınıf / seviye   : ${sinifLabel}`,
                    "",
                    "Yorum",
                    yorum,
                    "",
                    "Teşekkür ederim.",
                  ].join("\n");

                  const mailto = `mailto:nilsuugurluu@gmail.com?subject=${encodeURIComponent(
                    subject,
                  )}&body=${encodeURIComponent(body)}`;

                  setMailRedirectNotice(true);
                  setTimeout(() => {
                    window.location.href = mailto;
                  }, 120);
                }}
              >
                <div>
                  <label className="block text-[11px] font-medium text-rose-900/90 md:text-xs">
                    Veli Adı Soyadı
                  </label>
                  <input
                    type="text"
                    name="veli"
                    required
                    onInvalid={(e) =>
                      setTurkishRequiredMessage(
                        e,
                        "Lütfen veli adı ve soyadını yazın.",
                      )
                    }
                    onInput={clearNativeValidity}
                    className="mt-1 w-full rounded-lg border border-rose-100 bg-white px-3 py-2 text-sm text-rose-950 shadow-sm outline-none ring-0 focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                  />
                </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-[11px] font-medium text-rose-900/90 md:text-xs">
                    Öğrenci Adı
                  </label>
                  <input
                    type="text"
                    name="ogrenci"
                    required
                      onInvalid={(e) =>
                        setTurkishRequiredMessage(
                          e,
                          "Lütfen öğrenci adını yazın.",
                        )
                      }
                      onInput={clearNativeValidity}
                    className="mt-1 w-full rounded-lg border border-rose-100 bg-white px-3 py-2 text-sm text-rose-950 shadow-sm outline-none ring-0 focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                  />
                </div>

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
                        setTurkishRequiredMessage(
                          e,
                          "Lütfen sınıf veya seviye seçin.",
                        )
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
              </div>

              <div>
                <label className="block text-[11px] font-medium text-rose-900/90 md:text-xs">
                  Yorumunuz
                </label>
                <textarea
                  rows={4}
                  name="yorum"
                  required
                    onInvalid={(e) =>
                      setTurkishRequiredMessage(e, "Lütfen yorumunuzu yazın.")
                    }
                    onInput={clearNativeValidity}
                  className="mt-1 w-full resize-none rounded-lg border border-rose-100 bg-white px-3 py-2 text-sm text-rose-950 shadow-sm outline-none ring-0 focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                  placeholder="Derslerimiz hakkındaki görüşlerinizi paylaşın..."
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
                  Mail uygulamanıza yönlendirildiniz. Eğer otomatik açılmadıysa
                  lütfen tarayıcı izinlerini kontrol edin.
                </div>
              )}
            </article>
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
