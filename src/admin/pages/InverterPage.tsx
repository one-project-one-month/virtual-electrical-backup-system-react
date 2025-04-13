import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import InverterTable from "../components/inverter/InverterTable";
import Header from "../components/inverter/Header";
import PaginationComponent from "@/components/PaginationComponent";
import { useQuery } from "@tanstack/react-query";
import { getAllInvertersOption } from "@/query/inverterQueryOption";

export default function InverterPage() {
  const { data } = useQuery(getAllInvertersOption());
  console.log(data);
  return (
    <section>
      <BreadcrumbDashboard currentPageTitle="Manage Inverter" />
      <Header />
      <InverterTable data={data} />
      <PaginationComponent />
    </section>
  );
}
