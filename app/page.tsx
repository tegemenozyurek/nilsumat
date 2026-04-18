import { Header } from "@/components/Header";
import { ImageSlider } from "@/components/ImageSlider";
import { LessonsSlider } from "@/components/LessonsSlider";
import { FaWhatsapp } from "react-icons/fa";

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

        {/* 2) Birebir Özel Ders bölümü */}
        <section
          id="dersler"
          className="mx-auto mt-14 max-w-6xl px-4 md:px-8 lg:mt-20"
        >
          <LessonsSlider />
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


