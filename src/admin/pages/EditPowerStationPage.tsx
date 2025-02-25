import BreadcrumbDashboard from "@/components/BreadcrumbDashboard"
import EditPowerStationForm from "../components/powerstation/EditPowerStationForm"

export default function EditPowerStationPage() {
  return (
    <div>
      <BreadcrumbDashboard currentPageTitle="Edit PowerStation" links={[{name: "Manage PowerStation", path: "../powerStation"}]} />
      <EditPowerStationForm />
    </div>
  )
}
