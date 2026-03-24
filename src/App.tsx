import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Layout from "./Layout";
import Principles from "./components/WorkPrinciple";
import Services from "./components/Services";
import FAQ from "./components/Faq";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import PageTitle from "./components/PageTitle";

export default function App() {
  return (
    <>
      <PageTitle />
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/principles" element={<Principles />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}
