import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import EditInverterTypeForm from "../components/inverterType/EditInverterTypeForm";
function EditInverterTypePage() {
  return (
    <>
      <BreadcrumbDashboard
        currentPageTitle="Edit Inverter Type"
        links={[{ name: "Manage Inverter Type", path: "../inverterType" }]}
      />
      <EditInverterTypeForm />
    </>
  );
}
export default EditInverterTypePage;
