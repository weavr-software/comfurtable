"use client";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-border">
      <Container className="py-4 flex items-center justify-between">
        {/* Responsive header logo */}
        <div className="flex items-center gap-3">
      <Link href="/" aria-label="Comfurtable home">
        <Image
          src="/logo/comfurtable-header.png"
          alt="Comfurtable"
          width={380}
          height={40}
          priority
          sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 288px, 320px"
          className="h-auto mt-2 w-48 sm:w-56 md:w-72 lg:w-80 shrink-0"
        />
      </Link>
      <Image
        src="/logo/comfurtable-icon.png"
        alt="Comfurtable icon"
        width={40}
        height={40}
        priority
        sizes="(max-width: 640px) 32px, (max-width: 768px) 36px, (max-width: 1024px) 40px, 48px"
        className="h-auto w-8 sm:w-10 md:w-12 lg:w-16 shrink-0"
      />
    </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#services" className="hover:underline underline-offset-4">Services</Link>
          <Link href="#how" className="hover:underline underline-offset-4">How it works</Link>
          <Link href="#areas" className="hover:underline underline-offset-4">Service areas</Link>
          <Link href="#faq" className="hover:underline underline-offset-4">FAQ</Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+1-912-230-0243"
            className="hidden sm:inline-block rounded-full border border-border-soft px-4 py-2 text-sm hover:bg-bg-subtle"
          >
            Call
          </a>
          <Button className="hidden" asChild>
            <Link className="w-20" href="#book">Book</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}
