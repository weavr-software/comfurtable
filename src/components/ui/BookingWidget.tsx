"use client";
import dynamic from "next/dynamic";
import { config } from "@/lib/config";

const Cal = dynamic(() => import("@calcom/embed-react").then(m => m.default), {
  ssr: false,
});

export default function BookingWidget() {
  return (
    <div className="rounded-2xl border border-border overflow-hidden">
      <Cal
        calLink={config.calComLink}
        style={{ width: "100%", height: "600px" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}
