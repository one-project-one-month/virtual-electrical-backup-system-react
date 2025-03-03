import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import DeviceTable from "../components/device/DeviceTable";
import Header from "../components/device/Header";
import PaginationComponent from "@/components/PaginationComponent";

export default function BatteryPage() {
  return (
    <section>
      <BreadcrumbDashboard currentPageTitle="Manage Device" />
      <Header />
      <DeviceTable />
      <PaginationComponent />
    </section>
  );
}
