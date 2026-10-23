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
  rapunzel: { title: "راپونزل", folder: "راپونزل", aliases: ["راپونزل", "rapunzel"] },
  pirates: { title: "دزدان دریایی", folder: "دزدان", aliases: ["دزدان", "دزدان دریایی", "pirates", "dozdane-daryayi"] },
  "aroos-mordegan": { title: "عروس مردگان", folder: "عروس مردگان 2", aliases: ["عروس مردگان 2", "عروس مردگان", "aroos-mordegan"] },
  aladdin: { title: "علاالدین", folder: "علاالدین", aliases: ["علاالدین", "علاءالدین", "aladdin"] },
  kharamshahr: { title: "خرمشیر", folder: "خرمشیر", aliases: ["خرمشیر", "خرامشیر", "kharamshahr", "kharamshir"] },
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
        return aliases.includes(folder);
      })
      .sort(([a], [b]) => a.localeCompare(b, "fa"))
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
