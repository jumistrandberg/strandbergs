import { useEffect, useRef, useState } from "react";

const HeroBlobs = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [vw, setVw] = useState(() => window.innerWidth);
  const [inAbout, setInAbout] = useState(false);

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

      // Smooth mouse movement
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

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const about = document.getElementById("about");

    if (!about) return;

    const observer = new IntersectionObserver(
      ([entry]) =>
        setInAbout(entry.isIntersecting || entry.boundingClientRect.top < 0),
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    observer.observe(about);

    return () => observer.disconnect();
  }, []);

  /* -------------------- TRANSFORM VALUES -------------------- */

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const eased = easeOutCubic(scrollProgress);

  const isMobile = vw <= 640;
  const isTablet = vw <= 1024;

  // separation between yin and yang — capped so they rest near the sides, not off-screen
  const separation = eased * (isMobile ? 30 : isTablet ? 36 : 42);

  const yinOffsetY = eased * (isMobile ? 34 : isTablet ? 32 : 28);
  const yangOffsetY = eased * (isMobile ? 30 : isTablet ? 24 : -12);

  // grows into soft floating blobs
  const scale = 1 - eased * 0.05 + eased * 0.45;

  // rotation while separating
  const rotation = eased * 15;
  const spin = eased * 35;

  // floating movement after separation
  const floatYinX = Math.sin(scrollProgress * Math.PI * 2) * eased * 40;
  const floatYinY = Math.cos(scrollProgress * Math.PI * 2) * eased * 30;

  const floatYangX = Math.cos(scrollProgress * Math.PI * 2) * eased * 40;
  const floatYangY = Math.sin(scrollProgress * Math.PI * 2) * eased * 30;

  // mouse movement
  const mouseX = mouseSmooth.current.x * 25;
  const mouseY = mouseSmooth.current.y * 25;

  return (
    <div className={`hero-symbol-container${inAbout ? " about-active" : ""}`}>
      
      {/* -------------------- YIN -------------------- */}

      <div
        className="hero-blob hero-blob-yin"
        style={{
          transform: `
            translate(
              calc(
                50vw - 50%
                - ${separation}vw
                + ${mouseX + floatYinX}px
              ),

              calc(
                50vh - 50%
                + ${yinOffsetY}vh
                + ${mouseY + floatYinY}px
              )
            )

            scale(${scale})

            rotate(
              ${-rotation + spin}deg
            )
          `,
        }}
      >
        {/* Glow layer — isolated so filter animation doesn't fight the transform above */}
        <div className="hero-blob-glow hero-blob-glow-yin">
          <svg viewBox="0 0 200 200">
            <g
              transform="
                translate(100 100)
                rotate(185)
                scale(-1 1)
                translate(-100 -100)
              "
            >
              <path
                d="
                  M100 0
                  A100 100 0 0 0 100 200
                  A50 50 0 0 1 100 90
                  A40 40 0 0 0 100 0
                  Z
                "
                fill="#f7f3ee"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* -------------------- YANG -------------------- */}

      <div
        className="hero-blob hero-blob-yang"
        style={{
          transform: `
            translate(
              calc(
                50vw - 50%
                + ${separation}vw
                + ${mouseX * 0.8 + floatYangX}px
              ),

              calc(
                50vh - 50%
                + ${yangOffsetY}vh
                + ${mouseY * 0.8 + floatYangY}px
              )
            )

            scale(${scale})

            rotate(
              ${rotation + spin}deg
            )
          `,
        }}
      >
        <div className="hero-blob-glow hero-blob-glow-yang">
          <svg viewBox="0 0 200 200">
            <g
              transform="
                translate(100 100)
                rotate(185)
                scale(-1 -1)
                translate(-100 -100)
              "
            >
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
    </div>
  );
};

export default HeroBlobs;