import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/gallery-show.css";

const allShowImages = import.meta.glob("../assets/images/shows/**/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const showFolders = {
  rapunzel: {
    title: "راپونزل",
    folder: "راپونزل",
    aliases: ["راپونزل", "rapunzel"],
  },
  pirates: {
    title: "دزدان دریایی",
    folder: "دزدان",
    aliases: ["دزدان", "دزدان دریایی", "pirates", "dozdane-daryayi"],
  },
  "dozdane-daryayi": {
    title: "دزدان دریایی",
    folder: "دزدان",
    aliases: ["دزدان", "دزدان دریایی", "pirates", "dozdane-daryayi"],
  },
  "aroos-mordegan": {
    title: "عروس مردگان",
    folder: "عروس مردگان 2",
    aliases: ["عروس مردگان 2", "عروس مردگان", "aroos-mordegan"],
  },
  aladdin: {
    title: "علاالدین",
    folder: "علاالدین",
    aliases: ["علاالدین", "علاءالدین", "aladdin"],
  },
  kharamshahr: {
    title: "خرمشیر",
    folder: "عکس خرمشیر",
    aliases: ["عکس خرمشیر", "خرمشیر", "خرامشیر", "kharamshahr", "kharamshir"],
  },
};

function normalize(value) {
  return value
    .toLowerCase()
    .replace(/ي/g, "ی")
    .replace(/ك/g, "ک")
    .replace(/ۀ/g, "ه")
    .trim();
}

function isImageFile(path) {
  return /\.(jpe?g|png|webp|avif|gif|bmp)$/i.test(path);
}

export default function GalleryShow() {
  const { showId } = useParams();
  const show = showFolders[showId];
  const [selectedImage, setSelectedImage] = useState(null);

  const images = useMemo(() => {
    if (!show) return [];

    const aliases = show.aliases.map(normalize);

    return Object.entries(allShowImages)
      .filter(([path]) => {
        if (!isImageFile(path)) return false;

        const parts = path.split("/");
        const folderName = normalize(parts[parts.length - 2] || "");
        return aliases.includes(folderName);
      })
      .sort(([pathA], [pathB]) =>
        pathA.localeCompare(pathB, undefined, {
          numeric: true,
          sensitivity: "base",
        })
      )
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
          <Link className="showGalleryBack" to="/gallery">
            بازگشت به گالری
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="showGalleryPage">
      <div className="showGalleryWrap">
        <Link className="showGalleryBack" to="/gallery">
          <span aria-hidden="true">→</span>
          بازگشت به گالری
        </Link>

        <header className="showGalleryHeader">
          <span className="showGalleryEyebrow">گروه تئاتر ژو · آرشیو اجرا</span>
          <h1>{show.title}</h1>
          <p>لحظه‌هایی از صحنه، پشت صحنه و خاطره‌های این اجرا</p>
          <div className="showGalleryMeta">
            <span className="showGalleryRule" />
            <span>{images.length.toLocaleString("fa-IR")} قاب</span>
          </div>
        </header>

        {images.length > 0 ? (
          <section
            className="showGalleryGrid"
            aria-label={`تصاویر نمایش ${show.title}`}
          >
            {images.map((image) => (
              <button
                className="showGalleryCard"
                key={image.src}
                type="button"
                onClick={() => setSelectedImage(image)}
                aria-label={`نمایش بزرگ عکس شماره ${image.index + 1}`}
              >
                <img
                  src={image.src}
                  alt={`تصویر ${show.title} شماره ${image.index + 1}`}
                  loading="lazy"
                />
                <span className="showGalleryCardNumber">
                  {String(image.index + 1).padStart(2, "0")}
                </span>
                <span className="showGalleryZoom" aria-hidden="true">↗</span>
              </button>
            ))}
          </section>
        ) : (
          <div className="showGalleryEmpty">
            <span className="showGalleryEmptyMark" aria-hidden="true">✳</span>
            <h2>هنوز عکسی در این پوشه پیدا نشد</h2>
            <p>
              مطمئن شو تصاویر داخل پوشه زیر قرار دارند و پسوند آن‌ها JPG، JPEG،
              PNG یا WEBP است.
            </p>
            <code className="showGalleryFolder">
              src/assets/images/shows/{show.folder}/
            </code>
          </div>
        )}
      </div>

      {selectedImage && (
        <div
          className="showGalleryLightbox"
          role="dialog"
          aria-modal="true"
          aria-label="نمایش بزرگ عکس"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="showGalleryClose"
            type="button"
            aria-label="بستن عکس"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage.src}
            alt={`تصویر ${show.title} شماره ${selectedImage.index + 1}`}
            onClick={(event) => event.stopPropagation()}
          />
          <span className="showGalleryLightboxCount">
            {String(selectedImage.index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
        </div>
      )}
    </main>
  );
}
