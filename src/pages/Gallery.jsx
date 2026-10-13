import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/gallery.css";
import SpaceBackground from "../components/SpaceBackground";

// عکس‌ها را شما داخل این مسیر بگذار
import imgAroos from "../assets/images/shows/aroos-mordegan.png";
import imgRapunzel from "../assets/images/shows/rapunzel.png";
import imgPirates from "../assets/images/shows/dozdane-daryayi.jpeg";
import imgAladdin from "../assets/images/shows/aladdin.png";

function wrapIndex(i, len) {
  return ((i % len) + len) % len;
}

export default function Gallery() {
  const navigate = useNavigate();

  const shows = useMemo(
    () => [
      { id: "aroos-mordegan", title: "عروس مردگان", image: imgAroos },
      { id: "rapunzel", title: "راپونزل", image: imgRapunzel },
      { id: "dozdane-daryayi", title: "دزدان دریایی", image: imgPirates },
      { id: "aladdin", title: "علاءالدین", image: imgAladdin },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const current = shows[index];

  function prev() {
    setIndex((i) => wrapIndex(i - 1, shows.length));
  }

  function next() {
    setIndex((i) => wrapIndex(i + 1, shows.length));
  }

  function openDetails() {
    // فعلاً فقط مسیر آماده می‌گذاریم (صفحه‌ی جزئیات را بعداً می‌سازیم)
    // اگر Route این مسیر را نداری، فعلاً کلیک نکن یا بعداً یک placeholder می‌گذاریم
    navigate(`/gallery/${current.id}`);
  }

  return (
    <div className="galleryPage">
      {/* پس‌زمینه فضایی */}
      <SpaceBackground />

      <div className="galleryWrap">
        <header className="galleryHead">
          <h1 className="galleryTitle">گالری اجراها</h1>
          <p className="gallerySub">
            با فلش‌ها جابه‌جا کن؛ روی عکس کلیک کن تا وارد صفحه نمایش بشی.
          </p>
        </header>

        <section className="moonStage" aria-label="گالری کره‌ای">
          <button className="navArrow left" onClick={prev} aria-label="قبلی">
            <span className="arrowIcon">‹</span>
          </button>

          <div className="moonDock">
            {/* کره/ماه (ثابت) */}
            <div className="moon" role="img" aria-label="کره مهتابی سه‌بعدی">
              {/* لکه‌ها/نقاط ماه */}
              <span className="moonCrater c1" />
              <span className="moonCrater c2" />
              <span className="moonCrater c3" />
              <span className="moonCrater c4" />

              {/* تصویر دایره‌ای وسط (با key برای انیمیشن هنگام تعویض) */}
              <button
                key={current.id}
                className="showCore"
                onClick={openDetails}
                aria-label={`ورود به نمایش ${current.title}`}
              >
                <img src={current.image} alt={current.title} />
              </button>

              {/* نام نمایش (با key برای انیمیشن) */}
              <div
                key={`${current.id}-title`}
                className="showTitle"
                aria-live="polite"
              >
                {current.title}
              </div>
            </div>
          </div>

          <button className="navArrow right" onClick={next} aria-label="بعدی">
            <span className="arrowIcon">›</span>
          </button>
        </section>

        {/* نشانگرها */}
        <div className="dots" aria-label="نشانگرها">
          {shows.map((s, i) => (
            <button
              key={s.id}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`رفتن به ${s.title}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}