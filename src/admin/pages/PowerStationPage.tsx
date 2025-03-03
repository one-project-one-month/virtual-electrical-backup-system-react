import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import PowerStationTable from "../components/powerstation/PowerStationTable";
import PaginationComponent from "@/components/PaginationComponent";
import Header from "../components/powerstation/Header";

export default function PowerStationPage() {
  return (
    <section>
      <BreadcrumbDashboard currentPageTitle="Manage PowerStation" />
      <Header />
      <PowerStationTable />
      <PaginationComponent />
    </section>
  )
}
