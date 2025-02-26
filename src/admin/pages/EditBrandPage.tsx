import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import EditBrandForm from "../components/brand/EditBrandForm";

const EditBrandPage = () => {
  return (
    <section>
      <BreadcrumbDashboard
        currentPageTitle="Edit Brand"
        links={[{ name: "Manage Brand", path: "/admin/brand" }]}
      />
      <EditBrandForm />
    </section>
  );
};

export default EditBrandPage;
