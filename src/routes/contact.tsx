import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Mail, MapPin, Phone, Clock, CheckCircle2, Facebook } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Donate — Divyam Foundation, Berhampore" },
      {
        name: "description",
        content:
          "Reach Divyam Foundation at Vairabtala, Khagra, Berhampore — phone, email, office hours, bank details for donations and a message form for admissions or volunteering.",
      },
      { property: "og:title", content: "Contact & Donate — Divyam Foundation" },
      {
        property: "og:description",
        content:
          "Call, write or visit us in Berhampore, Murshidabad. Volunteer, enrol a child or donate.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero eyebrow="Contact us" title="Come by for chai, or just send us a note">
        Whether you want to enrol a child at Divyam Gurukul, volunteer a Saturday, or support a
        program — we would love to hear from you.
      </PageHero>

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="text-3xl">Send a message</h2>
            {sent ? (
              <div className="card-warm mt-6 flex items-start gap-3 p-6">
                <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-leaf" />
                <div>
                  <h3 className="text-lg">Thank you — message noted</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Our team replies within two working days. For anything urgent, please call +91
                    98765 43210.
                  </p>
                </div>
              </div>
            ) : (
              <form
                className="card-warm mt-6 space-y-4 p-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-semibold">
                    Your name
                    <input
                      required
                      name="name"
                      className="mt-1.5 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm font-normal outline-none focus:border-primary"
                    />
                  </label>
                  <label className="block text-sm font-semibold">
                    Phone
                    <input
                      name="phone"
                      className="mt-1.5 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm font-normal outline-none focus:border-primary"
                    />
                  </label>
                </div>
                <label className="block text-sm font-semibold">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm font-normal outline-none focus:border-primary"
                  />
                </label>
                <label className="block text-sm font-semibold">
                  I am writing about
                  <select
                    name="topic"
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm font-normal outline-none focus:border-primary"
                  >
                    <option>Divyam Gurukul admission</option>
                    <option>Volunteering</option>
                    <option>Donation / CSR partnership</option>
                    <option>Something else</option>
                  </select>
                </label>
                <label className="block text-sm font-semibold">
                  Message
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm font-normal outline-none focus:border-primary"
                  />
                </label>
                <button type="submit" className="btn-primary w-full">
                  Send message
                </button>
                <p className="text-xs text-muted-foreground">
                  This is a static demo form — submissions are not stored anywhere yet.
                </p>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="card-warm p-6">
              <h2 className="text-2xl">Office &amp; campus</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                  Vairabtala, Khagra, Berhampore, Murshidabad – 742103, West Bengal
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>
                    +91 98765 43210 (office)
                    <br />
                    +91 98765 43211 (Gurukul admissions)
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
                  hello@divyamfoundation.org
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
                  Mon – Sat, 9:00 am – 5:00 pm
                </li>
                <li className="flex gap-3">
                  <Facebook className="mt-0.5 size-5 shrink-0 text-primary" />
                  <a
                    href="https://www.facebook.com/people/Divyam-Foundation/61590604710229/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-foreground hover:text-primary"
                  >
                    Follow us on Facebook
                  </a>
                </li>
              </ul>
            </div>

            <div className="card-warm p-6">
              <h2 className="text-2xl">Donate directly</h2>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Account name</dt>
                  <dd className="font-semibold">Divyam Foundation</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Account no.</dt>
                  <dd className="font-semibold">5012 3456 7890</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">IFSC</dt>
                  <dd className="font-semibold">SBIN0011234</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">UPI</dt>
                  <dd className="font-semibold">divyam@upi</dd>
                </div>
              </dl>
              <p className="mt-4 text-xs text-muted-foreground">
                Donations are exempt under Section 80G. Email us for a receipt with your PAN.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Find us</p>
              <h2 className="mt-1 text-3xl">Where we are</h2>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Vairabtala,+Khagra,+Berhampore,+Murshidabad+742103,+West+Bengal"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <MapPin className="size-4" />
              Get directions
            </a>
          </div>
          <div className="card-warm mt-6 overflow-hidden p-0">
            <iframe
              title="Map — Divyam Foundation, Vairabtala, Khagra, Berhampore"
              src="https://www.google.com/maps?q=Vairabtala,+Khagra,+Berhampore,+Murshidabad+742103,+West+Bengal&z=15&output=embed"
              className="block h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Pin shows Vairabtala, Khagra — our campus in Berhampore, Murshidabad. Auto-rickshaws
            from Berhampore court reach Khagra in about ten minutes.
          </p>
        </div>
      </section>
    </>
  );
}
