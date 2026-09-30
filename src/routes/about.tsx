import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Mail } from "lucide-react";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t4 from "@/assets/team-4.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us & Our Team — Divyam Foundation" },
      {
        name: "description",
        content:
          "Our story since 2014, our values, and the three people who lead Divyam Foundation's education, livelihood and health work in Berhampore.",
      },
      { property: "og:title", content: "About Us & Our Team — Divyam Foundation" },
      {
        property: "og:description",
        content: "Meet the trustees and team leading Divyam Foundation and Divyam Gurukul.",
      },
    ],
  }),
  component: About,
});

const team = [
  {
    name: "Luna Sarkar",
    role: "Founder & Managing Trustee",
    photo: t2,
    email: "luna@divyamfoundation.org",
    bio: "A retired schoolteacher from Khagra, Luna started Divyam in 2014 with one evening class of 14 children on her own terrace. She leads governance, land and partnership work.",
    tags: ["Governance", "Community outreach"],
  },
  {
    name: "Gargi Sarkar",
    role: "Director — Programs",
    photo: t4,
    email: "gargi@divyamfoundation.org",
    bio: "A development professional with 18 years in child rights, Gargi designs our education and livelihood programs and holds the team to measurable outcomes for every cohort.",
    tags: ["Program design", "Monitoring"],
  },
  {
    name: "Sibajyoti Bhowmick",
    role: "Head — Operations & Finance",
    photo: t1,
    email: "sibajyoti@divyamfoundation.org",
    bio: "A chartered accountant who left corporate audit to run our books, Sibajyoti manages compliance, 80G reporting and the transparent annual public accounts.",
    tags: ["Finance", "Compliance"],
  },
];

const values = [
  {
    title: "Dignity first",
    text: "Families are partners, never beneficiaries. Nothing is designed without them in the room.",
  },
  {
    title: "Radical transparency",
    text: "Every rupee is published in our annual report; donors get project-level updates.",
  },
  { title: "Local hands", text: "Nine in ten of our staff live in the communities they serve." },
];

const timeline = [
  { year: "2014", text: "Founded with one evening class of 14 children on a terrace in Khagra." },
  { year: "2017", text: "Divyam Gurukul pre-school opens in Khagra, Berhampore." },
  {
    year: "2020",
    text: "Ration and tele-learning drive reaches 2,300 families through the pandemic.",
  },
  { year: "2023", text: "Women's livelihood centre and 12 new learning centres launched." },
  { year: "2026", text: "4,800+ children taught; second Gurukul campus under construction." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Divyam Foundation"
        title="A terrace class in 2014. Thirty-six villages today."
      >
        We are a registered non-profit in Berhampore working so that a child's postcode never
        decides their future — through education, women's livelihoods and community health.
      </PageHero>

      <section className="section-pad">
        <div className="container-page grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl">Our story</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                Divyam began when a retired schoolteacher noticed that the children of the
                construction workers near his home had never held a pencil. Fourteen children came
                to that first evening class on his terrace. Word travelled, mothers started asking
                for skills training, and a class became an organisation.
              </p>
              <p>
                Twelve years on, Divyam Foundation runs learning centres, a full-fledged pre-school
                called Divyam Gurukul, a women's livelihood workshop and monthly health camps.
                Everything we build is designed to be run, eventually, by the community itself.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="card-warm p-5">
                <h3 className="text-lg">Our mission</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  To give every child in our reach a strong educational foundation and every mother
                  a path to income.
                </p>
              </div>
              <div className="card-warm p-5">
                <h3 className="text-lg">Our vision</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Communities where learning, health and dignity are ordinary, not exceptional.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl">Milestones</h2>
            <ol className="mt-6 space-y-6 border-l-2 border-border pl-6">
              {timeline.map((m) => (
                <li key={m.year} className="relative">
                  <span className="absolute -left-[1.9rem] top-1.5 size-3 rounded-full bg-primary" />
                  <div className="font-display text-xl text-primary">{m.year}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{m.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-border bg-sand paper-grain">
        <div className="container-page">
          <span className="eyebrow">Our people</span>
          <h2 className="mt-3 text-3xl md:text-4xl">The team behind Divyam</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((p) => (
              <article key={p.name} className="card-warm overflow-hidden">
                <img
                  src={p.photo}
                  alt={`Portrait of ${p.name}, ${p.role}`}
                  loading="lazy"
                  width={700}
                  height={700}
                  className="h-64 w-full object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl">{p.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-primary">{p.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`mailto:${p.email}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    <Mail className="size-4" /> {p.email}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="card-warm p-6">
              <h3 className="text-lg">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
