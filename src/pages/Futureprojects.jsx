import { useState } from "react";
import "../styles/future-projects.css";

// عکس‌های هر اجرا — مسیرها رو مطابق فایل‌هات تغییر بده
import img1 from "../assets/images/future/p1.png";
import img2 from "../assets/images/future/p2.png";
import img3 from "../assets/images/future/p3.png";
import img4 from "../assets/images/future/p4.png";

// عکس بک‌گراند کل صفحه
import bgImg from "../assets/images/future/bg.png";

const projects = [
  {
    id: 1,
    title: "فروزن",
    image: img1,
    director: "عباس دهفان",
    writer: "ادریس خاکی زاده",
    summary:
      "با آشکار شدن قدرت جادویی ملکه السا، سرزمین آرندل در سرمایی ابدی فرو می‌رود. حالا خواهر شجاعش، آنا، راهی سفری پرخطر به دل کوهستان‌های برفی می‌شود تا السا را پیدا کرده و با گرمای عشق، سرزمینشان را نجات دهد",
    genre: "درام",
    date: "پاییز 1405",
  },
  {
    id: 2,
    title: "آرامبخش",
    image: img2,
    director: "ادریس خاکی زاده",
    writer: "عبدالرسول رنجبر",
    summary:
      "زندگی در پیچیده ترین مسیر خود قرار گرفته است ،راه حل چیست؟",
    genre: "درام",
    date: "زمستان 1405",
  },
  {
    id: 3,
    title: "تالار آینه",
    image: img3,
    director: "عباس دهقان",
    writer: "",
    summary:
    "فرزندان برای دریافت سهم ارث خود از اموال پدر دست به هرکاری میزنند",
    genre: "کمدی درام",
    date: "بهار 1496",
  },
  {
    id: 4,
    title: "ملکه زیبایی لینین",
    image: img4,
    director: "ادریس خاکی زاده",
    writer: "مارتین مک دونا",
    summary:
    "در روستای دورافتاده‌ی لینین، مورینِ چهل‌ساله در اسارت مادر سلطه‌جویش گرفتار است. با بازگشت پاتو از انگلستان و نویدبخشیِ عشق، پرده از خیانتی شوم برمی‌خورد که این کمدی سیاهِ خنده‌دار را به فاجعه‌ای رقت‌آور و خونین ختم می‌کن",
    genre: "درام روانشناختی",
    date: "بهار 1406",
  },
];

function FlipCard({ project }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped((prev) => !prev);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleFlip();
    }
  };

  return (
    <div
      className={`flipCard ${flipped ? "is-flipped" : ""}`}
      onClick={handleFlip}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`${project.title} — برای دیدن جزئیات کلیک کنید`}
    >
      <div className="flipInner">
        {/* -------- جلوی کارت: عکس -------- */}
        <div className="flipFront">
          <img
            className="flipFront__img"
            src={project.image}
            alt={project.title}
          />
          <div className="flipFront__overlay" />
          <div className="flipFront__label">
            <h3 className="flipFront__title">{project.title}</h3>
            <span className="flipFront__hint">برای جزئیات کلیک کنید</span>
          </div>
        </div>

        {/* -------- پشت کارت: جزئیات -------- */}
        <div className="flipBack">
          <h3 className="flipBack__title">{project.title}</h3>

          <ul className="flipBack__info">
            <li>
              <span className="flipBack__label">کارگردان:</span>
              <span>{project.director}</span>
            </li>
            <li>
              <span className="flipBack__label">نویسنده:</span>
              <span>{project.writer}</span>
            </li>
            <li>
              <span className="flipBack__label">ژانر:</span>
              <span>{project.genre}</span>
            </li>
            <li>
              <span className="flipBack__label">زمان اجرا:</span>
              <span>{project.date}</span>
            </li>
          </ul>

          <div className="flipBack__summary">
            <span className="flipBack__label">خلاصه داستان:</span>
            <p>{project.summary}</p>
          </div>

          <span className="flipBack__hint">برای بازگشت کلیک کنید</span>
        </div>
      </div>
    </div>
  );
}

export default function FutureProjects() {
  return (
    <div className="futurePage">
      {/* بک‌گراند */}
      <div
        className="futureBg"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      <div className="futureBgOverlay" />

      <div className="futureWrap">
        <div className="futureHead">
          <h2 className="futureTitle">پروژه‌های آینده</h2>
          <p className="futureSub">
            نمایش‌هایی که به‌زودی روی صحنه خواهند رفت 
          </p>
        </div>

        <div className="futureGrid">
          {projects.map((project) => (
            <FlipCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}