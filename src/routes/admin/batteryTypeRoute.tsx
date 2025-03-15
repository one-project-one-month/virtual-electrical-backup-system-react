import LazyLoad from "@/components/LazyLoad";
import {
  BatteryTypePage,
  CreateBatteryTypePage,
  EditTypePage,
} from "@/constants/lazyloadElement";

const batteryTypeRoute = [
  {
    path: "battery-type",
    element: <LazyLoad component={BatteryTypePage} />,
  },
  {
    path: "battery-type/create",
    element: <LazyLoad component={CreateBatteryTypePage} />,
  },
  {
    path: "battery-type/edit/:id",
    element: <LazyLoad component={EditTypePage} />,
  },
];
export default batteryTypeRoute;
