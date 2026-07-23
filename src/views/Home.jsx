import HeroComponent from "../components/HeroComponent";
import BlobComponent from "../components/BlobComponent";
import About from "./About";
import Services from "./Services";
import Career from "./Career";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <section id="home">
        <BlobComponent />
        <HeroComponent />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="career">
        <Career />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;