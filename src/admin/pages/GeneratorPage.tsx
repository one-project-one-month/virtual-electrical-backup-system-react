import BreadcrumbDashboard from "@/components/BreadcrumbDashboard";
import Header from "../components/generator/Header";
import GeneratorTable from "../components/generator/GeneratorTable";
import PaginationComponent from "@/components/PaginationComponent";


export default function GeneratorPage() {
  return (
    <section>
      <BreadcrumbDashboard currentPageTitle="Manage Generator"/>
      <Header/>
      <GeneratorTable/>
      <PaginationComponent/>
    </section>
    
  )
}
