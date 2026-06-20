import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "../../../components/site/SiteLayout";
import { CTAStrip, PageHero } from "../../../components/site/PageHero";


const posts = [
  {
    slug: "dental-implant-cost-nyc",
    tag: "Implants",
    title: "The Real Cost of Dental Implants in NYC (2026 Guide)",
    read: "8 min",
  },
  {
    slug: "veneers-cost",
    tag: "Cosmetic",
    title: "Veneers vs. Bonding: Which Is Right For Your Smile?",
    read: "6 min",
  },
  {
    slug: "invisalign-vs-braces",
    tag: "Invisalign",
    title: "Invisalign vs Braces: An Honest Comparison",
    read: "5 min",
  },
  {
    slug: "how-often-cleaning",
    tag: "Hygiene",
    title: "How Often Should You Really Get a Dental Cleaning?",
    read: "4 min",
  },
  {
    slug: "teeth-whitening-cost",
    tag: "Cosmetic",
    title: "Teeth Whitening Cost — In-Office vs Take-Home",
    read: "5 min",
  },
  {
    slug: "best-cosmetic-dentist-nyc",
    tag: "Cosmetic",
    title: "How to Choose the Best Cosmetic Dentist in NYC",
    read: "7 min",
  },
];

export default function Blog() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Journal"
        title={
          <>
            From the chair,{" "}
            <span className="italic text-secondary">
              to your inbox.
            </span>
          </>
        }
        sub="Expert guides, honest answers, and the latest from our team."
      />

      <section className="container-x py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group p-8 rounded-2xl bg-white border border-border hover:border-secondary hover:-translate-y-1 transition-all hover:shadow-soft"
          >
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/5 text-secondary">
              {post.tag}
            </span>

            <h3 className="font-display text-2xl text-primary mt-5 leading-snug group-hover:text-secondary transition-colors">
              {post.title}
            </h3>

            <div className="mt-8 flex items-center justify-between text-sm text-muted-foreground">
              <span>{post.read} read</span>
              <ArrowUpRight className="w-4 h-4 text-secondary" />
            </div>
          </Link>
        ))}
      </section>

      <CTAStrip />
    </SiteLayout>
  );
}