import { ArrowUpRight } from "lucide-react"

interface Booking {
  name: string
  tour: string
  amount: string
}

const bookings: Booking[] = [
  { name: "John", tour: "Paris", amount: "$1,200" },
  { name: "Alicia", tour: "Bali", amount: "$890" },
  { name: "Emma", tour: "Rome", amount: "$1,500" },
  { name: "Samuel", tour: "Tokyo", amount: "$980" },
  { name: "Daniel", tour: "Sydney", amount: "$1,300" },
]

export function BookingsTable() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Bookings</h3>
        <button className="p-2 rounded-lg hover:bg-accent/50 transition-colors">
          <ArrowUpRight className="size-4" />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs font-semibold text-muted-foreground pb-3">Name</th>
              <th className="text-left text-xs font-semibold text-muted-foreground pb-3">Tour</th>
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
