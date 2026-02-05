"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/slider1.png", "/slider2.png", "/slider3.png"];

export function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 saniyede bir otomatik geçiş

    return () => clearInterval(id);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full mx-auto">
      <Image
        src={images[index]}
        alt="Matematik öğretmeni Nilsu Uğurlu için tanıtım görseli"
        width={960}
        height={540}
        className="h-auto w-full transition-opacity duration-700"
        priority
      />
    </div>
  );
}

