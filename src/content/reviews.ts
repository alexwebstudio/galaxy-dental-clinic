export type Review = {
  author: string;
  source: "2ГИС";
  rating: number;
  text: string;
  link: string | null;
  linkLabel: string;
  placeholder: boolean;
};

// Тексты взяты из переданного файла отзывов. Ссылки на конкретные отзывы ещё нужны.
export const reviews: Review[] = [
  {
    author: "Пациентка · 2ГИС",
    source: "2ГИС",
    rating: 5,
    text: "У Зарины Рашидовны ставила брекеты. К Алмазу Нурлановичу обращалась на удаление зуба мудрости.",
    link: null,
    linkLabel: "Ссылка на отзыв ожидается",
    placeholder: true,
  },
  {
    author: "Пациентка · 2ГИС",
    source: "2ГИС",
    rating: 5,
    text: "Брекеты устанавливала у Мирата Дулатовича, а у Алмаза Нурлановича удаляла все 4 зуба мудрости.",
    link: null,
    linkLabel: "Ссылка на отзыв ожидается",
    placeholder: true,
  },
  {
    author: "Пациент · 2ГИС",
    source: "2ГИС",
    rating: 5,
    text: "Отдельно благодарю Армана Канатовича за установку импланта, профессионализм и заботу.",
    link: null,
    linkLabel: "Ссылка на отзыв ожидается",
    placeholder: true,
  },
];
