/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";

export function Carousel({
  items,
  renderItem,
  className = "",
}: {
  items: any[];
  renderItem: (item: any, idx: number) => React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex flex-col">
        {items.map((item, i) => (
          <div key={i} className="w-full rounded-2xl pr-3 mb-3">
            {renderItem(item, i)}
          </div>
        ))}
      </div>
    </div>
  );
}
