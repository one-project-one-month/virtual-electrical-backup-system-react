
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useGeneratorStore } from '@/store/generatorStore'
import type { Generator } from '@/types/generator'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateForm = () => {
    const [name, setName] = useState<string>('');
    const [brand, setBrand] = useState<number>();
    const [model, setModel] = useState<string>('');
    const [watt, setWatt] = useState<number>();
    const [price, setPrice] = useState<number>();
    const [fuelType, setFuelType] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [image, setImage] = useState<string>('');

    const navigate = useNavigate()
    const createGenerator = useGeneratorStore((state)=>state.createGenerator)
  
    const handleSubmit = (e : React.FormEvent) => {
      e.preventDefault()
      if (name && brand && model && watt && price && fuelType ) {
        const newGenerator: Generator = {
          id: Date.now(), // Generate a unique ID for the new generator
          name,
          brand,
          model,
          watt,
          price,
          fuelType,
          description,
          image
        };
          createGenerator(newGenerator)
          setName(''); // Reset form fields
          setBrand(0);
          setModel('');
          setWatt(0);
          setPrice(0);
          setFuelType('');
          navigate('/admin/generator')
          console.log(newGenerator)
          
    } else {
      alert('Please fill in all fields.');
    }
  }

  return (
    <>
    <h2 className='pl-10 pt-5 font-medium text-xl'>Create Generator</h2>
    <form className='grid grid-cols-12 gap-5 p-4 pl-10 pt-5' onSubmit={handleSubmit}>
      <div className="col-span-4 grid gap-2">
        <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Name'> Generator Name</label>
        <Input type='text' id='name' placeholder='name' name='name' value={name} onChange={(e)=>setName(e.target.value)} required/>
      </div>
       <div className=" col-span-4 grid gap-2">
        <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Brand'>Brand</label>
        <Input type='number' id='brand' placeholder='brand' name='brand' value={brand}  required/>
      </div>
      <div className="row-start-2 col-span-4 grid gap-2">
        <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Model'>Model</label>
        <Input type='text' id='model' placeholder='model' name='model' value={model} onChange={(e)=>setModel(e.target.value)} required/>
      </div>
      <div className="row-start-2 col-span-4 grid gap-2">
        <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Watt'>Watt</label>
        <Input type='number' id='watt' placeholder='watt' name='watt' value={watt} onChange={(e)=>setWatt(Number(e.target.value))} required/>
      </div>
      <div className="row-start-3 col-span-4 grid gap-2">
        <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='FuelType'>Fuel Type</label>
        <Input type='text' id='fuelType' placeholder='fuel type' name='fuelType' value={fuelType} onChange={(e)=>setFuelType(e.target.value)} required/>
      </div>
      <div className="row-start-3 col-span-4 grid gap-2">
        <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Price'>Price</label>
        <Input type='number' id='price' placeholder='price' name='price' value={price} onChange={(e)=>setPrice(Number(e.target.value))} required/>
      </div>
      <div className="row-start-4 col-span-4 grid gap-2">
        <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Price'>Image</label>
        <Input type='file' id='image' placeholder='image' name='image' value={image} onChange={(e)=>setImage(e.target.value)} required/>
      </div>
      <div className="row-start-4 col-span-4 grid gap-2">
        <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Price'>Description</label>
        <Textarea id='price' placeholder='price' name='description' value={description} onChange={(e)=>setPrice(Number(e.target.value))} required/>
      </div>
      <div className="row-start-5 ">
      <Button variant='default' className='px-5 duration-500 bg-electric-500 hover:bg-electric-600 active:scale-95'>Create</Button>
      </div>
      <div className="row-start-5">
      <Button variant='outline' className='' onClick={()=> window.history.back()}>Cancel</Button>
      </div>
    </form>
    </>
  )

}

export default CreateForm