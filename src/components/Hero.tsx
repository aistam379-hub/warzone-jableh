import { motion } from "motion/react";

const PRIMARY_PHONE = "0993222986";
const IG_HANDLE = "war_zone_paintball_jableh";

const fadeUp = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

// Real still frames pulled from the venue's own footage — used as feature
// thumbnails instead of generic icon glyphs.
// DOM order right → left in RTL: booking, gear, arena — so "arena" lands
// visually first (rightmost reading start) and "booking" last (leftmost).
const FEATURES = [
  { anchor: "#feature-booking", photo: "/gallery/gallery-04-marker.webp", title: "الحجز", desc: "احجز تجربتك الآن" },
  { anchor: "#feature-gear", photo: "/gallery/gallery-02-gear-closeup.webp", title: "المعدات", desc: "معدات حماية كاملة" },
  { anchor: "#feature-arena", photo: "/gallery/gallery-03-arena-wide.webp", title: "الملعب", desc: "ميدان متكامل ومجهّز" },
];

export function Hero() {
  return (
    <section id="top" className="relative w-full overflow-hidden bg-ink">
      {/* Real venue footage, blurred + darkened — the actual place, not a
          cartoon render, is what carries the "combat" mood here. */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="size-full scale-110 object-cover blur-[3px]"
        >
          <source src="/video/hero-mobile.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      </div>

      <div className="relative mx-auto flex min-h-viewport-safe max-w-7xl flex-col items-center justify-center px-6 pt-20 text-center sm:px-8 md:items-start md:justify-start md:pt-16 md:text-right">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ duration: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } } }}
          className="flex flex-1 flex-col items-center justify-center gap-5 py-16 md:flex-none md:items-start md:justify-start md:gap-2.5 md:py-0"
        >
          <motion.img
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            src="/logo.png"
            alt="Warzone Paintball Legends — حلبة وُور زون للبينتبول"
            className="w-32 drop-shadow-[0_10px_24px_rgba(0,0,0,0.6)] sm:w-40 md:w-40 lg:w-44"
          />

          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="text-xs font-black tracking-[0.2em] text-yellow"
          >
            أول ملعب بينتبول احترافي في جبلة
          </motion.span>

          <motion.div variants={fadeUp} transition={{ duration: 0.9 }} className="relative flex flex-col items-center py-1 md:items-start md:py-0">
            <span aria-hidden="true" className="speed-line mb-2 w-24 sm:w-32" />
            <h1 className="stencil-extrude text-4xl leading-[1.15] text-paper sm:text-5xl md:text-4xl lg:text-5xl">
              وين ما رحت...
              <br />
              الحرب رح تلاقيك
            </h1>
            <span aria-hidden="true" className="speed-line mt-2 w-24 sm:w-32" />
          </motion.div>

          <motion.p variants={fadeUp} transition={{ duration: 0.9 }} className="max-w-md text-base font-bold text-paper/70 sm:text-lg md:text-base">
            لبس القناع، جهّز فريقك، وعيش المعركة
          </motion.p>

          <motion.div variants={fadeUp} transition={{ duration: 0.9 }} className="mt-2 flex flex-wrap items-center justify-center gap-4 md:mt-1 md:justify-start">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              href={`https://wa.me/963${PRIMARY_PHONE.slice(1)}?text=${encodeURIComponent("مرحبا War Zone، بدي أستفسر عن الحجز")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-yellow px-7 py-3.5 text-sm font-black text-ink shadow-[0_0_0_1px_rgba(242,194,48,0.5),0_0_30px_rgba(242,194,48,0.5)]"
            >
              احجز الآن
              <span aria-hidden="true">‹</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              href={`https://www.instagram.com/${IG_HANDLE}`}
              target="_blank"
              rel="noreferrer"
              className="btn-tactical inline-flex items-center gap-2 border border-paper/30 px-7 py-3.5 text-sm font-black text-paper backdrop-blur-sm transition-colors hover:border-blue hover:text-blue"
            >
              اكتشف الملعب
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Feature teaser row — real photos from the venue's own footage,
            scrolling straight to the matching section below. */}
        <div className="mt-10 grid w-full gap-4 pb-16 sm:grid-cols-3 md:mt-12">
          {FEATURES.map((f, i) => (
            <motion.a
              key={f.anchor}
              href={f.anchor}
              initial={{ opacity: 1, y: 16 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex items-center gap-4 rounded-xl border border-paper/10 bg-ink-2/70 p-4 text-right backdrop-blur-sm transition-colors hover:border-yellow/40"
            >
              <img
                src={f.photo}
                alt=""
                aria-hidden="true"
                className="size-14 shrink-0 rounded-lg object-cover grayscale transition-all group-hover:grayscale-0"
              />
              <span>
                <span className="block text-base font-black text-paper">{f.title}</span>
                <span className="block text-xs text-paper/55">{f.desc}</span>
              </span>
              <span aria-hidden="true" className="mr-auto text-paper/40 transition-transform group-hover:-translate-x-1 group-hover:text-yellow">
                ‹
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
