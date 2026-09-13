import { InstagramIcon } from "./InstagramIcon";
import { asset } from "../lib/asset";

const PHONES = ["0993222986", "0985183745"];
const IG_HANDLE = "war_zone_paintball_jableh";

export function Footer() {
  return (
    <footer className="w-full border-t border-paper/10 bg-ink-2">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-right">
          <div className="flex flex-col items-center gap-3 md:items-end">
            <img src={asset("/logo.png")} alt="Warzone Paintball Legends" className="h-14 w-auto" />
            <p className="max-w-xs text-sm font-bold text-paper/60">
              أول ملعب بينتبول احترافي في جبلة — جهّز فريقك وعيش الحماس.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 md:items-end">
            <span className="text-xs font-black tracking-[0.2em] text-yellow">الموقع</span>
            <p className="max-w-xs text-sm font-bold text-paper/70">جبلة، المتحلق الجديد، مقابل كافيه Lona Rosa</p>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <span className="text-xs font-black tracking-[0.2em] text-yellow">تواصل معنا</span>
            <div className="flex flex-col items-center gap-1 md:items-end">
              {PHONES.map((p) => (
                <a key={p} href={`https://wa.me/963${p.slice(1)}`} target="_blank" rel="noreferrer" className="ltr-isolate text-sm font-bold text-paper/70 hover:text-yellow">
                  {p}
                </a>
              ))}
            </div>
            <a
              href={`https://www.instagram.com/${IG_HANDLE}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-paper/70 hover:text-yellow"
            >
              <InstagramIcon className="size-4" />
              @{IG_HANDLE}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-paper/10 pt-6 text-xs font-bold text-paper/40 sm:flex-row">
          <span>© 2026 Warzone Paintball Legends — جبلة</span>
          <a href="#top" className="transition-colors hover:text-yellow">
            العودة للأعلى ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
