import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { DemoNote } from "@/components/ui/DemoNote";
import { AnimatedTitle } from "@/components/ui/Heading";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Политика конфиденциальности",
  description: `Как клиника ${site.brand} обрабатывает персональные данные, которые вы оставляете на сайте.`,
  path: "/privacy",
});

const sections = [
  {
    title: "Какие данные мы получаем",
    text: "Форма записи подготавливает сообщение с именем, телефоном, услугой и предпочтительным временем и открывает WhatsApp. Сообщение отправляется только после вашего действия в WhatsApp.",
  },
  {
    title: "Зачем они нужны",
    text: "Данные в сообщении используются для ответа на запрос и согласования записи. Передавая сообщение, вы используете сервис WhatsApp и его условия обработки данных.",
  },
  {
    title: "Как мы их храним",
    text: "Сайт не отправляет заполненную форму на сервер и не хранит её. Если вы отправите сообщение через WhatsApp, его обработка регулируется условиями этого сервиса.",
  },
  {
    title: "Ваши права",
    text: "По вопросам обработки сообщения обратитесь в клинику по номеру " + site.phone + ".",
  },
];

export default function PrivacyPage() {
  return (
    <section data-tone="surface" className="section-card page-top">
      <Breadcrumbs items={[{ name: "Политика конфиденциальности", path: "/privacy" }]} />
      <div className="mt-8 max-w-[860px]">
        <AnimatedTitle as="h1" text="Политика *конфиденциальности*" />
        <DemoNote className="mt-5">Демо: текст-заготовка. Перед запуском его должен согласовать юрист клиники.</DemoNote>
        <div className="mt-10">
          {sections.map((section) => (
            <div key={section.title} className="hair-row py-6">
              <h2 className="t-h3 mb-2">{section.title}</h2>
              <p className="text-ink-muted">{section.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-[14px] text-ink-muted">Оператор данных: {site.legal}.</p>
      </div>
    </section>
  );
}
