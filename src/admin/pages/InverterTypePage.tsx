import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import InverterTypeTable from "../components/inverterType/InverterTypeTable";
import Header from "../components/inverterType/Header";
import PaginationComponent from "@/components/PaginationComponent";
import { useQuery } from "@tanstack/react-query";
import { SkeletonTable } from "../components/inverterType/SkeletonTable";
import { getAllInverterTypeOption } from "@/query/inverterTypeQueryOption";

export default function InverterPage() {
  const { data: inverterTypeData, isLoading } = useQuery(
    getAllInverterTypeOption()
  );
  let content = null;
  if (isLoading) {
    content = <SkeletonTable />;
  } else {
    content = (
      <>
        <InverterTypeTable data={inverterTypeData} />
        <PaginationComponent />
      </>
    );
  }
  return (
    <section>
      <BreadcrumbDashboard currentPageTitle="Manage Inverter Type" />
      <Header />
      {content}
    </section>
  );
}
