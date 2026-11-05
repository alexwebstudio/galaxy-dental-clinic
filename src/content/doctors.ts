export type Doctor = {
  slug: string;
  name: string;
  headline: string;
  role: string;
  specialization: string;
  experience: string;
  about: string;
  education: string[];
  serviceSlugs: string[];
  /** Карточка врача (вертикальная афиша: фото, имя, специализация и стаж уже на изображении). */
  image: string;
  imageAlt: string;
  workImage?: string;
  workAlt?: string;
};

const education = ["Образование и сертификаты: информация уточняется."];

export const doctors: Doctor[] = [
  {
    slug: "zarina-rashidovna",
    name: "Зарина Рашидовна",
    headline: "Зарина *Рашидовна*",
    role: "Врач-ортодонт",
    specialization: "Ортодонтия: брекеты и исправление прикуса",
    experience: "5 лет",
    about: "Ведёт ортодонтическое лечение: брекет-системы, выравнивание зубов и исправление прикуса.",
    education,
    serviceSlugs: ["orthodontics"],
    image: "/images/doctors/zarina.jpg",
    imageAlt: "Кадыркулова Зарина Рашидовна, врач-ортодонт, стаж 5 лет, Galaxy Dental Clinic",
    workImage: "/images/doctors/works/zarina-work.jpg",
    workAlt: "Материал о работе Зарины Рашидовны с брекет-системой",
  },
  {
    slug: "mirat-dulatovich",
    name: "Мират Дулатович",
    headline: "Мират *Дулатович*",
    role: "Врач-ортодонт, гнатолог",
    specialization: "Ортодонтия и гнатология",
    experience: "6 лет",
    about: "Проводит ортодонтическое лечение и приём по гнатологии.",
    education,
    serviceSlugs: ["orthodontics", "therapy"],
    image: "/images/doctors/mirat.jpg",
    imageAlt: "Толеуов Мират Дулатович, врач-ортодонт, гнатолог, стаж 6 лет, Galaxy Dental Clinic",
    workImage: "/images/doctors/works/mirat-work.jpg",
    workAlt: "Материал о работе Мирата Дулатовича с брекет-системой",
  },
  {
    slug: "almaz-nurlanovich",
    name: "Алмаз Нурланович",
    headline: "Алмаз *Нурланович*",
    role: "Врач-челюстно-лицевой хирург, хирург-имплантолог",
    specialization: "Хирургия: удаление зубов, в том числе зубов мудрости, и имплантация",
    experience: "14 лет",
    about: "Проводит хирургический приём, включая удаление зубов мудрости, и занимается имплантацией.",
    education,
    serviceSlugs: ["surgery", "implantation"],
    image: "/images/doctors/almaz.jpg",
    imageAlt: "Мажинов Алмаз Нурланович, врач-челюстно-лицевой хирург, хирург-имплантолог, стаж 14 лет, Galaxy Dental Clinic",
    workImage: "/images/doctors/works/almaz-work.jpg",
    workAlt: "Материал о хирургической работе Алмаза Нурлановича",
  },
  {
    slug: "arman-kanatovich",
    name: "Арман Канатович",
    headline: "Арман *Канатович*",
    role: "Врач высшей категории, челюстно-лицевой хирург, хирург-имплантолог, ортопед",
    specialization: "Имплантация зубов, хирургия и ортопедия",
    experience: "14 лет",
    about: "Врач высшей категории. Проводит хирургический приём, занимается имплантацией и ортопедическим лечением.",
    education,
    serviceSlugs: ["implantation", "surgery", "prosthetics"],
    image: "/images/doctors/arman.jpg",
    imageAlt: "Жумабеков Арман Канатович, врач высшей категории, челюстно-лицевой хирург, хирург-имплантолог, ортопед, стаж 14 лет, Galaxy Dental Clinic",
    workImage: "/images/doctors/works/arman-work.jpg",
    workAlt: "Материал об имплантации Армана Канатовича",
  },
  {
    slug: "medet-serikovich",
    name: "Медет Серикович",
    headline: "Медет *Серикович*",
    role: "Врач-терапевт, эндодонтист",
    specialization: "Терапевтическое лечение и лечение корневых каналов",
    experience: "5 лет",
    about: "Проводит терапевтический приём и занимается эндодонтическим лечением зубов.",
    education,
    serviceSlugs: ["therapy"],
    image: "/images/doctors/medet.jpg",
    imageAlt: "Батырхан Медет Серикович, врач-терапевт, эндодонтист, стаж 5 лет, Galaxy Dental Clinic",
    workImage: "/images/doctors/works/medet-work.jpg",
    workAlt: "Материал о работе Медета Сериковича: эндодонтическое лечение",
  },
  {
    slug: "miras-kuanyshevich",
    name: "Мирас Куанышевич",
    headline: "Мирас *Куанышевич*",
    role: "Врач-ортопед",
    specialization: "Ортопедическая стоматология",
    experience: "6 лет",
    about: "Проводит приём по ортопедической стоматологии.",
    education,
    serviceSlugs: ["prosthetics"],
    image: "/images/doctors/miras.jpg",
    imageAlt: "Жетібаев Мирас Куанышевич, врач-ортопед, стаж 6 лет, Galaxy Dental Clinic",
  },
];

export function getDoctor(slug: string) {
  return doctors.find((item) => item.slug === slug);
}
