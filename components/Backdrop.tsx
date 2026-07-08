// Decorative background layer for sections: soft brand-color blobs, faint
// decorative rings, and an optional dot-grid. Place inside a
// `relative overflow-hidden` section; it sits behind the section's content.
export default function Backdrop({
  dots = false,
  className = "",
}: {
  dots?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      {dots && <div className="bg-dots-brand absolute inset-0 opacity-50" />}

      {/* Soft color washes */}
      <div className="absolute -left-32 -top-28 h-80 w-80 rounded-full bg-brand-blue/15 blur-3xl" />
      <div className="absolute -right-28 bottom-[-6rem] h-80 w-80 rounded-full bg-brand-green/15 blur-3xl" />

      {/* Faint outlined rings for graphic interest */}
      <div className="absolute -right-10 top-8 h-44 w-44 rounded-full border-2 border-brand-blue/15" />
      <div className="absolute left-[-3rem] bottom-[-3rem] h-52 w-52 rounded-full border-2 border-brand-green/15" />
    </div>
  );
}
