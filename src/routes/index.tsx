import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

const BOOK_URL = "https://renunola.janeapp.com/";
const MEMBERSHIP_URL =
	"https://shop.renunola.instapaytient.com/shop/renu-me-membership";
const INSTAGRAM_URL = "https://www.instagram.com/renunola";
const MAPS_URL = "https://maps.app.goo.gl/iE24qBXC1NFKLW2x6";

const logoUrl = "/assets/brand/renu-logo-clear.webp";

const images = {
	hero: "/assets/brand/hero-provider.jpg",
	treatment: "/assets/brand/about-treatment.png",
	services: "/assets/brand/services-treatment.jpg",
	membership: "/assets/brand/membership-room.jpg",
	shop: "/assets/brand/shop-wellness.png",
	exterior: "/assets/brand/exterior.jpg",
};

const trustHighlights = [
	{
		value: "Licensed medical professionals",
		label: "Trusted guidance from experienced healthcare professionals.",
	},
	{
		value: "Personalized treatment plans",
		label: "Care designed around your health, lifestyle, and goals.",
	},
	{
		value: "New Orleans wellness destination",
		label: "A relaxing spa environment for looking and feeling your best.",
	},
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
		title: "Derma Fillers",
		description:
			"Subtle balancing and contouring to enhance your natural features.",
	},
	{
		title: "Wellness Injections",
		description: "Targeted wellness boosters tailored to how you want to feel.",
	},
	{
		title: "Esthetician Services",
		description:
			"Facials, peels, microneedling, brows, lashes, and skin renewal services.",
	},
];

const membershipBenefits = [
	"VIP Tox and IV therapy pricing",
	"10% off medical-grade skincare",
	"Monthly facial, peel, microneedling, brow, or lash service",
	"Priority access to member-only offers",
];

const contactItems = [
	["Visit", "6312 Argonne Blvd.", "New Orleans, LA 70124", MAPS_URL],
	["Hours", "10am-6pm CDT", "Monday - Saturday"],
	["Call", "504-609-9776", "tel:+15046099776"],
	["Email", "nhu@renunola.com", "mailto:nhu@renunola.com"],
];

function InstagramIcon() {
	return (
		<svg
			aria-hidden="true"
			className="h-5 w-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth="1.8"
		>
			<rect x="3" y="3" width="18" height="18" rx="5" />
			<circle cx="12" cy="12" r="4" />
			<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
		</svg>
	);
}

function App() {
	return (
		<main>
			<section className="page-wrap relative px-4 pb-16 pt-12 sm:pt-16 lg:pb-24 lg:pt-20">
				<div className="absolute left-4 top-8 hidden h-32 w-px bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent lg:block" />
				<div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
					<div className="rise-in max-w-3xl">
						<img
							src={logoUrl}
							alt="ReNu Health and Wellness logo"
							className="mb-8 h-28 w-auto rounded-[1.5rem] bg-[rgba(255,247,232,0.78)] object-contain p-4 shadow-[0_18px_50px_rgba(33,25,18,0.1)] sm:h-32"
						/>
						<p className="island-kicker mb-4">ReNu Health and Wellness</p>
						<h1 className="display-title mb-6 text-6xl leading-[0.88] font-semibold text-[var(--sea-ink)] sm:text-7xl lg:text-8xl">
							Where Health Meets Beauty
						</h1>
						<p className="max-w-2xl text-base leading-8 text-[var(--sea-ink-soft)] sm:text-lg">
							At ReNu Health and Wellness, we believe in more than just
							enhancing your appearance — we’re here to help you look and feel
							your best from the inside out.
						</p>
						<div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
							<a
								href={BOOK_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="button-primary"
							>
								Book Online
							</a>
							<a href="#services" className="button-secondary">
								Discover the ReNu Difference
							</a>
						</div>
					</div>

					<div className="relative min-h-[520px] lg:min-h-[650px]">
						<div className="absolute -right-4 top-0 h-[82%] w-[82%] overflow-hidden rounded-t-full rounded-b-[2.5rem] border border-[var(--line)] shadow-[0_34px_90px_rgba(33,25,18,0.18)] sm:right-0">
							<img
								src={images.hero}
								alt="A ReNu Health and Wellness provider in the spa."
								className="h-full w-full object-cover object-[52%_0%]"
							/>
						</div>
						<div className="island-shell absolute bottom-0 left-0 w-[66%] overflow-hidden rounded-[2rem] p-2 sm:w-[54%]">
							<img
								src={images.treatment}
								alt="ReNu wellness treatment details in a calm spa setting."
								className="h-64 w-full rounded-[1.55rem] object-cover object-top sm:h-80"
								loading="lazy"
							/>
						</div>
						<div className="absolute bottom-12 right-2 max-w-[13rem] rounded-full border border-[rgba(211,167,92,0.42)] bg-[rgba(24,22,19,0.86)] px-5 py-4 text-center text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[var(--cream)] shadow-[0_18px_48px_rgba(24,22,19,0.28)] backdrop-blur-md sm:right-8">
							Personal care in a calm lounge setting
						</div>
					</div>
				</div>
			</section>

			<section
				aria-label="ReNu care highlights"
				className="border-y border-[var(--line)] bg-[rgba(255,251,244,0.48)]"
			>
				<div className="page-wrap grid gap-px px-4 sm:grid-cols-3">
					{trustHighlights.map((highlight, index) => (
						<div
							key={highlight.value}
							className="rise-in px-2 py-7 sm:px-7"
							style={{ animationDelay: `${index * 80 + 80}ms` }}
						>
							<p className="display-title m-0 text-3xl font-semibold text-[var(--sea-ink)]">
								{highlight.value}
							</p>
							<p className="m-0 mt-2 text-sm leading-6 text-[var(--sea-ink-soft)]">
								{highlight.label}
							</p>
						</div>
					))}
				</div>
			</section>

			<section
				id="about"
				aria-labelledby="about-heading"
				className="page-wrap scroll-mt-28 px-4 py-20 lg:py-28"
			>
				<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
					<div className="relative">
						<img
							src={images.exterior}
							alt="Exterior of ReNu Health and Wellness in New Orleans."
							className="h-[420px] w-full rounded-[2rem] object-cover shadow-[0_28px_70px_rgba(33,25,18,0.14)]"
							loading="lazy"
						/>
						<div className="absolute -bottom-6 left-6 right-6 rounded-[1.25rem] border border-[rgba(211,167,92,0.34)] bg-[rgba(255,251,244,0.88)] p-5 shadow-[0_18px_46px_rgba(33,25,18,0.12)] backdrop-blur-md">
							<p className="island-kicker mb-2">New Orleans</p>
							<p className="m-0 text-sm leading-6 text-[var(--sea-ink-soft)]">
								Trusted guidance in a relaxing spa environment.
							</p>
						</div>
					</div>
					<div className="lg:pl-8">
						<p className="island-kicker mb-4">About ReNu</p>
						<h2
							id="about-heading"
							className="display-title mb-6 text-5xl leading-none font-semibold text-[var(--sea-ink)] sm:text-7xl"
						>
							About ReNu
						</h2>
						<div className="space-y-5 text-base leading-8 text-[var(--sea-ink-soft)] sm:text-lg">
							<p>
								At ReNu Health and Wellness, we believe in more than just
								enhancing your appearance — we’re here to help you look and feel
								your best from the inside out. As a team of experienced,
								licensed healthcare professionals, we bring clinical expertise,
								compassion, and innovation together to deliver exceptional
								results tailored to your unique goals.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section
				id="services"
				aria-labelledby="services-heading"
				className="scroll-mt-28 bg-[var(--charcoal)] py-20 text-[var(--cream)] lg:py-28"
			>
				<div className="page-wrap px-4">
					<div className="mb-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
						<div>
							<p className="island-kicker mb-4 text-[var(--gold-soft)]">
								Our Services
							</p>
							<h2
								id="services-heading"
								className="display-title m-0 text-5xl leading-none font-semibold sm:text-7xl"
							>
								Our Services
							</h2>
						</div>
						<p className="m-0 max-w-2xl text-base leading-8 text-[rgba(255,247,232,0.72)] sm:text-lg">
							ReNu brings together personalized aesthetics, wellness therapies,
							and skin renewal services designed to help you look refreshed and
							feel your best.
						</p>
					</div>

					<div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
						<article className="overflow-hidden rounded-[2rem] border border-[rgba(211,167,92,0.28)] bg-[rgba(255,247,232,0.06)] p-3">
							<img
								src={images.services}
								alt="ReNu provider preparing an aesthetics treatment."
								className="h-full min-h-[420px] w-full rounded-[1.55rem] object-cover"
								loading="lazy"
							/>
						</article>
						<div className="grid gap-px overflow-hidden rounded-[2rem] border border-[rgba(211,167,92,0.22)] bg-[rgba(211,167,92,0.18)] sm:grid-cols-2">
							{services.map((service, index) => (
								<article
									key={service.title}
									className={`bg-[var(--charcoal)] p-6 transition hover:bg-[rgba(255,247,232,0.06)] sm:p-7 ${index === services.length - 1 ? "sm:col-span-2" : ""}`}
								>
									<p className="island-kicker mb-5 text-[var(--gold-soft)]">
										{String(index + 1).padStart(2, "0")}
									</p>
									<h3 className="display-title mb-3 text-3xl font-semibold text-[var(--cream)]">
										{service.title}
									</h3>
									<p className="m-0 text-sm leading-7 text-[rgba(255,247,232,0.68)]">
										{service.description}
									</p>
								</article>
							))}
						</div>
					</div>

					<a
						href={BOOK_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-10 inline-flex rounded-full border border-[rgba(211,167,92,0.48)] bg-[var(--cream)] px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--charcoal)] no-underline shadow-[0_18px_42px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:bg-[var(--gold-soft)] hover:text-[var(--charcoal)]"
					>
						Book a Consultation
					</a>
				</div>
			</section>

			<section
				id="membership"
				aria-labelledby="membership-heading"
				className="page-wrap scroll-mt-28 px-4 py-20 lg:py-28"
			>
				<div className="island-shell grid overflow-hidden rounded-[2rem] lg:grid-cols-[0.92fr_1.08fr]">
					<img
						src={images.membership}
						alt="A ReNu treatment room prepared for a guest."
						className="h-full min-h-80 w-full object-cover"
						loading="lazy"
					/>
					<div className="p-7 sm:p-10 lg:p-12">
						<p className="island-kicker mb-4">Ultimate Membership</p>
						<h2
							id="membership-heading"
							className="display-title mb-5 text-5xl leading-none font-semibold text-[var(--sea-ink)] sm:text-7xl"
						>
							The art of consistent beauty, elevated.
						</h2>
						<p className="mb-8 text-base leading-8 text-[var(--sea-ink-soft)] sm:text-lg">
							ReNu Me Ultimate Membership delivers personalized treatments,
							luxury skincare benefits, VIP pricing, and monthly care curated to
							keep you glowing year-round.
						</p>
						<ul className="mb-9 grid gap-3 p-0 text-sm leading-7 text-[var(--sea-ink-soft)] sm:grid-cols-2">
							{membershipBenefits.map((benefit) => (
								<li key={benefit} className="flex gap-3">
									<span className="mt-3 h-px w-5 flex-none bg-[var(--gold)]" />
									<span>{benefit}</span>
								</li>
							))}
						</ul>
						<a
							href={MEMBERSHIP_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="button-primary"
						>
							Join Now for $250/mo.
						</a>
					</div>
				</div>
			</section>

			<section className="page-wrap grid scroll-mt-28 gap-5 px-4 lg:grid-cols-2">
				<article
					id="shop"
					aria-labelledby="shop-heading"
					className="island-shell overflow-hidden rounded-[2rem]"
				>
					<img
						src={images.shop}
						alt="ReNu skincare and wellness brand graphic."
						className="h-72 w-full object-cover"
						loading="lazy"
					/>
					<div className="p-7 sm:p-9">
						<p className="island-kicker mb-3">Shop</p>
						<h2
							id="shop-heading"
							className="display-title mb-3 text-5xl leading-none font-semibold text-[var(--sea-ink)]"
						>
							Reveal Your Radiant Beauty
						</h2>
						<p className="mb-7 leading-7 text-[var(--sea-ink-soft)]">
							Get started with personalized care designed to help you look and
							feel your best.
						</p>
						<a href="#contact" className="button-secondary">
							Get Started
						</a>
					</div>
				</article>

				<article
					id="instagram"
					aria-labelledby="instagram-heading"
					className="island-shell flex flex-col justify-between rounded-[2rem] p-7 sm:p-9"
				>
					<div>
						<img
							src={logoUrl}
							alt="ReNu Health and Wellness logo"
							className="mb-10 h-28 w-auto rounded-[1.5rem] bg-[rgba(255,247,232,0.74)] object-contain p-4"
							loading="lazy"
						/>
						<p className="island-kicker mb-3 inline-flex items-center gap-2">
							<InstagramIcon />
							<span className="sr-only">Instagram</span>
						</p>
						<h2
							id="instagram-heading"
							className="display-title mb-3 text-5xl leading-none font-semibold text-[var(--sea-ink)]"
						>
							Follow the latest from ReNu.
						</h2>
						<p className="mb-7 leading-7 text-[var(--sea-ink-soft)]">
							See treatment highlights, skincare education, announcements, and a
							closer look inside the ReNu experience.
						</p>
					</div>
					<a
						href={INSTAGRAM_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="button-secondary self-start"
					>
						Follow @renunola
					</a>
				</article>
			</section>

			<section
				id="contact"
				aria-labelledby="contact-heading"
				className="page-wrap scroll-mt-28 px-4 py-20 lg:py-28"
			>
				<div className="rounded-[2.25rem] bg-[var(--cream)] p-7 shadow-[0_28px_80px_rgba(33,25,18,0.12)] sm:p-10 lg:p-12">
					<div className="mb-9 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
						<div>
							<p className="island-kicker mb-4">Visit Us and Connect</p>
							<h2
								id="contact-heading"
								className="display-title m-0 max-w-3xl text-5xl leading-none font-semibold text-[var(--sea-ink)] sm:text-7xl"
							>
								Visit Us & Connect
							</h2>
						</div>
						<a
							href={BOOK_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="button-primary"
						>
							Book Online
						</a>
					</div>
					<div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
						{contactItems.map(([label, primary, secondary, href]) => (
							<div key={label} className="bg-[var(--foam)] p-6">
								<p className="island-kicker mb-3">{label}</p>
								{href ? (
									<a
										href={href}
										target="_blank"
										rel="noopener noreferrer"
										className="block"
									>
										<span className="block text-base font-bold">{primary}</span>
										<span className="mt-1 block text-sm">{secondary}</span>
									</a>
								) : secondary?.startsWith("tel:") ||
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
								{!href &&
								!secondary?.startsWith("tel:") &&
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
