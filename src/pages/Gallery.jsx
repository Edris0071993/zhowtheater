import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/gallery.css";
import SpaceBackground from "../components/SpaceBackground";

import imgAroos from "../assets/images/shows/aroos-mordegan.png";
import imgRapunzel from "../assets/images/shows/rapunzel.png";
import imgPirates from "../assets/images/shows/dozdane-daryayi.jpeg";
import imgAladdin from "../assets/images/shows/aladdin.png";
import imgKharamshahr from "../assets/images/home/hero.png";

export default function Gallery() {
  const navigate = useNavigate();

  const shows = useMemo(
    () => [
      { id: "aladdin", title: "علاءالدین", english: "ALADDIN", image: imgAladdin, number: "01", featured: true },
      { id: "rapunzel", title: "راپونزل", english: "RAPUNZEL", image: imgRapunzel, number: "02" },
      { id: "aroos-mordegan", title: "عروس مردگان", english: "CORPSE BRIDE", image: imgAroos, number: "03" },
      { id: "dozdane-daryayi", title: "دزدان دریایی", english: "THE PIRATES", image: imgPirates, number: "04" },
      { id: "kharamshahr", title: "خرمشیر", english: "KHARAMSHIR", image: imgKharamshahr, number: "05" },
    ],
    []
  );

  const featured = shows[0];
  const archive = shows.slice(1);

  return (
    <main className="galleryPage">
      <SpaceBackground />
      <div className="galleryWrap">
        <header className="galleryMasthead">
          <div className="galleryIntro">
            <span className="galleryEyebrow">ZHO THEATRE <i /> PERFORMANCE ARCHIVE</span>
            <h1 className="galleryTitle">هر اجرا،<br /><em>یک جهان.</em></h1>
            <p className="gallerySub">
              ردِ لحظه‌هایی که روی صحنه جان گرفتند؛ روایت تصویری اجراهای گروه تئاتر ژو.
            </p>
          </div>
          <div className="galleryCount" aria-label="تعداد اجراها">
            <strong>{String(shows.length).padStart(2, "0")}</strong>
            <span>PRODUCTIONS<br />IN THE ARCHIVE</span>
          </div>
        </header>

        <div className="gallerySectionLine">
          <span>آرشیو اجراها</span>
          <span>۰۱ — ۰۵</span>
        </div>

        <section className="galleryEditorialGrid" aria-label="آرشیو نمایش‌های ژو">
          <button
            type="button"
            className="galleryFeature"
            onClick={() => navigate(`/gallery/${featured.id}`)}
            aria-label={`مشاهده آرشیو ${featured.title}`}
          >
            <img src={featured.image} alt={featured.title} />
            <span className="galleryImageShade" />
            <span className="galleryFeatureTop">
              <span>SELECTED PRODUCTION</span>
              <span>{featured.number} / 05</span>
            </span>
            <span className="galleryFeatureBottom">
              <span>
                <small>{featured.english}</small>
                <strong>{featured.title}</strong>
              </span>
              <span className="galleryOpenMark" aria-hidden="true">↗</span>
            </span>
          </button>

          <div className="gallerySideGrid">
            {archive.map((show) => (
              <button
                type="button"
                className="galleryWorkCard"
                key={show.id}
                onClick={() => navigate(`/gallery/${show.id}`)}
                aria-label={`مشاهده آرشیو ${show.title}`}
              >
                <img src={show.image} alt={show.title} loading="lazy" />
                <span className="galleryCardShade" />
                <span className="galleryCardNumber">{show.number}</span>
                <span className="galleryCardText">
                  <small>{show.english}</small>
                  <strong>{show.title}</strong>
                </span>
                <span className="galleryCardArrow" aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
        </section>

        <footer className="galleryFootnote">
          <span>گروه تئاتر ژو</span>
          <span>STORIES LIVE ON STAGE.</span>
        </footer>
      </div>
    </main>
  );
}
