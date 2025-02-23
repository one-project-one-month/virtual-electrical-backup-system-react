import {
  CreateSolarPage,
  EditSolarPage,
  SolarPage,
} from "@/constants/lazyloadElement";

const solarRoute = [
  {
    path: "solar",
    element: <SolarPage />,
  },
  {
    path: "solar/create",
    element: <CreateSolarPage />,
  },
  {
    path: "solar/edit/:id",
    element: <EditSolarPage />,
  },
];

export default solarRoute;
