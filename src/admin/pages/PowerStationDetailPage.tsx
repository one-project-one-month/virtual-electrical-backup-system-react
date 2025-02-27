import BreadcrumbDashboard from "@/components/BreadcrumbDashboard"
import PowerStationDetail from "../components/powerstation/PowerStationDetail"

export default function PowerStationDetailPage() {
  return (
    <div>
        <BreadcrumbDashboard currentPageTitle="PowerStation Detail" links={[{name: "Manage PowerStation", path: "../powerStation"}]} />
        <PowerStationDetail />
    </div>
  )
}
