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
  title: "How Do I Know It's Time? | Comfurtable",
  description:
    "Gentle guidance for families wondering when it may be time to consider in-home pet euthanasia. Quality-of-life support from Dr. Missy Weaver in Brunswick and the Golden Isles.",
  alternates: {
    canonical: "/how-do-i-know-its-time",
  },
};

const signs = [
  "Pain, anxiety, or breathing changes that are becoming harder to control",
  "Loss of interest in food, water, family interaction, or favorite routines",
  "Frequent falls, inability to stand comfortably, or trouble getting outside",
  "More bad days than good days, even with medication and support",
];

export default function HowDoIKnowItsTimePage() {
  return (
    <main className="min-h-screen bg-bg text-ink">
      <Header />
      <Section className="border-b border-border pb-14 pt-16">
        <Container className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            Gentle guidance for families
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-900 sm:text-5xl">
            How do I know it&apos;s time?
          </h1>
          <p className="mt-6 text-lg leading-8 text-ink-muted">
            This is one of the hardest questions a family can face. There is rarely a
            perfect moment, and many people worry about acting too soon or waiting too
            long. If you&apos;re noticing changes and feeling unsure, you are not alone.
          </p>
          <p className="mt-4 text-lg leading-8 text-ink-muted">
            {config.doctorName} can help you think through quality-of-life changes,
            comfort, and what your pet may be communicating. Reaching out does not mean
            you have already decided. It simply gives you support.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={config.phoneHref}>Call / Text {config.phoneDisplay}</a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/#book">Schedule online</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-4xl">
          <SectionHeading>
            Signs your pet may be <span className="text-brand-600">telling you something</span>
          </SectionHeading>
          <div className="grid gap-4">
            {signs.map((sign) => (
              <Card key={sign} className="p-5">
                <p className="text-base leading-7 text-ink-muted">{sign}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="max-w-4xl">
          <SectionHeading>
            Reassurance when you&apos;re <span className="text-brand-600">not sure yet</span>
          </SectionHeading>
          <div className="space-y-5 text-lg leading-8 text-ink-muted">
            <p>
              Many loving families keep asking themselves the same question because they
              want to protect their pet from suffering and also hold on to more time.
              That tension is normal.
            </p>
            <p>
              Quality of life is not only about a diagnosis. It is also about comfort,
              appetite, mobility, dignity, sleep, and whether your pet still seems able
              to enjoy being themselves.
            </p>
            <p>
              Sometimes the kindest choice is made when a pet is still able to rest
              peacefully in a favorite bed, surrounded by familiar voices, rather than in
              the middle of a crisis.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="pt-0 pb-24">
        <Container className="max-w-4xl">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold text-brand-900">
              Support for Brunswick and Golden Isles families
            </h2>
            <p className="mt-4 text-lg leading-8 text-ink-muted">
              Comfurtable offers in-home pet euthanasia in Brunswick, St. Simons Island,
              Jekyll Island, Sea Island, and surrounding Golden Isles communities. When
              possible, same-day or next-day availability is offered for urgent needs.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href={config.phoneHref}>Call / Text now</a>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/in-home-pet-euthanasia-brunswick-ga">View Brunswick page</Link>
              </Button>
            </div>
          </Card>
        </Container>
      </Section>
      <Footer />
    </main>
  );
}
