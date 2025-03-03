import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import InverterDetailForm from "../components/inverter/InverterDetailForm";

function InverterDetailPage() {
  return (
    <>
      <BreadcrumbDashboard
        currentPageTitle="Inverter Detail"
        links={[{ name: "Manage Inverter", path: "../inverter" }]}
      />
      <InverterDetailForm />
    </>
  );
}
export default InverterDetailPage;
