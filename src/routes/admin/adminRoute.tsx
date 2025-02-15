import DashboardPage from "@/admin/pages/DashboardPage";
import AdminLayout from "@/layouts/AdminLayout";
import powerStationRoute from "./powerStationRoute";

const adminRoute = [
  {
    path: "admin",
    element: <AdminLayout />,

    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      ...powerStationRoute,
    ],
  },
];
export default adminRoute;
