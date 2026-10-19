import "../styles/members.css";

const members = [
  { id: "member-01", number: "۰۱", name: "نام عضو", role: "مسئولیت در گروه" },
  { id: "member-02", number: "۰۲", name: "نام عضو", role: "مسئولیت در گروه" },
  { id: "member-03", number: "۰۳", name: "نام عضو", role: "مسئولیت در گروه" },
  { id: "member-04", number: "۰۴", name: "نام عضو", role: "مسئولیت در گروه" },
  { id: "member-05", number: "۰۵", name: "نام عضو", role: "مسئولیت در گروه" },
  { id: "member-06", number: "۰۶", name: "نام عضو", role: "مسئولیت در گروه" },
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
            <h2 id="members-title">آدم‌های <span>ژو</span></h2>
          </div>
          <p>نام‌ها، تصویرها و مسئولیت‌های اعضا را می‌توانی در کارت‌های زیر قرار بدهی؛ قالب برای عکس‌های پرتره طراحی شده است.</p>
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
        <p className="membersNote">این کارت‌ها فعلاً جای‌نگهدار هستند؛ قبل از انتشار نهایی، نام، سمت و عکس واقعی هر عضو را جایگزین کن.</p>
      </section>
      <footer className="membersClosing">
        <span className="membersKicker">A COMPANY IS MORE THAN A STAGE</span>
        <p>پشت هر داستان، مجموعه‌ای از آدم‌ها ایستاده‌اند.</p>
      </footer>
    </div>
  );
}
