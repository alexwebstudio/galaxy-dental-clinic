import { reviewsBlock } from "@/content/copy";
import { reviews } from "@/content/reviews";
import { site } from "@/content/site";
import { SectionHead } from "@/components/ui/Heading";
import { Star } from "@/components/ui/Icons";
import { Mono } from "@/components/ui/Mono";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCard } from "@/components/ui/SectionCard";

export function Reviews() {
  return (
    <SectionCard>
      <SectionHead
        eyebrow={reviewsBlock.eyebrow}
        title={reviewsBlock.title}
        lead={reviewsBlock.lead}
        action={
          <p className="flex items-center gap-2">
            <Star className="text-accent" />
            <Mono className="!text-[20px] font-medium">{site.stats.rating.toFixed(1)}</Mono>
            <Mono className="text-ink-muted">· {site.stats.reviews} отзывов · 2ГИС</Mono>
          </p>
        }
      />
      <Reveal group className="grid gap-3 md:grid-cols-3 lg:gap-4">
        {reviews.map((review, index) => (
          <article key={index} data-reveal-item="" className="flex min-h-[250px] flex-col justify-between gap-6 rounded-[18px] bg-surface-2 p-5 lg:rounded-[22px] lg:p-6">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[11px] font-bold tracking-tight text-accent">2ГИС</div>
                <div className="flex gap-0.5 text-accent" role="img" aria-label="Оценка 5 из 5">
                  {Array.from({ length: review.rating }, (_, star) => <Star key={star} width={16} height={16} />)}
                </div>
              </div>
              <blockquote>{review.text}</blockquote>
              <p className="mt-4 text-[13px] text-ink-muted">{review.author}</p>
            </div>
            {review.link ? (
              <a href={review.link} target="_blank" rel="noopener noreferrer" className="text-link">{review.linkLabel}</a>
            ) : (
              <span className="inline-flex items-center gap-2 text-[14px] font-medium text-ink-muted" aria-disabled="true">
                {review.linkLabel}
              </span>
            )}
          </article>
        ))}
      </Reveal>
      <p className="mt-5 text-[13px] text-ink-muted">Фрагменты переданы клиникой. Ссылки на конкретные отзывы будут добавлены после получения.</p>
    </SectionCard>
  );
}
