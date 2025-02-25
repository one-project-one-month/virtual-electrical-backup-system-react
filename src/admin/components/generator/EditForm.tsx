
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useGeneratorStore } from '@/store/generatorStore'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Textarea } from '@/components/ui/textarea'
import { LucidePlusCircle } from 'lucide-react'

const EditForm = () => {
    const { id } = useParams<{ id: string }>(); // To get the generator ID from the URL
    const navigate= useNavigate();
  
    const generators = useGeneratorStore((state)=>state.generators)
  
    const updateGenerator = useGeneratorStore((state)=> state.updateGenerator)
  
    const [name, setName] = useState<string>('');
    const [brand, setBrand] = useState<number>();
    const [model, setModel] = useState<string>('');
    const [watt, setWatt] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);
    const [fuelType, setFuelType] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [image, setImage] = useState<string>('');
  
    useEffect(()=>{
      const selectedGenerator = generators.find((gen)=> gen.id === Number(id))
      // console.log(selectedGenerator)
      if(selectedGenerator){
        setName(selectedGenerator.name),
        setBrand(selectedGenerator.brand),
        setModel(selectedGenerator.model),
        setWatt(selectedGenerator.watt),
        setPrice(selectedGenerator.price),
        setFuelType(selectedGenerator.fuelType)
        setDescription(selectedGenerator.description)
        // setImage(selectedGenerator.image)
      }
    },[id,generators])
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      if (name && brand && model && watt && price && fuelType && description && image ) {
        const updatedGenerator  = {
          id: Number(id),
          name,
          brand,
          model,
          watt,
          price,
          fuelType,
          description,
          image
        }
        updateGenerator(updatedGenerator);
        navigate('/admin/generator');
      }else{
        alert('Please fill all fields.')
      }
    }
  return (
    <>
      <h2 className='pl-10 pt-5 font-medium text-xl'>Edit Generator</h2>
    <form className='grid grid-cols-12 gap-5 p-4 pl-10 pt-5' onSubmit={handleSubmit}>
    <div className=" col-span-4 grid gap-2">
        <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Price'>Image</label>
        <Input type='file' id='image' placeholder='image' name='image' value={image} onChange={(e)=>setImage(e.target.value)} required/>
      </div>
      <div className="row-start-2 col-span-4 grid gap-2">
        <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Name'> Generator Name</label>
        <Input type='text' id='name' placeholder='name' name='name' value={name} onChange={(e)=>setName(e.target.value)} required/>
      </div>
      <div className="row-start-2 col-span-4 grid gap-2">
        <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Model'>Model</label>
        <Input type='text' id='model' placeholder='model' name='model' value={model} onChange={(e)=>setModel(e.target.value)} required/>
      </div>
      <div className="row-start-2 col-span-4 grid gap-2">
        <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Brand'>Brand</label>
        <div className="flex">
        <Input type='' id='brand' placeholder='brand' name='brand' value={brand} onChange={(e)=>setBrand(Number(e.target.value))} required/>
        <Button type='button' variant='outline' size='icon' className='rounded'><LucidePlusCircle /></Button>
        </div>
        
      </div>
      <div className="row-start-3 col-span-4 grid gap-2">
        <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Watt'>Watt</label>
        <Input type='number' id='watt' placeholder='watt' name='watt' value={watt} onChange={(e)=>setWatt(Number(e.target.value))} required/>
      </div>
      <div className="row-start-3 col-span-4 grid gap-2">
        <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Price'>Price</label>
        <Input type='number' id='price' placeholder='price' name='price' value={price} onChange={(e)=>setPrice(Number(e.target.value))}  required/>
      </div>
      <div className="row-start-3 col-span-4 grid gap-2">
      <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='FuelType'>Fuel Type</label>
        <div className="flex gap-1">
        <Input type='text' id='fuelType' placeholder='fuel type' name='fuelType' value={fuelType} onChange={(e)=>setFuelType(e.target.value)} required/>
        <Button type='button' variant='outline' size='icon' className='rounded'><LucidePlusCircle /></Button>
        </div>
      </div>
      <div className="row-start-4 col-span-12 grid gap-2">
        <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Price'>Description</label>
        <Textarea id='description' placeholder='description' name='description' value={description} onChange={(e)=>setDescription(e.target.value)} required/>
      </div>
      <div className="row-start-5 col-span-1 grid gap-2">
      <Button variant='default' className='duration-500 bg-electric-500 hover:bg-electric-600 active:scale-95'>Edit</Button>
      </div>
      <div className="row-start-5 col-span-1 grid gap-2">
      <Button variant='outline' className='' onClick={()=> window.history.back()}>Cancel</Button>
      </div>
    </form>
    </>
  )
}

export default EditForm