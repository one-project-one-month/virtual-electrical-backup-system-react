import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import CreateInverterTypeForm from "../components/inverterType/CreateInverterTypeForm";
function CreateInverterTypePage() {
  return (
    <>
      <BreadcrumbDashboard
        currentPageTitle="Create Inverter Type"
        links={[{ name: "Manage Inverter Type", path: "../inverterType" }]}
      />
      <CreateInverterTypeForm />
    </>
  );
}
export default CreateInverterTypePage;
