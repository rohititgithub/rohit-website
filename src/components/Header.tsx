import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const pathRef = useRef(location.pathname);

  useEffect(() => {
    pathRef.current = location.pathname;
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const isHome = pathRef.current === "/";
      const shouldDark = isHome && window.scrollY < 600;

      setIsDark(shouldDark);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    const isHome = location.pathname === "/";
    setIsDark(isHome);

    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        <div
          className={`mx-4 mt-4 flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 backdrop-blur-lg shadow-lg transition duration-300
          ${
            isDark
              ? "bg-white/10 border border-white/20 text-white"
              : "bg-white/80 border border-black/10 text-black"
          }`}
        >
          <Link
            to="/"
            className="font-semibold tracking-wide text-sm sm:text-lg"
          >
            ROHIT KUMAR
          </Link>

          <nav className="hidden md:flex gap-8 text-sm">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              Home
            </Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/services">Services</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/fun">Fun</Link>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xl z-50"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 text-white text-lg transition-all duration-500
        ${
          menuOpen
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link to="/projects" onClick={() => setMenuOpen(false)}>
          Projects
        </Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>
          Services
        </Link>
        <Link to="/faq" onClick={() => setMenuOpen(false)}>
          FAQ
        </Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
        <Link to="/fun" onClick={() => setMenuOpen(false)}>
          Fun
        </Link>
      </div>
    </>
  );
}
