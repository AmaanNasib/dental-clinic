import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/dental-clinic.png";


const columns = [
  {
    title: "Services",
    links: [
      ["General Dentistry", "/services/general-dentistry"],
      ["Cosmetic Dentistry", "/services/cosmetic-dentistry"],
      ["Dental Implants", "/services/dental-implants"],
      ["Invisalign", "/services/invisalign"],
      ["Emergency Dentist", "/services/emergency-dentist"],
    ],
  },
  {
    title: "Patients",
    links: [
      ["New Patients", "/new-patients"],
      ["Insurance & Financing", "/insurance-financing"],
      ["Reviews", "/reviews"],
      ["Smile Gallery", "/smile-gallery"],
      ["Before & After", "/before-after"],
    ],
  },
  {
    title: "Practice",
    links: [
      ["About Us", "/about-us"],
      ["Meet The Doctors", "/our-doctors"],
      ["Advanced Technology", "/advanced-technology"],
      ["Blog", "/blog"],
      ["FAQs", "/faqs"],
    ],
  },
  {
    title: "Locations",
    links: [
      ["Manhattan", "/locations/manhattan"],
      ["Brooklyn", "/locations/brooklyn"],
      ["Queens", "/locations/queens"],
      ["Long Island", "/locations/long-island"],
      ["Contact", "/contact-us"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-x py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Bright Smile" className="w-50 object-contain" />
            </div>
            <p className="text-white/70 leading-relaxed mb-7 max-w-sm">
              Award-winning cosmetic and family dentistry, trusted by 12,000+ New Yorkers. Built on artistry,
              technology, and warmth.
            </p>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-white/60" />
                432 Park Avenue, Suite 1200, New York, NY 10022
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/60" />
                <a href="tel:+12125550199" className="hover:text-white">(212) 555-0199</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/60" />
                <a href="mailto:hello@brightsmile.dental" className="hover:text-white">hello@brightsmile.dental</a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((c) => (
              <div key={c.title}>
                <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">
                  {c.title}
                </h4>
                <ul className="space-y-2.5">
                  {c.links.map(([label, to]) => (
                    <li key={to}>
                      <Link to={to} className="text-sm text-white/65 hover:text-white transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-white/50 flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>© {new Date().getFullYear()} Bright Smile Dental. All rights reserved.</span>
            <Link to="/privacy-policy" className="hover:text-white">Privacy</Link>
            <Link to="/terms-of-use" className="hover:text-white">Terms</Link>
            <Link to="/accessibility" className="hover:text-white">Accessibility</Link>
            <Link to="/hipaa-notice" className="hover:text-white">HIPAA</Link>
          </div>
          {/* <div className="flex items-center gap-3">
            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="w-9 h-9 rounded-full grid place-items-center bg-white/10 hover:bg-secondary transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
}
