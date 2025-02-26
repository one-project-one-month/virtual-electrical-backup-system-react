import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import CreateBrandForm from "../components/brand/CreateBrandForm";

const CreateBrandPage = () => {
  return (
    <section className="px-5">
      <BreadcrumbDashboard
        currentPageTitle="Create Brand"
        links={[{ name: "Manage Brand", path: "/admin/brand" }]}
      />

      <CreateBrandForm />
    </section>
  );
};

export default CreateBrandPage;
