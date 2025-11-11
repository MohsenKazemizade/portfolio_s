// src/components/Header.js
import { useEffect, useState } from "react";

const sectionIds = ["home", "about", "portfolio", "contact", "blog"];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  const toggleMobile = () => {
    const next = !open;
    setOpen(next);
    document.body.classList.toggle("overflow-hidden", next);
  };

  return (
    <header>
      {/* Desktop Menu Starts */}
      <div className="header-inner hide-mobile">
        {/* MENU STARTS */}
        <div className="menu">
          <nav>
            <ul>
              <li>
                <span
                  className={active === "home" ? "active" : ""}
                  onClick={() => scrollTo("home")}
                >
                  Home
                </span>
              </li>
              <li>
                <span
                  className={active === "about" ? "active" : ""}
                  onClick={() => scrollTo("about")}
                >
                  About
                </span>
              </li>
              <li>
                <span
                  className={active === "portfolio" ? "active" : ""}
                  onClick={() => scrollTo("portfolio")}
                >
                  Portfolio
                </span>
              </li>
              <li>
                <span
                  className={active === "contact" ? "active" : ""}
                  onClick={() => scrollTo("contact")}
                >
                  Contact
                </span>
              </li>
              <li>
                <span
                  className={active === "blog" ? "active" : ""}
                  onClick={() => scrollTo("blog")}
                >
                  Blog
                </span>
              </li>
            </ul>
          </nav>
        </div>
        {/* MENU ENDS */}
        {/* FREELANCE STARTS */}
        <div className="mail">
          <p>
            Email :<span> shadisajjadi@gmail.com</span>
          </p>
        </div>
        {/* FREELANCE ENDS */}
      </div>
      {/* Desktop Menu Ends */}

      {/* Mobile Menu Starts */}
      <nav className="mobile-menu">
        <div id="menuToggle">
          <input
            type="checkbox"
            id="checkboxmenu"
            checked={open}
            readOnly
            onClick={toggleMobile}
          />
          <span />
          <span />
          <span />
          <ul
            className="list-unstyled"
            id="menu"
            style={{ display: open ? "block" : "none" }}
          >
            <li>
              <button onClick={() => scrollTo("home")}>
                <span>Home</span>
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo("my-photo")}>
                <span>About</span>
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo("portfolio")}>
                <span>Portfolio</span>
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo("contact")}>
                <span>Contact</span>
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo("blog")}>
                <span>Blog</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {/* Mobile Menu Ends */}
    </header>
  );
};

export default Header;
