import { ArrowUpRight } from "lucide-react"

interface Booking {
  name: string
  tour: string
  amount: string
  status: "Confirmed" | "Pending" | "Completed"
}

const bookings: Booking[] = [
  { name: "John Martinez", tour: "Paris Explorer", amount: "$1,200", status: "Confirmed" },
  { name: "Alicia Wong", tour: "Bali Paradise", amount: "$890", status: "Pending" },
  { name: "Emma Johnson", tour: "Rome Heritage", amount: "$1,500", status: "Confirmed" },
  { name: "Samuel Lee", tour: "Tokyo Adventure", amount: "$980", status: "Completed" },
  { name: "Daniel Brown", tour: "Sydney Coastal", amount: "$1,300", status: "Confirmed" },
]

export function BookingsTable() {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 md:p-6">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h3 className="text-base md:text-lg font-semibold text-foreground">Recent Bookings</h3>
        <button className="p-2 rounded-lg hover:bg-accent/50 transition-colors">
          <ArrowUpRight className="size-4" />
        </button>
      </div>
      
      {/* Mobile View - Card Layout */}
      <div className="block md:hidden space-y-3">
        {bookings.map((booking, index) => (
          <div
            key={index}
            className="p-3 rounded-xl border border-border hover:bg-accent/20 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-sm text-foreground">{booking.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                booking.status === "Confirmed" 
                  ? "bg-success/20 text-success-foreground"
                  : booking.status === "Pending"
                  ? "bg-warning/20 text-warning-foreground"
                  : "bg-muted text-muted-foreground"
              }`}>
                {booking.status}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{booking.tour}</span>
              <span className="text-sm font-semibold text-foreground">{booking.amount}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View - Table Layout */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs font-semibold text-muted-foreground pb-3">Name</th>
              <th className="text-left text-xs font-semibold text-muted-foreground pb-3">Tour</th>
              <th className="text-left text-xs font-semibold text-muted-foreground pb-3">Status</th>
              <th className="text-right text-xs font-semibold text-muted-foreground pb-3">Amount</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr
                key={index}
                className="border-b border-border/50 hover:bg-accent/20 transition-colors"
              >
                <td className="py-3 text-sm font-medium text-foreground">{booking.name}</td>
                <td className="py-3 text-sm text-muted-foreground">{booking.tour}</td>
                <td className="py-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    booking.status === "Confirmed" 
                      ? "bg-success/20 text-success-foreground"
                      : booking.status === "Pending"
                      ? "bg-warning/20 text-warning-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {booking.status}
                  </span>
                </td>
                <td className="py-3 text-sm font-semibold text-foreground text-right">
                  {booking.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}