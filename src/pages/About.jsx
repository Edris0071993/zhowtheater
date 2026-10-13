import { Link } from "react-router-dom";
import "./../styles/about.css";

const principles = [
  {
    number: "۰۱",
    title: "روایت، نه فرمول",
    description:
      "هر ایده زبان خودش را دارد. ما تلاش می‌کنیم فرم و شیوه اجرا را از دل همان داستان پیدا کنیم، نه اینکه همه داستان‌ها را به یک شکل تعریف کنیم.",
  },
  {
    number: "۰۲",
    title: "از خنده تا مکث",
    description:
      "به جهان متنوع تجربه‌های انسانی علاقه داریم؛ از کمدی و موقعیت‌های روزمره تا روایت‌های تلخ، اجتماعی و تجربه‌های متفاوت فرمی.",
  },
  {
    number: "۰۳",
    title: "تجربه‌کردن با هم",
    description:
      "تمرین، گفت‌وگو و همکاری بخشی از خودِ مسیر هنری ماست. هر پروژه فرصتی است برای آموختن و کشف راهی تازه.",
  },
];

function About() {
  return (
    <div className="aboutPage" dir="rtl">
      <section className="aboutHero" aria-labelledby="about-title">
        <div className="aboutHero__glow" aria-hidden="true" />
        <div className="aboutHero__content">
          <span className="aboutEyebrow">
            <span className="aboutEyebrow__dot" />
            گروه تئاتر ژو
          </span>

          <h1 id="about-title" className="aboutHero__title">
            هر روایت،
            <br />
            <span>راهی تازه برای دیدن</span>
          </h1>

          <p className="aboutHero__lead">
            ما تئاتر را فرصتی می‌دانیم برای روایت‌کردن، تجربه‌کردن و دیدن دوباره
            جهان؛ هر بار از زاویه‌ای تازه.
          </p>

          <a className="aboutTextLink" href="#our-story">
            آشنایی با ژو <span aria-hidden="true">↙</span>
          </a>
        </div>

        <div className="aboutHero__index" aria-hidden="true">
          <span>ABOUT</span>
          <span>ZHOW THEATRE</span>
        </div>
        <div className="aboutHero__line" aria-hidden="true" />
      </section>

      <section className="aboutSection aboutStory" id="our-story">
        <div className="aboutSection__label">
          <span>۰۱</span>
          <span>داستان ما</span>
        </div>
        <div className="aboutStory__body">
          <h2>
            ما هنوز در حال
            <br />
            <span>ساختن این مسیر هستیم.</span>
          </h2>
          <div className="aboutStory__copy">
            <p>
              ژو برای ما فقط نام یک گروه نیست؛ مسیری است که با هر تمرین، هر
              اجرا و هر همکاری ادامه پیدا می‌کند. بخشی از این مسیر روی صحنه
              شکل می‌گیرد و بخشی دیگر، در گفت‌وگوها، آزمون‌وخطاها و لحظه‌هایی
              که تماشاگر شاید هیچ‌وقت نبیند.
            </p>
            <p>
              اجراهای گذشته بخشی از تجربه ما هستند، نه نقطه پایان. هر اثر چیزی
              به ما یاد می‌دهد و پرسش تازه‌ای برای قدم بعدی به جا می‌گذارد.
              برای همین، داستان ژو همیشه در حال ادامه‌دادن و دوباره شکل‌گرفتن
              است.
            </p>
          </div>
        </div>
      </section>

      <section className="aboutManifesto">
        <div className="aboutManifesto__heading">
          <div className="aboutSection__label">
            <span>۰۲</span>
            <span>نگاه هنری ما</span>
          </div>
          <h2>
            تئاتر
            <br />
            <span>صحنه زندگی است</span>
          </h2>
          <p>
            آنچه برای ما اهمیت دارد، پیدا کردن زبان مناسب هر اثر است؛ نه
            تکرار یک فرمول ثابت.
          </p>
        </div>

        <div className="aboutPrinciples">
          {principles.map((principle) => (
            <article className="aboutPrinciple" key={principle.number}>
              <span className="aboutPrinciple__number">{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="aboutSection aboutJourney">
        <div className="aboutSection__label">
          <span>۰۳</span>
          <span>مسیر اجراها</span>
        </div>
        <div className="aboutJourney__content">
          <div>
            <span className="aboutKicker">از تجربه تا ایده بعدی</span>
            <h2>
              هر اجرا،
              <br />
              <span>فصلی از داستان ژو.</span>
            </h2>
            <p>
              از اجراهایی که پشت سر گذاشته‌ایم تا پروژه‌هایی که در حال شکل‌گیری
              هستند، هر تجربه فرصتی است برای یادگیری، همکاری و نزدیک‌تر شدن به
              زبان هنری خودمان.
            </p>
          </div>
          <div className="aboutJourney__links">
            <Link to="/gallery" className="aboutButton aboutButton--primary">
              دیدن گالری اجراها <span aria-hidden="true">↗</span>
            </Link>
            <Link to="/future-projects" className="aboutButton">
              پروژه‌های پیش رو <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="aboutPeople">
        <div className="aboutSection__label">
          <span>۰۴</span>
          <span>آدم‌های ژو</span>
        </div>
        <div className="aboutPeople__content">
          <div>
            <h2>تئاتر، کارِ <span>یک نفر نیست.</span></h2>
            <p>
              پشت هر اجرا، آدم‌هایی با نگاه‌ها و مسئولیت‌های متفاوت کنار هم
              قرار می‌گیرند؛ از ایده و تمرین تا طراحی و حضور روی صحنه.
            </p>
          </div>
          <div className="aboutPeople__note">
            <span className="aboutPeople__mark" aria-hidden="true">ژ</span>
            <p>
              معرفی اعضا و مسئولیت‌های هرکدام در این بخش قرار می‌گیرد.
              این قسمت پس از تکمیل اطلاعات واقعی اعضای گروه به‌روزرسانی می‌شود.
            </p>
          </div>
        </div>
      </section>

      <section className="aboutClosing">
        <span className="aboutKicker">THE STORY GOES ON</span>
        <h2>
          روایت هنوز
          <br />
          <span>ادامه دارد.</span>
        </h2>
        <p>
          ایده‌هایی که باید امتحان شوند، شخصیت‌هایی که باید کشف شوند و
          صحنه‌هایی که هنوز شکل نگرفته‌اند.
        </p>
        <Link to="/gallery" className="aboutButton aboutButton--light">
          همراه ژو باشید <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </div>
  );
}

export default About;