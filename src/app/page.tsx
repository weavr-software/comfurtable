import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/Section";
import BookingWidget from "@/components/ui/BookingWidget";
import { config } from "@/lib/config";

const heroPoints = [
  "Call or text anytime for guidance",
  "Same-day or next-day availability when possible",
  "No pressure, just support and clear next steps",
];

const visitSteps = [
  {
    title: "Arrival and conversation",
    description:
      "Dr. Weaver begins by listening to your concerns, answering questions, and helping your family decide what feels right for your pet.",
  },
  {
    title: "Gentle sedation",
    description:
      "Your pet receives pain relief and sedation first, allowing them to relax and fall asleep peacefully in a familiar place.",
  },
  {
    title: "Final goodbye",
    description:
      "Once your pet is fully comfortable, Dr. Weaver performs the final step gently and without rushing your family.",
  },
  {
    title: "Aftercare support",
    description:
      "We coordinate cremation options, memorial choices, and grief resources so you are not left figuring everything out alone.",
  },
];

const pricingOptions = [
  {
    title: "In-home euthanasia",
    price: "$400",
    details:
      "Includes the home visit, gentle sedation, peaceful euthanasia, time for goodbyes, and guidance for families planning home burial.",
  },
  {
    title: "With communal cremation",
    price: "$500",
    details:
      "Includes the full visit plus respectful aftercare coordination when you would like cremation without the return of ashes.",
  },
  {
    title: "With private cremation",
    price: "$600",
    details:
      "Includes the full visit, private cremation, an urn, and the return of your pet's ashes within about one to two weeks.",
  },
];

const faqs = [
  {
    question: "Will my pet feel pain?",
    answer:
      "Comfort is the priority throughout the visit. Sedation and pain medication are given first so your pet can relax and fall asleep peacefully before the final medication is administered.",
  },
  {
    question: "How long does an in-home visit take?",
    answer:
      "Most visits take around 45 to 90 minutes, depending on your pet's needs and how much time your family would like for conversation and goodbyes.",
  },
  {
    question: "Can children or other pets be present?",
    answer:
      "Yes. Dr. Weaver can help you decide how to include children and other pets in a way that feels supportive and appropriate for your family.",
  },
  {
    question: "Can the visit happen outside?",
    answer:
      "Often, yes. If your pet is most comfortable on a porch, in the yard, or in another favorite spot at home, Dr. Weaver will do her best to accommodate that setting safely.",
  },
  {
    question: "What if I'm not sure it's time yet?",
    answer:
      "You do not need to be completely certain before reaching out. Dr. Weaver can talk through quality-of-life changes, comfort concerns, and what you are seeing at home so you have guidance without pressure.",
  },
  {
    question: "How far in advance should we book?",
    answer:
      "Same-day appointments are sometimes available. When possible, reaching out a little early helps with scheduling, but families are always welcome to call when needs feel urgent.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-ink" spellCheck={false}>
      <Header />

      <section
        className="relative overflow-hidden border-b border-border"
        aria-label="Comfurtable home"
      >
        <div className="absolute inset-0">
          <Image
            src="/art/hero.png"
            alt="Compassionate in-home pet euthanasia care in Brunswick and the Golden Isles"
            fill
            priority
            className="object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,248,243,0.82),rgba(250,248,243,0.95))]" />
        </div>
        <Container className="relative grid gap-10 py-16 md:py-24 lg:grid-cols-[1.3fr_0.9fr] lg:gap-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
              In-home pet euthanasia in Brunswick and the Golden Isles
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-brand-900 sm:text-5xl lg:text-6xl">
              Gentle, compassionate end-of-life care in the comfort of your home
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-muted">
              You don&apos;t have to go through this alone. {config.doctorName} offers
              peaceful in-home pet euthanasia, honest guidance, and support for
              families in Brunswick, St. Simons Island, Jekyll Island, Sea Island,
              and nearby Golden Isles communities.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-brand-700">
                <a href={config.phoneHref}>Call / Text now</a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="#what-to-expect">What to expect</Link>
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {heroPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-border bg-white/80 px-4 py-4 text-sm text-ink-muted shadow-card"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-white/90 p-6 sm:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
              Reach us anytime
            </p>
            <p className="mt-3 text-3xl font-semibold text-brand-900">
              {config.phoneDisplay}
            </p>
            <p className="mt-3 text-base leading-7 text-ink-muted">
              Same-day or next-day availability when possible. We&apos;ll help you
              understand your options, what to expect, and what next steps make sense
              for your pet and family.
            </p>
            <div className="mt-6 grid gap-3">
              <Button asChild size="lg" className="w-full justify-center bg-brand-700">
                <a href={config.phoneHref}>Call now</a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="w-full justify-center">
                <a href={config.smsHref}>Text now</a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="w-full justify-center">
                <Link href="#book">Schedule online</Link>
              </Button>
            </div>
            <p className="mt-5 text-sm leading-6 text-ink-muted">
              Serving {config.serviceAreaLabel}. No pressure, just support.
            </p>
          </Card>
        </Container>
      </section>

      <Section className="pb-12">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <SectionHeading>
                Meet <span className="text-brand-600">Dr. Weaver</span>
              </SectionHeading>
              <p className="text-lg leading-8 text-ink-muted">
                For more than 25 years, Dr. Missy Weaver has cared for pets and the
                people who love them across the Golden Isles. A University of Georgia
                graduate and longtime local veterinarian, she created Comfurtable to
                give families a gentler way to say goodbye at home with privacy,
                compassion, and time to breathe.
              </p>
              <p className="mt-4 text-lg leading-8 text-ink-muted">
                Families can expect a calm presence, clear explanations, and space to
                move at their own pace. This work is deeply personal, and every visit
                is centered on comfort, dignity, and emotional support.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-white px-4 py-4">
                  <p className="text-lg font-semibold text-brand-800">25+ years of experience</p>
                  <p className="mt-1 text-sm leading-6 text-ink-muted">
                    Trusted small-animal veterinarian serving Brunswick and the Golden Isles.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-white px-4 py-4">
                  <p className="text-lg font-semibold text-brand-800">UGA-trained, locally known</p>
                  <p className="mt-1 text-sm leading-6 text-ink-muted">
                    Longstanding community reputation and deep local relationships.
                  </p>
                </div>
              </div>
            </div>
            <div className="justify-self-center">
              <Image
                src="/art/woman-and-cat.png"
                alt="Dr. Missy Weaver with a cat"
                width={520}
                height={520}
                className="w-full max-w-md rounded-2xl border border-border bg-white object-cover shadow-card"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section id="what-to-expect" className="pt-0">
        <Container>
          <SectionHeading>
            What happens during an <span className="text-brand-600">in-home visit</span>
          </SectionHeading>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {visitSteps.map((step, index) => (
              <Card key={step.title} className="h-full p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">
                  Step {index + 1}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-brand-900">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-ink-muted">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="pricing" className="pt-0">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading>
                Transparent <span className="text-brand-600">pricing</span>
              </SectionHeading>
              <p className="text-lg leading-8 text-ink-muted">
                Families often feel more at ease when they know what is included. Our
                base in-home euthanasia service begins at $400 and always includes
                compassionate guidance, the home visit itself, gentle sedation, and
                time for meaningful goodbyes.
              </p>
              <div className="mt-6 rounded-2xl border border-border bg-brand-50 px-5 py-5">
                <p className="text-lg font-semibold text-brand-800">What&apos;s included</p>
                <p className="mt-2 text-base leading-7 text-ink-muted">
                  Travel throughout Brunswick and the Golden Isles, clear explanation of
                  the process, coordination for cremation when selected, and follow-up
                  support with memorial and grief resource guidance.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              {pricingOptions.map((option) => (
                <Card key={option.title} className="p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-brand-900">{option.title}</h3>
                      <p className="mt-2 text-base leading-7 text-ink-muted">
                        {option.details}
                      </p>
                    </div>
                    <div className="rounded-full bg-brand-700 px-4 py-2 text-base font-semibold text-white">
                      {option.price}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="areas" className="pt-0">
        <Container>
          <Card className="p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <SectionHeading>
                  Serving <span className="text-brand-600">Brunswick and the Golden Isles</span>
                </SectionHeading>
                <p className="text-lg leading-8 text-ink-muted">
                  Comfurtable provides in-home pet euthanasia visits for families in
                  Brunswick, St. Simons Island, Jekyll Island, Sea Island, and nearby
                  Southeast Georgia communities.
                </p>
                <ul className="mt-5 grid gap-3 text-base text-ink-muted sm:grid-cols-2">
                  {config.serviceAreas.map((city) => (
                    <li key={city} className="rounded-2xl border border-border bg-bg px-4 py-3">
                      {city}, Georgia
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild>
                    <a href={config.phoneHref}>Call / Text now</a>
                  </Button>
                  <Button asChild variant="secondary">
                    <Link href="/in-home-pet-euthanasia-brunswick-ga">
                      Brunswick service page
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Service area map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-81.66%2C31.04%2C-81.27%2C31.33&layer=mapnik&marker=31.149%2C-81.495"
                  className="h-[320px] w-full md:h-[420px]"
                />
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <Card className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
                Gentle guidance
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-brand-900">
                How do I know it&apos;s time?
              </h3>
              <p className="mt-3 text-base leading-7 text-ink-muted">
                Learn what quality-of-life changes to look for, how families think about
                timing, and why there is rarely a single perfect moment.
              </p>
              <Button asChild className="mt-5">
                <Link href="/how-do-i-know-its-time">Read the guide</Link>
              </Button>
            </Card>
            <Card className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
                Local care
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-brand-900">
                In-home euthanasia in Brunswick, GA
              </h3>
              <p className="mt-3 text-base leading-7 text-ink-muted">
                See a Brunswick-focused overview of service area details, what is
                included, and how to reach Dr. Weaver quickly when you need help.
              </p>
              <Button asChild className="mt-5">
                <Link href="/in-home-pet-euthanasia-brunswick-ga">View Brunswick page</Link>
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      <Section id="book" className="pt-0">
        <Container>
          <SectionHeading>
            Call, text, or <span className="text-brand-600">schedule online</span>
          </SectionHeading>
          <p className="max-w-3xl text-lg leading-8 text-ink-muted">
            Some families want to speak with a person right away. Others prefer to begin
            with an online request. Either way, we&apos;ll guide you through next steps with
            care.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-brand-700">
              <a href={config.phoneHref}>Call / Text now</a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={`mailto:${config.email}`}>Email us</a>
            </Button>
          </div>
          <div className="mt-8">
            <BookingWidget />
          </div>
        </Container>
      </Section>

      <Section id="faq" className="pt-0 pb-16">
        <Container>
          <SectionHeading>Frequently asked questions</SectionHeading>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="card p-5">
                <summary className="cursor-pointer list-none text-lg font-medium text-brand-700">
                  {faq.question}
                </summary>
                <p className="mt-3 text-base leading-7 text-ink-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="contact" className="pt-0 pb-24">
        <Container>
          <Card className="p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
              We&apos;re here to help
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-brand-900">
              Reach out whenever you&apos;re ready
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-ink-muted">
              Call or text for immediate support, or email with questions about your
              pet&apos;s comfort, the timing, cremation options, memorial options, or grief
              resources.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-brand-700">
                <a href={config.phoneHref}>Call / Text {config.phoneDisplay}</a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={`mailto:${config.email}`}>{config.email}</a>
              </Button>
            </div>
          </Card>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
