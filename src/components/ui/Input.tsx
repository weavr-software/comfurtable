import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "rounded-xl border border-black/10 px-3 py-2 bg-white/80 text-sm placeholder:text-ink-muted",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
