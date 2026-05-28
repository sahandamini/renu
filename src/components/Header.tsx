import { Link } from "@tanstack/react-router";

const BOOK_URL = "https://renunola.janeapp.com/";
const SHOP_URL = "https://shop.renunola.instapaytient.com/";
const INSTAGRAM_URL = "https://www.instagram.com/renunola";
const LOGO_URL =
  "https://images.squarespace-cdn.com/content/v1/69c173d7cb0f3a419b07cd8c/88a8c580-7c08-4b63-82e1-469af3191c89/Copy+of+Renu+Templates+-+IG+45+%281%29.png?format=1500w";

const navItems = [
  ["About", "/#about"],
  ["Services", "/#services"],
  ["Membership", "/#membership"],
  ["Shop", SHOP_URL],
  ["Contact", "/#contact"],
  ["Instagram", INSTAGRAM_URL],
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(198,155,79,0.22)] bg-[var(--header-bg)] px-4 shadow-[0_18px_50px_rgba(12,9,6,0.18)] backdrop-blur-xl">
      <nav className="page-wrap flex flex-wrap items-center gap-x-3 gap-y-2 py-3 sm:py-4">
        <h2 className="m-0 flex-shrink-0 text-base font-semibold tracking-tight">
          <Link
            to="/"
            className="inline-flex items-center gap-3 rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#fff7e8] no-underline shadow-[0_8px_24px_rgba(0,0,0,0.12)] sm:px-4 sm:py-2"
          >
            <img
              src={LOGO_URL}
              alt="ReNu Health and Wellness"
              className="h-7 w-auto rounded-full bg-[#fff7e8] object-contain px-2 py-1"
            />
            ReNu Health and Wellness
          </Link>
        </h2>

        <div className="order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-1 pb-1 text-xs font-semibold uppercase tracking-[0.14em] lg:order-none lg:w-auto lg:flex-nowrap lg:pb-0">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="nav-link"
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[rgba(240,205,132,0.48)] bg-[#fff7e8] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#17130f] no-underline shadow-[0_10px_24px_rgba(0,0,0,0.16)] hover:-translate-y-0.5 hover:bg-[var(--lagoon)] hover:text-[#17130f] sm:text-xs"
          >
            Book Online
          </a>
        </div>
      </nav>
    </header>
  );
}
