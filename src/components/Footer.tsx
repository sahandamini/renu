const BOOK_URL = "https://renunola.janeapp.com/";
const SHOP_URL = "https://shop.renunola.instapaytient.com/";
const INSTAGRAM_URL = "https://www.instagram.com/renunola";
const LOGO_URL = "/assets/brand/renu-logo-clear.webp";

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

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="site-footer mt-8 px-4 pb-14 pt-14 text-[rgba(255,247,232,0.68)]">
			<div className="page-wrap grid gap-9 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
				<div>
					<img
						src={LOGO_URL}
						alt="ReNu Health and Wellness"
						className="mb-6 h-24 w-auto rounded-[1.25rem] bg-[var(--cream)] object-contain p-4"
					/>
					<p className="island-kicker mb-3 text-[var(--gold-soft)]">
						ReNu Health and Wellness
					</p>
					<p className="m-0 max-w-md text-sm leading-7">
						Personalized aesthetics and restorative wellness in New Orleans,
						delivered with medical expertise and boutique-level care.
					</p>
				</div>

				<address className="not-italic text-sm leading-7">
					<p className="m-0 mb-2 font-bold text-[var(--cream)]">Visit Us</p>
					<p className="m-0">6312 Argonne Blvd.</p>
					<p className="m-0">New Orleans, LA 70124</p>
					<p className="m-0 mt-3">10am-6pm CDT, Mon - Sat</p>
					<a href="tel:+15046099776" className="mt-3 block no-underline">
						504-609-9776
					</a>
					<a href="mailto:nhu@renunola.com" className="block no-underline">
						nhu@renunola.com
					</a>
				</address>

				<div>
					<p className="m-0 mb-3 font-bold text-[var(--cream)]">Explore</p>
					<div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
						<a href="/#about" className="no-underline">
							About
						</a>
						<a href="/#services" className="no-underline">
							Services
						</a>
						<a href="/#membership" className="no-underline">
							Membership
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
							className="inline-flex items-center no-underline"
							aria-label="Instagram"
						>
							<InstagramIcon />
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

			<div className="page-wrap mt-10 border-t border-[rgba(227,197,141,0.18)] pt-5">
				<p className="m-0 text-sm">
					&copy; {year} ReNu Health and Wellness. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
