import './Footer.css';

function Footer() {
  return (
    <footer className="contact-footer" aria-label="اطلاعات تماس گروه ژو">
      <div className="contact-footer__brand">
        <span className="contact-footer__eyebrow">در ارتباط باشید</span>
        <strong>گروه تئاتر ژو</strong>
      </div>

      <a className="contact-footer__item" href="tel:09151926588">
        <span className="contact-footer__label">شماره تماس</span>
        <span dir="ltr">09151926588</span>
      </a>

      <a
        className="contact-footer__item"
        href="https://www.instagram.com/zhow_theater/"
        target="_blank"
        rel="noreferrer"
      >
        <span className="contact-footer__label">اینستاگرام</span>
        <span dir="ltr">@zhow_theater</span>
      </a>

      <div className="contact-footer__item contact-footer__address">
        <span className="contact-footer__label">آدرس</span>
        <span>بندرعباس، خیابان آیت‌الله غفاری، فرهنگسرای طوبی</span>
      </div>
    </footer>
  );
}

export default Footer;
