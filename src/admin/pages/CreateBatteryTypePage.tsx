import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import CreateTypeForm from "../components/battery-type/CreateTypeForm";

const CreateBatteryTypePage = () => {
  return (
    <section className="px-5">
      <BreadcrumbDashboard
        currentPageTitle="Create New Battery Type"
        links={[{ name: "Manage Battery Type", path: "/admin/type" }]}
      />
      <CreateTypeForm />
    </section>
  );
};

export default CreateBatteryTypePage;
