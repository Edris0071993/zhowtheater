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
    <div className="page-container">
      <h1>درباره ما</h1>
      <p>اطلاعات درباره ما</p>
    </div>
  );
}

export default About;
