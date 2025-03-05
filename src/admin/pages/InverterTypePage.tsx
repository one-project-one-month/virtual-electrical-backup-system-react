import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import InverterTypeTable from "../components/inverterType/InverterTypeTable";
import Header from "../components/inverterType/Header";
import PaginationComponent from "@/components/PaginationComponent";
import fetchInverterType from "@/services/inverterType/fetchInverterType";
import { useQuery } from "@tanstack/react-query";
export default function InverterPage() {
  const { data: inverterTypeData } = useQuery({
    queryKey: ["inverterType"],
    queryFn: () => fetchInverterType(),
  });
  const inverterType = inverterTypeData?.reverse();
  return (
    <section>
      <BreadcrumbDashboard currentPageTitle="Manage Inverter Type" />
      <Header />
      <InverterTypeTable data={inverterType} />
      <PaginationComponent />
    </section>
  );
}
