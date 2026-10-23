import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/gallery-show.css";

// یک قالب مشترک برای آرشیو تصاویر تمام نمایش‌ها.
// تصاویر از پوشه‌ی هر نمایش به‌صورت خودکار خوانده می‌شوند؛ نام فایل‌ها لازم نیست از قبل مشخص باشد.
const allShowImages = import.meta.glob("../assets/images/shows/**/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const showFolders = {
  rapunzel: { title: "راپونزل", folder: "راپونزل", aliases: ["راپونزل", "rapunzel"], start: 4101, end: 4117 },
  pirates: { title: "دزدان دریایی", folder: "دزدان", aliases: ["دزدان", "دزدان دریایی", "pirates", "dozdane-daryayi"], start: 7783, end: 7820 },
  "dozdane-daryayi": { title: "دزدان دریایی", folder: "دزدان", aliases: ["دزدان", "دزدان دریایی", "pirates", "dozdane-daryayi"], start: 7783, end: 7820 },
  "aroos-mordegan": { title: "عروس مردگان", folder: "عروس مردگان 2", aliases: ["عروس مردگان 2", "عروس مردگان", "aroos-mordegan"], start: 7007, end: 7030 },
  aladdin: { title: "علاالدین", folder: "علاالدین", aliases: ["علاالدین", "علاءالدین", "aladdin"], start: 1652, end: 1679 },
  kharamshahr: { title: "خرمشیر", folder: "عکس خرمشیر", aliases: ["عکس خرمشیر", "خرمشیر", "خرامشیر", "kharamshahr", "kharamshir"], start: 5368, end: 5404 },
};

function normalize(value) {
  return value.toLowerCase().replace(/ي/g, "ی").replace(/ك/g, "ک").trim();
}

export default function GalleryShow() {
  const { showId } = useParams();
  const show = showFolders[showId];

  const images = useMemo(() => {
    if (!show) return [];
    const aliases = show.aliases.map(normalize);
    return Object.entries(allShowImages)
      .filter(([path]) => {
        const parts = path.split("/");
        const folder = normalize(parts[parts.length - 2] || "");
        const fileName = parts[parts.length - 1].replace(/\.[^.]+$/, "");
        const match = fileName.match(/^IMG-(\d+)$/i);
        if (!aliases.includes(folder) || !match) return false;
        const number = Number(match[1]);
        return number >= show.start && number <= show.end;
      })
      .sort(([a], [b]) => {
        const numberA = Number(a.split("/").pop().replace(/\.[^.]+$/, "").match(/\d+$/)?.[0] || 0);
        const numberB = Number(b.split("/").pop().replace(/\.[^.]+$/, "").match(/\d+$/)?.[0] || 0);
        return numberA - numberB;
      })
      .map(([path, src], index) => ({
        src,
        name: path.split("/").pop().replace(/\.[^.]+$/, ""),
        index,
      }));
  }, [show]);

  if (!show) {
    return (
      <main className="showGalleryPage">
        <div className="showGalleryWrap">
          <h1>این نمایش در گالری پیدا نشد</h1>
          <Link className="showGalleryBack" to="/gallery">بازگشت به گالری</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="showGalleryPage">
      <div className="showGalleryWrap">
        <Link className="showGalleryBack" to="/gallery">
          <span aria-hidden="true">→</span> بازگشت به گالری
        </Link>

        <header className="showGalleryHeader">
          <span className="showGalleryEyebrow">آرشیو تصاویر گروه ژو</span>
          <h1>{show.title}</h1>
          <p>لحظه‌ها و قاب‌هایی از این اجرا</p>
          <div className="showGalleryRule" />
        </header>

        {images.length > 0 ? (
          <section className="showGalleryGrid" aria-label={`تصاویر نمایش ${show.title}`}>
            {images.map((image) => (
              <figure className="showGalleryCard" key={image.src}>
                <img src={image.src} alt={image.name || `تصویر ${show.title} شماره ${image.index + 1}`} loading="lazy" />
                <figcaption>
                  <span>{String(image.index + 1).padStart(2, "0")}</span>
                  <span>{image.name}</span>
                </figcaption>
              </figure>
            ))}
          </section>
        ) : (
          <div className="showGalleryEmpty">
            <span className="showGalleryEmptyMark">✳</span>
            <h2>آرشیو این نمایش آماده‌ی تکمیل است</h2>
            <p>وقتی عکس‌های این پوشه به پروژه اضافه شوند، به‌صورت خودکار در همین صفحه نمایش داده می‌شوند.</p>
            <span className="showGalleryFolder">پوشه: {show.folder}</span>
          </div>
        )}
      </div>
    </main>
  );
}
