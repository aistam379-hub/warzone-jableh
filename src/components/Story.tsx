import { motion } from "motion/react";
import { asset } from "../lib/asset";

const CHECKLIST = [
  "معدات حماية كاملة معتمدة: قناع، قفازات، بدلة واقية",
  "ميدان حقيقي بعوائق وبراميل ومخابئ رملية",
  "مناسب للمجموعات والعائلات ومناسبات الشباب",
  "إشراف وتوجيه مباشر طوال الجولة",
];

const MOSAIC = [
  { src: asset("/gallery/gallery-01-mask-on.webp"), alt: "لاعب War Zone يجهّز قناعه قبل الجولة" },
  { src: asset("/gallery/gallery-02-gear-closeup.webp"), alt: "قناع وقفازات الحماية عن قرب" },
  { src: asset("/gallery/gallery-04-marker.webp"), alt: "لاعب يجهّز سلاح البينتبول قرب البراميل" },
  { src: asset("/gallery/gallery-03-arena-wide.webp"), alt: "ميدان War Zone الحقيقي بجبلة" },
];

export function Story() {
  return (
    <section id="story" className="relative w-full overflow-hidden bg-ink py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 md:grid-cols-2 md:gap-16">
        {/* DOM: mosaic first → visually RIGHT in RTL. */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-3"
        >
          {MOSAIC.map((m, i) => (
            <img
              key={m.src}
              src={m.src}
              alt={m.alt}
              className={`h-40 w-full rounded-xl object-cover shadow-[0_20px_40px_rgba(0,0,0,0.5)] sm:h-52 ${i % 2 === 1 ? "mt-6" : ""}`}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-right"
        >
          <span className="text-xs font-black tracking-[0.2em] text-yellow">01 / ليش وور زون؟</span>
          <h2 className="mt-4 text-3xl font-black leading-tight text-paper sm:text-4xl">
            مو بس لعبة، <span className="text-yellow">تجربة</span> رح تتذكرها
          </h2>
          <p className="mt-5 max-w-lg text-base font-medium leading-relaxed text-paper/70">
            جهزنالك ميدان حقيقي بعوائق وبراميل ومخابئ، ومعدات حماية كاملة —
            تجمع رفقاتك وتخوض المعركة. أول مرة ولا خبير، مافي فرق.
          </p>
          <ul className="mt-7 flex flex-col gap-3">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-start justify-end gap-3 text-sm font-bold text-paper/85 sm:text-base">
                <span>{item}</span>
                <span aria-hidden="true" className="mt-1 size-2 shrink-0 rounded-sm bg-yellow" />
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
