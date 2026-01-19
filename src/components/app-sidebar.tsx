

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Search,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Bookings",
      url: "#",
      icon: BookOpen,
    },
    {
      title: "Packages",
      url: "#",
      icon: Frame,
    },
    {
      title: "Revenue",
      url: "#",
      icon: PieChart,
    },
    {
      title: "Analytics",
      url: "#",
      icon: Settings2,
    },
  ],
  tripTools: [
    {
      name: "Route planner",
      url: "#",
      icon: Map,
    },
    {
      name: "Agents",
      url: "#",
      icon: Bot,
    },
    {
      name: "Partners",
      url: "#",
      icon: AudioWaveform,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="border-b border-sidebar-border pb-3">
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
            <GalleryVerticalEnd className="size-4 text-primary-foreground" />
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="text-base font-semibold text-sidebar-foreground">Gotrips</span>
            <span className="text-xs text-muted-foreground">Travel analytics</span>
          </div>
        </div>
        <div className="px-4 pt-2 group-data-[collapsible=icon]:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input 
              placeholder="Search destination or ID" 
              className="pl-9 bg-input/50 border-border/50 h-9 text-sm placeholder:text-muted-foreground/60"
            />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.tripTools} />
      </SidebarContent>
      <SidebarFooter>
        <div className="border-t border-sidebar-border pt-3">
          <div className="px-3 py-2 group-data-[collapsible=icon]:hidden">
            <p className="text-xs font-semibold text-sidebar-foreground mb-2">Monthly quota</p>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-xs text-muted-foreground">Bookings</span>
              <span className="text-xs font-semibold text-sidebar-foreground">2,365 / 5,000</span>
            </div>
            <div className="h-1.5 bg-input/50 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: '47%' }}></div>
            </div>
            <button className="w-full mt-3 px-4 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-sm">
              Upgrade plan
            </button>
          </div>
        </div>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
