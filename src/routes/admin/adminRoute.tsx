import powerStationRoute from "./powerStationRoute";
import LazyLoad from "@/components/LazyLoad";
import { AdminLayout, DashboardPage } from "@/constants/lazyloadElement";
import batteryRoute from "./batteryRoute";
import inverterRoute from "./inverterRoute";

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
      ...inverterRoute,
    ],
  },
];
export default adminRoute;
