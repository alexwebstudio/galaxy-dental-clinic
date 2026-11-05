import Image from "next/image";
import Link from "next/link";
import type { Doctor } from "@/content/doctors";
import { ArrowButton } from "./ArrowButton";

/** Имя, специализация и стаж уже напечатаны на афише врача, поэтому текст поверх не дублируется. */
export function DoctorCard({ doctor, sizes }: { doctor: Doctor; sizes: string }) {
  return (
    <Link href={`/doctors/${doctor.slug}`} aria-label={`${doctor.name}, ${doctor.role.toLowerCase()}`} className="group block">
      <span className="photo-card aspect-[900/1580]">
        <Image src={doctor.image} alt={doctor.imageAlt} fill sizes={sizes} className="object-cover object-top" />
      </span>
      <span className="mt-2.5 flex items-center justify-between gap-3 px-1">
        <span className="text-[14px] font-medium leading-tight text-ink-muted transition-colors group-hover:text-accent-press">Подробнее</span>
        <ArrowButton tone="fill" />
      </span>
    </Link>
  );
}
