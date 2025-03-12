import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { DialogCloseButton } from '../inverter/Dialog'
import { brands } from '@/admin/data/brands'
import { SelectBrand } from './SelectBrand'

const EditForm = () => {
    // const { id } = useParams<{ id: string }>(); // To get the generator ID from the URL
    // const navigate= useNavigate();
  
  return (
    <>
    <h2 className='pl-10 pt-5 font-medium text-xl'>Edit Generator</h2>
    <form className='grid grid-cols-12 gap-5 p-4 pl-10 pt-5'>
      <div className="col-span-3 grid gap-2">
        <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Name'> Generator Name</label>
        <Input type='text' id='name' placeholder='name' name='name' value='RXO' required/>
      </div>
      <div className="col-span-3 grid gap-2">
        <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Brand'>Brand</label>
        <div className="flex items-center gap-2">
        {/* <SelectBrand brands={brands}  name="brandId" defaultValue="" /> */}
        <DialogCloseButton isBrand={true} />
        </div>
      </div>
      <div className="row-start-2 col-span-3 grid gap-2">
        <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Model'>Model</label>
        <Input type='text' id='model' placeholder='model' name='model' value='ESX' required/>
      </div>
      <div className="row-start-2 col-span-3 grid gap-2">
        <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Watt'>Watt</label>
        <Input type='number' id='watt' placeholder='watt' name='watt' value='2000' required/>
      </div>
      <div className="row-start-3 col-span-3 grid gap-2">
        <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='FuelType'>Fuel Type</label>
        <Input type='text' id='fuelType' placeholder='fuel type' name='fuelType' value='Disel' required/>
      </div>
      <div className="row-start-3 col-span-3 grid gap-2">
        <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Price'>Price</label>
        <Input type='number' id='price' placeholder='price' name='price' value='3000' required/>
      </div>
      <div className="row-start-4 col-span-6 grid gap-2">
        <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Price'>Image</label>
        <Input type='file' id='image' placeholder='image' name='image' value='' required/>
      </div>
      <div className="row-start-5 col-span-6 grid gap-2">
        <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Price'>Description</label>
        <Textarea id='price' placeholder='description' name='description' value='A completion is on the next step.' required/>
      </div>
      <div className="row-start-6 col-span-3 flex items-center  gap-4">
          <input
            className="size-4 inline flex-shrink-0"
            type="checkbox"
            id="redirect_to_device"
            name="redirect_to_list"
          />
          <label
            className="text-gray-500 text-sm text-nowrap"
            htmlFor="redirect_to_device"
          >
            Redirect to manage inverter
          </label>
        </div>
      <div className="row-start-7 ">
      <Button variant='default' className='px-5 duration-500 bg-electric-500 hover:bg-electric-600 active:scale-95'>Create</Button>
      </div>
      <div className="row-start-7">
      <Button variant='outline' className='' onClick={()=> window.history.back()}>Cancel</Button>
      </div>
    </form>
    </>
  )
}

export default EditForm