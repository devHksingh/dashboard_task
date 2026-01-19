import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
      icon?: LucideIcon
    }[]
  }[]
}) {
  return (
    <SidebarGroup className="px-3">
      <SidebarGroupLabel className="px-2 py-2 text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
        Main
      </SidebarGroupLabel>
      <SidebarMenu className="gap-1">
        {items.map((item) => {
          // If item has sub-items, render as collapsible
          if (item.items && item.items.length > 0) {
            return (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton 
                      tooltip={item.title}
                      className="h-10 px-3 hover:bg-accent/50 text-sidebar-foreground/80 hover:text-sidebar-foreground"
                    >
                      {item.icon && <item.icon className="size-5 shrink-0" />}
                      <span className="text-sm">{item.title}</span>
                      <ChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub className="ml-0 border-l-0 px-0">
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton 
                            asChild
                            className="pl-11 h-9 text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-accent/30"
                          >
                            <a href={subItem.url}>
                              {subItem.icon && <subItem.icon className="size-4 shrink-0 mr-2" />}
                              <span className="text-sm">{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            )
          }
          
          // Regular menu item without sub-items
          return (
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
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
