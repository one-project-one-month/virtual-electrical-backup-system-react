import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import Header from "../components/solar/Header";
import SolarTable from "../components/solar/SolarTable";

const SolarPage = () => {
  return (
    <section className="px-5">
      <BreadcrumbDashboard currentPageTitle="Manage Solar" />
      <Header />
      <SolarTable />
    </section>
  );
};

export default SolarPage;
