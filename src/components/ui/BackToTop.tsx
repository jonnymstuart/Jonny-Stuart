"use client";

export function BackToTop() {
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="grid h-11 w-11 place-items-center rounded-full border border-ink/25 transition-colors hover:bg-ink hover:text-page"
    >
      <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M8 13V3M4 7l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
