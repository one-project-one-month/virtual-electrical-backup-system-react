import { lazy } from "react";

export const AdminLayout = lazy(() => import("@/layouts/AdminLayout"));
export const DashboardPage = lazy(() => import("@/admin/pages/DashboardPage"));
export const PowerStationPage = lazy(
  () => import("@/admin/pages/PowerStationPage")
);

// Battery
export const BatteryPage = lazy(() => import("@/admin/pages/BatteryPage"));
export const CreateBatteryPage = lazy(
  () => import("@/admin/pages/CreateBatteryPage")
);
export const EditBatteryPage = lazy(
  () => import("@/admin/pages/EditBatteryPage")
);
