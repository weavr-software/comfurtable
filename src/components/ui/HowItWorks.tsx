import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

export function HowItWorks() {
  const steps = [
    {
      icon: "🗨️",
      title: "Consult",
      desc:
        "Connect with our veterinarian to discuss your pet’s comfort, needs, and family wishes. We’ll guide you through every step.",
    },
    {
      icon: "🏠",
      title: "Home Visit",
      desc:
        "We arrive with everything needed for a peaceful, dignified farewell. Your family sets the pace and environment.",
    },
    {
      icon: "🌱",
      title: "Aftercare",
      desc:
        "We coordinate cremation, memorials, and grief support. You’ll receive resources and follow-up care.",
    },
  ];

  return (
    <Section id="how" className="pt-0">
      <Container>
        

        {/* 2-col balanced layout; image left on lg+, content first on small */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Content block (first on small, right on lg) */}
          <div className="order-1 lg:order-2">
            <SectionHeading>Here is <br />
              <span className="text-brand-600 font-semibold text-4xl"> How it Works</span>
            </SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
              {steps.map((step) => (
                <Card
                  key={step.title}
                  className="p-6 h-full bg-white border-2 border-brand-100 hover:bg-brand-50 transition-colors duration-200"
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <span className="text-4xl" aria-hidden="true">
                      {step.icon}
                    </span>
                    <h4 className="font-semibold text-3xl text-brand-700">{step.title}</h4>
                    <p className="text-xl text-ink-muted">{step.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Image block (second on small, left on lg) */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] d w-full ">
              <Image
                src="/art/dog-and-cat.png"
                alt="Hands gently holding a pet’s paw"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
