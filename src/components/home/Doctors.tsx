import { doctorsBlock } from "@/content/copy";
import { doctors } from "@/content/doctors";
import { DoctorCard } from "@/components/ui/DoctorCard";
import { SectionHead } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCard } from "@/components/ui/SectionCard";

export function Doctors() {
  return (
    <SectionCard>
      <SectionHead eyebrow={doctorsBlock.eyebrow} title={doctorsBlock.title} lead={doctorsBlock.lead} link={{ label: doctorsBlock.all, href: "/doctors" }} />
      <Reveal group className="mt-6 grid grid-cols-2 gap-x-3 gap-y-6 md:grid-cols-3 md:gap-x-4 xl:grid-cols-6 xl:gap-x-4 lg:mt-8">
        {doctors.map((doctor) => (
          <div key={doctor.slug} data-reveal-item="">
            <DoctorCard doctor={doctor} sizes="(min-width: 1280px) 15vw, (min-width: 768px) 30vw, 46vw" />
          </div>
        ))}
      </Reveal>
    </SectionCard>
  );
}
