"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import Cal, { getCalApi } from "@calcom/embed-react";
import { ServicesSection } from "@/components/ui/ServicesSection";
import { HowItWorks } from "@/components/ui/HowItWorks";

function BookingWidget() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "in-home-euthanasia" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="rounded-2xl border border-border overflow-hidden">
      <Cal
        namespace="in-home-euthanasia"
        calLink="comfurtable-m2oz1h/in-home-euthanasia"
        style={{ width: "100%", height: "640px", overflow: "auto" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}

export default function Home() {

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/art/hero.png"
            alt="Hero background"
            fill
            style={{
              objectFit: "fill", // Stretches image to fill both width and height
              objectPosition: "center"
            }}
            className="pointer-events-none select-none"
            priority
          />
          <div className="absolute inset-0 bg-heroGlow mix-blend-soft-light" />
        </div>
      <Container className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl sm:text-7xl font-bold tracking-tight mb-6">
            Gentle goodbyes at home
          </h1>
          <p className="text-base text-lg leading-relaxed text-ink-muted font-bold max-w-xl mb-8">
            In-home euthanasia and end-of-life care for pets—centered on compassion, dignity, and support for your family.
          </p>
          <Button asChild
            size="lg"
            variant="secondary"
            className="bg-bg border-brand-600 border-2"
          >
            <Link href="#book">Book a Consultation</Link>
          </Button>
        </div>
      </Container>
    </section>
      {/* Services */}
      <ServicesSection />
    
      {/* How it works */}
      <HowItWorks />

      {/* Service areas */}
      <Section id="areas" className="pt-0">
        <Container>
          <Card className="p-6">
            <SectionHeading>Our <br/><span className="text-brand-600 text-4xl">Service Areas</span></SectionHeading>
            <div className="grid lg:grid-cols-2 gap-6 items-start">
              <div className="space-y-3">
                <p className="text-xl text-ink-muted">
                  Southeast Georgia
                  <br />
                  <span className="font-semibold text-sm text-brand-700">Expanding soon</span>
                </p>
                <ul className="grid grid-cols-2 gap-2 text-xl">
                  {[
                    "St. Simons Island",
                    "Brunswick",
                    "Jekyll Island",
                    "Sea Island",
                  ].map((city) => (
                    <li key={city} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                      {city}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-2">
                  <Link href="#book">Check availability</Link>
                </Button>
                <div></div>
                <Badge className=" mt-4">
                  If you’re outside our current area, please{" "}
                  <Link href="/#footer" className="underline underline-offset-4">
                    contact us
                  </Link>{" "}
                  to discuss options.
                </Badge>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border">
                <iframe
                  title="Service area map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-81.66%2C31.04%2C-81.27%2C31.33&layer=mapnik&marker=31.149%2C-81.495"
                  className="w-full h-[340px] md:h-[420px]"
                />
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* Bio */}
      <Section id="bio" className="pt-0">
        <Container>
          <Card className="p-6">
            
            <SectionHeading>Meet <br></br> <span className="text-brand-600 text-4xl">Dr. Weaver</span></SectionHeading>
            <div className="grid md:grid-cols-[auto_1fr] gap-6 items-start">
              <Image
                src="/art/woman-and-cat.png"
                alt="Woman and cat"
                width={300}
                height={80}
                className="rounded-lg"
              />
              <div className="space-y-3 text-lg">
                <p>
                  Dr. Missy Weaver is a graduate of the University of Georgia and has been  
                  working in the Golden Isles veterinary community for over 25 years. 
                  For 14 years, she has been the lead veterinarian at the Humane Society of South Coastal Georgia. 
                  She has spent her career advocating for small animal welfare and the human/animal bond. In her free time, 
                  Dr Weaver and her husband, Dr. John Weaver, a local orthodontist are raising 5 boys, 3 dogs and 3 cats. 
                  She enjoys gardening, spending time with her family and traveling.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-600" /> 25+ years in small-animal medicine</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-600" /> Head vet for a local no-kill humane society</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-600" /> Leads public low-cost spay/neuter days</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-600" /> Advocate for microchipping & preventive care</li>
                </ul>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* Booking Calendar */}
      <Section id="book" className="pt-0">
      <Container>
        <SectionHeading>Book a Service</SectionHeading>
        <details className="group mt-4">
    <summary className="cursor-pointer text-2xl font-semibold text-brand-700 flex items-center justify-between py-2 px-3 rounded-lg bg-brand-50 hover:bg-brand-100 transition">
      What’s included?
      <span className="ml-2 text-xl transition-transform group-open:rotate-45">+</span>
    </summary>
    <div className="mt-3 text-base text-xl text-ink-muted px-3 pb-2">
      This will include time for Dr. Weaver to meet with you and your pet to answer any questions that your 
      family has about the euthanasia process. <br/> <br/>Your pet will first quietly receive pain and sedation medications. 
      This will allow you time for gentle goodbyes. The final steps will be under general anesthesia so there is no discomfort. You may remain with your pet throughout this process and can spend private time with your pet at any point. 
      <br/><br/>After your goodbyes, if cremation is elected, Dr. Weaver will respectfully prepare and transfer your loved one to the crematory. If burial is elected, Dr. Weaver does not have the capability to assist at this time.
    </div>
  </details>
        <div className="my-8">
          <BookingWidget />
        </div>
      </Container>
    </Section>

      {/* FAQ */}
      <Section id="faq" className="pt-0 pb-28">
        <Container>
          <SectionHeading>Frequently asked questions</SectionHeading>
          <div className="grid gap-4">
            {[
              {
                q: "What should we expect during the visit?",
                a:
                  "Your pet is gently sedated first. Dr. Weaver will move at your family’s pace and welcome favorite blankets, music, or rituals.",
              },
              {
                q: "Can children or other pets be present?",
                a:
                  "Yes. Dr. Weaver will guide you on ways to involve them in a healthy, supportive manner.",
              },
              {
                q: "How far in advance should we book?",
                a:
                  "Same-day consults are sometimes available. For preferred times, booking 2–3 days in advance is best.",
              },
              {
                q: "What should we expect during the visit?",
                a:
                  "Your pet is gently sedated first. Dr. Weaver will move at your family’s pace and welcome favorite blankets, music, or rituals.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="group card p-5">
                <summary className="cursor-pointer text-brand-600 list-none font-medium flex items-center justify-between">
                  {q}
                  <span className="transition-transform group-open:rotate-45 text-xl">+</span>
                </summary>
                <p className="mt-2 text-sm text-ink-muted">{a}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
