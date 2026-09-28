import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/divyam-logo.png.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/gurukul", label: "Divyam Gurukul" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="container-page flex h-18 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="Divyam Foundation logo"
            className="h-16 w-auto mix-blend-multiply md:h-[4.5rem]"
          />
          <span className="hidden text-[0.68rem] tracking-[0.18em] text-muted-foreground uppercase sm:block">
            Seva · Shiksha · Sanskar
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const featured = l.to === "/gurukul";
            return (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "bg-secondary text-secondary-foreground" }}
                className={
                  featured
                    ? "rounded-full border-2 border-leaf px-4 py-2 text-sm font-bold text-leaf transition-colors hover:bg-leaf hover:text-leaf-foreground"
                    : "rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                }
              >
                {l.label}
              </Link>
            );
          })}
          <Link to="/contact" className="btn-primary ml-3 !px-5 !py-2.5">
            Donate
          </Link>
        </nav>


        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-border p-2 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="container-page flex flex-col gap-1 border-t border-border py-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={
                l.to === "/gurukul"
                  ? "rounded-lg border-2 border-leaf px-3 py-2.5 text-sm font-bold text-leaf"
                  : "rounded-lg px-3 py-2.5 text-sm font-semibold text-muted-foreground"
              }
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
