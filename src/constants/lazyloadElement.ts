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
export const BatteryDetailPage = lazy(
  () => import("@/admin/pages/BatteryDetailPage")
);

//generator 
export const GeneratorPage = lazy(() => import("@/admin/pages/GeneratorPage"));
export const CreateGeneratorPage = lazy(
  () => import("@/admin/pages/CreateGeneratorPage")
);
export const EditGeneratorPage = lazy(
  () => import("@/admin/pages/EditGeneratorPage")
);
export const GeneratorDetailPage = lazy(
  () => import("@/admin/pages/GeneratorDetailPage")
)
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
export const PowerStationDetailPage = lazy(
  () => import("@/admin/pages/PowerStationDetailPage")
)

//Solar

export const SolarPage = lazy(() => import("@/admin/pages/SolarPage"));
export const CreateSolarPage = lazy(
  () => import("@/admin/pages/CreateSolarPage")
);
export const EditSolarPage = lazy(() => import("@/admin/pages/EditSolarPage"));


//brand
export const BrandPage = lazy(() => import("@/admin/pages/BrandPage"));
export const CreateBrandPage = lazy(
  () => import("@/admin/pages/CreateBrandPage")
);
export const EditBrandPage = lazy(() => import("@/admin/pages/EditBrandPage"));



// Device
export const DevicePage = lazy(() => import("@/admin/pages/DevicesPage"));
export const CreateDevicePage = lazy(
  () => import("@/admin/components/device/CreateDeviceForm")
);
export const EditDevicePage = lazy(
  () => import("@/admin/components/device/EditDeviceForm")
)
//Inverter
export const InverterPage = lazy(() => import("@/admin/pages/InverterPage"));
export const CreateInverterPage = lazy(
  () => import("@/admin/pages/CreateInverterPage")
);
export const EditInverterPage = lazy(
  () => import("@/admin/pages/EditInverterPage")
);
export const InverterDetailPage = lazy(
  () => import("@/admin/pages/InverterDetailPage")


);
