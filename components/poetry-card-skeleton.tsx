export function PoetryCardSkeleton() {
  return (
    <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-[#12161f] animate-pulse">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E15] to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 space-y-2">
        <div className="h-4 bg-[#A88C63]/20 rounded w-3/4" />
        <div className="h-3 bg-[#A88C63]/10 rounded w-1/2" />
      </div>
    </div>
  )
}
