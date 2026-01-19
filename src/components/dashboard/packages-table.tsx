import { MapPin, ArrowUpRight, ChevronDown } from "lucide-react"

interface Package {
  name: string
  id: string
  destination: string
  duration: string
  price: string
  bookings: number
  status: "Active" | "Inactive"
  image: string
}

const packages: Package[] = [
  {
    name: "London Explorer",
    id: "#TR-1001",
    destination: "London, England",
    duration: "5 Days",
    price: "$950",
    bookings: 168,
    status: "Active",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=100&h=100&fit=crop",
  },
  {
    name: "Scottish Adventure",
    id: "#TR-1002",
    destination: "Isle of Skye, Scot",
    duration: "7 Days",
    price: "$1,250",
    bookings: 210,
    status: "Active",
    image: "https://images.unsplash.com/photo-1552389096-384fc0348954?w=100&h=100&fit=crop",
  },
  {
    name: "Castles & Country",
    id: "#TR-1003",
    destination: "Windsor, Oxford",
    duration: "3 Days",
    price: "$1,100",
    bookings: 95,
    status: "Active",
    image: "https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?w=100&h=100&fit=crop",
  },
]

export function PackagesTable() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Total Packages</h3>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:bg-accent/30 transition-colors text-sm">
            <MapPin className="size-4 text-muted-foreground" />
            <span className="text-sm text-foreground">United Kingdom</span>
            <ChevronDown className="size-4 text-muted-foreground" />
          </button>
          <button className="p-2 rounded-lg hover:bg-accent/50 transition-colors">
            <ArrowUpRight className="size-4" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs font-medium text-muted-foreground pb-3">
                Tour Name
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground pb-3">
                Tour ID
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground pb-3">
                Destination
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground pb-3">
                Duration
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground pb-3">
                Price
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground pb-3">
                Bookings
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground pb-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg, index) => (
              <tr
                key={index}
                className="border-b border-border/50 hover:bg-[#FFD550]/5 transition-all duration-200 cursor-pointer group"
              >
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="size-12 rounded-xl overflow-hidden bg-muted flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground">{pkg.name}</span>
                  </div>
                </td>
                <td className="py-4 text-sm text-muted-foreground">{pkg.id}</td>
                <td className="py-4 text-sm text-foreground">{pkg.destination}</td>
                <td className="py-4 text-sm text-muted-foreground">{pkg.duration}</td>
                <td className="py-4 text-sm font-semibold text-foreground">{pkg.price}</td>
                <td className="py-4 text-sm text-foreground">{pkg.bookings}</td>
                <td className="py-4">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-success/20 text-success-foreground">
                    {pkg.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
