import {
  CreateDevicePage,
  EditDevicePage,
  DevicePage,
} from "@/constants/lazyloadElement";
import LazyLoad from "@/components/LazyLoad";

const deviceRoute = [
  {
    path: "device",
    element: <LazyLoad component={DevicePage} />,
  },
  {
    path: "device/create",
    element: <LazyLoad component={CreateDevicePage} />,
  },
  {
    path: "device/edit/:id",
    element: <LazyLoad component={EditDevicePage} />,
  },
];

export default deviceRoute;
