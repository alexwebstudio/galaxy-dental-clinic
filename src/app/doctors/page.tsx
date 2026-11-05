import type { Metadata } from "next";
import { CtaForm } from "@/components/home/CtaForm";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { DoctorCard } from "@/components/ui/DoctorCard";
import { SectionHead } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCard } from "@/components/ui/SectionCard";
import { doctors } from "@/content/doctors";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: `Врачи клиники, ${site.city}`,
  description: `Шесть врачей Galaxy Dental Clinic в ${site.city}: ортодонты, хирурги-имплантологи, терапевт-эндодонтист и ортопед.`,
  path: "/doctors",
});

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        title="Врачи Galaxy Dental *Clinic*"
        lead="Выберите врача по специализации и свяжитесь с клиникой для записи."
        crumbs={[{ name: "Врачи", path: "/doctors" }]}
      >
        <Button booking arrow>
          Записаться к врачу
        </Button>
      </PageHero>

      <SectionCard>
        <SectionHead eyebrow="Врачи" title="Специализации *врачей*" lead="Откройте карточку врача, чтобы узнать подробнее о специализации и услугах." />
        <Reveal group className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3 md:gap-x-4 xl:grid-cols-6 ">
          {doctors.map((doctor) => (
            <div key={doctor.slug} data-reveal-item="">
              <DoctorCard doctor={doctor} sizes="(min-width: 1280px) 15vw, (min-width: 768px) 30vw, 46vw" />
              <p className="mt-2 px-1 text-[14px] leading-snug text-ink-muted">{doctor.specialization}</p>
            </div>
          ))}
        </Reveal>
      </SectionCard>

      <CtaForm />
    </>
  );
}
