import powerStationRoute from "./powerStationRoute";
import LazyLoad from "@/components/LazyLoad";
import { AdminLayout, DashboardPage } from "@/constants/lazyloadElement";
import batteryRoute from "./batteryRoute";
import deviceRoute from "./deviceRoute";

const adminRoute = [
  {
    path: "admin",
    element: <LazyLoad component={AdminLayout} />,

    children: [
      {
        index: true,
        element: <LazyLoad component={DashboardPage} />,
      },
      ...batteryRoute,
      ...powerStationRoute,
      ...deviceRoute,
    ],
  },
];
export default adminRoute;
