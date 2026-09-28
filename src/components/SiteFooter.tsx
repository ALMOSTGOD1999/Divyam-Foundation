import { Link } from "@tanstack/react-router";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/divyam-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-border bg-sand paper-grain">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <img
            src={logo.url}
            alt="Divyam Foundation logo"
            className="h-20 w-auto mix-blend-multiply"
          />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            A registered non-profit working since 2014 on early childhood education, women's
            livelihoods and community health in and around Berhampore, Murshidabad, West Bengal.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.16em]">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/programs">Our programs</Link></li>
            <li><Link to="/gurukul">Divyam Gurukul pre-school</Link></li>
            <li><Link to="/contact">Contact &amp; donate</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.16em]">Reach us</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="mt-0.5 size-4 shrink-0 text-primary" /> Vairabtala, Khagra, Berhampore, Murshidabad – 742103, West Bengal</li>
            <li className="flex gap-2"><Phone className="mt-0.5 size-4 shrink-0 text-primary" /> +91 98765 43210</li>
            <li className="flex gap-2"><Mail className="mt-0.5 size-4 shrink-0 text-primary" /> hello@divyamfoundation.org</li>
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
        © {new Date().getFullYear()} Divyam Foundation · Reg. No. WB/SOC/2014/0198765 · 80G &amp; 12A certified
      </div>
    </footer>
  );
}
