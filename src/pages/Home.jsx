import "../styles/home.css";
import useInView from "../hooks/useInView";
import { useEffect, useState } from "react";

// تصاویر اسلاید از پوشه‌ی slide خوانده می‌شوند؛ پسوند فایل‌ها مهم نیست.
import heroImg from "../assets/images/home/hero.png";
import playImg from "../assets/images/home/lonesome-west.png";

const slideFiles = import.meta.glob("../assets/images/home/slide/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const slideOrder = ["kharamshir", "rapunzel", "aladin", "arus", "dozdan", "hero"];
const heroSlides = slideOrder
  .map((name) => {
    const entry = Object.entries(slideFiles).find(([path]) => {
      const fileName = path.split("/").pop().split(".").slice(0, -1).join(".").trim().toLowerCase();
      return fileName === name;
    });
    return entry ? { name, src: entry[1] } : null;
  })
  .filter(Boolean);

export default function Home() {
  const intro = useInView({ threshold: 0.18 });
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = heroSlides.length ? heroSlides : [{ name: "hero", src: heroImg }];

  useEffect(() => {
    if (slides.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 10000);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const showSlide = (index) => {
    setActiveSlide((index + slides.length) % slides.length);
  };

  return (
    <div className="home">
      {/* بخش 1: اسلایدشو اصلی */}
      <header className="hero" aria-label="تصاویر نمایش‌های گروه ژو">
        <div className="hero__slides" aria-live="off">
          {slides.map((slide, index) => (
            <img
              key={slide.name}
              className={`hero__slide ${index === activeSlide ? "is-active" : ""}`}
              src={slide.src}
              alt={`تصویر ${slide.name}`}
              fetchPriority={index === 0 ? "high" : "auto"}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>

        {/* لایه‌ی تیره و گرادیانی برای خوانایی متن روی عکس */}
        <div className="hero__overlay" />

        <div className="hero__content">
          <h1 className="hero__title">موسسه کران هنر مانا</h1>
          <p className="hero__subtitle">
            روایت، صحنه، نور — یک تجربه‌ی مینیمال و مدرن
          </p>

          <a className="hero__cta" href="#play">
            معرفی نمایشنامه
          </a>
        </div>

        {slides.length > 1 && (
          <div className="hero__controls" aria-label="کنترل اسلایدها">
            <button
              className="hero__arrow hero__arrow--prev"
              type="button"
              onClick={() => showSlide(activeSlide - 1)}
              aria-label="تصویر قبلی"
            >
              ‹
            </button>
            <div className="hero__dots" role="group" aria-label="انتخاب تصویر">
              {slides.map((slide, index) => (
                <button
                  key={slide.name}
                  type="button"
                  className={`hero__dot ${index === activeSlide ? "is-active" : ""}`}
                  onClick={() => showSlide(index)}
                  aria-label={`رفتن به تصویر شماره ${index + 1}`}
                  aria-pressed={index === activeSlide}
                />
              ))}
            </div>
            <button
              className="hero__arrow hero__arrow--next"
              type="button"
              onClick={() => showSlide(activeSlide + 1)}
              aria-label="تصویر بعدی"
            >
              ›
            </button>
          </div>
        )}
        <span className="hero__counter" aria-hidden="true">
          {String(activeSlide + 1).padStart(2, "0")} <span>/</span> {String(slides.length).padStart(2, "0")}
        </span>
      </header>

      {/* بخش 2: معرفی نمایشنامه */}
      <section
        id="play"
        ref={intro.ref}
        className={`section play ${intro.inView ? "is-visible" : ""}`}
      >
        <div className="play__grid">
          <div className="play__text">
            <h2 className="section__title">معرفی نمایشنامه</h2>
            <h3 className="play__name">غرب غم‌زده (The Lonesome West)</h3>

            <p className="play__p">
              بین سه نمایشنامه‌ی مشهور مارتین مک‌دونا (Martin McDonagh) که بعدها
              به سه‌گانه‌ی لی‌نین معروف شدند، نمایشنامه‌ی غرب غم‌زده
              تاثیرگذارترین آن‌هاست. در این داستان ولین و کلمن دو برادری هستند
              که پس از مرگ والدینشان با هم در یک خانه زندگی می‌کنند. آن‌ها
              تفاوت‌های زیادی با یکدیگر دارند و مدام در حال دعوا و مشاجره هستند.
              اختلافات آن دو بعضی اوقات خیلی جدی می‌شود و به تهدید با چاقو و اسلحه
              هم می‌رسد. کشیش دهکده به دنبال ایجاد صلح و دوستی بین این دو برادر
              است، اما با آشکار شدن اسراری تکان‌دهنده درباره‌ی آن‌ها و دیگر اهالی
              دهکده، مجبور می‌شود تصمیمی جدی بگیرد، تصمیمی که عواقب چندان خوبی در
              پی ندارد.
            </p>

            <p className="play__p">
              در تمامی نمایشنامه‌های مارتین مک‌دونا شخصیت‌های قسی‌القلب بسیاری
              وجود دارند، اما هیچ‌کدام‌شان مهابت نمایشنامه‌ی تحسین‌شده‌ی غرب
              غم‌زده را ندارند، زیرا در این داستان اصلا معلوم نیست افراد چرا اینطور
              بی‌محابا به یکدیگر خشونت می‌ورزند و بی‌رحم‌اند.
            </p>

            <p className="play__p">
              شخصیت‌های این نمایشنامه آدم‌های خوبی نیستند و تنها کشیش است که سعی
              می‌کند شرایط را دگرگون کند. مک‌دونا نیازی نمی‌بیند که به زور یک یا
              دو خصوصیت انسان‌دوستانه به شخصیت‌ها بچسباند؛ او تصویری غم‌انگیز از
              غرب نشان می‌دهد: غربی که در اوج پیشرفت‌های علمی و اطلاعاتی، اکنون
              درگیر بدیهی‌ترین اصول اخلاقی و انسانی است.
            </p>

            <div className="play__meta">
              <span className="chip">تم: سرد / مینیمال</span>
              <span className="chip">ژانر: کمدی سیاه</span>
              <span className="chip">نویسنده: Martin McDonagh</span>
            </div>
          </div>

          <figure className="play__media">
            <img className="play__img" src={playImg} alt="غرب غم‌زده" />
            <figcaption className="play__cap">
             
            </figcaption>
          </figure>
        </div>
      </section>

    </div>
  );
}