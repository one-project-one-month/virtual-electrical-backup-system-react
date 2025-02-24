import {
  CreateInverterPage,
  EditInverterPage,
  InverterPage,
  InverterDetailPage,
} from "@/constants/lazyloadElement";

const inverterRoute = [
  {
    path: "inverter",
    element: <InverterPage />,
  },
  {
    path: "inverter/create",
    element: <CreateInverterPage />,
  },
  {
    path: "inverter/edit/:slug",
    element: <EditInverterPage />,
  },
  {
    path: "inverter/detail/:slug",
    element: <InverterDetailPage />,
  },
];
export default inverterRoute;
