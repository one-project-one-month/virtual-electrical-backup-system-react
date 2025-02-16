import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import BatteryTable from "../components/battery/BatteryTable";
import Header from "../components/battery/Header";
import PaginationComponent from "@/components/PaginationComponent";

export default function BatteryPage() {
  return (
    <section>
      <BreadcrumbDashboard currentPageTitle="Manage Battery" />
      <Header />
      <BatteryTable />
      <PaginationComponent />
    </section>
  );
}
