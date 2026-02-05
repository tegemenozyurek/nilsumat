"use client";

import { useState } from "react";

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Ayın ilk gününün haftanın hangi günü olduğunu bul (0 = Pazar, 1 = Pazartesi, ...)
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  // Ayın son günü
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Önceki ayın son günlerini göster (takvimi doldurmak için)
  const prevMonthDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Pazartesi = 1, Pazar = 0 -> 6

  // Takvim günlerini oluştur
  const days: (number | null)[] = [];

  // Önceki ayın son günleri (boş)
  for (let i = 0; i < prevMonthDays; i++) {
    days.push(null);
  }

  // Bu ayın günleri
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  // Bir günün haftanın hangi günü olduğunu kontrol et (1 = Pazartesi, 2 = Salı, ..., 5 = Cuma)
  const getDayOfWeek = (day: number): number => {
    const date = new Date(year, month, day);
    return date.getDay() === 0 ? 7 : date.getDay(); // Pazar = 0 -> 7'e çevir
  };

  // Salı, Çarşamba, Perşembe, Cuma mı kontrol et (2, 3, 4, 5)
  const isAvailableDay = (day: number | null): boolean => {
    if (day === null) return false;
    const dayOfWeek = getDayOfWeek(day);
    return dayOfWeek >= 2 && dayOfWeek <= 5; // Salı-Cuma
  };

  const monthNames = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];

  const goToPrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <div className="rounded-xl border border-rose-100 bg-rose-50/60 p-3 md:p-4">
      {/* Ay ve yıl başlığı + navigasyon */}
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          onClick={goToPrevMonth}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-rose-200 bg-white text-rose-600 transition hover:bg-rose-50"
          aria-label="Önceki ay"
        >
          ‹
        </button>
        <h3 className="text-sm font-semibold text-rose-950 md:text-base">
          {monthNames[month]} {year}
        </h3>
        <button
          type="button"
          onClick={goToNextMonth}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-rose-200 bg-white text-rose-600 transition hover:bg-rose-50"
          aria-label="Sonraki ay"
        >
          ›
        </button>
      </div>

      {/* Gün başlıkları */}
      <div className="mb-1 grid grid-cols-7 gap-1 text-center text-[10px] font-medium uppercase tracking-wide text-rose-500 md:text-[11px]">
        <span>Pzt</span>
        <span>Sal</span>
        <span>Çar</span>
        <span>Per</span>
        <span>Cum</span>
        <span>Cmt</span>
        <span>Paz</span>
      </div>

      {/* Takvim grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          if (day === null) {
            return (
              <div
                key={`empty-${index}`}
                className="aspect-square rounded-lg border border-transparent bg-transparent"
              />
            );
          }

          const available = isAvailableDay(day);
          const isToday =
            day === new Date().getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear();

          return (
            <div
              key={day}
              className={`flex flex-col items-center justify-center rounded-lg border px-1 py-1.5 text-[10px] md:px-1.5 md:py-2 md:text-xs ${
                available
                  ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                  : "border-rose-100 bg-white/60 text-rose-400"
              } ${isToday ? "ring-2 ring-pink-400 ring-offset-1" : ""}`}
            >
              <span className={`font-semibold ${isToday ? "text-pink-600" : ""}`}>
                {day}
              </span>
              {available && (
                <span className="mt-0.5 rounded-full bg-emerald-500 px-1 py-0.5 text-[8px] font-semibold text-white md:text-[9px]">
                  ✓
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Açıklama */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-[10px] text-rose-900/70 md:text-xs">
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded border border-emerald-200 bg-emerald-50" />
          <span>Müsait günler</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded border border-rose-100 bg-white/60" />
          <span>Müsait değil</span>
        </div>
      </div>
    </div>
  );
}
