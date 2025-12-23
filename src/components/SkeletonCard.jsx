export default function SkeletonCard() {
  return (
    <div className="w-28 h-48 sm:w-48 sm:h-80 md:w-40 md:h-60 mx-3 aspect-3/4 rounded-2xl overflow-hidden">
      <div className="w-full h-full rounded-2xl bg-linear-to-r from-slate-800/40 via-slate-700/50 to-slate-800/40 animate-pulse" />
    </div>
  );
}