export const site = {
  isDemo: false,
  brand: "Galaxy Dental Clinic",
  descriptor: "Galaxy Dental Clinic · стоматология",
  slogan: "Забота о вашей улыбке",
  domain: "https://galaxy-dental-clinic.example",
  city: "Астана",
  phone: "+7 778 408 2667",
  phoneHref: "tel:+77784082667",
  whatsapp: "https://wa.me/77784082667",
  telegram: "",
  instagram: "https://instagram.com/galaxy_dental_clinic",
  email: "",
  address: "Адрес уточняется",
  addressRegion: "Астана",
  country: "KZ",
  hours: "Часы работы уточняются",
  hoursSchema: [],
  directions: "Уточните адрес у администратора при записи.",
  mapEmbed: "",
  geo: { lat: 51.1694, lng: 71.4491 },
  developer: { label: "Разработка сайта", name: "AlexWebStudio", href: "https://alexwebstudio.ru" },
  legal: "Юридические данные клиники уточняются",
  license: "Информация о лицензии уточняется",
  stats: { years: 0, patients: 0, doctorsExperience: 0, rating: 5, reviews: 313 },
} as const;

export const demoNote = "";

export function formatPrice(value: number | null) {
  return value === null ? "Цена уточняется" : value.toLocaleString("ru-RU").replace(/ |\s/g, " ") + " ₸";
}

export function formatCount(value: number) {
  return value.toLocaleString("ru-RU").replace(/ |\s/g, " ");
}
