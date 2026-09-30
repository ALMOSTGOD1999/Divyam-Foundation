import { Link } from "@tanstack/react-router";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/divyam-logo.png";

const CREDIT_TEXT = "crafted by Incodent";

function TypewriterCredit() {
  const [typed, setTyped] = useState(0);
  const [started, setStarted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  // Reveal only once the footer bottom is actually on screen, and skip the
  // animation entirely for users who prefer reduced motion.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReducedMotion(true);
      setTyped(CREDIT_TEXT.length);
      return;
    }
    const el = linkRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setStarted(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || reducedMotion || typed >= CREDIT_TEXT.length) return;
    const timer = setTimeout(() => setTyped((n) => n + 1), 55);
    return () => clearTimeout(timer);
  }, [started, reducedMotion, typed]);

  const done = typed >= CREDIT_TEXT.length;

  return (
    <a
      ref={linkRef}
      href="https://www.incodent.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Crafted by Incodent (opens in a new tab)"
      className="mt-2 inline-flex cursor-pointer items-center text-muted-foreground/70 transition-colors hover:text-primary"
    >
      {/* Static copy of the credit so crawlers (and no-JS fallbacks) always
          see the full phrase in the raw HTML, not just the animated part. */}
      <span className="sr-only">{CREDIT_TEXT}</span>
      <span aria-hidden="true">
        {CREDIT_TEXT.slice(0, typed)}
        {!done && (
          <span className="ml-px inline-block h-3.5 w-px animate-pulse bg-current align-middle" />
        )}
      </span>
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-border bg-sand paper-grain">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <img src={logo} alt="Divyam Foundation logo" className="h-20 w-auto mix-blend-multiply" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            A registered non-profit working since 2014 on early childhood education, women's
            livelihoods and community health in and around Berhampore, Murshidabad, West Bengal.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.16em]">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/programs">Our programs</Link>
            </li>
            <li>
              <Link to="/gurukul">Divyam Gurukul pre-school</Link>
            </li>
            <li>
              <Link to="/contact">Contact &amp; donate</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.16em]">Reach us</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" /> Vairabtala, Khagra,
              Berhampore, Murshidabad – 742103, West Bengal
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" /> +91 98765 43210
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" /> hello@divyamfoundation.org
            </li>
            <li className="flex gap-2">
              <Facebook className="mt-0.5 size-4 shrink-0 text-primary" />
              <a
                href="https://www.facebook.com/people/Divyam-Foundation/61590604710229/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Facebook page
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Divyam Foundation · Reg. No. WB/SOC/2014/0198765 · 80G &amp;
        12A certified
        <TypewriterCredit />
      </div>
    </footer>
  );
}
