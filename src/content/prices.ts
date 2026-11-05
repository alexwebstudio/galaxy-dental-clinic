export type PriceItem = { name: string; includes: string; price: number | null };
export type PriceSection = { id: string; title: string; items: PriceItem[] };

export const priceNote = "Актуальные цены уточняются у клиники. Стоимость зависит от осмотра и выбранного плана лечения.";

const pending = (names: string[]): PriceItem[] => names.map((name) => ({
  name,
  includes: "Состав услуги и стоимость уточняются",
  price: null,
}));

export const prices: PriceSection[] = [
  { id: "therapy", title: "Терапия", items: pending(["Лечение кариеса", "Лечение пульпита"]) },
  { id: "implantation", title: "Имплантация", items: pending(["Имплантация зубов"]) },
  { id: "orthodontics", title: "Ортодонтия", items: pending(["Брекеты", "Исправление прикуса"]) },
  { id: "surgery", title: "Хирургия", items: pending(["Удаление зубов", "Удаление зубов мудрости"]) },
];

export function priceSection(id: string) {
  const section = prices.find((item) => item.id === id);
  if (!section) throw new Error("Нет раздела цен: " + id);
  return section;
}

export function minPrice(id: string): number | null {
  const values = priceSection(id).items.map((item) => item.price).filter((value): value is number => value !== null);
  return values.length ? Math.min(...values) : null;
}
