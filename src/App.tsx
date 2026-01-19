import { AppSidebar } from "@/components/app-sidebar"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { StatsCard } from "@/components/dashboard/stats-card"
import { EarningsChart } from "@/components/dashboard/earnings-chart"
import { BookingsTable } from "@/components/dashboard/bookings-table"
import { HotDestinations } from "@/components/dashboard/hot-destinations"
import { PackagesTable } from "@/components/dashboard/packages-table"
import { CustomerRetention } from "@/components/dashboard/customer-retention"
import { BookOpen, Package, DollarSign, MapPin } from "lucide-react"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b border-border bg-card sticky top-0 z-10">
          <div className="flex items-center justify-between w-full px-6">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <div>
                <h1 className="text-xl font-bold text-foreground">Dashboard</h1>
                <p className="text-xs text-muted-foreground">Overview of bookings, revenue and customer retention</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="search"
                placeholder="Search tours, destinations or IDs"
                className="hidden md:block w-80 px-4 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-accent transition-colors">
                Filters
              </button>
              <button className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-accent transition-colors">
                Last 30 days
              </button>
            </div>
          </div>
        </header>
        
        <div className="flex flex-1 flex-col gap-6 p-6 bg-background">
          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Total Bookings"
              value="2,365"
              subtitle="Last month: 2,050"
              percentage="+15%"
              icon={BookOpen}
              trend="up"
              variant="default"
            />
            <StatsCard
              title="Total Packages"
              value="150 Tours"
              subtitle="Last month: 135"
              percentage="+10%"
              icon={Package}
              trend="up"
              variant="dark"
            />
            <StatsCard
              title="Total Revenue"
              value="$2.1M"
              subtitle="Last month: $1.8M"
              percentage="+20%"
              icon={DollarSign}
              trend="up"
              variant="dark"
            />
            <StatsCard
              title="Hot Destinations"
              value="10"
              subtitle="Last month: 7"
              percentage="+42%"
              icon={MapPin}
              trend="up"
              variant="dark"
            />
          </div>

          {/* Earnings Chart and Bookings */}
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <EarningsChart />
            </div>
            <div className="grid gap-6">
              <BookingsTable />
              <HotDestinations />
            </div>
          </div>

          {/* Packages and Customer Retention */}
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <PackagesTable />
            </div>
            <div>
              <CustomerRetention />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
