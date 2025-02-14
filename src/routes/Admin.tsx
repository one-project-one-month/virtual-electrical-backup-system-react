import { useRoutes, Navigate } from "react-router-dom"
import AdminLayout from "@/layouts/AdminLayout"
import BatteryPage from "@/pages/Admin/BatteryPage"
import PowerStationPage from "@/pages/Admin/PowerStationPage"
import InvertorPage from "@/pages/Admin/InvertorPage"
import DevicesPage from "@/pages/Admin/DevicesPage"
import GeneratorPage from "@/pages/Admin/GeneratorPage"


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
                element: <PowerStationPage />
            },
            {
                path: "devices",
                element: <DevicesPage />
            },
            {
                path: "generator",
                element: <GeneratorPage />
            },
            {
                path: "invertor",
                element: <InvertorPage />
            },
        ]
    },
    {
        path: "*",
        element: <Navigate to="/admin" />
    }
  ])
}
