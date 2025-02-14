import { useRoutes, Navigate } from "react-router-dom"
import AdminLayout from "@/layouts/AdminLayout"
import BatteryPage from "@/pages/Admin/Battery/page"
import PowerStation from "@/pages/Admin/PowerStation/page"
import Invertor from "@/pages/Admin/Invertor/page"
import Devices from "@/pages/Admin/Devices/page"
import Generator from "@/pages/Admin/Generator/page"


export default function Admin() {
  return useRoutes([
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <BatteryPage />,
            },
            {
                path: "powerstation",
                element: <PowerStation />
            },
            {
                path: "devices",
                element: <Devices />
            },
            {
                path: "generator",
                element: <Generator />
            },
            {
                path: "invertor",
                element: <Invertor />
            },
        ]
    },
    {
        path: "*",
        element: <Navigate to="/admin" />
    }
  ])
}
