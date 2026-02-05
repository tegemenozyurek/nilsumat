"use client";

import { useEffect, useState } from "react";

type Slide = {
  title: string;
  description: string;
  bullets: string[];
};

const slides: Slide[] = [
  {
    title: "Birebir Özel Ders",
    description:
      "İzmir'de yüz yüze veya online birebir matematik dersleri sunuyorum. Dersler; ortaokul, LGS, TYT ve AYT seviyelerine göre planlanır.",
    bullets: [
      "Seviyeye uygun, planlı ders akışı",
      "Ders sonrası kısa özet ve ödevlendirme",
    ],
  },
  {
    title: "Ortaokul & LGS Hazırlık",
    description:
      "Temel kavramlardan başlayarak konuları küçük adımlarla ilerliyor, LGS soru tarzlarına uygun bol örnek çözüyorum.",
    bullets: [
      "Konu özetleri ve seviyeye uygun soru setleri",
      "Düzenli tekrar ve mini denemeler",
    ],
  },
  {
    title: "TYT & AYT Hazırlık",
    description:
      "Sınav stratejisi, hız ve süre yönetimine odaklanan birebir derslerle TYT ve AYT netlerini yükseltmeyi hedefliyorum.",
    bullets: [
      "Sık çıkan soru tiplerine odaklı anlatım",
      "Kişiye özel çalışma programı ve takip",
    ],
  },
];

export function LessonsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 18000); // 18 saniyede bir otomatik geçiş

    return () => clearInterval(id);
  }, []);

  const current = slides[index];

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <article className="flex h-[320px] min-h-[320px] max-h-[320px] w-full flex-col overflow-hidden rounded-2xl border border-rose-100 bg-gradient-to-br from-rose-50/80 via-white to-rose-50/70 p-5 shadow-sm lg:w-1/2">
      {/* Üst satır: başlık + sayaç */}
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-rose-950 md:text-2xl">
          {current.title}
        </h2>
        <span className="text-[11px] text-rose-500">
          {index + 1}/{slides.length}
        </span>
      </div>

      {/* Açıklama */}
      <p className="mt-2 text-sm leading-relaxed text-rose-900/80 md:text-base">
        {current.description}
      </p>

      {/* İçerik + kontroller: sabit yükseklik içinde, alt kontroller her zaman görünür */}
      <div className="mt-4 flex flex-1 min-h-0 flex-col">
        {/* Özellikler: fazla içerik olursa dikey scroll yapsın */}
        <div className="flex-1 min-h-0 overflow-y-auto pr-1 sm:pr-0">
          <div className="grid gap-3 sm:grid-cols-2">
            {current.bullets.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-rose-100 bg-white/90 px-3 py-2 text-sm shadow-[0_1px_3px_rgba(15,23,42,0.05)]"
              >
                <p className="text-rose-900/85">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {slides.length > 1 && (
          <div className="mt-4 shrink-0 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={goPrev}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-rose-200 bg-white/80 text-rose-700 text-sm shadow-sm hover:bg-rose-50"
              aria-label="Önceki dersi göster"
            >
              ‹
            </button>

            <div className="flex flex-1 justify-center gap-1.5">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-5 bg-rose-500" : "w-2 bg-rose-200"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-rose-200 bg-white/80 text-rose-700 text-sm shadow-sm hover:bg-rose-50"
              aria-label="Sonraki dersi göster"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </article>
  );
}

