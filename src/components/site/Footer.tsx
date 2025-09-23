import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container id="footer" className="py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image src="/logo/comfurtable-icon.png" alt="comfurtable logo" width={36} height={36} />
          <div>
            <Image src="/logo/comfurtable-header.png" alt="comfurtable logo" width={180} height={36} />
            <p className="text-xs text-ink-muted">Gentle goodbyes at home</p>
          </div>
        </div>
        <div className="text-sm text-ink-muted">
          © {new Date().getFullYear()} comfurtable • 
          <a className="underline underline-offset-4" href="mailto:confurtablepets@gmail.com">confurtablepets@gmail.com</a> • 
          <a href="tel:+1-912-207-8612" className="underline underline-offset-4" >
            (912)-207-8612
          </a>
        </div>
      </Container>
    </footer>
  );
}
