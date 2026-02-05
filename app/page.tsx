import { Header } from "@/components/Header";
import { ImageSlider } from "@/components/ImageSlider";
import { LessonsSlider } from "@/components/LessonsSlider";
import { FaMicrosoft, FaGoogle, FaDiscord, FaVideo, FaWhatsapp } from "react-icons/fa";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white pb-16 pt-20">
        {/* 1) Genel tanıtım bölümü */}
        <section
          id="hakkimda"
          className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pt-12 md:px-8 md:pt-16 lg:flex-row lg:items-center"
        >
          {/* Metin */}
          <div className="w-full space-y-5 lg:w-3/5">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-500">
              Matematik Öğretmeni • İzmir & Online
            </p>
            <p className="text-sm leading-relaxed text-rose-900/85 md:text-base">
              Ben <strong className="font-semibold">Nilsu Uğurlu</strong>, 9
              Eylül Üniversitesi Matematik Öğretmenliği son sınıf
              öğrencisiyim. Ortaokul ve lise düzeyinde, öğrencilerin matematiği
              daha iyi anlamasını hedefleyen{" "}
              <strong className="font-semibold">birebir özel dersler</strong>{" "}
              veriyorum.
            </p>
            <p className="text-sm leading-relaxed text-rose-900/80 md:text-base">
              Her öğrencinin seviyesine göre ilerliyor; konuları sade,
              anlaşılır adımlarla ve bol örnekle anlatıyorum. Amacım hem sınav
              başarısını hem de özgüveni artırmak.
            </p>
          </div>

          {/* Görsel */}
          <div className="w-full lg:w-2/5">
            <ImageSlider />
          </div>
        </section>

        {/* 2) YouTube + Birebir Özel Ders bölümü */}
        <section
          id="dersler"
          className="mx-auto mt-14 flex max-w-6xl flex-col gap-6 px-4 md:px-8 lg:mt-20 lg:flex-row"
        >
          <LessonsSlider />

          {/* YouTube Kanalı */}
          <article className="w-full rounded-2xl border border-rose-100 bg-white p-5 shadow-sm lg:w-1/2">
            <h2 className="text-lg font-semibold text-rose-950 md:text-xl">
              YouTube Kanalım
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-rose-900/80 md:text-base">
              Ücretsiz{" "}
              <strong className="font-semibold">
                matematik konu anlatımları ve soru çözümü videoları
              </strong>{" "}
              ile öğrencilerim ders dışında da tekrar yapabiliyor. Videolarda
              temel kavramlara, yeni nesil soru tiplerine ve sınav stratejilerine
              odaklanıyorum.
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube kanalını aç"
                className="flex h-9 px-16 items-center justify-center rounded-lg bg-red-600 text-white shadow-md transition hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M9 8l7 4-7 4V8z" fill="currentColor" />
                </svg>
              </a>
            </div>
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


