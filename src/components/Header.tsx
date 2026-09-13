const PRIMARY_PHONE = "0993222986";

const NAV = [
  { label: "الرئيسية", href: "#top", active: true },
  { label: "الملعب", href: "#feature-arena" },
  { label: "المعدات", href: "#feature-gear" },
  { label: "الحجز", href: "#feature-booking" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:justify-end">
        {/* No header logo — the Hero already carries one prominent logo
            moment for every breakpoint, avoiding a duplicate mark up top. */}
        <nav className="hidden items-center gap-7 text-sm font-bold text-paper/80 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={
                item.active
                  ? "border-b-2 border-yellow pb-1 text-yellow"
                  : "transition-colors hover:text-yellow"
              }
            >
              {item.label}
            </a>
          ))}
          <a
            href={`https://wa.me/963${PRIMARY_PHONE.slice(1)}`}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-yellow"
          >
            تواصل معنا
          </a>
        </nav>

        <a
          href={`https://wa.me/963${PRIMARY_PHONE.slice(1)}`}
          target="_blank"
          rel="noreferrer"
          className="btn-tactical border border-paper/30 bg-ink/40 px-4 py-2 text-xs font-black text-paper backdrop-blur-sm transition-colors hover:border-yellow hover:text-yellow lg:hidden"
        >
          احجز الآن
        </a>
      </div>
    </header>
  );
}
