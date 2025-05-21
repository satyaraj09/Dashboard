import * as React from "react";
import { ChevronDown, User } from "lucide-react";
import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { navMenu } from "@/data/navMenu";
import { Link } from "react-router-dom";

const data = navMenu;

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center justify-center py-3">
            <Link to="/">
              <span className="text-5xl font-bold">abun</span>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuButton size="lg" className="border-2 rounded-full">
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-6 items-center justify-center rounded-full"></div>
            <div className="grid flex-1 text-left text-base leading-tight ">
              <span className="truncate font-medium">amazon.com</span>
            </div>
            <ChevronDown className="ml-auto" />
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-3">
          <User /> Profile
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
