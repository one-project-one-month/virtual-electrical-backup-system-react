import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import CreateSolarForm from "../components/solar/CreateSolarForm";

const CreateSolarPage = () => {
  return (
    <section className="px-5">
      <BreadcrumbDashboard
        currentPageTitle="Create Solar"
        links={[{ name: "Manage Solar", path: "/admin/solar" }]}
      />
      <CreateSolarForm />
    </section>
  );
};

export default CreateSolarPage;
