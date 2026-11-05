import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="flex h-[60px] items-center" aria-label={site.brand + ", на главную"}>
      <Image src="/galaxy-mark.png" alt="" width={698} height={423} priority className="h-[32px] w-auto sm:h-[36px]" />
      <span className="ml-1 max-w-[84px] text-[11px] font-semibold uppercase leading-[1.08] tracking-[0.06em] text-[#163c8c] sm:max-w-[112px] sm:text-[13px]">Galaxy<br />Dental Clinic</span>
    </Link>
  );
}
