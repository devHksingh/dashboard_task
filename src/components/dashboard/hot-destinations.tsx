import { ArrowUpRight } from "lucide-react"

interface Destination {
  name: string
  country: string
  icon: string
  growth: string
  bookings: number
}

const destinations: Destination[] = [
  { name: "Paris", country: "France", icon: "🏛️", growth: "+12%", bookings: 342 },
  { name: "Bali", country: "Indonesia", icon: "🏝️", growth: "+18%", bookings: 298 },
  { name: "New York", country: "USA", icon: "🗽", growth: "+10%", bookings: 267 },
  { name: "Tokyo", country: "Japan", icon: "⛩️", growth: "+8%", bookings: 245 },
]

export function HotDestinations() {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 md:p-6">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <h3 className="text-base md:text-lg font-semibold text-foreground">Top Destinations</h3>
        <button className="p-2 rounded-lg hover:bg-accent/50 transition-colors">
          <ArrowUpRight className="size-4" />
        </button>
      </div>
      <div className="space-y-2 md:space-y-3">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2.5 md:p-3 rounded-xl hover:bg-[#FFD550]/10 transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
              <div className="size-10 md:size-11 rounded-xl bg-primary/10 flex items-center justify-center text-xl md:text-2xl group-hover:bg-[#FFD550]/20 group-hover:scale-110 transition-all duration-200 flex-shrink-0">
                {dest.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">{dest.name}</p>
                <p className="text-xs text-muted-foreground">{dest.country}</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1 ml-2">
              <span className="text-xs font-bold px-2 md:px-2.5 py-1 rounded-full bg-success/20 text-success-foreground whitespace-nowrap">
                {dest.growth}
              </span>
              <span className="text-[10px] md:text-xs text-muted-foreground">
                {dest.bookings} bookings
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}