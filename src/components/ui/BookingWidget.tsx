import dynamic from "next/dynamic";
const Cal = dynamic(() => import("@calcom/embed-react").then(m => m.default), {
  ssr: false,
});

export default function BookingWidget() {
  return (
    <div className="rounded-2xl border border-border overflow-hidden">
      <Cal
        // Use your handle/event path, or a profile path
        calLink="cal.com/comfurtable-m2oz1h/in-home-euthanasia"   // ← replace with your actual link
        style={{ width: "100%", height: "600px" }}
        // Optional embed config:
        // config={{ theme: "light", layout: "month_view", hideEventTypeDetails: false }}
      />
    </div>
  );
}