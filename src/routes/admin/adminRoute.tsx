import DashboardPage from "@/admin/pages/DashboardPage";
import AdminLayout from "@/layouts/AdminLayout";

const adminRoute = [
  {
    path: "admin",
    element: <AdminLayout />,

    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  },
];
export default adminRoute;
