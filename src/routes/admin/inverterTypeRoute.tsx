import {
  CreateInverterTypePage,
  EditInverterTypePage,
  InverterTypePage,
} from "@/constants/lazyloadElement";
import LazyLoad from "@/components/LazyLoad";

const inverterTypeRoute = [
  {
    path: "inverterType",
    element: <LazyLoad component={InverterTypePage} />,
  },
  {
    path: "inverterType/create",
    element: <LazyLoad component={CreateInverterTypePage} />,
  },
  {
    path: "inverterType/edit/:id",
    element: <LazyLoad component={EditInverterTypePage} />,
  },
];
export default inverterTypeRoute;
