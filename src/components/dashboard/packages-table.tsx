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
    destination: "Isle of Skye, Scotland",
    duration: "7 Days",
    price: "$1,250",
    bookings: 210,
    status: "Active",
    image: "https://images.unsplash.com/photo-1720884413532-59289875c3e1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  {
    name: "Highland Escape",
    id: "#TR-1004",
    destination: "Edinburgh, Scotland",
    duration: "4 Days",
    price: "$890",
    bookings: 132,
    status: "Active",
    image: "https://images.unsplash.com/photo-1611697522020-f44d4e818698?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

export function PackagesTable() {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 md:p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 md:mb-6">
        <h3 className="text-base md:text-lg font-semibold text-foreground">Total Packages</h3>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:bg-accent/30 transition-colors text-sm flex-1 sm:flex-initial">
            <MapPin className="size-4 text-muted-foreground" />
            <span className="text-sm text-foreground">United Kingdom</span>
            <ChevronDown className="size-4 text-muted-foreground" />
          </button>
          <button className="p-2 rounded-lg hover:bg-accent/50 transition-colors flex-shrink-0">
            <ArrowUpRight className="size-4" />
          </button>
        </div>
      </div>

      {/* Mobile View - Card Layout */}
      <div className="block lg:hidden space-y-3">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="p-3 rounded-xl border border-border hover:bg-[#FFD550]/5 transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="size-14 rounded-xl overflow-hidden bg-muted flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="text-sm font-semibold text-foreground">{pkg.name}</h4>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-success/20 text-success-foreground whitespace-nowrap">
                    {pkg.status}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{pkg.id}</p>
                <p className="text-xs text-foreground">{pkg.destination}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border/50">
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Duration</p>
                <p className="text-sm font-medium text-foreground">{pkg.duration}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Price</p>
                <p className="text-sm font-semibold text-foreground">{pkg.price}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Bookings</p>
                <p className="text-sm font-medium text-foreground">{pkg.bookings}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View - Table Layout */}
      <div className="hidden lg:block overflow-x-auto">
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