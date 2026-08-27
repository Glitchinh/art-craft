import { cn } from "@/lib/utils";

/**
 * Brand mark: a needle drawn through a loop of thread, inside a hoop.
 * Hand-built rather than a stock icon so the logo is not shared with every
 * other site using the same icon set.
 */
export function Monogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label="Needle and thread mark"
      className={cn("shrink-0", className)}
    >
      {/* hoop */}
      <circle
        cx="24"
        cy="24"
        r="21"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.35"
      />
      <circle
        cx="24"
        cy="24"
        r="17.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2.5 3.2"
        opacity="0.55"
      />
      {/* thread, looping */}
      <path
        d="M13.5 30.5c3.4-6.2 6.6-9.3 9.6-9.3 3.4 0 4.4 3.6 2.2 5.6-2 1.8-4.8.4-4.3-2.4.6-3.4 5.2-6.6 11.4-7.9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      {/* needle */}
      <path
        d="M30.2 33.4 38.6 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <ellipse
        cx="37.1"
        cy="18.3"
        rx="1.05"
        ry="1.75"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        transform="rotate(24 37.1 18.3)"
      />
    </svg>
  );
}

/**
 * Section divider: a running stitch that draws itself in when scrolled to.
 * `drawn` is supplied by the caller's reveal state.
 */
export function StitchRule({ drawn, className }: { drawn?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 240 12"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("h-3 w-full max-w-60 text-accent/55", className)}
    >
      <path
        d="M0 6c12-5 24-5 36 0s24 5 36 0 24-5 36 0 24 5 36 0 24-5 36 0 24 5 36 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="220"
        style={{
          strokeDashoffset: drawn ? 0 : 220,
          transition: "stroke-dashoffset 1.8s var(--ease-out-soft)",
        }}
      />
    </svg>
  );
}
