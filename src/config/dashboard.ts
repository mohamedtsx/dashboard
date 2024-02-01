import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
    {
      title: "Home",
      href: "/dashboard",
      icon: "home",
    },
    {
      title: "Users",
      href: "/dashboard/customers",
      icon: "users",
    },
    {
      title: "Books",
      href: "/dashboard/books",
      icon: "book",
    },
  ],
};
