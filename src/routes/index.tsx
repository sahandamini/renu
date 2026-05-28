import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

const BOOK_URL = "https://renunola.janeapp.com/";
const SHOP_URL = "https://shop.renunola.instapaytient.com/";
const MEMBERSHIP_URL =
  "https://shop.renunola.instapaytient.com/shop/renu-me-membership";
const INSTAGRAM_URL = "https://www.instagram.com/renunola";

const logoUrl =
  "https://images.squarespace-cdn.com/content/v1/69c173d7cb0f3a419b07cd8c/88a8c580-7c08-4b63-82e1-469af3191c89/Copy+of+Renu+Templates+-+IG+45+%281%29.png?format=1500w";

const images = {
  hero: "https://images.squarespace-cdn.com/content/v1/69c173d7cb0f3a419b07cd8c/ff498538-3498-4bd3-a57a-d7ece1487b7c/DSC07637.jpg",
  treatment:
    "https://images.squarespace-cdn.com/content/v1/69c173d7cb0f3a419b07cd8c/5489e6b8-cd1b-4d39-a897-0e6132a68932/DSC08008.jpg",
  services:
    "https://images.squarespace-cdn.com/content/v1/69c173d7cb0f3a419b07cd8c/cf2ed7aa-b209-43c0-9863-9dc43550d60a/DSC08075.jpg",
  membership:
    "https://images.squarespace-cdn.com/content/v1/69c173d7cb0f3a419b07cd8c/a8c73862-8b3c-4eb5-91ec-57874d2036fd/DSC07446.jpg",
  shop: "https://images.squarespace-cdn.com/content/v1/69c173d7cb0f3a419b07cd8c/85284dec-3c87-4b18-950d-9cd342bfa5e9/3.png",
  exterior:
    "https://images.squarespace-cdn.com/content/v1/69c173d7cb0f3a419b07cd8c/202c8032-6abd-4e07-8d25-13c4767a7167/DSC07432.jpg",
};

const trustHighlights = [
  "Licensed medical professionals",
  "Personalized treatment plans",
  "New Orleans wellness destination",
];

const services = [
  {
    title: "Neuro Modulators",
    description:
      "Refine expression lines with thoughtful dosing and natural-looking results.",
  },
  {
    title: "Weight Loss",
    description:
      "Clinically guided plans built around your health, lifestyle, and goals.",
  },
  {
    title: "IV Therapy",
    description:
      "Hydration and vitamin infusions designed to support energy and recovery.",
  },
  {
    title: "NAD Therapy",
    description:
      "Restorative wellness support for vitality, focus, and whole-body renewal.",
  },
  {
    title: "Dermal Fillers",
    description:
      "Subtle balancing and contouring to enhance your natural features.",
  },
  {
    title: "Wellness Injections",
    description: "Targeted wellness boosters tailored to how you want to feel.",
  },
  {
    title: "Skin Treatments",
    description:
      "Facials, peels, microneedling, brows, lashes, and skin renewal services.",
  },
];

const contactItems = [
  ["Visit", "6312 Argonne Blvd.", "New Orleans, LA 70124"],
  ["Hours", "10am-6pm CDT", "Monday - Saturday"],
  ["Call", "504-609-9776", "tel:+15046099776"],
  ["Email", "nhu@renunola.com", "mailto:nhu@renunola.com"],
];

function App() {
  return (
    <main className="page-wrap px-4 pb-10 pt-10 sm:pt-14">
      <section className="island-shell rise-in relative overflow-hidden rounded-[2.25rem] px-5 py-6 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(198,155,79,0.28),transparent_66%)]" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(23,19,15,0.16),transparent_66%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <img
              src={logoUrl}
              alt="ReNu Nola logo"
              className="mb-7 h-20 w-auto rounded-2xl border border-[rgba(198,155,79,0.24)] bg-white/75 object-contain p-3 shadow-[0_18px_40px_rgba(46,30,18,0.08)]"
            />
            <p className="island-kicker mb-3">ReNu Health and Wellness</p>
            <h1 className="display-title mb-5 max-w-3xl text-5xl leading-[0.95] font-semibold text-[var(--sea-ink)] sm:text-7xl">
              Refined aesthetics. Restorative wellness. Personalized care.
            </h1>
            <p className="mb-8 max-w-2xl text-base leading-8 text-[var(--sea-ink-soft)] sm:text-lg">
              A New Orleans medical spa blending clinical expertise with a calm,
              beauty-forward experience to help you look refreshed and feel your
              best from the inside out.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[rgba(198,155,79,0.42)] bg-[var(--sea-ink)] px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-white no-underline shadow-[0_16px_36px_rgba(23,19,15,0.18)] transition hover:-translate-y-0.5 hover:border-[rgba(198,155,79,0.75)] hover:bg-[var(--lagoon-deep)] hover:text-white"
              >
                Book Online
              </a>
              <a
                href="#services"
                className="rounded-full border border-[rgba(57,38,23,0.18)] bg-white/55 px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-[var(--sea-ink)] no-underline transition hover:-translate-y-0.5 hover:border-[rgba(198,155,79,0.55)] hover:bg-white/85"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-[0.82fr_1fr] lg:gap-4">
            <div className="island-shell hidden overflow-hidden rounded-[1.5rem] sm:block lg:translate-y-8">
              <img
                src={images.treatment}
                alt="A ReNu provider consulting with a guest in a treatment room."
                className="h-full min-h-64 w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="island-shell overflow-hidden rounded-[1.75rem]">
              <img
                src={images.hero}
                alt="A ReNu Health and Wellness provider smiling in the spa."
                className="h-full min-h-80 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="ReNu care highlights"
        className="mt-5 grid gap-3 sm:grid-cols-3"
      >
        {trustHighlights.map((highlight, index) => (
          <div
            key={highlight}
            className="island-shell rise-in rounded-2xl px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-[var(--sea-ink)]"
            style={{ animationDelay: `${index * 80 + 80}ms` }}
          >
            {highlight}
          </div>
        ))}
      </section>

      <section
        id="about"
        aria-labelledby="about-heading"
        className="scroll-mt-28 pt-16"
      >
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div className="island-shell overflow-hidden rounded-[1.75rem]">
            <img
              src={images.exterior}
              alt="Exterior of ReNu Health and Wellness in New Orleans."
              className="h-full min-h-72 w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="island-shell rounded-[1.75rem] p-6 sm:p-8">
            <p className="island-kicker mb-3">About ReNu</p>
            <h2
              id="about-heading"
              className="display-title mb-4 text-4xl font-semibold text-[var(--sea-ink)] sm:text-6xl"
            >
              Where health meets beauty.
            </h2>
            <p className="m-0 text-base leading-8 text-[var(--sea-ink-soft)] sm:text-lg">
              At ReNu Health and Wellness, experienced licensed healthcare
              professionals bring clinical expertise, compassion, and innovation
              together to deliver exceptional results tailored to your goals.
              Whether you are refreshing your skin, sculpting your body,
              jumpstarting weight loss, or recharging your well-being, ReNu
              offers trusted guidance in a relaxing spa environment.
            </p>
          </div>
        </div>
      </section>

      <section
        id="services"
        aria-labelledby="services-heading"
        className="scroll-mt-28 pt-16"
      >
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="island-kicker mb-3">Our Services</p>
            <h2
              id="services-heading"
              className="display-title m-0 text-4xl font-semibold text-[var(--sea-ink)] sm:text-6xl"
            >
              Wellness and aesthetics, tailored to you.
            </h2>
          </div>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[rgba(198,155,79,0.36)] bg-[rgba(198,155,79,0.12)] px-5 py-2.5 text-center text-xs font-bold uppercase tracking-[0.16em] text-[var(--lagoon-deep)] no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(198,155,79,0.2)]"
          >
            Book a Consultation
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article className="island-shell feature-card overflow-hidden rounded-2xl sm:col-span-2 lg:col-span-1">
            <img
              src={images.services}
              alt="ReNu provider preparing an aesthetics treatment."
              className="h-64 w-full object-cover"
              loading="lazy"
            />
          </article>
          {services.map((service, index) => (
            <article
              key={service.title}
              className="island-shell feature-card rise-in rounded-2xl p-5"
              style={{ animationDelay: `${index * 55 + 90}ms` }}
            >
              <p className="island-kicker mb-3">0{index + 1}</p>
              <h3 className="display-title mb-3 text-2xl font-semibold text-[var(--sea-ink)]">
                {service.title}
              </h3>
              <p className="m-0 text-sm leading-7 text-[var(--sea-ink-soft)]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="membership"
        aria-labelledby="membership-heading"
        className="scroll-mt-28 pt-16"
      >
        <div className="island-shell grid overflow-hidden rounded-[1.75rem] lg:grid-cols-[0.92fr_1.08fr]">
          <img
            src={images.membership}
            alt="A ReNu treatment room prepared for a guest."
            className="h-full min-h-72 w-full object-cover"
            loading="lazy"
          />
          <div className="p-6 sm:p-9">
            <p className="island-kicker mb-3">Ultimate Membership</p>
            <h2
              id="membership-heading"
              className="display-title mb-4 text-4xl font-semibold text-[var(--sea-ink)] sm:text-6xl"
            >
              The art of consistent beauty, elevated.
            </h2>
            <p className="mb-5 text-base leading-8 text-[var(--sea-ink-soft)]">
              ReNu Me Ultimate Membership delivers personalized treatments,
              luxury skincare benefits, VIP pricing, and monthly care curated to
              keep you glowing year-round.
            </p>
            <ul className="mb-7 grid gap-2 pl-5 text-sm leading-7 text-[var(--sea-ink-soft)] sm:grid-cols-2">
              <li>VIP Tox and IV therapy pricing</li>
              <li>10% off medical-grade skincare</li>
              <li>
                Monthly facial, peel, microneedling, brow, or lash service
              </li>
              <li>Priority access to member-only offers</li>
            </ul>
            <a
              href={MEMBERSHIP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-[rgba(198,155,79,0.42)] bg-[var(--sea-ink)] px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white no-underline transition hover:-translate-y-0.5 hover:border-[rgba(198,155,79,0.75)] hover:bg-[var(--lagoon-deep)] hover:text-white"
            >
              Join Now for $250/mo.
            </a>
          </div>
        </div>
      </section>

      <section className="grid scroll-mt-28 gap-5 pt-16 lg:grid-cols-2">
        <article
          id="shop"
          aria-labelledby="shop-heading"
          className="island-shell overflow-hidden rounded-[1.75rem]"
        >
          <img
            src={images.shop}
            alt="ReNu skincare and wellness brand graphic."
            className="h-64 w-full object-cover"
            loading="lazy"
          />
          <div className="p-6 sm:p-8">
            <p className="island-kicker mb-3">Shop</p>
            <h2
              id="shop-heading"
              className="display-title mb-3 text-4xl font-semibold text-[var(--sea-ink)]"
            >
              Extend your glow at home.
            </h2>
            <p className="mb-6 leading-7 text-[var(--sea-ink-soft)]">
              Shop ReNu wellness and skincare offerings through the online
              store.
            </p>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[rgba(57,38,23,0.18)] bg-white/55 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[var(--sea-ink)] no-underline transition hover:-translate-y-0.5 hover:border-[rgba(198,155,79,0.55)] hover:bg-white/85"
            >
              Shop ReNu
            </a>
          </div>
        </article>

        <article
          id="instagram"
          aria-labelledby="instagram-heading"
          className="island-shell rounded-[1.75rem] p-6 sm:p-8"
        >
          <img
            src={logoUrl}
            alt="ReNu Nola logo"
            className="mb-8 h-24 w-auto rounded-2xl border border-[rgba(198,155,79,0.22)] bg-white/75 object-contain p-3"
            loading="lazy"
          />
          <p className="island-kicker mb-3">Instagram</p>
          <h2
            id="instagram-heading"
            className="display-title mb-3 text-4xl font-semibold text-[var(--sea-ink)]"
          >
            Follow the latest from ReNu.
          </h2>
          <p className="mb-6 leading-7 text-[var(--sea-ink-soft)]">
            See treatment highlights, skincare education, announcements, and a
            closer look inside the ReNu experience.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[rgba(198,155,79,0.36)] bg-[rgba(198,155,79,0.12)] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[var(--lagoon-deep)] no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(198,155,79,0.2)]"
          >
            Follow @renunola
          </a>
        </article>
      </section>

      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="scroll-mt-28 pt-16"
      >
        <div className="island-shell rounded-[1.75rem] p-6 sm:p-8">
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="island-kicker mb-3">Visit Us and Connect</p>
              <h2
                id="contact-heading"
                className="display-title m-0 text-4xl font-semibold text-[var(--sea-ink)] sm:text-6xl"
              >
                Ready to renew your confidence?
              </h2>
            </div>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[rgba(198,155,79,0.42)] bg-[var(--sea-ink)] px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-white no-underline transition hover:-translate-y-0.5 hover:border-[rgba(198,155,79,0.75)] hover:bg-[var(--lagoon-deep)] hover:text-white"
            >
              Book Online
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactItems.map(([label, primary, secondary]) => (
              <div
                key={label}
                className="rounded-2xl border border-[var(--line)] bg-white/45 p-5 shadow-[0_1px_0_rgba(255,255,255,0.65)_inset]"
              >
                <p className="island-kicker mb-3">{label}</p>
                {secondary?.startsWith("tel:") ||
                secondary?.startsWith("mailto:") ? (
                  <a
                    href={secondary}
                    className="text-base font-bold text-[var(--sea-ink)] no-underline"
                  >
                    {primary}
                  </a>
                ) : (
                  <p className="m-0 text-base font-bold text-[var(--sea-ink)]">
                    {primary}
                  </p>
                )}
                {!secondary?.startsWith("tel:") &&
                !secondary?.startsWith("mailto:") ? (
                  <p className="m-0 mt-1 text-sm text-[var(--sea-ink-soft)]">
                    {secondary}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
