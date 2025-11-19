import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="container-max py-16 md:py-24 scroll-mt-32">
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
        {subtitle && <p className="muted mt-2 max-w-2xl">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}
