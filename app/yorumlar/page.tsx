"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { FaWhatsapp } from "react-icons/fa";

const dummyYorumlar = [
  {
    id: 1,
    veliAdi: "Ayşe Kaya",
    ogrenciAdi: "Elif Kaya",
    sinif: "8. Sınıf / LGS",
    yorum:
      "Nilsu öğretmenimiz sayesinde kızımın matematik notları çok yükseldi. Sabırlı ve anlayışlı yaklaşımı, konuları küçük adımlarla anlatması gerçekten çok etkili oldu. Özellikle yeni nesil sorularda artık çok daha başarılı.",
    tarih: "15 Ocak 2025",
  },
  {
    id: 2,
    veliAdi: "Mehmet Demir",
    ogrenciAdi: "Can Demir",
    sinif: "12. Sınıf / TYT",
    yorum:
      "Oğlum TYT matematikte çok zorlanıyordu. Nilsu öğretmenimizle çalışmaya başladıktan sonra hem konuları daha iyi anladı hem de sınav kaygısı azaldı. Online derslerde dijital tahta kullanımı çok pratik oluyor.",
    tarih: "10 Ocak 2025",
  },
  {
    id: 3,
    veliAdi: "Zeynep Yılmaz",
    ogrenciAdi: "Beren Yılmaz",
    sinif: "6. Sınıf",
    yorum:
      "Kızım matematikten nefret ediyordu, şimdi derslerini severek çalışıyor. Nilsu öğretmenimizin öğrenciye özel yaklaşımı ve bol örnek çözümü sayesinde matematik artık korkulu rüya değil. Çok teşekkürler!",
    tarih: "8 Ocak 2025",
  },
  {
    id: 4,
    veliAdi: "Ali Özkan",
    ogrenciAdi: "Emre Özkan",
    sinif: "11. Sınıf / AYT",
    yorum:
      "AYT matematik konularında çok zorlanıyorduk. Nilsu öğretmenimiz konuları çok net anlatıyor ve öğrencinin seviyesine göre ilerliyor. Ders sonrası özet ve ödevlendirme sistemi çok faydalı. Kesinlikle tavsiye ederim.",
    tarih: "5 Ocak 2025",
  },
  {
    id: 5,
    veliAdi: "Fatma Şahin",
    ogrenciAdi: "Mert Şahin",
    sinif: "7. Sınıf",
    yorum:
      "Oğlumun matematik temeli çok zayıftı. Nilsu öğretmenimiz temelden başlayarak konuları adım adım ilerletti. Şimdi çok daha özgüvenli ve matematik dersinde başarılı. Öğretmenimize çok teşekkür ediyoruz.",
    tarih: "2 Ocak 2025",
  },
  {
    id: 6,
    veliAdi: "Hasan Çelik",
    ogrenciAdi: "Ece Çelik",
    sinif: "9. Sınıf",
    yorum:
      "Liseye geçişte matematik konuları çok ağır gelmişti. Nilsu öğretmenimizle çalışmaya başladıktan sonra hem konuları anladı hem de sınavlarda başarılı olmaya başladı. Planlı ders akışı ve düzenli takip çok etkili.",
    tarih: "28 Aralık 2024",
  },
  {
    id: 7,
    veliAdi: "Selin Arslan",
    ogrenciAdi: "Arda Arslan",
    sinif: "10. Sınıf",
    yorum:
      "Matematikte çok geride kalmıştık. Nilsu öğretmenimiz öğrencinin seviyesini çok iyi tespit ediyor ve ona göre ders planı yapıyor. Bol örnek ve görsel anlatım sayesinde oğlum artık matematikten korkmuyor.",
    tarih: "25 Aralık 2024",
  },
  {
    id: 8,
    veliAdi: "Burak Kılıç",
    ogrenciAdi: "Zeynep Kılıç",
    sinif: "8. Sınıf / LGS",
    yorum:
      "LGS hazırlık sürecinde Nilsu öğretmenimizle çalışmak çok faydalı oldu. Yeni nesil sorulara odaklanması ve sınav stratejileri öğretmesi sayesinde kızımın netleri arttı. Düzenli tekrar ve mini denemeler sistemi çok etkili.",
    tarih: "20 Aralık 2024",
  },
];

export default function YorumlarPage() {
  const [showNotification, setShowNotification] = useState(false);

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

        {/* Yorumlar grid */}
        <section className="mx-auto mt-8 max-w-6xl px-4 md:mt-10 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
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
                    <p className="mt-0.5 text-xs text-rose-600 md:text-sm">
                      {yorum.ogrenciAdi} • {yorum.sinif}
                    </p>
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
        </section>

        {/* Yorum formu */}
        <section className="mx-auto mt-12 max-w-2xl px-4 md:mt-16 md:px-8">
          <article className="rounded-2xl border border-rose-100 bg-white/95 p-5 shadow-sm md:p-6">
            <h2 className="text-lg font-semibold text-rose-950 md:text-xl">
              Yorum Bırakın
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-rose-900/80 md:text-sm">
              Derslerimiz hakkındaki görüşlerinizi paylaşmak ister misiniz?
              Yorumunuz onaylandıktan sonra bu sayfada yayınlanacaktır.
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
                  Veli Adı Soyadı
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
                    Öğrenci Adı
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 w-full rounded-lg border border-rose-100 bg-white px-3 py-2 text-sm text-rose-950 shadow-sm outline-none ring-0 focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                  />
                </div>

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
              </div>

              <div>
                <label className="block text-[11px] font-medium text-rose-900/90 md:text-xs">
                  Yorumunuz
                </label>
                <textarea
                  rows={4}
                  required
                  className="mt-1 w-full resize-none rounded-lg border border-rose-100 bg-white px-3 py-2 text-sm text-rose-950 shadow-sm outline-none ring-0 focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                  placeholder="Derslerimiz hakkındaki görüşlerinizi paylaşın..."
                />
              </div>

              <button
                type="submit"
                className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-pink-500 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-pink-600 md:text-sm"
              >
                Yorumu Gönder
              </button>
            </form>

            {/* Bildirim */}
            {showNotification && (
              <div className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs text-emerald-800 shadow-sm md:text-sm">
                ✓ Yorumunuz gönderildi! Onaylandıktan sonra bu sayfada
                yayınlanacaktır.
              </div>
            )}
          </article>
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
