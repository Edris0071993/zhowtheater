import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles/navbar.css";

function TheatreIcon({ isOpen }) {
  // یک آیکن ساده SVG شبیه ماسک تئاتر (مینیمال)
  // رنگ‌ها را بعداً با تم شما هماهنگ می‌کنیم
  return (
    <svg
      className={`theatreIcon ${isOpen ? "open" : ""}`}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {/* ماسک */}
      <path
        d="M4.5 5.5C7.2 4.2 9.6 4 12 4s4.8.2 7.5 1.5v7.2c0 4.2-3.4 7.7-7.5 7.7S4.5 16.9 4.5 12.7V5.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* چشم‌ها */}
      <path
        d="M8.2 10.2c.8 1 1.8 1.5 2.9 1.5s2.1-.5 2.9-1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M8.6 14.2c1 .8 2.2 1.2 3.4 1.2s2.4-.4 3.4-1.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  // بستن با ESC
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // جلوگیری از اسکرول وقتی منو بازه
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => { setOpen(false); setAboutOpen(false); };

  return (
    <>
      {/* دکمه دایره‌ای گوشه راست */}
      <button
        className="navFab"
        aria-label={open ? "بستن منو" : "باز کردن منو"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <TheatreIcon isOpen={open} />
      </button>

      {/* لایه تیره پشت منو */}
      <div
        className={`navBackdrop ${open ? "show" : ""}`}
        onClick={close}
      />

      {/* منوی تمام صفحه با انیمیشن */}
      <aside className={`navOverlay ${open ? "open" : ""}`} aria-hidden={!open}>
        <nav className="navPanel" dir="rtl">
          <ul className="navList">
            <li>
              <NavLink to="/" onClick={close} className="navLink">
                خانه
              </NavLink>
            </li>
            <li className={`navAboutItem ${aboutOpen ? "expanded" : ""}`}>
              <button
                type="button"
                className="navLink navAboutToggle"
                aria-expanded={aboutOpen}
                aria-controls="about-submenu"
                onClick={() => setAboutOpen((value) => !value)}
              >
                <span>درباره ما</span>
                <span className="navSubmenuChevron" aria-hidden="true">⌄</span>
              </button>
              <div id="about-submenu" className="navSubmenu" hidden={!aboutOpen}>
                <NavLink to="/about" onClick={close} className="navSubLink">
                  <span className="navSubLink__number">۰۱</span>
                  <span><strong>چشم‌انداز و تاریخچه</strong><small>داستان و نگاه هنری ژو</small></span>
                  <span className="navSubLink__arrow" aria-hidden="true">↗</span>
                </NavLink>
                <NavLink to="/members" onClick={close} className="navSubLink">
                  <span className="navSubLink__number">۰۲</span>
                  <span><strong>اعضای گروه</strong><small>آشنایی با آدم‌های ژو</small></span>
                  <span className="navSubLink__arrow" aria-hidden="true">↗</span>
                </NavLink>
              </div>
            </li>
            <li>
              <NavLink to="/future-projects" onClick={close} className="navLink">
                پروژه‌های آینده
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" onClick={close} className="navLink">
                گالری
              </NavLink>
            </li>
          </ul>

          <div className="navHint">
            برای بستن، بیرون کلیک کن یا ESC بزن
          </div>
        </nav>
      </aside>
    </>
  );
}