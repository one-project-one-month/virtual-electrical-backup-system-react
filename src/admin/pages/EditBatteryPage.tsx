import EditBatteryForm from "../components/battery/EditBatteryForm";
import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";

const EditBatteryPage = () => {
  return (
    <>
      <BreadcrumbDashboard
        currentPageTitle="Edit Battery"
        links={[{ name: "Manage Battery", path: "../battery" }]}
      />

      <EditBatteryForm />
    </>
  );
};

export default EditBatteryPage;
