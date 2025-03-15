import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import Header from "../components/battery-type/Header";
import TypeTable from "../components/battery-type/TypeTable";
import PaginationComponent from "@/components/PaginationComponent";

const BatteryTypePage = () => {
  return (
    <section>
      <BreadcrumbDashboard currentPageTitle="Manage Brand" />
      <Header />
      <TypeTable />
      <PaginationComponent />
    </section>
  );
};

export default BatteryTypePage;
