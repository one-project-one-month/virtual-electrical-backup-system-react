import BreadcrumbDashboard from '@/components/BreadcrumbDashboard'
import CreateForm from '../components/generator/CreateForm'



const CreateGeneratorPage = () => {

  return (
    <>
    <BreadcrumbDashboard currentPageTitle='Create Generator' links={[{name: 'Manage Generator',path: '../generator'}]}/>
    <CreateForm/>
    </>
  )
}

export default CreateGeneratorPage