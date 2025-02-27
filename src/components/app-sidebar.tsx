import * as React from "react";
import { LucidePackage, LucideCable } from "lucide-react";

import { NavMain} from "@/components/nav-main";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

// This is sample data.
const data = {
  logo:{
      title: "VEBS",
      url: "/admin",
      icon: LucideCable,
    },
  navMain: [
    {
      title: "Products",
      url: "#",
      icon: LucidePackage,
      isActive: true,
      items: [
        {
          title: "Battery",
          url: "/admin/battery",
        },
        {
          title: "Brand",
          url: "/admin/brand",
        },
        {
          title: "PowerStation",
          url: "/admin/powerStation",
        },
        {
          title: "Inverter",
          url: "/admin/inverter",
        },
        {
          title: "Generator",
          url: "/admin/generator",
        },
        {
          title: "Device",
          url: "/admin/device",
        },
        {
          title: "Setup",
          url: "/admin/setup",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link to="/admin">
          <SidebarMenuButton tooltip={data.logo.title} className="flex align-center justify-center ">
            {data.logo.icon && <data.logo.icon />}
                <span className="font-bold text-xl tracking-[0.2rem]">{data.logo.title}</span>
          </SidebarMenuButton>
        </Link>
        {/* <TeamSwitcher teams={data.teams} /> */}
      </SidebarHeader>

      <SidebarContent >
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
      {/* <SidebarRail /> */}
    </Sidebar>
  );
}
