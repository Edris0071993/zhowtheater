import "../styles/members.css";

const members = [
  { id: "abbas-dehghan", number: "۰۱", name: "عباس دهقان", role: "کارگردان · بازیگر" },
  { id: "edris-khaki-khizadeh", number: "۰۲", name: "ادریس خاکی‌زاده", role: "کارگردان · بازیگر" },
  { id: "elnaz-mohammadizadeh", number: "۰۳", name: "الناز محمدی‌زاده", role: "طراح صحنه · بازیگر" },
  { id: "hossein-khazaei", number: "۰۴", name: "حسین خزایی", role: "طراح صحنه · بازیگر" },
];

export default function Members() {
  return (
    <div className="membersPage" dir="rtl">
      <header className="membersHero">
        <div className="membersHero__orb membersHero__orb--one" aria-hidden="true" />
        <div className="membersHero__orb membersHero__orb--two" aria-hidden="true" />
        <div className="membersHero__inner">
          <span className="membersEyebrow"><i /> گروه تئاتر ژو / آدم‌های پشت صحنه</span>
          <h1>هر اجرا،<br /><span>حاصل کنار هم بودن ماست.</span></h1>
          <p>ژو را آدم‌هایی می‌سازند که هرکدام نگاه، تجربه و سهم خودشان را به صحنه می‌آورند. اینجا فرصتی است برای آشنایی با آن‌ها.</p>
          <div className="membersHero__foot"><span>اعضای گروه</span><span>PEOPLE OF ZHOU</span></div>
        </div>
      </header>
      <section className="membersDirectory" aria-labelledby="members-title">
        <div className="membersSectionHead">
          <div>
            <span className="membersKicker">THE PEOPLE BEHIND THE STORIES</span>
            <h2 id="members-title">اعضای گروه<span>ژو</span></h2>
          </div>
          <p> یک مسیر مشترک؛ از کارگردانی و بازیگری تا طراحی صحنه.</p>
        </div>
        <div className="membersGrid">
          {members.map((member) => (
            <article className="memberCard" key={member.id}>
              <div className="memberCard__portrait">
                <div className="memberCard__frame" aria-hidden="true" />
                <div className="memberCard__placeholder">
                  <span className="memberCard__glyph">ژ</span>
                  <span>تصویر عضو</span>
                </div>
                <span className="memberCard__index">{member.number}</span>
                <span className="memberCard__corner" aria-hidden="true">↙</span>
              </div>
              <div className="memberCard__info">
                <div><h3>{member.name}</h3><p>{member.role}</p></div>
                <span className="memberCard__plus" aria-hidden="true">＋</span>
              </div>
            </article>
          ))}
        </div>
        <p className="membersNote">قاب‌های تصویر آماده‌اند؛ عکس پرتره هر عضو را بعداً می‌توانی در جایگاه مخصوص خودش اضافه کنی.</p>
      </section>
      <footer className="membersClosing">
        <span className="membersKicker">A COMPANY IS MORE THAN A STAGE</span>
        <p>پشت هر داستان، مجموعه‌ای از آدم‌ها ایستاده‌اند.</p>
      </footer>
    </div>
  );
}
