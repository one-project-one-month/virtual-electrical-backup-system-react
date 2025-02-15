import * as React from "react";
import { LucidePackage } from "lucide-react";

import { NavMain } from "@/components/nav-main";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
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
          title: "PowerStation",
          url: "#",
        },
        {
          title: "Inverter",
          url: "#",
        },
        {
          title: "Generator",
          url: "#",
        },
        {
          title: "Device",
          url: "#",
        },
        {
          title: "Setup",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <h1 className="text-lg font-semibold"> VEBS </h1>
        {/* <TeamSwitcher teams={data.teams} /> */}
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
      {/* <SidebarRail /> */}
    </Sidebar>
  );
}
