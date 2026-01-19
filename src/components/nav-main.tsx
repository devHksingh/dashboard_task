import { type LucideIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
  }[]
}) {
  return (
    <SidebarGroup className="px-3">
      <SidebarGroupLabel className="px-2 py-2 text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
        Main
      </SidebarGroupLabel>
      <SidebarMenu className="gap-1">
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton 
              tooltip={item.title}
              isActive={item.isActive}
              className={`h-10 px-3 ${item.isActive ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground font-medium" : "hover:bg-accent/50 text-sidebar-foreground/80 hover:text-sidebar-foreground"}`}
              asChild
            >
              <a href={item.url}>
                {item.icon && <item.icon className="size-5 shrink-0" />}
                <span className="text-sm">{item.title}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
