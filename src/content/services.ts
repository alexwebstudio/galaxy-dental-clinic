export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  duration: string;
  headline: string;
  lead: string;
  description: string[];
  indications: string[];
  stages: { title: string; text: string }[];
  benefits: { title: string; text: string }[];
  faq: Faq[];
  priceId: string;
  doctorSlug: string;
  caseCategory?: "implantation" | "orthodontics" | "esthetics" | "prosthetics";
  image: string;
  imageAlt: string;
  includes: string;
};

const pendingFaq: Faq[] = [
  { q: "Сколько стоит услуга?", a: "Актуальную стоимость уточните у администратора клиники." },
  { q: "Сколько визитов потребуется?", a: "План зависит от осмотра и индивидуальной ситуации." },
];

function service(data: Partial<Service> & Pick<Service, "slug" | "title" | "number" | "image">): Service {
  return {
    short: "Подробности уточняются у клиники",
    duration: "Уточняется",
    headline: data.title + ": информация *уточняется*",
    lead: "Описание услуги и условия приёма будут добавлены после подтверждения клиникой.",
    description: ["Подробности об услуге и её доступности уточните у администратора."],
    indications: ["Показания определяет врач после консультации."],
    stages: [
      { title: "Консультация", text: "Обсудите запрос с врачом." },
      { title: "Осмотр", text: "Необходимость обследований определит врач." },
      { title: "План", text: "Объём лечения и стоимость уточняются." },
    ],
    benefits: [
      { title: "Информация уточняется", text: "Подробности сообщит клиника." },
      { title: "Стоимость уточняется", text: "Попросите актуальный прайс." },
      { title: "Сроки уточняются", text: "План зависит от консультации." },
      { title: "Запись", text: "Позвоните или напишите в WhatsApp." },
    ],
    faq: pendingFaq,
    priceId: data.slug,
    doctorSlug: "",
    imageAlt: "Стоматологическая услуга",
    includes: "Состав услуги уточняется",
    ...data,
  };
}

export const services: Service[] = [
  service({
    slug: "therapy",
    number: "01",
    title: "Терапия",
    short: "лечение кариеса и пульпита",
    headline: "Терапия: кариес и *пульпит*",
    lead: "Лечение кариеса и пульпита — направления клиники.",
    description: ["Мират Дулатович ведёт терапевтический приём. Детали лечения и стоимость обсуждаются после консультации."],
    indications: ["Лечение кариеса", "Лечение пульпита"],
    priceId: "therapy",
    doctorSlug: "mirat-dulatovich",
    image: "/images/services/therapy.jpg",
    imageAlt: "Иллюстрация терапевтического приёма в стоматологии",
    includes: "Лечение кариеса и пульпита",
  }),
  service({
    slug: "implantation",
    number: "02",
    title: "Имплантация",
    short: "имплантация зубов",
    headline: "Имплантация *зубов*",
    lead: "Имплантация зубов — направление Армана Канатовича.",
    description: ["Арман Канатович ведёт хирургический приём и занимается имплантацией зубов. Индивидуальный план обсуждается на консультации."],
    indications: ["Имплантация зубов"],
    priceId: "implantation",
    doctorSlug: "arman-kanatovich",
    image: "/images/services/implantation.jpg",
    imageAlt: "Иллюстрация имплантации зуба",
    includes: "Имплантация зубов",
  }),
  service({
    slug: "orthodontics",
    number: "03",
    title: "Ортодонтия",
    short: "брекеты и исправление прикуса",
    headline: "Ортодонтия и *брекеты*",
    lead: "Ортодонтия и исправление прикуса — направления клиники.",
    description: ["Зарина Рашидовна и Мират Дулатович ведут ортодонтический приём. В отзывах пациентов упоминаются брекеты."],
    indications: ["Брекеты", "Исправление прикуса"],
    priceId: "orthodontics",
    doctorSlug: "zarina-rashidovna",
    image: "/images/services/orthodontics.jpg",
    imageAlt: "Иллюстрация брекет-системы",
    includes: "Брекеты и исправление прикуса",
  }),
  service({
    slug: "prosthetics",
    number: "04",
    title: "Протезирование",
    image: "/images/services/prosthetics.jpg",
  }),
  service({
    slug: "kids",
    number: "05",
    title: "Детская стоматология",
    image: "/images/services/kids.jpg",
  }),
  service({
    slug: "hygiene",
    number: "06",
    title: "Гигиена",
    image: "/images/services/hygiene.jpg",
  }),
  service({
    slug: "surgery",
    number: "07",
    title: "Хирургия",
    short: "удаление зубов, включая зубы мудрости",
    headline: "Хирургический *приём*",
    lead: "Удаление зубов, включая зубы мудрости, выполняет Алмаз Нурланович.",
    description: ["Алмаз Нурланович ведёт хирургический приём. В материалах клиники и отзывах отдельно упоминается удаление зубов мудрости."],
    indications: ["Удаление зубов", "Удаление зубов мудрости"],
    priceId: "surgery",
    doctorSlug: "almaz-nurlanovich",
    image: "/images/services/surgery.jpg",
    imageAlt: "Иллюстрация стоматологического инструмента",
    includes: "Удаление зубов, включая зубы мудрости",
  }),
  service({
    slug: "esthetics",
    number: "08",
    title: "Эстетическая стоматология",
    image: "/images/services/esthetics.jpg",
  }),
];

export function getService(slug: string) {
  return services.find((item) => item.slug === slug);
}

export const confirmedServices = services.filter((item) =>
  ["therapy", "implantation", "orthodontics", "surgery"].includes(item.slug),
);
export const homeServices = confirmedServices;
export const megaServices = confirmedServices;
