import { ChevronRight, LucideHome, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Link, NavLink } from "react-router-dom";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <SidebarGroup className="space-y-2">
      {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}

      <SidebarMenu>
        <Collapsible>
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip="Dashboard">
                <NavLink to="/admin" end>
                  {({ isActive }: { isActive: boolean }) => (
                    <span
                      className={`flex gap-2 items-center w-60 ${
                        isActive ? "bg-electric-400 py-5 px-1 text-white" : ""
                      }`}
                    >
                      <LucideHome className="size-4" />
                      Dashboard
                    </span>
                  )}
                </NavLink>
              </SidebarMenuButton>
            </CollapsibleTrigger>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>

      {/* Product */}

      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <NavLink
                          to={subItem.url}
                          // end={subItem.url === "/admin"}
                        >
                          {({ isActive }: { isActive: boolean }) => (
                            <span
                              className={`w-full px-5 py-2.5 rounded-lg  duration-300 hover:text-white ${
                                isActive
                                  ? "bg-electric-400 text-white   hover:bg-electric-500"
                                  : " hover:bg-electric-400 "
                              } `}
                            >
                              {subItem.title}
                            </span>
                          )}
                        </NavLink>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
