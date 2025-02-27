import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import CreateInverterForm from "../components/inverter/CreateInverterForm";
function CreateInverterPage() {
  return (
    <>
      <BreadcrumbDashboard
        currentPageTitle="Create Inverter"
        links={[{ name: "Manage Inverter", path: "../inverter" }]}
      />
      <CreateInverterForm />
    </>
  );
}
export default CreateInverterPage;
