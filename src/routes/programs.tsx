import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { BookOpen, Scissors, HeartPulse, Droplets, Laptop, Users } from "lucide-react";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Our Programs — Divyam Foundation" },
      {
        name: "description",
        content:
          "Learning centres, the Divyam Gurukul pre-school, women's livelihood training, health camps, digital literacy and clean-water drives across 36 villages.",
      },
      { property: "og:title", content: "Our Programs — Divyam Foundation" },
      {
        property: "og:description",
        content: "Six programs in education, livelihood and health run by Divyam Foundation.",
      },
    ],
  }),
  component: Programs,
});

const programs = [
  {
    icon: BookOpen,
    title: "Learning Centres",
    reach: "18 centres · 2,100 children",
    text: "After-school centres for grades 1–8 with remedial Hindi, English and maths, plus library and storytelling hours.",
  },
  {
    icon: Users,
    title: "Divyam Gurukul Pre-school",
    reach: "220 children · ages 2–6",
    text: "Our play-based pre-school preparing first-generation learners for formal school with confidence.",
  },
  {
    icon: Scissors,
    title: "Women's Livelihood",
    reach: "1,200 women trained",
    text: "Six-month tailoring, food processing and beautician courses with tool kits, micro-credit links and buyer tie-ups.",
  },
  {
    icon: HeartPulse,
    title: "Health & Nutrition",
    reach: "Monthly camps · 36 villages",
    text: "Free check-ups, anaemia and vision screening, immunisation follow-ups and nutrition kits for mothers and infants.",
  },
  {
    icon: Laptop,
    title: "Digital Literacy",
    reach: "480 youth per year",
    text: "Basic computing, online safety and job-application workshops for teenagers and young adults.",
  },
  {
    icon: Droplets,
    title: "Clean Water & Sanitation",
    reach: "42 hand-pumps repaired",
    text: "Water-testing drives, hand-pump repair with village committees and school hygiene sessions.",
  },
];

function Programs() {
  return (
    <>
      <PageHero eyebrow="Programs" title="Work that starts in the classroom and reaches the whole household">
        Each program is run with local staff, reviewed every quarter, and reported publicly. Here
        is what your support keeps running.
      </PageHero>

      <section className="section-pad">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <article key={p.title} className="card-warm flex flex-col p-6">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                <p.icon className="size-6" />
              </span>
              <h2 className="mt-4 text-xl">{p.title}</h2>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                {p.reach}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad border-t border-border bg-sand paper-grain">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl">Want to volunteer or fund a program?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Teachers, doctors, designers and weekend storytellers — there is a place for you.
          </p>
          <Link to="/contact" className="btn-primary mt-8">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
