import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import EditTypeForm from "../components/battery-type/EditTypeForm";

const EditBatteryTypePage = () => {
  return (
    <section>
      <BreadcrumbDashboard currentPageTitle="Manage Type" />
      <EditTypeForm />
    </section>
  );
};

export default EditBatteryTypePage;
