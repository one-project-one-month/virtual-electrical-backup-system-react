import LazyLoad from "@/components/LazyLoad";
import {
  CreateSolarPage,
  EditSolarPage,
  SolarPage,
} from "@/constants/lazyloadElement";

const solarRoute = [
  {
    path: "solar",
    element: <LazyLoad component={SolarPage} />,
  },
  {
    path: "solar/create",
    element: <LazyLoad component={CreateSolarPage} />,
  },
  {
    path: "solar/edit/:id",
    element: <LazyLoad component={EditSolarPage} />,
  },
];

export default solarRoute;
