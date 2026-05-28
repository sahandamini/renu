import { Link } from "@tanstack/react-router";

const BOOK_URL = "https://renunola.janeapp.com/";
const SHOP_URL = "https://shop.renunola.instapaytient.com/";
const INSTAGRAM_URL = "https://www.instagram.com/renunola";

const navItems = [
	["About", "/#about"],
	["Services", "/#services"],
	["Membership", "/#membership"],
	["Shop", SHOP_URL],
	["Contact", "/#contact"],
	["Instagram", INSTAGRAM_URL],
];

function InstagramIcon() {
	return (
		<svg
			aria-hidden="true"
			className="h-4 w-4"
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

export default function Header() {
	return (
		<header className="sticky top-0 z-50 border-b border-[rgba(227,197,141,0.22)] bg-[var(--header-bg)] px-4 shadow-[0_12px_30px_rgba(12,9,6,0.12)] backdrop-blur-xl">
			<nav className="page-wrap flex flex-wrap items-center gap-x-5 gap-y-3 py-2.5">
				<h2 className="m-0 flex-shrink-0">
					<Link
						to="/"
						className="group inline-flex items-baseline gap-2 text-[var(--cream)] no-underline hover:text-[var(--cream)]"
					>
						<span className="display-title text-[1.8rem] leading-none font-semibold tracking-[-0.04em] group-hover:text-[var(--gold-soft)]">
							ReNu
						</span>
					</Link>
				</h2>

				<div className="order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-2 pb-1 text-[0.68rem] font-bold uppercase tracking-[0.15em] lg:order-none lg:w-auto lg:flex-nowrap lg:pb-0">
					{navItems.map(([label, href]) => (
						<a
							key={label}
							href={href}
							className="nav-link"
							aria-label={label === "Instagram" ? "Instagram" : undefined}
							target={href.startsWith("http") ? "_blank" : undefined}
							rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
						>
							{label === "Instagram" ? <InstagramIcon /> : label}
						</a>
					))}
				</div>

				<div className="ml-auto flex items-center gap-2">
					<a
						href={BOOK_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-full border border-[rgba(227,197,141,0.58)] px-3.5 py-2 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[var(--gold-soft)] no-underline hover:-translate-y-0.5 hover:bg-[var(--gold-soft)] hover:text-[var(--charcoal)] sm:px-4"
					>
						<span className="sm:hidden">Book</span>
						<span className="hidden sm:inline">Book Online</span>
					</a>
				</div>
			</nav>
		</header>
	);
}
