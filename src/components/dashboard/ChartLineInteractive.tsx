import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
// chart meta data about this component is offline and online bookings
export const title = "Bookings Line Chart - Interactive"
export const description = "An interactive line chart showing total bookings from offline and online channels"
const chartData = [
  { date: "2024-04-01", offline: 222, online: 150 },
  { date: "2024-04-02", offline: 97, online: 180 },
  { date: "2024-04-03", offline: 167, online: 120 },
  { date: "2024-04-04", offline: 242, online: 260 },
  { date: "2024-04-05", offline: 373, online: 290 },
  { date: "2024-04-06", offline: 301, online: 340 },
  { date: "2024-04-07", offline: 245, online: 180 },
  { date: "2024-04-08", offline: 409, online: 320 },
  { date: "2024-04-09", offline: 59, online: 110 },
  { date: "2024-04-10", offline: 261, online: 190 },
  { date: "2024-04-11", offline: 327, online: 350 },
  { date: "2024-04-12", offline: 292, online: 210 },
  { date: "2024-04-13", offline: 342, online: 380 },
  { date: "2024-04-14", offline: 137, online: 220 },
  { date: "2024-04-15", offline: 120, online: 170 },
  { date: "2024-04-16", offline: 138, online: 190 },
  { date: "2024-04-17", offline: 446, online: 360 },
  { date: "2024-04-18", offline: 364, online: 410 },
  { date: "2024-04-19", offline: 243, online: 180 },
  { date: "2024-04-20", offline: 89, online: 150 },
  { date: "2024-04-21", offline: 137, online: 200 },
  { date: "2024-04-22", offline: 224, online: 170 },
  { date: "2024-04-23", offline: 138, online: 230 },
  { date: "2024-04-24", offline: 387, online: 290 },
  { date: "2024-04-25", offline: 215, online: 250 },
  { date: "2024-04-26", offline: 75, online: 130 },
  { date: "2024-04-27", offline: 383, online: 420 },
  { date: "2024-04-28", offline: 122, online: 180 },
  { date: "2024-04-29", offline: 315, online: 240 },
  { date: "2024-04-30", offline: 454, online: 380 },
  { date: "2024-05-01", offline: 165, online: 220 },
  { date: "2024-05-02", offline: 293, online: 310 },
  { date: "2024-05-03", offline: 247, online: 190 },
  { date: "2024-05-04", offline: 385, online: 420 },
  { date: "2024-05-05", offline: 481, online: 390 },
  { date: "2024-05-06", offline: 498, online: 520 },
  { date: "2024-05-07", offline: 388, online: 300 },
  { date: "2024-05-08", offline: 149, online: 210 },
  { date: "2024-05-09", offline: 227, online: 180 },
  { date: "2024-05-10", offline: 293, online: 330 },
  { date: "2024-05-11", offline: 335, online: 270 },
  { date: "2024-05-12", offline: 197, online: 240 },
  { date: "2024-05-13", offline: 197, online: 160 },
  { date: "2024-05-14", offline: 448, online: 490 },
  { date: "2024-05-15", offline: 473, online: 380 },
  { date: "2024-05-16", offline: 338, online: 400 },
  { date: "2024-05-17", offline: 499, online: 420 },
  { date: "2024-05-18", offline: 315, online: 350 },
  { date: "2024-05-19", offline: 235, online: 180 },
  { date: "2024-05-20", offline: 177, online: 230 },
  { date: "2024-05-21", offline: 82, online: 140 },
  { date: "2024-05-22", offline: 81, online: 120 },
  { date: "2024-05-23", offline: 252, online: 290 },
  { date: "2024-05-24", offline: 294, online: 220 },
  { date: "2024-05-25", offline: 201, online: 250 },
  { date: "2024-05-26", offline: 213, online: 170 },
  { date: "2024-05-27", offline: 420, online: 460 },
  { date: "2024-05-28", offline: 233, online: 190 },
  { date: "2024-05-29", offline: 78, online: 130 },
  { date: "2024-05-30", offline: 340, online: 280 },
  { date: "2024-05-31", offline: 178, online: 230 },
  { date: "2024-06-01", offline: 178, online: 200 },
  { date: "2024-06-02", offline: 470, online: 410 },
  { date: "2024-06-03", offline: 103, online: 160 },
  { date: "2024-06-04", offline: 439, online: 380 },
  { date: "2024-06-05", offline: 88, online: 140 },
  { date: "2024-06-06", offline: 294, online: 250 },
  { date: "2024-06-07", offline: 323, online: 370 },
  { date: "2024-06-08", offline: 385, online: 320 },
  { date: "2024-06-09", offline: 438, online: 480 },
  { date: "2024-06-10", offline: 155, online: 200 },
  { date: "2024-06-11", offline: 92, online: 150 },
  { date: "2024-06-12", offline: 492, online: 420 },
  { date: "2024-06-13", offline: 81, online: 130 },
  { date: "2024-06-14", offline: 426, online: 380 },
  { date: "2024-06-15", offline: 307, online: 350 },
  { date: "2024-06-16", offline: 371, online: 310 },
  { date: "2024-06-17", offline: 475, online: 520 },
  { date: "2024-06-18", offline: 107, online: 170 },
  { date: "2024-06-19", offline: 341, online: 290 },
  { date: "2024-06-20", offline: 408, online: 450 },
  { date: "2024-06-21", offline: 169, online: 210 },
  { date: "2024-06-22", offline: 317, online: 270 },
  { date: "2024-06-23", offline: 480, online: 530 },
  { date: "2024-06-24", offline: 132, online: 180 },
  { date: "2024-06-25", offline: 141, online: 190 },
  { date: "2024-06-26", offline: 434, online: 380 },
  { date: "2024-06-27", offline: 448, online: 490 },
  { date: "2024-06-28", offline: 149, online: 200 },
  { date: "2024-06-29", offline: 103, online: 160 },
  { date: "2024-06-30", offline: 446, online: 400 },
]
const chartConfig = {
  views: {
    label: "Bookings",
  },
  offline: {
    label: "Offline",
    color: "var(--chart-1)",
  },
  online: {
    label: "Online",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig
export function ChartLineInteractive() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("offline")
  const total = React.useMemo(
    () => ({
      offline: chartData.reduce((acc, curr) => acc + curr.offline, 0),
      online: chartData.reduce((acc, curr) => acc + curr.online, 0),
    }),
    []
  )
  return (
    <Card className="py-4 sm:py-0">
      <CardHeader className="flex flex-col items-stretch border-b p-0! sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pb-3 sm:pb-0">
          <CardTitle>Offline vs Online Bookings Breakdown</CardTitle>
          <CardDescription>
            Showing total bookings from offline and online channels
          </CardDescription>
        </div>
        <div className="flex">
          {["offline", "online"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="data-[active=true]:bg-muted/50 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-muted-foreground text-xs">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg leading-none font-bold sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}