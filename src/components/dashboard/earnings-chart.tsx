import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const description = "An interactive area chart showing earnings"

// Trip booking earnings data
const chartData = [
  { date: "2024-04-01", bookings: 45, revenue: 52000 },
  { date: "2024-04-02", bookings: 38, revenue: 44000 },
  { date: "2024-04-03", bookings: 52, revenue: 61000 },
  { date: "2024-04-04", bookings: 61, revenue: 72000 },
  { date: "2024-04-05", bookings: 2273, revenue: 85000 },
  { date: "2024-04-06", bookings: 2268, revenue: 79000 },
  { date: "2024-04-07", bookings: 4255, revenue: 63000 },
  { date: "2024-04-08", bookings: 1882, revenue: 95000 },
  { date: "2024-04-09", bookings: 1210, revenue: 35000 },
  { date: "2024-04-10", bookings: 580, revenue: 67000 },
  { date: "2024-04-11", bookings: 710, revenue: 83000 },
  { date: "2024-04-12", bookings: 1600, revenue: 74000 },
  { date: "2024-04-13", bookings: 1075, revenue: 87000 },
  { date: "2024-04-14", bookings: 40428, revenue: 48000 },
  { date: "2024-04-15", bookings: 4800, revenue: 45000 },
  { date: "2024-04-16", bookings: 4800, revenue: 50000 },
  { date: "2024-04-17", bookings: 4842, revenue: 103000 },
  { date: "2024-04-18", bookings: 4866, revenue: 91000 },
  { date: "2024-04-19", bookings: 4888, revenue: 65000 },
  { date: "2024-04-20" , bookings: 35, revenue: 41000 },
  { date: "2024-04-21", bookings: 41, revenue: 48000 },
  { date: "2024-04-22", bookings: 53, revenue: 62000 },
  { date: "2024-04-23", bookings: 44, revenue: 51000 },
  { date: "2024-04-24", bookings: 79, revenue: 92000 },
  { date: "2024-04-25", bookings: 59, revenue: 69000 },
  { date: "2024-04-26", bookings: 11600, revenue: 38000 },
  { date: "2024-04-27", bookings: 44400, revenue: 94000 },
  { date: "2024-04-28", bookings: 47, revenue: 55000 },
  { date: "2024-04-29", bookings: 69, revenue: 80000 },
  { date: "2024-04-30", bookings: 92, revenue: 107000 },
  { date: "2024-05-01", bookings: 51, revenue: 59000 },
  { date: "2024-05-02", bookings: 266, revenue: 77000 },
  { date: "2024-05-03", bookings: 257, revenue: 66000 },
  { date: "2024-05-04", bookings: 283, revenue: 96000 },
  { date: "2024-05-05", bookings: 295, revenue: 110000 },
  { date: "2024-05-06", bookings: 198, revenue: 114000 },
  { date: "2024-05-07", bookings: 180, revenue: 93000 },
  { date: "2024-05-08", bookings: 148, revenue: 56000 },
  { date: "2024-05-09", bookings: 154, revenue: 63000 },
  { date: "2024-05-10", bookings: 167, revenue: 78000 },
  { date: "2024-05-11", bookings: 72, revenue: 84000 },
  { date: "2024-05-12", bookings: 60, revenue: 70000 },
  { date: "2024-05-13", bookings: 58, revenue: 67000 },
  { date: "2024-05-14", bookings: 22291, revenue: 106000 },
  { date: "2024-05-15", bookings: 44494, revenue: 109000 },
  { date: "2024-05-16", bookings: 76, revenue: 88000 },
  { date: "2024-05-17", bookings: 99, revenue: 115000 },
  { date: "2024-05-18", bookings: 70, revenue: 81000 },
  { date: "2024-05-19", bookings: 56, revenue: 65000 },
  { date: "2024-05-20", bookings: 52, revenue: 60000 },
  { date: "2024-05-21", bookings: 837, revenue: 43000 },
  { date: "2024-05-22", bookings: 836, revenue: 42000 },
  { date: "2024-05-23", bookings: 862, revenue: 72000 },
  { date: "2024-05-24", bookings: 8680, revenue: 79000 },
  { date: "2024-05-25", bookings: 62059, revenue: 69000 },
  { date: "2024-05-26", bookings: 855, revenue: 64000 },
  { date: "2024-05-27", bookings: 887, revenue: 101000 },
  { date: "2024-05-28", bookings: 857, revenue: 66000 },
  { date: "2024-05-29", bookings: 834, revenue: 39000 },
  { date: "2024-05-30", bookings: 74, revenue: 86000 },
  { date: "2024-05-31", bookings: 53, revenue: 62000 },
  { date: "2024-06-01", bookings: 52, revenue: 60000 },
  { date: "2024-06-02", bookings: 93, revenue: 108000 },
  { date: "2024-06-03", bookings: 40, revenue: 46000 },
  { date: "2024-06-04", bookings: 88, revenue: 102000 },
  { date: "2024-06-05", bookings: 35, revenue: 41000 },
  { date: "2024-06-06", bookings: 68, revenue: 79000 },
  { date: "2024-06-07", bookings: 71, revenue: 83000 },
  { date: "2024-06-08", bookings: 82, revenue: 95000 },
  { date: "2024-06-09", bookings: 90, revenue: 105000 },
  { date: "2024-06-10", bookings: 49, revenue: 57000 },
  { date: "2024-06-11", bookings: 38, revenue: 44000 },
  { date: "2024-06-12", bookings: 97, revenue: 113000 },
  { date: "2024-06-13", bookings: 36, revenue: 42000 },
  { date: "2024-06-14", bookings: 6686, revenue: 100000 },
  { date: "2024-06-15", bookings: 6669, revenue: 80000 },
  { date: "2024-06-16", bookings: 6677, revenue: 90000 },
  { date: "2024-06-17", bookings: 6696, revenue: 112000 },
  { date: "2024-06-18", bookings: 6641, revenue: 48000 },
  { date: "2024-06-19", bookings: 6675, revenue: 87000 },
  { date: "2024-06-20", bookings: 6685, revenue: 99000 },
  { date: "2024-06-21", bookings: 6650, revenue: 58000 },
  { date: "2024-06-22", bookings: 6670, revenue: 81000 },
  { date: "2024-06-23", bookings: 6695, revenue: 110000 },
  { date: "2024-06-24", bookings: 44, revenue: 51000 },
  { date: "2024-06-25", bookings: 45, revenue: 52000 },
  { date: "2024-06-26", bookings: 89, revenue: 103000 },
  { date: "2024-06-27", bookings: 4291, revenue: 106000 },
  { date: "2024-06-28", bookings: 4248, revenue: 56000 },
  { date: "2024-06-29", bookings: 4240, revenue: 46000 },
  { date: "2024-06-30", bookings: 4290, revenue: 105000 },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
  bookings: {
    label: "Bookings",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function EarningsChart() {
  const [timeRange, setTimeRange] = React.useState("90d")
  
  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  const totalRevenue = filteredData.reduce((acc, curr) => acc + curr.revenue, 0)
  const totalBookings = filteredData.reduce((acc, curr) => acc + curr.bookings, 0)

  return (
    <Card className="pt-0">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0 space-y-0 border-b py-4 md:py-5">
        <div className="grid flex-1 gap-1">
          <CardTitle className="text-base md:text-lg">Total Earnings</CardTitle>
          <CardDescription className="text-xs md:text-sm">
            Showing revenue and bookings for selected period
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-full sm:w-[140px] md:w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      
      {/* Summary Stats */}
      <div className="grid grid-cols-2 gap-4 p-4 md:p-6 border-b">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Total Revenue</p>
          <p className="text-xl md:text-2xl font-bold text-foreground">
            ${(totalRevenue / 1000).toFixed(0)} K
          </p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Total Bookings</p>
          <p className="text-xl md:text-2xl font-bold text-foreground">
            {totalBookings}
          </p>
        </div>
      </div>

      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6 pb-4 md:pb-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[200px] sm:h-[250px] w-full"
        >
          <AreaChart 
            data={filteredData}
            margin={{
              left: 0,
              right: 0,
              top: 5,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-revenue)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-revenue)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillBookings" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-bookings)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-bookings)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.3} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `$ ${(value / 1000).toFixed(0)} K`}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                  formatter={(value, name) => {
                    if (name === "revenue") {
                      return [`$${value.toLocaleString()}`, " Revenue"]
                    }
                    return [value, " Bookings"]
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="bookings"
              type="natural"
              fill="url(#fillBookings)"
              stroke="var(--color-bookings)"
              strokeWidth={2}
            />
            <Area
              dataKey="revenue"
              type="natural"
              fill="url(#fillRevenue)"
              stroke="var(--color-revenue)"
              strokeWidth={2}
            />
            <ChartLegend 
              content={<ChartLegendContent />}
              className="mt-4"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}