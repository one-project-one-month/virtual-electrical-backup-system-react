import powerStationRoute from "./powerStationRoute";
import LazyLoad from "@/components/LazyLoad";
import { AdminLayout, DashboardPage } from "@/constants/lazyloadElement";
import batteryRoute from "./batteryRoute";
import generatorRoute from "./generatorRoute";

import solarRoute from "./solarRoute";

import brandRoute from "./brandRoute";

import deviceRoute from "./deviceRoute";

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
      ...solarRoute,
      ...brandRoute,
      ...deviceRoute,
      ...inverterRoute,
      ...generatorRoute
    ],
  },
];
export default adminRoute;
