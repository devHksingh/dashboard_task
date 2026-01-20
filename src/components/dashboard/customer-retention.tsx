import { ArrowUpRight } from "lucide-react"

export function CustomerRetention() {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 md:p-6">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h3 className="text-base md:text-lg font-semibold text-foreground">Customer Retention</h3>
        <button className="p-2 rounded-lg hover:bg-accent/50 transition-colors">
          <ArrowUpRight className="size-4" />
        </button>
      </div>

      <div className="space-y-4 md:space-y-6">
        {/* Return Rate */}
        <div>
          <div className="flex items-center justify-between mb-2 md:mb-3">
            <span className="text-sm font-medium text-foreground">Return Rate</span>
            <span className="text-lg md:text-xl font-bold text-foreground">25%</span>
          </div>
          <div className="relative h-2 md:h-2.5 bg-muted rounded-full overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 w-[25%] bg-gradient-to-r from-[#FFD550] to-[#f7d34a] rounded-full transition-all duration-500"
              style={{ boxShadow: '0 0 8px rgba(247, 211, 74, 0.5)' }}
            ></div>
          </div>
          <p className="text-xs text-muted-foreground mt-1.5">
            593 customers returned
          </p>
        </div>

        {/* Repeat Customer */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">Repeat Customers</span>
            <span className="text-lg md:text-xl font-bold text-foreground">733</span>
          </div>
          <div className="flex items-center justify-between mb-2 md:mb-3">
            <span className="text-xs text-muted-foreground">Total Bookings</span>
            <span className="text-xs font-semibold text-foreground">2,365</span>
          </div>
          <div className="relative h-2 md:h-2.5 bg-muted rounded-full overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 w-[31%] bg-gradient-to-r from-[#FFD550] to-[#f7d34a] rounded-full transition-all duration-500"
              style={{ boxShadow: '0 0 8px rgba(247, 211, 74, 0.5)' }}
            ></div>
          </div>
          <p className="text-xs text-muted-foreground mt-1.5">
            31% of total bookings
          </p>
        </div>

        {/* New Customers */}
        <div>
          <div className="flex items-center justify-between mb-2 md:mb-3">
            <span className="text-sm font-medium text-foreground">New Customers</span>
            <span className="text-lg md:text-xl font-bold text-foreground">1,632</span>
          </div>
          <div className="relative h-2 md:h-2.5 bg-muted rounded-full overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 w-[69%] bg-gradient-to-r from-[#FFD550] to-[#f7d34a] rounded-full transition-all duration-500"
              style={{ boxShadow: '0 0 8px rgba(247, 211, 74, 0.5)' }}
            ></div>
          </div>
          <p className="text-xs text-muted-foreground mt-1.5">
            69% first-time travelers
          </p>
        </div>

        {/* Summary Card */}
        <div className="mt-4 p-3 rounded-xl bg-primary/5 border border-primary/20">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-foreground">Customer Lifetime Value</span>
            <span className="text-sm font-bold text-primary">$2,847</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Average across all customers
          </p>
        </div>
      </div>
    </div>
  )
}