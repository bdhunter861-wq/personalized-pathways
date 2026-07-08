// Decorative background layer for sections: soft brand-color blobs and, on
// request, a faint dot-grid. Place inside a `relative overflow-hidden` section;
// it sits behind the section's content (negative z-index).
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
      {dots && <div className="bg-dots-brand absolute inset-0 opacity-40" />}
      <div className="absolute -left-32 -top-28 h-80 w-80 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="absolute -right-28 bottom-[-6rem] h-80 w-80 rounded-full bg-brand-green/10 blur-3xl" />
    </div>
  );
}
