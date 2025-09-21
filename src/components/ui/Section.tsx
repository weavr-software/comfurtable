import { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/cn";

export function Section({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <section className={cn("py-24", className)} {...props} />; // was py-16
}

export function SectionHeading({ children }: PropsWithChildren) {
  return (
    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">{children}</h3>
  );
}
