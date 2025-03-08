import CreateBatteryForm from "../components/battery/CreateBatteryForm";
import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";

const CreateBatteryPage = () => {
  return (
    <>
      <BreadcrumbDashboard
        currentPageTitle="Create Battery"
        links={[{ name: "Manage Battery", path: "../battery" }]}
      />
      <CreateBatteryForm />
    </>
  );
};

export default CreateBatteryPage;
