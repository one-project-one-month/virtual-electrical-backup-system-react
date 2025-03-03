import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import InverterTypeTable from "../components/inverterType/InverterTypeTable";
import Header from "../components/inverterType/Header";
import PaginationComponent from "@/components/PaginationComponent";

export default function InverterPage() {
  return (
    <section>
      <BreadcrumbDashboard currentPageTitle="Manage Inverter Type" />
      <Header />
      <InverterTypeTable />
      <PaginationComponent />
    </section>
  );
}
