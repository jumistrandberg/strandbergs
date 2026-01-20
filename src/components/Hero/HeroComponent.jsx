import { useEffect, useState } from "react";

const HeroComponent = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollY / (windowHeight * 0.5), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToAbout = () => {
    document.getElementById("om-oss")?.scrollIntoView({ behavior: "smooth" }); 
  };

  return (
  <section className="hero"> 
    <div className="hero-symbol-container">
        {/* add the symbol  */}
    </div>

    {/* content  */}
    <div className="hero-content">  
        <h1>Strandbergs</h1>
        <p>vi kan</p>
        <p>personlig assistans</p>
        <button>Om oss</button>
    </div>
  </section>
)
};

export default HeroComponent;
