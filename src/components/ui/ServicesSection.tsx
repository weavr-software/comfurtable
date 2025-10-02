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
      desc: "A peaceful, veterinarian-led goodbye in the comfort of your home. Includes gentle sedation, pain relief, time for your family, and supportive guidance throughout the process. This selection is for home burial. Dr. Weaver is unable to assist with the burial at this time.",
      price: "$375",
      art: "/art/paw-heart.png",
    },
    {
      title: "Euthanasia with Communal Cremation",
      desc: "This selection should be chosen if you wish to have your pet cremated without the return of ashes. Other keepsakes, such as a paw print are available.",
      price: "$500",
      art: "/art/hands-paw.png",
    },
    {
      title: "Euthanasia with Private Cremation ",
      desc: "This selection should be chosen if you would like your pets ashes returned to you. This selection will include an urn, a clay paw print and a lock of hair. Your pets ashes will be returned in one to two weeks. Options for return of ashes: Shipped to you -delivered to your home by Dr. Weaver",
      price: "$700",
      art: "/art/sofa-dog-cat.png",
    },
  ];

  return (
       <Section
          id="services"
          className="relative py-24 bg-gradient-to-b from-brand-yellow to-bg"
        >
      
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Heading + carousel */}
          <div>
            <SectionHeading>We offer a variety of 
              <span className="block text-brand-600 font-semibold text-4xl"> Services</span>
            </SectionHeading>
            <p className="mb-6 text-xl text-ink-muted">
              Here is a list of what we offer. We also accept requests for anything—we’re here for you.
            </p>

            <Carousel
              items={services}
              className="sm:max-w-full mx-auto max-w-[360px] overflow-hidden"
              renderItem={(card) => (
                <Card className="w-full p-6 md:p-7 hover:shadow-card transition-shadow duration-200">
                  <div className="flex items-start gap-4">
                   
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="font-medium text-brand-800 text-base text-xl">
                          {card.title}
                        </h4>
                        <span className="inline-flex items-center px-3 py-1 rounded-full font-semibold text-xs bg-brand-600 text-white whitespace-nowrap">
                          {card.price}
                        </span>
                      </div>
                      <p className="mt-1 text-xl text-ink-muted">{card.desc}</p>
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
