import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, Calendar, ChevronRight, ChevronDown } from "lucide-react";
import logo from "../../assets/dental-clinic.png";
import { Link } from "react-router-dom";

type SubItem = { label: string; to: string; desc?: string };
type NavItem = { label: string; to: string; columns?: { title: string; items: SubItem[] }[]; feature?: { title: string; desc: string; to: string } };

const nav: NavItem[] = [
  { label: "About", to: "/about-us" },
  {
    label: "Services",
    to: "/services",
    feature: {
      title: "Complete dental care, under one roof",
      desc: "From routine checkups to full smile makeovers — designed around you.",
      to: "/services",
    },
    columns: [
      {
        title: "General",
        items: [
          { label: "Dental Cleaning", to: "/services/dental-cleaning" },
          { label: "Dental Fillings", to: "/services/dental-fillings" },
          { label: "Root Canal", to: "/services/root-canal" },
          { label: "Tooth Extraction", to: "/services/tooth-extraction" },
        ],
      },
      {
        title: "Cosmetic",
        items: [
          { label: "Porcelain Veneers", to: "/services/veneers" },
          { label: "Teeth Whitening", to: "/services/teeth-whitening" },
          { label: "Dental Bonding", to: "/services/dental-bonding" },
          { label: "Smile Makeover", to: "/services/smile-makeover" },
        ],
      },
      {
        title: "Restorative",
        items: [
          { label: "Single Tooth Implant", to: "/services/single-tooth-implant" },
          { label: "All-on-4 Implants", to: "/services/all-on-4-implants" },
          { label: "Full Mouth Restoration", to: "/services/full-mouth-restoration" },
          { label: "Invisalign", to: "/services/invisalign" },
        ],
      },
    ],
  },
  {
    label: "Doctors",
    to: "/our-doctors",
    feature: { title: "Meet the team", desc: "Specialists, generalists, and surgeons working together.", to: "/our-doctors" },
    columns: [
      {
        title: "Lead Doctors",
        items: [
          { label: "Dr. Emily Smith", to: "/our-doctors/dr-smith" },
          { label: "Dr. Marcus Jones", to: "/our-doctors/dr-jones" },
          { label: "Dr. Anika Patel", to: "/our-doctors/dr-patel" },
        ],
      },
      {
        title: "Practice",
        items: [
          { label: "Our Approach", to: "/about-us" },
          { label: "Advanced Technology", to: "/advanced-technology" },
          { label: "New Patients", to: "/new-patients" },
        ],
      },
    ],
  },
  {
    label: "Smile Gallery",
    to: "/smile-gallery",
    feature: { title: "Real patients. Real results.", desc: "Browse before & afters by treatment.", to: "/smile-gallery" },
    columns: [
      {
        title: "By Treatment",
        items: [
          { label: "Veneers", to: "/smile-gallery/veneers" },
          { label: "Whitening", to: "/smile-gallery/whitening" },
          { label: "Implants", to: "/smile-gallery/implants" },
          { label: "Invisalign", to: "/smile-gallery/invisalign" },
        ],
      },
      {
        title: "More",
        items: [
          { label: "Before & After", to: "/before-after" },
          { label: "Reviews", to: "/reviews" },
          { label: "FAQs", to: "/faqs" },
        ],
      },
    ],
  },
  {
    label: "Locations",
    to: "/locations",
    feature: { title: "Find a clinic near you", desc: "Multiple offices, same exceptional standard of care.", to: "/locations" },
    columns: [
      {
        title: "Manhattan",
        items: [
          { label: "Midtown East", to: "/locations/midtown-east" },
          { label: "Upper West Side", to: "/locations/upper-west-side" },
          { label: "SoHo", to: "/locations/soho" },
        ],
      },
      {
        title: "Outer Boroughs",
        items: [
          { label: "Brooklyn Heights", to: "/locations/brooklyn-heights" },
          { label: "Long Island City", to: "/locations/long-island-city" },
        ],
      },
    ],
  },
  { label: "Blog", to: "/blog" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const openMenu = (label: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setActiveMenu(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setActiveMenu(null), 140);
  };

  const active = nav.find((n) => n.label === activeMenu && n.columns);

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-500 ease-out left-3 right-3 sm:left-5 sm:right-5 max-w-[1400px] mx-auto rounded-full bg-primary text-white border border-white/10 ${scrolled
          ? "top-3 shadow-[0_18px_50px_-18px_rgba(7,27,77,0.55)]"
          : "top-4 shadow-[0_8px_30px_-12px_rgba(7,27,77,0.35)]"
          }`}
        onMouseLeave={scheduleClose}
      >
        <div className="px-3 sm:px-6 flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2 shrink-0 min-w-0" onClick={() => setOpen(false)}>
            <img src={logo} alt="Bright Smile" className="w-40 object-contain" />
            {/* <div className="w-9 h-9 rounded-xl grid place-items-center bg-white shrink-0 overflow-hidden">
            </div>
            <span className="font-semibold tracking-tight text-[15px] truncate">Bright Smile</span> */}
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => {
              const hasMenu = !!n.columns;
              const isActive = activeMenu === n.label;
              return (
                <div key={n.to} onMouseEnter={() => (hasMenu ? openMenu(n.label) : scheduleClose())}>
                  <Link
                    to={n.to}
                    className={`text-[13px] font-medium px-3 py-2 rounded-full inline-flex items-center gap-1 transition-colors ${isActive ? "text-white bg-white/10" : "text-white/75 hover:text-white"
                      }`}
                  >
                    {n.label}
                    {hasMenu && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} />
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a href="tel:+12125550199" className="hidden xl:flex items-center gap-2 text-[13px] font-medium text-white/80 hover:text-white">
              <Phone className="w-3.5 h-3.5" /> (212) 555-0199
            </a>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-primary text-[13px] font-semibold hover:bg-white/90 transition-all"
            >
              <Calendar className="w-3.5 h-3.5" /> Book Now
            </Link>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors shrink-0"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative w-5 h-5 block">
              <Menu className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${open ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}`} />
              <X className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"}`} />
            </span>
          </button>
        </div>

        {/* Desktop full-width mega menu */}
        <div
          className={`hidden lg:block absolute left-0 right-0 top-full pt-3 transition-all duration-300 ease-out ${active ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          onMouseEnter={() => active && openMenu(active.label)}
          onMouseLeave={scheduleClose}
        >
          <div className="mx-auto bg-white text-foreground rounded-3xl shadow-[0_30px_80px_-20px_rgba(7,27,77,0.35)] border border-border overflow-hidden">
            {active && (
              <div className="grid grid-cols-12 gap-8 p-8">
                <div className="col-span-4 bg-surface rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-primary/70">{active.label}</div>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-primary leading-tight">{active.feature?.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{active.feature?.desc}</p>
                  </div>
                  <Link
                    to={active.feature?.to ?? active.to}
                    onClick={() => setActiveMenu(null)}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group"
                  >
                    Explore all <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
                <div className="col-span-8 grid grid-cols-3 gap-6">
                  {active.columns?.map((col) => (
                    <div key={col.title}>
                      <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-muted-foreground mb-3">{col.title}</div>
                      <ul className="space-y-1">
                        {col.items.map((it, i) => (
                          <li
                            key={it.to}
                            className={`transition-all duration-500 ease-out ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}
                            style={{ transitionDelay: active ? `${80 + i * 40}ms` : "0ms" }}
                          >
                            <Link
                              to={it.to}
                              onClick={() => setActiveMenu(null)}
                              className="group flex items-center justify-between gap-2 py-2 px-3 -mx-3 rounded-lg text-[14px] font-medium text-foreground hover:bg-surface hover:text-primary transition-colors"
                            >
                              <span>{it.label}</span>
                              <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm" />
      </div>
      <aside
        className={`lg:hidden fixed top-0 right-0 z-50 h-[100dvh] w-[min(86vw,360px)] bg-white text-foreground shadow-2xl transition-transform duration-400 ease-[cubic-bezier(.65,0,.35,1)] flex flex-col ${open ? "translate-x-0" : "translate-x-full"
          }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-border">
          <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2 min-w-0">
            {/* <div className="w-9 h-9 rounded-xl grid place-items-center bg-primary/5 overflow-hidden shrink-0">
              <img src={logo} alt="" width={36} height={36} className="w-7 h-7 object-contain" />
            </div>
            <span className="font-semibold tracking-tight truncate">Bright Smile</span> */}
            <img src={logo} alt="Bright Smile" className="w-40 object-contain" />

          </Link>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface hover:bg-accent text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-3">
          <ul className="flex flex-col">
            {nav.map((n, i) => {
              const hasMenu = !!n.columns;
              const isOpen = mobileSub === n.label;
              return (
                <li
                  key={n.to}
                  className={`transform transition-all duration-500 ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                  style={{ transitionDelay: open ? `${60 + i * 35}ms` : "0ms" }}
                >
                  <div className="flex items-center">
                    <Link
                      to={n.to}
                      onClick={() => setOpen(false)}
                      className="flex-1 py-3 px-3 rounded-xl font-medium text-[15px] text-foreground hover:bg-surface transition-colors"
                    >
                      {n.label}
                    </Link>
                    {hasMenu && (
                      <button
                        aria-label={`Toggle ${n.label} submenu`}
                        aria-expanded={isOpen}
                        onClick={() => setMobileSub(isOpen ? null : n.label)}
                        className="ml-1 inline-flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:bg-surface"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>
                  {hasMenu && (
                    <div
                      className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <div className="pl-4 pr-2 pb-2 pt-1 space-y-3">
                          {n.columns?.map((col) => (
                            <div key={col.title}>
                              <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-muted-foreground px-3 mb-1">{col.title}</div>
                              <ul>
                                {col.items.map((it) => (
                                  <li key={it.to}>
                                    <Link
                                      to={it.to}
                                      onClick={() => setOpen(false)}
                                      className="flex items-center justify-between gap-2 py-2 px-3 rounded-lg text-[14px] text-foreground/85 hover:bg-surface hover:text-primary transition-colors"
                                    >
                                      <span>{it.label}</span>
                                      <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-border p-4 space-y-3">
          <a href="tel:+12125550199" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary">
            <Phone className="w-4 h-4" /> (212) 555-0199
          </a>
          <Link
            to="/contact-us"
            onClick={() => setOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all"
          >
            <Calendar className="w-4 h-4" /> Book Appointment
          </Link>
        </div>
      </aside>
    </>
  );
}
