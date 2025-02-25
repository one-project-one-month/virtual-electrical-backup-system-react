import { lazy } from "react";

export const AdminLayout = lazy(() => import("@/layouts/AdminLayout"));
export const DashboardPage = lazy(() => import("@/admin/pages/DashboardPage"));

// Battery
export const BatteryPage = lazy(() => import("@/admin/pages/BatteryPage"));
export const CreateBatteryPage = lazy(
  () => import("@/admin/pages/CreateBatteryPage")
);
export const EditBatteryPage = lazy(
  () => import("@/admin/pages/EditBatteryPage")
);

//PowerStation
export const PowerStationPage = lazy(
  () => import("@/admin/pages/PowerStationPage")
);
export const CreatePowerStationPage = lazy(
  () => import("@/admin/pages/CreatePowerStationPage")
);
export const EditPowerStationPage = lazy(
  () => import("@/admin/pages/EditPowerStationPage")
);
