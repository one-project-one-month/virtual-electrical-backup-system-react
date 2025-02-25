import {
  CreateDevicePage,
  EditDevicePage,
  DevicePage,
} from "@/constants/lazyloadElement";

const deviceRoute = [
  {
    path: "device",
    element: <DevicePage />,
  },
  {
    path: "device/create",
    element: <CreateDevicePage />,
  },
  {
    path: "device/edit/:id",
    element: <EditDevicePage />,
  },
];

export default deviceRoute;
