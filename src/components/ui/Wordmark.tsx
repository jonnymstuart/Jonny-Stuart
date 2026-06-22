import { cn } from "@/lib/cn";

/**
 * Lightweight stand-in for client logos. We don't bundle the real brand
 * SVGs, so each name is rendered as a clean monochrome wordmark — enough to
 * read as a logo wall without misrepresenting any mark.
 */
export function Wordmark({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "select-none whitespace-nowrap text-[19px] font-semibold tracking-tight text-ink/80",
        className,
      )}
    >
      {name}
    </span>
  );
}

export function LogoCard({ name }: { name: string }) {
  return (
    <div className="flex h-[120px] w-[210px] shrink-0 items-center justify-center rounded-[22px] border border-line bg-page/40">
      <Wordmark name={name} />
    </div>
  );
}
