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
    writer: "مارتین ",
    summary:
      "داستان دو برادر در یک روستای دورافتاده که پس از مرگ پدرشان، اسرار تاریکی از گذشته‌شان آشکار می‌شود و زندگی‌شان را دگرگون می‌کند.",
    genre: "درام",
    date: "پاییز ۱۴۰۴",
  },
  {
    id: 2,
    title: "نمایش ب",
    image: img2,
    director: "عباس دهفان",
    writer: "آنتون چخوف",
    summary:
      "روایتی تلخ و طنزآمیز از زندگی روزمره‌ی آدم‌هایی که در حسرت گذشته مانده‌اند و نمی‌توانند با واقعیت کنار بیایند.",
    genre: "کمدی سیاه",
    date: "زمستان ۱۴۰۴",
  },
  {
    id: 3,
    title: "نمایش ج",
    image: img3,
    director: "رضا کریمی",
    writer: "ساموئل بکت",
    summary:
      "دو شخصیت در انتظار کسی هستند که هرگز نمی‌آید. نمایشی درباره‌ی پوچی، امید و معنای زندگی در دنیای مدرن.",
    genre: "آبسورد",
    date: "بهار ۱۴۰۵",
  },
  {
    id: 4,
    title: "نمایش د",
    image: img4,
    director: "مریم رضایی",
    writer: "هارولد پینتر",
    summary:
      "یک اتاق بسته، سه نفر، و سکوت‌هایی که از هر کلمه‌ای بلندتر حرف می‌زنند. نمایشی درباره‌ی قدرت، ترس و رابطه‌ی انسانی.",
    genre: "درام روانشناختی",
    date: "تابستان ۱۴۰۵",
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
            نمایش‌هایی که به‌زودی روی صحنه خواهند رفت — روی هر کارت کلیک کنید
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