import {
  ArrowRight,
  Calendar,
  Check,
  ClipboardList,
  HeartHandshake,
  MapPin,
  MessageSquare,
  Phone,
  Play,
  Quote,
  Shield,
  Smile,
  Sparkles,
  Stethoscope as StethoIcon,
  Stethoscope, Zap
} from "lucide-react";
import { useState } from "react";

import clinicInterior from "../../assets/clinic-interior.jpg";
import doctorsTeam from "../../assets/doctors-team.jpg";
import drJones from "../../assets/dr-jones.jpg";
import drPatel from "../../assets/dr-patel.jpg";
import drSmith from "../../assets/dr-smith.jpg";
import smile1 from "../../assets/smile-1.jpg";
import technology from "../../assets/technology.jpg";
import { Link } from "react-router-dom";
import { SiteLayout } from "../../components/site/SiteLayout";
import { AnimatePresence, motion } from "framer-motion";



export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <IntroVideo />
      <ServicesExplorer />
      <PracticeValue />
      <SellPractice />
      <FutureOfDentistry />
      <SmileJourney />
      <MoreSupport />
      <IdeasInsights />
      <Testimonials />
      <StatsRow />
      <FinalCTA />
    </SiteLayout>
  );
}


/* ---------- 1. Hero (dark navy, doctors right) ---------- */
function Hero() {
  return (
    <section
      className="relative text-white overflow-hidden min-h-[92vh] flex items-end pt-32 lg:pt-40 pb-20 lg:pb-28 bg-primary"
    >
      {/* Background image */}
      <img
        src={doctorsTeam}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
      <div
        className="absolute inset-0 opacity-70 mix-blend-screen"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 20%, rgba(37,99,235,0.28), transparent 60%), radial-gradient(40% 40% at 10% 90%, rgba(255,255,255,0.06), transparent 70%)",
        }}
      />

      <div className="container-x relative w-full">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/85"
          >
            Award-winning dental care
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display mt-6 text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
          >
            Exceptional Dentistry. Compassionate Care. Beautiful Smiles.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-white/85 max-w-xl leading-relaxed text-base sm:text-lg"
          >
            From a single filling to a complete smile transformation, our doctors combine advanced
            technology with a genuinely human touch — so every patient walks out with the care, the
            confidence, and the smile they deserve.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link to="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-white/90 transition">
              <Calendar className="w-4 h-4" /> Book a visit
            </Link>
            <Link to="/about-us" className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white px-6 py-3 text-sm font-semibold hover:bg-white/10 transition">
              Discover more <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


/* ---------- 2. Intro video ---------- */
function IntroVideo() {
  return (
    <section className="container-x py-20 lg:py-28">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div data-aos="fade-right" className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-soft">
          <img src={clinicInterior} alt="Inside Bright Smile" className="w-full h-[360px] object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/40 transition-colors" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="w-20 h-20 rounded-full bg-white/95 grid place-items-center shadow-elegant group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 text-primary fill-primary ml-1" />
            </div>
          </div>
        </div>
        <div data-aos="fade-left">
          <span className="eyebrow">A Modern Dental Studio</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary mt-4 leading-[1.05]">
            Built by Doctors to Elevate Dentistry
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
            We've spent a decade rethinking the dental experience — from the way you're welcomed at the
            door to the way your care plan is designed. Every detail is shaped by clinicians who believe
            dentistry should feel beautiful, calm, and unmistakably human.
          </p>
          <Link to="/about-us" className="inline-flex items-center gap-2 mt-7 text-primary font-semibold link-underline">
            Learn more <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- 3. Practice value / consultation form ---------- */
function PracticeValue() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-10 items-start">
        <div data-aos="fade-up">
          <span className="eyebrow">Plan Your Visit</span>
          <h2 className="font-display text-4xl sm:text-5xl text-primary mt-4 leading-[1.05]">
            Find out your treatment plan and how to invest in your smile.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
            Tell us a little about you. We'll prepare a personalized estimate, walk you through your
            options, and help you decide what's right — with zero pressure.
          </p>
          <ul className="mt-7 space-y-3">
            {["Complimentary first consultation", "Transparent, itemized pricing", "Flexible financing through CareCredit"].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm text-foreground">
                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary grid place-items-center mt-0.5">
                  <Check className="w-3 h-3" />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { n: "12K+", l: "Smiles Created" },
              { n: "3,100+", l: "5-Star Reviews" },
              { n: "29", l: "Years Combined" },
            ].map((s) => (
              <div key={s.l} className="text-center p-4 rounded-xl bg-white border border-border">
                <div className="font-display text-2xl text-primary">{s.n}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className="bg-white rounded-2xl p-8 lg:p-10 border border-border shadow-soft">
          <h3 className="font-display text-2xl text-primary">Tell us about you</h3>
          <p className="text-sm text-muted-foreground mt-1">All fields required.</p>
          <form className="mt-6 grid grid-cols-2 gap-4">
            {[
              { label: "First Name" }, { label: "Last Name" },
              { label: "Email Address" }, { label: "Phone Number" },
            ].map((f) => (
              <label key={f.label} className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {f.label}
                <input type="text" className="mt-2 w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition" />
              </label>
            ))}
            <label className="col-span-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Service of Interest
              <select className="mt-2 w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition">
                <option>Select an option</option>
                <option>Cosmetic Dentistry</option>
                <option>Invisalign</option>
                <option>Dental Implants</option>
                <option>General Care</option>
              </select>
            </label>
            <label className="col-span-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Preferred Location
              <select className="mt-2 w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition">
                <option>Manhattan</option><option>Brooklyn</option><option>Queens</option><option>Long Island</option>
              </select>
            </label>
            <label className="col-span-2 flex items-start gap-2 text-xs text-muted-foreground mt-2">
              <input type="checkbox" className="mt-0.5" />
              I agree to receive communications from Bright Smile Dental. Standard message rates may apply.
            </label>
            <button type="button" className="col-span-2 mt-3 rounded-full bg-primary text-white py-3.5 font-semibold text-sm hover:bg-primary/90 transition">
              Request My Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- 4. Sell / supported card ---------- */
function SellPractice() {
  const items = [
    { t: "Award-winning clinicians", to: "/our-doctors" },
    { t: "Industry-leading technology", to: "/advanced-technology" },
    { t: "Comfort & sedation menu", to: "/services" },
  ];
  return (
    <section className="container-x py-20 lg:py-28">
      <div className="bg-white rounded-3xl border border-border shadow-elegant p-8 lg:p-14 grid lg:grid-cols-2 gap-10 items-center" data-aos="fade-up">
        <div className="relative rounded-2xl overflow-hidden">
          <img src={drSmith} alt="Dr. Smith consulting" className="w-full h-[360px] object-cover" />
        </div>
        <div>
          <span className="eyebrow">Why Choose Bright Smile</span>
          <h2 className="font-display text-4xl lg:text-5xl text-primary mt-4 leading-[1.05]">
            Care That Treats You Like Family — Not a Number.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Our doctors take the time to listen, plan, and craft a treatment experience that fits your
            life. From your first call to your final follow-up, every step is designed around you.
          </p>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {items.map((it) => (
              <li key={it.t}>
                <Link to={it.to} className="flex items-center justify-between py-4 group">
                  <span className="font-display text-xl text-primary">{it.t}</span>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. Future of dentistry — dark navy with collage ---------- */
function FutureOfDentistry() {
  return (
    <section className="bg-primary text-white py-20 lg:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <span className="text-xs uppercase tracking-[0.22em] text-white/60 font-semibold">{`{ The Future }`}</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-4 leading-[1.05]">
            Bring the Future of Dentistry to Your Chair.
          </h2>
          <p className="mt-6 text-white/75 leading-relaxed max-w-lg">
            Same-day digital crowns, 3D guided implant placement, AI-assisted diagnostics — our team
            works with the most advanced tools in modern dentistry so you get faster, more accurate,
            and more comfortable care.
          </p>
          <Link to="/advanced-technology" className="inline-flex items-center gap-2 mt-7 text-white font-semibold link-underline">
            Explore our technology <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div data-aos="fade-left" className="grid grid-cols-2 gap-4">
          <img src={technology} alt="Advanced dental technology" className="rounded-2xl object-cover h-56 w-full" />
          <img src={clinicInterior} alt="Modern dental clinic" className="rounded-2xl object-cover h-72 w-full mt-8" />
          <img src={drJones} alt="Dr. Jones" className="rounded-2xl object-cover h-72 w-full col-span-1" />
          <img src={drPatel} alt="Dr. Patel" className="rounded-2xl object-cover h-56 w-full -mt-8" />
        </div>
      </div>
    </section>
  );
}

/* ---------- 6. More support split ---------- */
function MoreSupport() {
  return (
    <section className="container-x py-20 lg:py-28">
      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        <div data-aos="fade-right" className="rounded-2xl overflow-hidden">
          <img src={doctorsTeam} alt="Friendly dental team" className="w-full h-full min-h-[380px] object-cover" />
        </div>
        <div data-aos="fade-left" className="bg-surface rounded-2xl p-10 lg:p-14 flex flex-col justify-center">
          <span className="eyebrow">A Life Outside the Chair</span>
          <h2 className="font-display text-3xl lg:text-5xl text-primary mt-4 leading-[1.1]">
            More Care Means More Confidence — In and Out of the Office.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We believe great dentistry should give you more — more time with your family, more reason
            to smile in photos, more confidence in every meeting. Our promise is care that supports
            your whole life.
          </p>
          <Link to="/about-us" className="inline-flex items-center gap-2 mt-7 text-primary font-semibold link-underline">
            Learn more <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- 7. Ideas / Insights blog row ---------- */
function IdeasInsights() {
  return (
    <section className="container-x pb-20 lg:pb-28">
      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        <div data-aos="fade-right" className="bg-surface rounded-2xl p-10 lg:p-14 flex flex-col justify-center">
          <span className="eyebrow">Insights</span>
          <h2 className="font-display text-3xl lg:text-5xl text-primary mt-4 leading-[1.1]">
            Ideas, Insights, and Inspiration From Dental Industry Leaders.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Read what our doctors are writing about modern cosmetic dentistry, implant innovation, and
            what's next for patient experience.
          </p>
          <div className="flex gap-3 mt-7">
            <Link to="/blog" className="btn-primary">Read the blog</Link>
            <Link to="/our-doctors" className="btn-secondary">Meet the team</Link>
          </div>
        </div>
        <div data-aos="fade-left" className="rounded-2xl overflow-hidden">
          <img src={drJones} alt="Bright Smile dental team" className="w-full h-full min-h-[380px] object-cover" />
        </div>
      </div>
    </section>
  );
}

/* ---------- 8. Testimonials grid ---------- */
function Testimonials() {
  const items = [
    { name: "Sarah M.", role: "Veneers Patient", text: "An absolutely transformative experience. My veneers look stunning and feel completely natural. The team is genuinely caring.", img: drSmith },
    { name: "James R.", role: "Implant Patient", text: "Best dental experience I could have asked for. Painless, professional, and the result is incredible.", img: drPatel },
  ];
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="container-x">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary text-center max-w-3xl mx-auto leading-[1.1]" data-aos="fade-up">
          What Patients Say About Bright Smile Dental.
        </h2>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={it.name} data-aos="fade-up" data-aos-delay={i * 80} className="bg-white rounded-2xl p-7 border border-border shadow-soft">
              <Quote className="w-7 h-7 text-primary/20" />
              <p className="mt-4 text-foreground leading-relaxed text-sm">{it.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <img src={it.img} alt={it.name} className="w-11 h-11 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold text-primary">{it.name}</div>
                  <div className="text-xs text-muted-foreground">{it.role}</div>
                </div>
              </div>
            </div>
          ))}
          <div data-aos="fade-up" data-aos-delay="160" className="bg-white rounded-2xl p-7 border border-border shadow-soft flex flex-col justify-between">
            <div className="rounded-xl overflow-hidden">
              <img src={smile1} alt="Beautiful smile" className="w-full h-40 object-cover" />
            </div>
            <div className="mt-6">
              <div className="font-display text-4xl text-primary">3,100+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Verified 5-star reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 9. Stats row with image + quote ---------- */
function StatsRow() {
  return (
    <section className="container-x py-20 lg:py-28">
      <div className="grid lg:grid-cols-3 gap-6">
        <div data-aos="fade-up" className="bg-primary text-white rounded-2xl p-10 flex flex-col justify-end min-h-[260px] relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(50% 50% at 50% 0%, rgba(255,255,255,0.4), transparent)" }} />
          <div className="relative">
            <div className="font-display text-5xl">29 Years</div>
            <div className="text-sm text-white/70 mt-2">of combined clinical excellence</div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="80" className="bg-white rounded-2xl p-8 border border-border shadow-soft">
          <Quote className="w-7 h-7 text-primary/20" />
          <p className="mt-4 text-foreground leading-relaxed text-sm">
            "After years of avoiding dentists, Bright Smile made me feel safe. Gentle, modern, and
            beautifully run practice."
          </p>
          <div className="mt-5 text-sm font-semibold text-primary">Aisha K.</div>
          <div className="text-xs text-muted-foreground">Full Mouth Restoration</div>
        </div>
        <div data-aos="fade-up" data-aos-delay="160" className="rounded-2xl overflow-hidden relative min-h-[260px]">
          <img src={clinicInterior} alt="Our location" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/85 to-primary/10" />
          <div className="relative h-full p-8 flex flex-col justify-end text-white">
            <div className="font-display text-2xl">Find a location near you</div>
            <Link to="/locations" className="inline-flex items-center gap-2 mt-3 text-sm font-semibold">
              <MapPin className="w-4 h-4" /> View all locations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 10. Final CTA ---------- */
function FinalCTA() {
  return (
    <section className="container-x pb-24 lg:pb-32">
      <div className="grid lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl border border-border shadow-elegant overflow-hidden">
        <img src={doctorsTeam} alt="Bright Smile doctors" className="w-full h-full min-h-[360px] object-cover" />
        <div className="p-10 lg:p-14">
          <span className="eyebrow">Let's Begin</span>
          <h2 className="font-display text-4xl lg:text-5xl text-primary mt-4 leading-[1.05]">
            Together, Let's Build the Smile You've Always Wanted.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Book a complimentary consultation today and meet the team designing tomorrow's dentistry —
            with the warmth of a family practice.
          </p>
          <div className="flex flex-wrap gap-3 mt-7">
            <Link to="/contact-us" className="btn-primary">
              <Calendar className="w-4 h-4" /> Book a visit
            </Link>
            <a href="tel:+12125550199" className="btn-secondary">
              <Phone className="w-4 h-4" /> (212) 555-0199
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Interactive: Services Explorer (tabbed with image preview) ---------- */
function ServicesExplorer() {
  const tabs = [
    { key: "cosmetic", label: "Cosmetic", icon: Sparkles, title: "Veneers & Smile Design", desc: "Custom-crafted porcelain veneers and bonding designed around your face shape and personality.", points: ["Digital smile preview", "Minimal-prep veneers", "Same-day temporaries"], img: smile1, to: "/services/cosmetic-dentistry" },
    { key: "implants", label: "Implants", icon: Shield, title: "Dental Implants", desc: "Single-tooth to full-arch implant solutions with 3D-guided placement for predictable results.", points: ["3D-guided surgery", "Same-day teeth available", "Lifetime warranty options"], img: drJones, to: "/services/restorative-dentistry" },
    { key: "invisalign", label: "Invisalign", icon: Smile, title: "Clear Aligners", desc: "Near-invisible orthodontics for adults and teens — straighten without the metalwork.", points: ["Free 3D scan", "Avg. 6–12 month plans", "Flexible monthly payments"], img: drPatel, to: "/services/cosmetic-dentistry" },
    { key: "general", label: "General", icon: Stethoscope, title: "Preventive Care", desc: "Cleanings, exams, fillings and family dentistry — the foundation of a lifelong healthy smile.", points: ["Insurance accepted", "Kids welcome", "Gentle hygiene team"], img: clinicInterior, to: "/services/general-dentistry" },
    { key: "whitening", label: "Whitening", icon: Zap, title: "Professional Whitening", desc: "Brighten up to 8 shades safely with in-office or take-home protocols.", points: ["1-visit results", "Take-home trays", "Sensitivity-safe formulas"], img: drSmith, to: "/services/cosmetic-dentistry" },
  ];
  const [active, setActive] = useState(tabs[0].key);
  const current = tabs.find((t) => t.key === active)!;

  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="container-x">
        <div className="max-w-2xl" data-aos="fade-up">
          <span className="eyebrow">Explore our care</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary mt-4 leading-[1.05]">
            Find the right treatment for your smile.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
            Tap any specialty to see what's involved, what's included, and how we plan it around you.
          </p>
        </div>

        {/* Tab bar */}
        <div className="mt-10 -mx-3 px-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {tabs.map((t) => {
              const on = active === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold border transition-all ${on ? "bg-primary text-white border-primary shadow-soft" : "bg-white text-primary border-border hover:border-primary/40"}`}
                >
                  <t.icon className="w-4 h-4" /> {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Panel */}
        <div className="mt-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key + "-img"}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="relative rounded-3xl overflow-hidden min-h-[360px] shadow-elegant"
            >
              <img src={current.img} alt={current.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  <current.icon className="w-3.5 h-3.5" /> {current.label}
                </div>
                <div className="font-display text-2xl mt-3">{current.title}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.key + "-body"}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl border border-border p-8 lg:p-10 flex flex-col"
            >
              <h3 className="font-display text-3xl lg:text-4xl text-primary leading-tight">{current.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{current.desc}</p>
              <ul className="mt-6 space-y-3">
                {current.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="w-5 h-5 rounded-full bg-secondary/15 text-secondary grid place-items-center mt-0.5">
                      <Check className="w-3 h-3" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8 flex flex-wrap gap-3">
                <Link to={current.to} className="btn-primary">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact-us" className="btn-secondary">
                  <Calendar className="w-4 h-4" /> Book a consult
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ---------- Interactive: Smile Journey timeline ---------- */
function SmileJourney() {
  const steps = [
    { icon: MessageSquare, t: "Say hello", d: "Tell us what you need in a 60-second form — or call us directly." },
    { icon: ClipboardList, t: "Plan together", d: "Free consult, digital scans, and an itemized treatment plan with options." },
    { icon: StethoIcon, t: "Gentle treatment", d: "Modern, sedation-friendly care from a team that treats you like family." },
    { icon: HeartHandshake, t: "Smile for life", d: "Lifelong follow-up, hygiene, and warranty support on every restoration." },
  ];
  const [hover, setHover] = useState<number>(0);

  return (
    <section className="bg-primary text-white py-20 lg:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(50% 50% at 80% 10%, rgba(255,255,255,0.15), transparent 60%), radial-gradient(40% 40% at 10% 90%, rgba(37,99,235,0.35), transparent 70%)" }}
      />
      <div className="container-x relative">
        <div className="max-w-2xl" data-aos="fade-up">
          <span className="text-xs uppercase tracking-[0.22em] text-white/60 font-semibold">{`{ The Journey }`}</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-4 leading-[1.05]">
            From hello to your healthiest smile.
          </h2>
          <p className="mt-5 text-white/75 leading-relaxed max-w-lg">
            Four simple steps. No surprises. Hover or tap a step to see what to expect.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-4 gap-4 relative">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-px bg-white/15" />
          {steps.map((s, i) => {
            const on = hover === i;
            return (
              <button
                key={s.t}
                onMouseEnter={() => setHover(i)}
                onFocus={() => setHover(i)}
                onClick={() => setHover(i)}
                className="relative text-left group"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className={`relative z-10 w-14 h-14 rounded-2xl grid place-items-center transition-all duration-300 ${on ? "bg-secondary text-white scale-110 shadow-elegant" : "bg-white/10 text-white border border-white/20 group-hover:bg-white/15"}`}>
                  <s.icon className="w-6 h-6" />
                </div>
                <div className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-primary border border-white/20 text-[10px] font-bold grid place-items-center text-white/80">
                  {i + 1}
                </div>
                <div className={`mt-5 font-display text-xl transition-colors ${on ? "text-white" : "text-white/80"}`}>{s.t}</div>
                <motion.div
                  initial={false}
                  animate={{ opacity: on ? 1 : 0.55, y: on ? 0 : 4 }}
                  className="mt-2 text-sm text-white/65 leading-relaxed"
                >
                  {s.d}
                </motion.div>
              </button>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link to="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-white/90 transition">
            <Calendar className="w-4 h-4" /> Start your journey
          </Link>
          <Link to="/new-patients" className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white px-6 py-3 text-sm font-semibold hover:bg-white/10 transition">
            New-patient guide <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
