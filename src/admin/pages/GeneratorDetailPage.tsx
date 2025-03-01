import BreadcrumbDashboard from '@/components/BreadcrumbDashboard'
import DetailForm from '../components/generator/DetailForm'

const GeneratorDetailPage = () => {
  return (
    <>
      <BreadcrumbDashboard
        currentPageTitle="Generator Detail"
        links={[{ name: "Manage generator", path: "../generator" }]}
      />
      <DetailForm />
    </>
  )
}

export default GeneratorDetailPage