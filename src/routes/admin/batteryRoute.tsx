import {
  CreateBatteryPage,
  EditBatteryPage,
  BatteryPage,
  BatteryDetailPage,
} from "@/constants/lazyloadElement";
import LazyLoad from "@/components/LazyLoad";

const batteryRoute = [
  {
    path: "battery",
    element: <LazyLoad component={BatteryPage} />,
  },
  {
    path: "battery/create",
    element: <LazyLoad component={CreateBatteryPage} />,
  },
  {
    path: "battery/edit/:id",
    element: <LazyLoad component={EditBatteryPage} />,
  },
  {
    path: "battery/detail/:id",
    element: <LazyLoad component={BatteryDetailPage} />,
  },
];
export default batteryRoute;
