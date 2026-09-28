import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Clock, Palette, Music, Baby, Apple, ShieldCheck } from "lucide-react";
import gurukulImg from "@/assets/gurukul.jpg";

export const Route = createFileRoute("/gurukul")({
  head: () => ({
    meta: [
      { title: "Divyam Gurukul Pre-school — Play-based Learning, Ages 2–6" },
      {
        name: "description",
        content:
          "Divyam Gurukul is Divyam Foundation's play-based pre-school in Berhampore for ages 2 to 6: Playgroup to UKG, 1:8 teacher ratio, daily snack and sliding-scale fees.",
      },
      { property: "og:title", content: "Divyam Gurukul Pre-school — Ages 2 to 6" },
      {
        property: "og:description",
        content:
          "Playgroup to UKG in Khagra, Berhampore. Small batches, trained teachers, joyful play-based curriculum.",
      },
    ],
  }),
  component: Gurukul,
});

const batches = [
  { name: "Playgroup", age: "2 – 3 years", time: "9:00 – 11:00 am" },
  { name: "Nursery", age: "3 – 4 years", time: "9:00 – 12:00 pm" },
  { name: "LKG", age: "4 – 5 years", time: "8:30 – 12:30 pm" },
  { name: "UKG", age: "5 – 6 years", time: "8:30 – 1:00 pm" },
];

const features = [
  { icon: Palette, title: "Learning through play", text: "Blocks, sand, clay, colour and role-play instead of rote worksheets." },
  { icon: Music, title: "Stories, songs & rhymes", text: "Bilingual circle time builds vocabulary in both Hindi and English." },
  { icon: Baby, title: "1 teacher : 8 children", text: "Small batches so every child is known, heard and gently stretched." },
  { icon: Apple, title: "Daily snack & growth checks", text: "A nutritious mid-morning meal and quarterly height, weight and vision checks." },
  { icon: ShieldCheck, title: "Safe, child-first campus", text: "CCTV, soft flooring, gated entry, verified staff and a trained caregiver on duty." },
  { icon: Clock, title: "Working-parent friendly", text: "Optional day-care extension until 4:00 pm with homework and nap time." },
];

const day = [
  { time: "8:30", text: "Welcome circle, prayer and 'how do you feel today?'" },
  { time: "9:15", text: "Guided activity — phonics, numbers or concept play" },
  { time: "10:15", text: "Snack, hand-washing and free outdoor play" },
  { time: "11:00", text: "Art, music, movement or story theatre" },
  { time: "12:00", text: "Quiet corner, books and puzzles" },
  { time: "12:45", text: "Reflection, goodbye song and pick-up" },
];

function Gurukul() {
  return (
    <>
      <PageHero eyebrow="Divyam Gurukul · Our pre-school" title="Where little children learn that school is a happy place">
        A play-based pre-school in Khagra, Berhampore for children aged 2 to 6 — run by Divyam
        Foundation, with sliding-scale fees so no family is priced out.
      </PageHero>

      <section className="section-pad">
        <div className="container-page grid items-center gap-12 md:grid-cols-2">
          <img
            src={gurukulImg}
            alt="Teacher and toddlers building with alphabet blocks at Divyam Gurukul"
            loading="lazy"
            width={1600}
            height={1008}
            className="w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
          />
          <div>
            <h2 className="text-3xl">Our approach</h2>
            <p className="mt-4 text-muted-foreground">
              Children at this age learn with their whole bodies. So our day is built from play,
              conversation and making things — not from copying letters off a board. Teachers
              observe each child, keep a simple portfolio of their work, and meet parents every
              month to talk about what is growing and what needs help.
            </p>
            <p className="mt-4 text-muted-foreground">
              By the time a child leaves UKG they can hold a pencil confidently, recognise letters
              and numbers in Hindi and English, follow a routine, and ask questions without fear.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Book a campus visit
              </Link>
              <Link to="/programs" className="btn-ghost">
                Other programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-border bg-sand paper-grain">
        <div className="container-page">
          <span className="eyebrow">Why parents choose us</span>
          <h2 className="mt-3 text-3xl md:text-4xl">Small, safe and joyful by design</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article key={f.title} className="card-warm p-6">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-accent/40 text-primary">
                  <f.icon className="size-6" />
                </span>
                <h3 className="mt-4 text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl">Batches &amp; timings</h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-secondary text-secondary-foreground">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Batch</th>
                    <th className="px-4 py-3 font-semibold">Age</th>
                    <th className="px-4 py-3 font-semibold">Timing</th>
                  </tr>
                </thead>
                <tbody>
                  {batches.map((b) => (
                    <tr key={b.name} className="border-t border-border">
                      <td className="px-4 py-3 font-semibold">{b.name}</td>
                      <td className="px-4 py-3 text-muted-foreground">{b.age}</td>
                      <td className="px-4 py-3 text-muted-foreground">{b.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Admissions open in February for the April session. Fees follow a sliding scale based
              on family income; 40% of our children study on full scholarship.
            </p>
          </div>

          <div>
            <h2 className="text-3xl">A day at the Gurukul</h2>
            <ol className="mt-6 space-y-4">
              {day.map((d) => (
                <li key={d.time} className="flex gap-4 card-warm p-4">
                  <span className="font-display text-lg text-primary">{d.time}</span>
                  <span className="text-sm text-muted-foreground">{d.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
