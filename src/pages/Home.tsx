import About from "../components/About";
import FAQ from "../components/Faq";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import WorkPrinciple from "../components/WorkPrinciple";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <WorkPrinciple />
      <Services />
      <FAQ />
    </>
  );
};

export default Home;
