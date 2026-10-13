import "../styles/space.css";

export default function SpaceBackground() {
  return (
    <div className="spaceBg" aria-hidden="true">
      {/* لایه‌های ستاره */}
      <div className="stars stars--1" />
      <div className="stars stars--2" />
      <div className="stars stars--3" />

      {/* مه/کهکشان دوردست */}
      <div className="nebula" />

      {/* چند شهاب/ستاره دنباله‌دار */}
      <span className="meteor m1" />
      <span className="meteor m2" />
      <span className="meteor m3" />
    </div>
  );
}