const BOOK_URL = "https://renunola.janeapp.com/";
const SHOP_URL = "https://shop.renunola.instapaytient.com/";
const INSTAGRAM_URL = "https://www.instagram.com/renunola";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer mt-20 px-4 pb-14 pt-12 text-[#d7c4a7]">
      <div className="page-wrap grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="island-kicker mb-3">ReNu Health and Wellness</p>
          <p className="m-0 max-w-md text-sm leading-7">
            Personalized aesthetics and restorative wellness in New Orleans,
            delivered by experienced licensed healthcare professionals.
          </p>
        </div>

        <address className="not-italic text-sm leading-7">
          <p className="m-0 font-bold text-[#fff7e8]">Visit Us</p>
          <p className="m-0">6312 Argonne Blvd.</p>
          <p className="m-0">New Orleans, LA 70124</p>
          <p className="m-0 mt-3">10am-6pm CDT, Mon - Sat</p>
          <a href="tel:+15046099776" className="block no-underline">
            504-609-9776
          </a>
          <a href="mailto:nhu@renunola.com" className="block no-underline">
            nhu@renunola.com
          </a>
        </address>

        <div>
          <p className="m-0 mb-3 font-bold text-[#fff7e8]">Explore</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <a href="/#about" className="no-underline">
              About
            </a>
            <a href="/#services" className="no-underline">
              Services
            </a>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              Shop
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              Instagram
            </a>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              Book Online
            </a>
          </div>
        </div>
      </div>

      <div className="page-wrap mt-8 border-t border-[rgba(198,155,79,0.22)] pt-5">
        <p className="m-0 text-sm">
          &copy; {year} ReNu Health and Wellness. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
