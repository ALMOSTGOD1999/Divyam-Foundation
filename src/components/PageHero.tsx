import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-sand paper-grain">
      <div className="relative container-page py-16 md:py-20">
        <span className="eyebrow animate-fade">{eyebrow}</span>
        <h1 className="mt-3 max-w-3xl text-4xl leading-tight animate-rise md:text-5xl">{title}</h1>
        {children && (
          <p
            className="mt-5 max-w-2xl text-lg text-muted-foreground animate-rise"
            style={{ animationDelay: "0.15s" }}
          >
            {children}
          </p>
        )}
      </div>
    </section>
  );
}
