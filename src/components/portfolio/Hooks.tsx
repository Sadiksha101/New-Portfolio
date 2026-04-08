import { useState, useRef } from "react";

export function useInView(threshold = 0.1): [(node: HTMLElement | null) => void, boolean] {
  const [inView, setInView] = useState(false);
  const obsRef = useRef<IntersectionObserver | null>(null);
  const ref = (node: HTMLElement | null) => {
    if (obsRef.current) obsRef.current.disconnect();
    if (!node) return;
    obsRef.current = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obsRef.current.observe(node);
  };
  return [ref, inView];
}