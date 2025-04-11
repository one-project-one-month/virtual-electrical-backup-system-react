import BreadcrumbDashboard from '@/components/BreadcrumbDashboard'

import EditForm from '../components/generator/EditForm'


const EditGeneratorPage : React.FC = () => {

  return (
    <>
    <BreadcrumbDashboard currentPageTitle='Edit Generator' links={[{name: 'Manage Generator',path: '../generator'}]}/>
    <EditForm/>
    </>
  )
}

export default EditGeneratorPage