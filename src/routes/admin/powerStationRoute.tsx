import { PowerStationPage, EditPowerStationPage, CreatePowerStationPage } from "@/constants/lazyloadElement";

const powerStationRoute = [
  {
    path: "powerStation",
    element: <PowerStationPage />,
  },
  {
    path: "powerStation/create",
    element: <CreatePowerStationPage />,
  },
  {
    path: "powerStation/edit/:id",
    element: <EditPowerStationPage />
  }

];
export default powerStationRoute;
