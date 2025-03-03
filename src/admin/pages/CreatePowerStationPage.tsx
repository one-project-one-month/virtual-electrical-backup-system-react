
import BreadcrumbDashboard from "@/components/BreadcrumbDashboard"
import CreatePowerStationForm from "../components/powerstation/CreatePowerStationForm"

export default function CreatePowerStationPage() {
  return (
    <div>
      <BreadcrumbDashboard currentPageTitle="Create PowerStation" links={[{name: "Manage PowerStation", path: "../powerStation"}]} />
      <CreatePowerStationForm />
    </div>
  )
}
