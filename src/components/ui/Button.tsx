"use client";
import React, { ButtonHTMLAttributes, isValidElement, cloneElement, ReactElement } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  block?: boolean;
  asChild?: boolean;
  children?: React.ReactNode;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  block,
  asChild,
  children,
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full transition-opacity disabled:opacity-50 disabled:cursor-not-allowed";
  const variants: Record<Variant, string> = {
    primary: "bg-brand-600 text-white hover:opacity-90",
    secondary: "border border-ink/10 text-ink hover:bg-bg-subtle",
    ghost: "text-ink hover:bg-bg-subtle",
  };
  const sizes: Record<Size, string> = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };
  const classes = cn(base, variants[variant], sizes[size], block && "w-full", className);

  if (asChild && isValidElement(children)) {
    // Style the passed child (e.g., <Link>) as a button
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const child = children as ReactElement<any>;
    return cloneElement(child, {
      className: cn(classes, child.props.className),
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
