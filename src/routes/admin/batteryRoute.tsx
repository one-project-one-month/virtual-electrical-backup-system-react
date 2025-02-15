import {
  CreateBatteryPage,
  EditBatteryPage,
  BatteryPage,
} from "@/constants/lazyloadElement";

const batteryRoute = [
  {
    path: "battery",
    element: <BatteryPage />,
  },
  {
    path: "battery/create",
    element: <CreateBatteryPage />,
  },
  {
    path: "battery/edit/:slug",
    element: <EditBatteryPage />,
  },
];
export default batteryRoute;
