import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import Header from "../components/brand/Header";
import BrandTable from "../components/brand/BrandTable";
import PaginationComponent from "@/components/PaginationComponent";

const BrandPage = () => {
  return (
    <section>
      <BreadcrumbDashboard currentPageTitle="Manage Brand" />
      <Header />
      <BrandTable />
      <PaginationComponent />
    </section>
  );
};

export default BrandPage;
