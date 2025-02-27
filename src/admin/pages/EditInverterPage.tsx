import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import EditInverterForm from "../components/inverter/EditInverterForm";

function EditInverterPage() {
  return (
    <>
      <BreadcrumbDashboard
        currentPageTitle="Edit Inverter"
        links={[{ name: "Manage Inverter", path: "../inverter" }]}
      />
      <EditInverterForm />
    </>
  );
}
export default EditInverterPage;
