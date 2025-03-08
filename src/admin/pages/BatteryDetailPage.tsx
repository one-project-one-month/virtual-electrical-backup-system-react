import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import BatteryDetailForm from "../components/battery/BatteryDetailForm";

function BatteryDetailPage() {
    return (
        <>
        <BreadcrumbDashboard
            currentPageTitle="Battery Detail"
            links={[{ name: "Manage Battery", path: "../battery" }]}
        />
        <BatteryDetailForm />
        </>
    );
}
export default BatteryDetailPage;
