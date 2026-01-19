import {
  type LucideIcon,
  Plus,
} from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavProjects({
  projects,
}: {
  projects: {
    name: string
    url: string
    icon: LucideIcon
  }[]
}) {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden px-3">
      <div className="flex items-center justify-between px-2 py-2">
        <SidebarGroupLabel className="px-0 text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
          Trip Tools
        </SidebarGroupLabel>
        <button className="size-5 flex items-center justify-center text-muted-foreground hover:text-sidebar-foreground transition-colors">
          <Plus className="size-4" />
        </button>
      </div>
      <SidebarMenu className="gap-1">
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton 
              asChild
              className="h-10 px-3 hover:bg-accent/50 text-sidebar-foreground/80 hover:text-sidebar-foreground"
            >
              <a href={item.url}>
                <item.icon className="size-5 shrink-0" />
                <span className="text-sm">{item.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
