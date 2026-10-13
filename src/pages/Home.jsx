import "../styles/home.css";
import useInView from "../hooks/useInView";
import { useMemo, useRef, useState } from "react";

// این مسیرها را مطابق اسم فایل‌هایی که می‌گذاری تنظیم کن:
import heroImg from "../assets/images/home/hero.png";
import playImg from "../assets/images/home/lonesome-west.png";

export default function Home() {
  const intro = useInView({ threshold: 0.18 });
  const news = useInView({ threshold: 0.18 });

  return (
    <div className="home">
      {/* بخش 1: عکس تمام صفحه */}
      <header className="hero">
        <img className="hero__img" src={heroImg} alt="تصویر اصلی تئاتر" />

        {/* لایه برای خوانایی متن روی عکس */}
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

      {/* بخش 3: تازه‌ها */}
      <section
        ref={news.ref}
        className={`section news ${news.inView ? "is-visible" : ""}`}
      >
        <div className="section__head">
          <h2 className="section__title">تازه‌ها</h2>
          <p className="section__desc">
            پروژه‌های جدید گروه‌های دیگر 
          </p>
        </div>

        <div className="newsGrid">
          <a className="newsCard" href="#" aria-label="پروژه ۱">
            <div className="newsCard__circle">
              <span className="newsCard__tag">پروژه ۱</span>
            </div>
            <div className="newsCard__txt">
              <h3>نمایش A</h3>
              <p>تهران • تابستان</p>
            </div>
          </a>

          <a className="newsCard" href="#" aria-label="پروژه ۲">
            <div className="newsCard__circle">
              <span className="newsCard__tag">پروژه ۲</span>
            </div>
            <div className="newsCard__txt">
              <h3>نمایش B</h3>
              <p>اصفهان • اجراهای محدود</p>
            </div>
          </a>

          <a className="newsCard" href="#" aria-label="پروژه ۳">
            <div className="newsCard__circle">
              <span className="newsCard__tag">پروژه ۳</span>
            </div>
            <div className="newsCard__txt">
              <h3>نمایش C</h3>
              <p>شیراز • به‌زودی</p>
            </div>
          </a>

          <a className="newsCard" href="#" aria-label="پروژه ۴">
            <div className="newsCard__circle">
              <span className="newsCard__tag">پروژه ۴</span>
            </div>
            <div className="newsCard__txt">
              <h3>نمایش D</h3>
              <p>مشهد • پاییز</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}