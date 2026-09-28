import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { HeartHandshake, GraduationCap, Stethoscope, Sprout, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import gurukulImg from "@/assets/gurukul.jpg";
import logo from "@/assets/divyam-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Divyam Foundation — Education & Care for Every Child" },
      {
        name: "description",
        content:
          "Divyam Foundation is a Berhampore-based NGO running early education, women's livelihood and health programs, and the Divyam Gurukul pre-school.",
      },
      { property: "og:title", content: "Divyam Foundation — Education & Care for Every Child" },
      {
        property: "og:description",
        content:
          "Early education, women's livelihoods and community health across Berhampore and Murshidabad — plus our Divyam Gurukul pre-school.",
      },
    ],
  }),
  component: Home,
});

function WelcomeVeil() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 4500);
    return () => clearTimeout(t);
  }, []);
  if (done) return null;

  return (
    <div className="welcome-veil fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-background paper-grain">
      <div className="relative flex items-center justify-center">
        <span className="absolute size-56 rounded-full bg-accent/40 blur-3xl animate-logo-glow" />
        <div className="relative overflow-hidden">
          <img
            src={logo.url}
            alt="Divyam Foundation logo"
            className="w-64 max-w-[70vw] mix-blend-multiply animate-logo-bloom sm:w-80"
          />
          <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-shine" />
        </div>
      </div>
      <p
        className="text-xs tracking-[0.4em] text-muted-foreground uppercase animate-fade sm:text-sm"
        style={{ animationDelay: "2s" }}
      >
        Seva · Shiksha · Sanskar
      </p>
      <span className="h-0.5 w-40 rounded-full bg-accent animate-underline" style={{ animationDelay: "2.1s" }} />
    </div>
  );
}

const stats = [
  { value: "4,800+", label: "Children taught" },
  { value: "1,200", label: "Women trained" },
  { value: "36", label: "Villages reached" },
  { value: "12", label: "Years of service" },
];

const pillars = [
  {
    icon: GraduationCap,
    title: "Early Education",
    text: "Pre-schools, after-school centres and bridge classes that keep first-generation learners in school.",
  },
  {
    icon: Sprout,
    title: "Women's Livelihood",
    text: "Tailoring, food processing and digital literacy training with market linkages for self-help groups.",
  },
  {
    icon: Stethoscope,
    title: "Health & Nutrition",
    text: "Monthly health camps, anaemia screening and nutrition kits for mothers and young children.",
  },
  {
    icon: HeartHandshake,
    title: "Community Care",
    text: "Elder support, disaster relief and clean-water drives run by trained local volunteers.",
  },
];

function Home() {
  return (
    <>
      <WelcomeVeil />

      <section className="relative overflow-hidden border-b border-border bg-sand paper-grain">
        <div className="container-page grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="eyebrow animate-fade">Since 2014 · Berhampore, West Bengal</span>
            <h1 className="mt-4 text-4xl leading-[1.08] animate-rise md:text-6xl">
              Every child deserves a{" "}
              <span className="relative inline-block text-primary">
                bright beginning
                <span className="absolute -bottom-1 left-0 block h-1.5 w-full rounded-full bg-accent animate-underline" />
              </span>
            </h1>
            <p
              className="mt-6 max-w-xl text-lg text-muted-foreground animate-rise"
              style={{ animationDelay: "0.2s" }}
            >
              Divyam Foundation works with families in underserved neighbourhoods and villages —
              teaching children, training women and caring for the community. Our pre-school,
              Divyam Gurukul, is where many of these journeys begin.
            </p>
            <div
              className="mt-8 flex flex-wrap gap-3 animate-rise"
              style={{ animationDelay: "0.35s" }}
            >
              <Link to="/contact" className="btn-primary">
                Donate now <ArrowRight className="size-4" />
              </Link>
              <Link to="/gurukul" className="btn-ghost">
                Visit Divyam Gurukul
              </Link>
            </div>
          </div>

          <div className="relative animate-fade" style={{ animationDelay: "0.3s" }}>
            <div className="absolute -top-6 -left-6 size-28 rounded-full bg-accent/50 animate-float" />
            <img
              src={heroImg}
              alt="Children learning in a community class under a banyan tree"
              width={1600}
              height={1008}
              className="relative w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="text-center animate-rise"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="font-display text-3xl text-primary md:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <span className="eyebrow">What we do</span>
          <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">
            Four pillars that hold a childhood together
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <article key={p.title} className="card-warm p-6">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <p.icon className="size-6" />
                </span>
                <h3 className="mt-4 text-lg">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </article>
            ))}
          </div>
          <Link to="/programs" className="btn-ghost mt-10">
            See all programs <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="section-pad border-y border-border bg-sand paper-grain">
        <div className="container-page grid items-center gap-12 md:grid-cols-2">
          <img
            src={gurukulImg}
            alt="Toddlers playing with alphabet blocks at Divyam Gurukul pre-school"
            loading="lazy"
            width={1600}
            height={1008}
            className="w-full rounded-3xl object-cover shadow-[var(--shadow-warm)]"
          />
          <div>
            <span className="eyebrow">Our pre-school</span>
            <h2 className="mt-3 text-3xl md:text-4xl">Divyam Gurukul</h2>
            <p className="mt-4 text-muted-foreground">
              A joyful, play-based pre-school for children aged 2 to 6. Small groups, trained
              teachers, Hindi and English readiness, and a curriculum rooted in stories, songs,
              art and free play. Fees are on a sliding scale — no child is turned away.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li>• Playgroup, Nursery, LKG and UKG batches</li>
              <li>• 1 teacher for every 8 children</li>
              <li>• Daily nutritious snack and health checks</li>
            </ul>
            <Link to="/gurukul" className="btn-primary mt-7">
              Explore Divyam Gurukul <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page card-warm px-8 py-12 text-center">
          <h2 className="text-3xl md:text-4xl">₹1,500 educates a child for a month</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Your support pays for teachers, learning material, snacks and health check-ups. Every
            rupee is accounted for in our annual public report.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-primary">
              Donate
            </Link>
            <Link to="/about" className="btn-ghost">
              Meet the team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
