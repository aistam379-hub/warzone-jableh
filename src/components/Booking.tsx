import { useMemo, useState } from "react";
import { motion } from "motion/react";

const PRIMARY_PHONE = "0993222986";

const DAYS = ["اليوم", "بكرا", "بعد بكرا"];
const SLOTS = [
  { time: "10:00 ص", full: false },
  { time: "12:00 ظ", full: true },
  { time: "2:00 ظ", full: false },
  { time: "4:00 ظ", full: false },
  { time: "6:00 م", full: true },
  { time: "8:00 م", full: false },
];

export function Booking() {
  const [day, setDay] = useState(DAYS[0]);
  const [time, setTime] = useState<string | null>(null);

  const waHref = useMemo(() => {
    const text = time
      ? `مرحبا War Zone، بدي أحجز جولة يوم ${day} الساعة ${time}`
      : `مرحبا War Zone، بدي أستفسر عن الحجز`;
    return `https://wa.me/963${PRIMARY_PHONE.slice(1)}?text=${encodeURIComponent(text)}`;
  }, [day, time]);

  return (
    <section id="feature-booking" className="relative w-full overflow-hidden bg-ink py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "26px 26px" }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
        <span className="text-xs font-black tracking-[0.2em] text-yellow">04 / الحجز</span>
        <h2 className="mt-4 text-3xl font-black leading-tight text-paper sm:text-4xl">
          جهّز فريقك <span className="text-yellow">وحدد ميعادك</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base font-medium text-paper/70">
          اختار اليوم والوقت المناسب، وأكّد الحجز مباشرة عبر واتساب.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-10 rounded-2xl border border-paper/10 bg-ink-2/70 p-6 text-right backdrop-blur-sm sm:p-8"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {DAYS.map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDay(d)}
                className={
                  d === day
                    ? "rounded-lg bg-yellow px-6 py-2.5 text-sm font-black text-ink shadow-[0_0_0_1px_rgba(242,194,48,0.5),0_0_24px_rgba(242,194,48,0.45)]"
                    : "btn-tactical border border-paper/20 px-6 py-2.5 text-sm font-black text-paper/70 transition-colors hover:border-yellow/50 hover:text-yellow"
                }
              >
                {d}
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {SLOTS.map((s) => {
              const selected = time === s.time;
              return (
                <button
                  key={s.time}
                  type="button"
                  disabled={s.full}
                  onClick={() => setTime(s.time)}
                  className={
                    s.full
                      ? "cursor-not-allowed rounded-xl border border-paper/10 bg-ink px-4 py-3 text-sm font-bold text-paper/30 line-through"
                      : selected
                        ? "rounded-xl border border-yellow bg-yellow/15 px-4 py-3 text-sm font-black text-yellow shadow-[0_0_0_1px_rgba(242,194,48,0.4),0_0_20px_rgba(242,194,48,0.35)]"
                        : "rounded-xl border border-paper/15 bg-ink px-4 py-3 text-sm font-bold text-paper/80 transition-colors hover:border-yellow/50 hover:text-yellow"
                  }
                >
                  <span className="ltr-isolate">{s.time}</span>
                </button>
              );
            })}
          </div>

          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-yellow px-7 py-4 text-sm font-black text-ink shadow-[0_0_0_1px_rgba(242,194,48,0.5),0_0_30px_rgba(242,194,48,0.5)] transition-transform hover:scale-[1.01]"
          >
            {time ? `تأكيد الحجز — ${day} ${time}` : "تأكيد الحجز عبر واتساب"}
          </a>
          <p className="mt-4 text-xs font-bold text-paper/40">
            المواعيد المعروضة توضيحية — التأكيد النهائي بيصير مباشرة معنا عبر واتساب
          </p>
        </motion.div>
      </div>
    </section>
  );
}
