import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import EditSolarForm from "../components/solar/EditSolarForm";

const EditSolarPage = () => {
  return (
    <section className="px-5">
      <BreadcrumbDashboard
        currentPageTitle="Edit Solar"
        links={[{ name: "Manage Solar", path: "/admin/solar" }]}
      />
      <EditSolarForm />
    </section>
  );
};

export default EditSolarPage;
