import { useEffect, useRef, useState } from "react";

const HeroComponent = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const targetScroll = useRef(0);
  const rafRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const mouseSmooth = useRef({ x: 0, y: 0 });

  /* -------------------- SCROLL + RAF SMOOTHING -------------------- */
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const h = window.innerHeight;
      targetScroll.current = Math.min(scrollY / (h * 0.5), 1);
    };

    const animate = () => {
      setScrollProgress((prev) => {
        const diff = targetScroll.current - prev;
        return prev + diff * 0.08;
      });

      /* smooth mouse */
      mouseSmooth.current.x += (mouse.current.x - mouseSmooth.current.x) * 0.06;
      mouseSmooth.current.y += (mouse.current.y - mouseSmooth.current.y) * 0.06;

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* -------------------- MOUSE PARALLAX -------------------- */
  useEffect(() => {
    const onMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  const handleScrollToAbout = () => {
    document.getElementById("om-oss")?.scrollIntoView({ behavior: "smooth" });
  };

  /* -------------------- EASING + TRANSFORMS -------------------- */
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  const eased = easeOutCubic(scrollProgress);

  const separation = eased * 55;
  const scale = 1 - eased * 0.35;
  const opacity = 0.85 - eased * 0.25;

  const rotation = eased * 15;
  const spin = eased * 35;

  const blur = eased * 30;

  const mouseX = mouseSmooth.current.x * 25;
  const mouseY = mouseSmooth.current.y * 25;

  return (
    <section className="hero">
      <div className="noise-background"></div>

      {/* ---------------- CONTENT ---------------- */}
      <div
        className="hero-content"
        style={{
          opacity: 1 - scrollProgress * 2.5,
          transform: `translateY(${scrollProgress * 60}px)`,
        }}
      >
        <h1>Strandbergs</h1>
        <p className="subtitle">vi kan</p>
        <p>personlig assistans</p>
        <button onClick={handleScrollToAbout}>Om oss</button>
      </div>

      {/* ---------------- SYMBOLS ---------------- */}
      <div className="hero-symbol-container">
        {/* Yin */}
        <div
          className="hero-blob hero-blob-yin"
          style={{
            transform: `
              translate(
                calc(-55% - ${separation}vw + ${mouseX}px),
                calc(-55% + ${separation * 2}vh + ${mouseY}px)
              )
              scale(${scale})
              rotate(${-rotation + spin}deg)
            `,
            opacity,
            filter: `blur(${blur}px)`,
          }}
        >
          <svg viewBox="0 0 200 200">
            <g transform="translate(100 100) rotate(185) scale(-1 1) translate(-100 -100)">
              <path
                d="
                M100 0
                A100 100 0 0 0 100 200
                A50 50 0 0 1 100 90
                A40 40 0 0 0 100 0
                Z
              "
                fill="hsl(var(--secondary))"
              />
            </g>
          </svg>
        </div>

        {/* Yang */}
        <div
          className="hero-blob hero-blob-yang"
          style={{
            transform: `
          translate(
             calc(-55% + ${separation}vw + ${mouseX * 0.8}px),
             calc(-55% + ${separation * 2}vh + ${mouseY * 0.8}px)
      )
              scale(${scale})
              rotate(${rotation + spin}deg)
            `,
            opacity: 1,
          }}
        >
          <svg viewBox="0 0 200 200">
            <g transform="translate(100 100) rotate(185) scale(-1 -1) translate(-100 -100)">
              <path
                d="
                  M100 0
                  A100 100 0 0 1 100 200
                  A50 50 0 0 0 100 100
                  A50 50 0 0 1 100 0
                  Z
                "
                fill="hsl(var(--primary))"
              />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
