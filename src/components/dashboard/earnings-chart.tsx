import { useState, useRef, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

type TimeRange = "Weekly" | "Monthly" | "Yearly"

const chartData = {
  Weekly: [
    { label: "Mon", weekly: 500000, monthly: 300000, yearly: 200000 },
    { label: "Tue", weekly: 800000, monthly: 600000, yearly: 400000 },
    { label: "Wed", weekly: 1200000, monthly: 1000000, yearly: 700000 },
    { label: "Thu", weekly: 1600000, monthly: 1400000, yearly: 1000000 },
    { label: "Fri", weekly: 2180000, monthly: 1800000, yearly: 1300000 },
    { label: "Sat", weekly: 2400000, monthly: 2000000, yearly: 1500000 },
    { label: "Sun", weekly: 2640000, monthly: 2180000, yearly: 1700000 },
  ],
  Monthly: [
    { label: "Week 1", weekly: 980000, monthly: 800000, yearly: 500000 },
    { label: "Week 2", weekly: 1500000, monthly: 1200000, yearly: 900000 },
    { label: "Week 3", weekly: 2180000, monthly: 1800000, yearly: 1400000 },
    { label: "Week 4", weekly: 2640000, monthly: 2180000, yearly: 1800000 },
  ],
  Yearly: [
    { label: "Jan", weekly: 800000, monthly: 600000, yearly: 400000 },
    { label: "Feb", weekly: 1000000, monthly: 800000, yearly: 600000 },
    { label: "Mar", weekly: 1400000, monthly: 1100000, yearly: 800000 },
    { label: "Apr", weekly: 1200000, monthly: 950000, yearly: 700000 },
    { label: "May", weekly: 1800000, monthly: 1400000, yearly: 1100000 },
    { label: "Jun", weekly: 2180000, monthly: 1700000, yearly: 1300000 },
    { label: "Jul", weekly: 2400000, monthly: 1900000, yearly: 1500000 },
    { label: "Aug", weekly: 2100000, monthly: 1650000, yearly: 1250000 },
    { label: "Sep", weekly: 2300000, monthly: 1800000, yearly: 1400000 },
    { label: "Oct", weekly: 2500000, monthly: 2000000, yearly: 1600000 },
    { label: "Nov", weekly: 2640000, monthly: 2100000, yearly: 1750000 },
    { label: "Dec", weekly: 2800000, monthly: 2200000, yearly: 1850000 },
  ],
}

const formatCurrency = (value: number) => {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`
  }
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`
  }
  return `$${value}`
}

export function EarningsChart() {
  const [timeRange, setTimeRange] = useState<TimeRange>("Monthly")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const data = chartData[timeRange]
  const maxValue = 3000000

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height
    const padding = 40

    ctx.clearRect(0, 0, width, height)

    const drawLine = (values: number[], color: string, lineWidth: number) => {
      ctx.strokeStyle = color
      ctx.lineWidth = lineWidth
      ctx.lineCap = "round"
      ctx.lineJoin = "round"

      ctx.beginPath()
      values.forEach((value, index) => {
        const x = padding + (index / (values.length - 1)) * (width - padding * 2)
        const y = height - padding - ((value / maxValue) * (height - padding * 2))

        if (index === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })
      ctx.stroke()
    }

    // Draw lines for each data series
    drawLine(data.map(d => d.yearly), "#d1d5db", 3)
    drawLine(data.map(d => d.monthly), "#1f2937", 3)
    drawLine(data.map(d => d.weekly), "#f7d34a", 3)
  }, [data, maxValue])

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Total Earnings</h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-muted/30 rounded-lg p-1">
            {(["Weekly", "Monthly", "Yearly"] as TimeRange[]).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={cn(
                  "px-3 py-1.5 text-xs font-medium rounded-md transition-colors",
                  timeRange === range
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {range}
              </button>
            ))}
          </div>
          <button className="p-2 rounded-lg hover:bg-accent/50 transition-colors">
            <ArrowUpRight className="size-4" />
          </button>
        </div>
      </div>

      {/* Chart Labels */}
      <div className="mb-4 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-[#FFD550]"></div>
          <span className="text-xs text-muted-foreground">Weekly</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-foreground"></div>
          <span className="text-xs text-muted-foreground">Monthly</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-muted-foreground/50"></div>
          <span className="text-xs text-muted-foreground">Yearly</span>
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative h-80 w-full">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-12 flex flex-col justify-between text-xs text-muted-foreground">
          <span>30M</span>
          <span>20M</span>
          <span>10M</span>
          <span>1M</span>
          <span>500K</span>
          <span>0</span>
        </div>

        {/* Canvas for line chart */}
        <canvas
          ref={canvasRef}
          width={800}
          height={320}
          className="absolute inset-0 ml-12"
          style={{ width: 'calc(100% - 3rem)', height: '100%' }}
        />

        {/* X-axis labels */}
        <div className="absolute bottom-0 left-12 right-0 flex justify-between text-xs text-muted-foreground">
          {data.map((point, index) => (
            <span key={index}>{point.label}</span>
          ))}
        </div>

        {/* Interactive hover points */}
        <div className="absolute inset-0 ml-12 flex items-end justify-between pb-12">
          {data.map((point, index) => {
            const weeklyHeight = (point.weekly / maxValue) * 100
            const isHovered = hoveredIndex === index

            return (
              <div
                key={index}
                className="flex-1 h-full flex items-end justify-center cursor-pointer group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {isHovered && (
                  <div className="absolute -top-8 bg-[#FFD550] text-black px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap z-10 shadow-lg">
                    {formatCurrency(point.weekly)}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#FFD550] rotate-45"></div>
                  </div>
                )}
                <div
                  className="size-3 rounded-full bg-[#FFD550] opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                  style={{ marginBottom: `${weeklyHeight}%` }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
