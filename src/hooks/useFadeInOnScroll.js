import { useEffect, useRef, useState } from "react";

export function useFadeInOnScroll() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 640px)").matches;

    if (isMobile) {
      setIsVisible(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // adjust to match your existing threshold
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}