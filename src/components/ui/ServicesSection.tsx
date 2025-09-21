import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Carousel } from "@/components/ui/Carousel";

export function ServicesSection() {
  const services = [
    {
      title: "In-home euthanasia",
      desc: "A peaceful, veterinarian-led goodbye in the comfort of your home. Includes gentle sedation, pain relief, time for your family, and supportive guidance throughout the process.",
      price: "$400",
      art: "/art/paw-heart.png",
    },
    {
      title: "Cremation & Aftercare",
      desc: "We coordinate cremation, memorial keepsakes, paw prints, and grief resources. Choose private or communal options. Memorials delivered to your home.",
      price: "+$150–$300",
      art: "/art/hands-paw.png",
    },
    {
      title: "Grief consulting",
      desc: "Compassionate support for families before and after loss. Virtual or in-person sessions. Guidance for children, other pets, and memorial planning.",
      price: "$100",
      art: "/art/sofa-dog-cat.png",
    },
  ];

  return (
    <Section id="services">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Heading + carousel */}
          <div>
            <SectionHeading>We offer a variety of 
              <span className="text-brand-600 font-semibold text-4xl"> Services</span>
            </SectionHeading>
            <p className="mb-6 text-ink-muted">
              Here is a list of what we offer. We also accept requests for anything—we’re here for you.
            </p>

            <Carousel
              items={services}
              className="sm:max-w-full max-w-xs overflow-hidden"
              renderItem={(card) => (
                <Card className="w-full p-6 md:p-7 hover:shadow-card transition-shadow duration-200">
                  <div className="flex items-start gap-4">
                   
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="font-medium text-brand-800 text-base sm:text-lg">
                          {card.title}
                        </h4>
                        <span className="inline-flex items-center px-3 py-1 rounded-full font-semibold text-xs bg-brand-600 text-white whitespace-nowrap">
                          {card.price}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-ink-muted">{card.desc}</p>
                      <div className="mt-4">
                        <Button asChild variant="primary" size="sm">
                          <Link href="#book">Book this service</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              )}
            />
          </div>

          {/* Right: Supporting image */}
          <div className="flex justify-center items-center mt-8 md:mt-0">
            <Image
              src="/art/hands-paw.png"
              alt="Hands and paw"
              width={440}
              height={320}
              className="rounded-xl w-full w-10 sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
