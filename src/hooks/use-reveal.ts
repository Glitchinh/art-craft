import { useEffect, useRef, useState } from "react";

/**
 * Adds the shown state once an element scrolls into view, then stops observing.
 *
 * Returns a ref to attach and a boolean. Elements start at `.reveal` (hidden)
 * and gain `.reveal-shown` when `shown` flips. If the browser has no
 * IntersectionObserver, or the visitor prefers reduced motion, `shown` starts
 * true so nothing is ever stuck invisible.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  /** Fraction of the element that must be visible. Default 0.15. */
  threshold?: number;
  /** Shrinks the viewport box, so reveals fire slightly before the true edge. */
  rootMargin?: string;
  /** Keep observing and re-hide when scrolled away. Default false. */
  repeat?: boolean;
}) {
  const { threshold = 0.15, rootMargin = "0px 0px -10% 0px", repeat = false } = options ?? {};
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (!node || reduced || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    // Anything already past the fold on first paint should not animate in.
    const box = node.getBoundingClientRect();
    if (box.top < window.innerHeight && box.bottom > 0) {
      setShown(true);
      if (!repeat) return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            if (!repeat) observer.disconnect();
          } else if (repeat) {
            setShown(false);
          }
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, repeat]);

  return { ref, shown };
}

/** Inline style carrying a stagger delay, for children of a revealed group. */
export function stagger(index: number, step = 90): React.CSSProperties {
  return { "--reveal-delay": `${index * step}ms` } as React.CSSProperties;
}

/**
 * Tracks how far the window has scrolled, in pixels. Used by the header to
 * condense once the visitor leaves the top of the page.
 */
export function useScrolled(after = 24) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const read = () => {
      frame = 0;
      setScrolled(window.scrollY > after);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(read);
    };

    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [after]);

  return scrolled;
}
