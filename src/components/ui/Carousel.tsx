/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef, useState } from "react";

export function Carousel({
  items,
  renderItem,
  className = "",
  autoplay = true,
  interval = 5000,
}: {
  items: any[];
  renderItem: (item: any, idx: number) => React.ReactNode;
  className?: string;
  autoplay?: boolean;
  interval?: number;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = items.length;

  // Track active slide
  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    const slides = Array.from(vp.querySelectorAll("[data-slide]"));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const idx = Number((visible.target as HTMLElement).dataset.index);
          setActive(idx);
        }
      },
      { root: vp, threshold: [0.6] }
    );
    slides.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Autoplay
  useEffect(() => {
    if (!autoplay || count <= 1) return;
    const vp = viewportRef.current;
    if (!vp) return;

    let id: any;
    const start = () => {
      clearInterval(id);
      id = setInterval(() => {
        const next = (active + 1) % count;
        vp.scrollTo({ left: vp.clientWidth * next, behavior: "smooth" });
      }, interval);
    };

    const stop = () => clearInterval(id);
    start();
    vp.addEventListener("mouseenter", stop);
    vp.addEventListener("mouseleave", start);
    vp.addEventListener("focusin", stop);
    vp.addEventListener("focusout", start);
    return () => {
      stop();
      vp.removeEventListener("mouseenter", stop);
      vp.removeEventListener("mouseleave", start);
      vp.removeEventListener("focusin", stop);
      vp.removeEventListener("focusout", start);
    };
  }, [active, autoplay, interval, count]);

  const goTo = (idx: number) => {
    const vp = viewportRef.current;
    if (!vp) return;
    vp.scrollTo({ left: vp.clientWidth * idx, behavior: "smooth" });
  };

  const prev = () => goTo((active - 1 + count) % count);
  const next = () => goTo((active + 1) % count);

  return (
    <div className={`relative ${className}`}>
      {/* viewport */}
      <div
        ref={viewportRef}
        className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory rounded-2xl "
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex">
          {items.map((item, i) => (
            <div
              key={i}
              data-slide
              data-index={i}
              className="snap-center shrink-0 w-full p-5 md:p-8"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
            >
              {renderItem(item, i)}
            </div>
          ))}
        </div>
      </div>

      {/* arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous"
        className="absolute -left-3 top-1/2 -translate-y-1/2 hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-soft bg-white/80 backdrop-blur hover:bg-bg transition"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next"
        className="absolute -right-3 top-1/2 -translate-y-1/2 hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-soft bg-white/80 backdrop-blur hover:bg-bg transition"
      >
        ›
      </button>

      {/* dots */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all ${
              active === i ? "w-6 bg-brand-600" : "w-2.5 bg-brand-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
