export function LeafDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-3 text-primary/50">
      <span className="h-px w-12 bg-current sm:w-20" />
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
        <path d="M12 21s8-4.5 8-10a5 5 0 0 0-8-4 5 5 0 0 0-8 4c0 5.5 8 10 8 10z" />
      </svg>
      {label ? (
        <span className="font-script text-lg text-accent">{label}</span>
      ) : null}
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
        <path d="M12 2c3 4 3 8 0 12C9 10 9 6 12 2zM4 12c4 0 7 2 8 6-4 0-7-2-8-6zm16 0c-4 0-7 2-8 6 4 0 7-2 8-6z" />
      </svg>
      <span className="h-px w-12 bg-current sm:w-20" />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">{title}</h2>
      {align === "center" ? (
        <div className="mt-4">
          <LeafDivider />
        </div>
      ) : (
        <div className="mt-4 h-px w-16 bg-accent/50" />
      )}
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
