import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import InverterTable from "../components/inverter/InverterTable";
import Header from "../components/inverter/Header";
import PaginationComponent from "@/components/PaginationComponent";

export default function InverterPage() {
  return (
    <section>
      <BreadcrumbDashboard currentPageTitle="Manage Inverter" />
      <Header />
      <InverterTable />
      <PaginationComponent />
    </section>
  );
}
