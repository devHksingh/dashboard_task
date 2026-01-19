import { ArrowUpRight } from "lucide-react"
// import { cn } from "@/lib/utils"

interface Destination {
  name: string
  country: string
  icon: string
  growth: string
}

const destinations: Destination[] = [
  { name: "Paris", country: "France", icon: "🏛️", growth: "+12%" },
  { name: "Bali", country: "Indonesia", icon: "🏝️", growth: "+18%" },
  { name: "New York", country: "USA", icon: "🗽", growth: "+10%" },
  { name: "Tokyo", country: "Japan", icon: "⛩️", growth: "+8%" },
]

export function HotDestinations() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Top Destinations</h3>
        <button className="p-2 rounded-lg hover:bg-accent/50 transition-colors">
          <ArrowUpRight className="size-4" />
        </button>
      </div>
      <div className="space-y-3">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-xl hover:bg-[#FFD550]/10 transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="size-11 rounded-xl bg-primary/10 flex items-center justify-center text-2xl group-hover:bg-[#FFD550]/20 group-hover:scale-110 transition-all duration-200">
                {dest.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{dest.name}</p>
                <p className="text-xs text-muted-foreground">{dest.country}</p>
              </div>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-success/20 text-success-foreground">
              {dest.growth}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
