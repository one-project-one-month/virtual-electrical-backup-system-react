import {
  CreateInverterPage,
  EditInverterPage,
  InverterPage,
  InverterDetailPage,
} from "@/constants/lazyloadElement";
import LazyLoad from "@/components/LazyLoad";

const inverterRoute = [
  {
    path: "inverter",
    element: <LazyLoad component={InverterPage} />,
  },
  {
    path: "inverter/create",
    element: <LazyLoad component={CreateInverterPage} />,
  },
  {
    path: "inverter/edit/:id",
    element: <LazyLoad component={EditInverterPage} />,
  },
  {
    path: "inverter/detail/:id",
    element: <LazyLoad component={InverterDetailPage} />,
  },
];
export default inverterRoute;
