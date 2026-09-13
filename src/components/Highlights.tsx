import { motion } from "motion/react";
import { asset } from "../lib/asset";

// Plain geographic hierarchy only (road, city, country) — mixing in the
// business/cafe names here previously made Google's search match an
// unrelated place with a similar name instead of geocoding the area.
const LOCATION_QUERY = "المتحلق الجديد، جبلة، سوريا";

function Block({
  eyebrow,
  title,
  highlight,
  paragraph,
  bullets,
  photo,
  photoAlt,
  reverse,
  cta,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  paragraph: string;
  bullets: string[];
  photo: string;
  photoAlt: string;
  reverse?: boolean;
  cta?: { label: string; href: string };
}) {
  return (
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 md:grid-cols-2 md:gap-16">
      <motion.div
        initial={{ opacity: 0, x: reverse ? -24 : 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className={`relative ${reverse ? "order-1 md:order-2" : ""}`}
      >
        <div className="absolute -inset-3 -z-10 rounded-2xl bg-yellow/90" />
        <img src={photo} alt={photoAlt} className="h-72 w-full rounded-2xl object-cover shadow-[0_25px_50px_rgba(0,0,0,0.55)] sm:h-96" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className={`text-right ${reverse ? "order-2 md:order-1" : ""}`}
      >
        <span className="text-xs font-black tracking-[0.2em] text-yellow">{eyebrow}</span>
        <h2 className="mt-4 text-3xl font-black leading-tight text-paper sm:text-4xl">
          {title} <span className="text-yellow">{highlight}</span>
        </h2>
        <p className="mt-5 max-w-lg text-base font-medium leading-relaxed text-paper/70">{paragraph}</p>
        <ul className="mt-6 flex flex-col gap-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-start justify-end gap-3 text-sm font-bold text-paper/85 sm:text-base">
              <span>{b}</span>
              <span aria-hidden="true" className="mt-1 size-2 shrink-0 rounded-sm bg-yellow" />
            </li>
          ))}
        </ul>
        {cta && (
          <a
            href={cta.href}
            target="_blank"
            rel="noreferrer"
            className="btn-tactical mt-7 inline-flex items-center gap-2 border border-paper/30 px-6 py-3 text-sm font-black text-paper transition-colors hover:border-yellow hover:text-yellow"
          >
            {cta.label}
            <span aria-hidden="true">‹</span>
          </a>
        )}
      </motion.div>
    </div>
  );
}

export function Highlights() {
  return (
    <>
      <section id="feature-arena" className="w-full overflow-hidden bg-ink py-20 sm:py-28">
        <Block
          eyebrow="02 / الملعب"
          title="ميدان قتال حقيقي"
          highlight="بجبلة"
          paragraph="ساحة حقيقية بعوائق وبراميل ومخابئ رملية، بجبلة عالمتحلق الجديد مقابل كافيه Lona Rosa — جاهزة للمعركة من أول دقيقة."
          bullets={["عوائق وبراميل ومخابئ رملية حقيقية", "مساحة مفتوحة تتحمل مجموعات كبيرة", "قريب من وسط جبلة وسهل الوصول"]}
          photo={asset("/gallery/gallery-03-arena-wide.webp")}
          photoAlt="ميدان War Zone الحقيقي بجبلة، عوائق وبراميل وسماء مفتوحة"
          cta={{ label: "افتح الموقع بخرائط غوغل", href: `https://www.google.com/maps/search/${encodeURIComponent(LOCATION_QUERY)}` }}
        />
      </section>

      <section id="feature-gear" className="w-full overflow-hidden bg-ink-2 py-20 sm:py-28">
        <Block
          eyebrow="03 / المعدات"
          title="معدات حماية"
          highlight="احترافية بكل جولة"
          paragraph="قناع كامل الوجه، قفازات وبدلة واقية لكل لاعب، مع إشراف مباشر أثناء اللعب — السلامة أول شي قبل ما تبلش الحرب."
          bullets={["قناع كامل الوجه معتمد لكل لاعب", "قفازات وبدلة واقية مقاومة للصدمات", "إشراف وتوجيه مباشر طول الجولة"]}
          photo={asset("/gallery/gallery-02-gear-closeup.webp")}
          photoAlt="قناع وقفازات الحماية عن قرب"
          reverse
        />
      </section>
    </>
  );
}
