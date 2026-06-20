import { ArrowRight, ChevronRight, Phone, ShieldCheck, Star, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export function PageHero({ eyebrow, title, sub, children }: { eyebrow: string; title: ReactNode; sub?: string; children?: ReactNode }) {
  return (
    <section className="relative bg-surface border-b border-border pt-28 lg:pt-36 overflow-hidden">
      {/* Decorative dental motif */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(40% 60% at 100% 0%, color-mix(in oklab, var(--color-primary) 10%, transparent), transparent 60%), radial-gradient(35% 50% at 0% 100%, color-mix(in oklab, var(--color-secondary) 10%, transparent), transparent 65%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent"
      />
      <Sparkles aria-hidden="true" className="hidden lg:block absolute top-32 right-10 w-6 h-6 text-secondary/40" />

      <div className="container-x py-12 lg:py-20 relative">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] font-medium text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 opacity-60" />
          <span className="text-foreground/80">{eyebrow}</span>
        </nav>
        <div className="mt-5 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 backdrop-blur px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> {eyebrow}
            </span>
            <h1 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl text-primary leading-[1.05] tracking-tight">{title}</h1>
            {sub && <p className="mt-5 text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed">{sub}</p>}
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-secondary" /> ADA-accredited care</span>
              <span className="inline-flex items-center gap-1.5"><Star className="w-4 h-4 text-secondary fill-secondary" /> 3,100+ 5-star reviews</span>
              <span className="inline-flex items-center gap-1.5"><Phone className="w-4 h-4 text-secondary" /> Same-day appointments</span>
            </div>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}

export function CTAStrip() {
  return (
    <section className="container-x py-16">
      <div className="relative rounded-3xl bg-primary text-white p-10 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(40% 60% at 90% 10%, rgba(255,255,255,0.18), transparent 60%)" }}
        />
        <div className="relative">
          <div className="font-display text-3xl md:text-4xl leading-tight">Ready to start your smile journey?</div>
          <div className="text-white/70 mt-2">Book a free consultation today — most slots available within 24 hours.</div>
        </div>
        <div className="relative flex gap-3">
          <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary font-semibold hover:bg-secondary hover:text-white transition-colors">Book now <ArrowRight className="w-4 h-4" /></Link>
          <a href="tel:+12125550199" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 font-semibold hover:bg-white/10 transition-colors"><Phone className="w-4 h-4" /> Call</a>
        </div>
      </div>
    </section>
  );
}
