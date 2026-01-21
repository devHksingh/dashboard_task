import { AppSidebar } from "@/components/app-sidebar"
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
import { ChartLineInteractive } from "./components/dashboard/ChartLineInteractive"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        
        <header className="flex h-auto min-h-16 shrink-0 flex-col gap-3 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b border-border bg-card sticky top-0 z-10 px-4 py-3 md:flex-row md:items-center md:px-6">
          <div className="flex items-center gap-2 w-full md:w-auto">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 hidden md:block data-[orientation=vertical]:h-4"
            />
            <div className="flex-1">
              <h1 className="text-lg md:text-xl font-bold text-foreground">Dashboard</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Overview of bookings, revenue and customer retention
              </p>
            </div>
          </div>
          
          {/* Search and Filters - Mobile Responsive */}
          <div className="flex items-center gap-2 w-full md:w-auto md:ml-auto">
            <input
              type="search"
              placeholder="Search tours..."
              className="flex-1 md:w-64 lg:w-80 px-3 py-2 text-sm border border-border rounded-lg bg-background/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button className="px-3 py-2 text-sm border border-border rounded-lg hover:bg-accent transition-colors whitespace-nowrap">
              Filters
            </button>
            <button className="hidden sm:block px-3 py-2 text-sm border border-border rounded-lg hover:bg-accent transition-colors whitespace-nowrap">
              Last 30 days
            </button>
          </div>
        </header>
        {/* Dashboard Content with bento grid */}
        <div className="flex flex-1 flex-col gap-4 md:gap-6 p-4 md:p-6 bg-background">
          
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6">
            
            
            <div className="sm:col-span-1 lg:col-span-3">
              <StatsCard
                title="Total Bookings"
                value="2,365"
                subtitle="Last month: 2,050"
                percentage="+15%"
                icon={BookOpen}
                trend="up"
                variant="default"
              />
            </div>
            
            <div className="sm:col-span-1 lg:col-span-3">
              <StatsCard
                title="Total Packages"
                value="150 Tours"
                subtitle="Last month: 135"
                percentage="+10%"
                icon={Package}
                trend="up"
                variant="dark"
              />
            </div>
            
            <div className="sm:col-span-1 lg:col-span-3">
              <StatsCard
                title="Total Revenue"
                value="$2.1M"
                subtitle="Last month: $1.8M"
                percentage="+20%"
                icon={DollarSign}
                trend="up"
                variant="dark"
              />
            </div>
            
            <div className="sm:col-span-1 lg:col-span-3">
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

            
            <div className="sm:col-span-2 lg:col-span-12 lg:row-span-2 min-h-[400px] lg:min-h-0">
              <EarningsChart />
            </div>

            
            <div className="sm:col-span-2 lg:col-span-8 lg:row-span-1">
              <BookingsTable />
            </div>

            
            <div className="sm:col-span-1 lg:col-span-4 lg:row-span-1">
              <HotDestinations />
            </div>

            
            <div className="sm:col-span-1 lg:col-span-4 lg:row-span-1">
              <CustomerRetention />
            </div>

            

            

            {/* Interactive Line Chart - Below Earnings Chart */}
            <div className="sm:col-span-2 lg:col-span-8 lg:row-span-1 min-h-[350px] lg:min-h-0">
              <ChartLineInteractive />
            </div>

            {/* Packages Table - Full Width Bottom */}
            <div className="sm:col-span-2 lg:col-span-12">
              <PackagesTable />
            </div>

          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}