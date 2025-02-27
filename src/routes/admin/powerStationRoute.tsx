import LazyLoad from "@/components/LazyLoad";
import { PowerStationPage, EditPowerStationPage, CreatePowerStationPage, PowerStationDetailPage } from "@/constants/lazyloadElement";

const powerStationRoute = [
  {
    path: "powerStation",
    element: <LazyLoad component={PowerStationPage} />,
  },
  {
    path: "powerStation/create",
    element: <LazyLoad component={CreatePowerStationPage} />,
  },
  {
    path: "powerStation/edit/:id",
    element: <LazyLoad component={EditPowerStationPage} />
  },
  {
    path: "powerStation/detail/:id",
    element: <LazyLoad component={PowerStationDetailPage} />
  }

];
export default powerStationRoute;
