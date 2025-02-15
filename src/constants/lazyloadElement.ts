import { lazy } from "react";

export const AdminLayout = lazy(() => import("@/layouts/AdminLayout"));
export const DashboardPage = lazy(() => import("@/admin/pages/DashboardPage"));
export const PowerStationPage = lazy(
  () => import("@/admin/pages/PowerStationPage")
);
