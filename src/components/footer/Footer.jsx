import { Link } from 'react-router-dom'

const FooterColumn = ({ heading, links }) => (
    <div className="flex flex-col gap-y-3">
        <p className="text-white font-bold text-sm tracking-widest uppercase mb-1">{heading}</p>
        {links.map((item) => (
            <a
                key={item.label}
                href={item.href || '#'}
                className="text-locationError text-sm hover:text-headerHoverColor transition-colors duration-200 cursor-pointer"
            >
                {item.label}
            </a>
        ))}
    </div>
)

const SocialIcon = ({ href, label, path }) => (
    <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noreferrer"
        className="w-9 h-9 rounded-full border border-[#3d3f4b] flex items-center justify-center hover:border-headerHoverColor hover:bg-[#fc801915] transition-all duration-200 group"
    >
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-locationError group-hover:fill-headerHoverColor transition-colors duration-200">
            <path d={path} />
        </svg>
    </a>
)

const COLUMNS = [
    {
        heading: 'Company',
        links: [
            { label: 'About Us' },
            { label: 'Careers' },
            { label: 'Team' },
            { label: 'Swiggy One' },
            { label: 'Swiggy Instamart' },
        ],
    },
    {
        heading: 'Contact',
        links: [
            { label: 'Help & Support' },
            { label: 'Partner with us' },
            { label: 'Ride with us' },
        ],
    },
    {
        heading: 'Legal',
        links: [
            { label: 'Terms & Conditions' },
            { label: 'Cookie Policy' },
            { label: 'Privacy Policy' },
            { label: 'Refund Policy' },
        ],
    },
    {
        heading: 'We deliver to',
        links: [
            { label: 'Bangalore' },
            { label: 'Mumbai' },
            { label: 'Delhi' },
            { label: 'Hyderabad' },
            { label: 'Chennai' },
            { label: 'Pune' },
        ],
    },
]

const SOCIALS = [
    {
        label: 'LinkedIn',
        path: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z',
    },
    {
        label: 'Instagram',
        path: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z',
    },
    {
        label: 'Twitter / X',
        path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.735-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    },
    {
        label: 'Facebook',
        path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
    },
]

const Footer = () => {
    return (
        <footer className="bg-ttlRestroHeading border-t border-[#2e3044]">
            {/* top band */}
            <div className="w-4/5 mx-auto py-14">
                <div className="flex flex-col md:flex-row gap-12 justify-between">

                    {/* brand column */}
                    <div className="flex flex-col gap-y-5 min-w-[200px]">
                        <Link to="/" className="flex items-center gap-x-2">
                            <div className="w-9 h-9 bg-headerHoverColor rounded-full flex items-center justify-center">
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                                </svg>
                            </div>
                            <span className="text-white font-extrabold text-2xl tracking-tight">
                                Swiggy<span className="text-headerHoverColor">.</span>
                            </span>
                        </Link>

                        <p className="text-locationError text-sm leading-relaxed max-w-[220px]">
                            Order food from the best restaurants and get it delivered to your door.
                        </p>

                        {/* socials */}
                        <div className="flex gap-x-3 mt-1">
                            {SOCIALS.map((s) => (
                                <SocialIcon key={s.label} {...s} />
                            ))}
                        </div>

                        {/* app badges */}
                        <div className="flex flex-col gap-y-2 mt-2">
                            <p className="text-locationError text-xs uppercase tracking-widest font-semibold">Download App</p>
                            <div className="flex gap-x-2">
                                <a href="#" className="flex items-center gap-x-2 border border-[#3d3f4b] hover:border-headerHoverColor transition-colors duration-200 rounded-lg px-3 py-2 group">
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-locationError group-hover:fill-headerHoverColor transition-colors duration-200">
                                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.44c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.39-1.32 2.76-2.53 3.95zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                    </svg>
                                    <div>
                                        <p className="text-locationError text-[9px] leading-none">Download on the</p>
                                        <p className="text-white text-xs font-semibold">App Store</p>
                                    </div>
                                </a>
                                <a href="#" className="flex items-center gap-x-2 border border-[#3d3f4b] hover:border-headerHoverColor transition-colors duration-200 rounded-lg px-3 py-2 group">
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-locationError group-hover:fill-headerHoverColor transition-colors duration-200">
                                        <path d="M3.18 23.76c.3.17.64.22.99.14l12.5-7.2-2.55-2.55-10.94 9.61zm-1.48-21.3C1.38 2.8 1 3.4 1 4.18v15.64c0 .78.38 1.38.7 1.72l.09.08 8.77-8.77v-.2L1.7 2.37l-.01.09zM20.13 9.6l-2.5-1.44-2.85 2.85 2.85 2.85 2.52-1.45c.72-.41.72-1.4-.02-1.81zM4.17.24l12.5 7.22-2.55 2.55L3.18.4A1.17 1.17 0 0 1 4.17.24z" />
                                    </svg>
                                    <div>
                                        <p className="text-locationError text-[9px] leading-none">Get it on</p>
                                        <p className="text-white text-xs font-semibold">Google Play</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* link columns */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 flex-1">
                        {COLUMNS.map((col) => (
                            <FooterColumn key={col.heading} {...col} />
                        ))}
                    </div>
                </div>
            </div>

            {/* divider */}
            <div className="border-t border-[#2e3044]" />

            {/* bottom bar */}
            <div className="w-4/5 mx-auto py-5 flex flex-col md:flex-row items-center justify-between gap-y-3">
                <p className="text-locationError text-xs">
                    &copy; {new Date().getFullYear()} Swiggy Clone · Built with React &amp; Tailwind CSS
                </p>
                <div className="flex items-center gap-x-2">
                    <span className="w-2 h-2 rounded-full bg-headerHoverColor animate-pulse" />
                    <p className="text-locationError text-xs">
                        Made with <span className="text-headerHoverColor font-semibold">love</span> for food
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
