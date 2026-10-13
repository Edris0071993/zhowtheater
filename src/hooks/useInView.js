import { useEffect, useRef, useState } from "react";

export default function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect(); // فقط یک بار انیمیشن اجرا شود
      }
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}