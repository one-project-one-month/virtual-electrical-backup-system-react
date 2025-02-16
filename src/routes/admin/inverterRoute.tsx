import {
  CreateInverterPage,
  EditInverterPage,
  InverterPage,
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
];
export default inverterRoute;
