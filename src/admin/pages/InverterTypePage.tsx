import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import InverterTypeTable from "../components/inverterType/InverterTypeTable";
import Header from "../components/inverterType/Header";
import PaginationComponent from "@/components/PaginationComponent";
import fetchInverterType from "@/services/inverterType/fetchInverterType";
import { useQuery } from "@tanstack/react-query";
import { SkeletonTable } from "../components/inverterType/SkeletonTable";

export default function InverterPage() {
  const { data: inverterTypeData, isLoading } = useQuery({
    queryKey: ["inverterType"],
    queryFn: () => fetchInverterType(),
  });
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
