import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/Section";
import { config } from "@/lib/config";

export const metadata: Metadata = {
  title: "In-Home Pet Euthanasia in Brunswick, GA | Comfurtable",
  description:
    "In-home pet euthanasia in Brunswick, Georgia with Dr. Missy Weaver. Compassionate end-of-life care, transparent pricing, and support for families throughout the Golden Isles.",
  alternates: {
    canonical: "/in-home-pet-euthanasia-brunswick-ga",
  },
};

const highlights = [
  "Compassionate in-home pet euthanasia in Brunswick, GA",
  "Same-day or next-day availability when possible",
  "Care from Dr. Missy Weaver, a University of Georgia graduate with 25+ years of local veterinary experience",
  "Support with sedation, aftercare coordination, grief resources, and memorial options",
];

export default function BrunswickPage() {
  return (
    <main className="min-h-screen bg-bg text-ink">
      <Header />

      <Section className="border-b border-border pb-14 pt-16">
        <Container className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            Brunswick, Georgia
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-900 sm:text-5xl">
            In-home pet euthanasia in Brunswick, GA
          </h1>
          <p className="mt-6 text-lg leading-8 text-ink-muted">
            Comfurtable provides gentle, veterinarian-led in-home pet euthanasia for
            families in Brunswick who want a peaceful goodbye in a familiar place. Dr.
            Missy Weaver helps families navigate this moment with compassion, clarity,
            and time to move at their own pace.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={config.phoneHref}>Call / Text {config.phoneDisplay}</a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/#what-to-expect">What to expect</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-4xl">
          <SectionHeading>
            Why Brunswick families choose <span className="text-brand-600">Comfurtable</span>
          </SectionHeading>
          <div className="grid gap-4">
            {highlights.map((item) => (
              <Card key={item} className="p-5">
                <p className="text-base leading-7 text-ink-muted">{item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="max-w-4xl">
          <SectionHeading>
            Pricing for in-home pet euthanasia in <span className="text-brand-600">Brunswick</span>
          </SectionHeading>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="p-6">
              <p className="text-xl font-semibold text-brand-900">$400</p>
              <p className="mt-3 text-base leading-7 text-ink-muted">
                Home visit, sedation, peaceful euthanasia, and time for private goodbyes.
              </p>
            </Card>
            <Card className="p-6">
              <p className="text-xl font-semibold text-brand-900">$500</p>
              <p className="mt-3 text-base leading-7 text-ink-muted">
                Includes communal cremation coordination after the visit.
              </p>
            </Card>
            <Card className="p-6">
              <p className="text-xl font-semibold text-brand-900">$600</p>
              <p className="mt-3 text-base leading-7 text-ink-muted">
                Includes private cremation, an urn, and the return of your pet&apos;s ashes.
              </p>
            </Card>
          </div>
          <p className="mt-5 text-base leading-7 text-ink-muted">
            Service area includes Brunswick along with St. Simons Island, Jekyll Island,
            Sea Island, and nearby Golden Isles communities.
          </p>
        </Container>
      </Section>

      <Section className="pt-0 pb-24">
        <Container className="max-w-4xl">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold text-brand-900">
              Need help deciding whether it&apos;s time?
            </h2>
            <p className="mt-4 text-lg leading-8 text-ink-muted">
              Many Brunswick families first reach out because they are unsure and want a
              kind, experienced voice to help them think clearly. That conversation is
              welcome.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/how-do-i-know-its-time">Read the timing guide</Link>
              </Button>
              <Button asChild variant="secondary">
                <a href={config.phoneHref}>Call / Text now</a>
              </Button>
            </div>
          </Card>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
