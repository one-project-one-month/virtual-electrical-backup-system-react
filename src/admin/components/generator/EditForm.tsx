import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { brands } from '@/admin/data/brands'
import { DialogCloseButton } from '../inverter/Dialog'
import { SelectBrand } from './SelectBrand'
import { z } from 'zod'
import { Controller, useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useGeneratorStore } from '@/store/generatorStore'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const MAX_FILE_SIZE = 5000000
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"]

const EditForm = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { updateGenerator, generators, fetchGenerator } = useGeneratorStore()

  const formSchema = z.object({
    name: z.string().min(1, { message: "Generator Name is required" }),
    brandId: z.number().min(1, { message: "Brand is required" }),
    model: z.string().min(1, { message: "Model is required" }),
    watt: z.coerce.number().min(1, { message: "Watt is required" }),
    fuelType: z.string().min(1, { message: "Fuel Type is required" }),
    price: z.coerce.number().min(1, { message: "Price is required" }),
    image: z.union([
      z.string(), 
      z.instanceof(FileList).refine((files) => files.length === 0 || files[0]?.size <= MAX_FILE_SIZE, { message: 'Max image size is 5MB.' })
        .refine((files) => files.length === 0 || ACCEPTED_IMAGE_TYPES.includes(files[0]?.type), { message: 'Only .jpg, .jpeg, .png, and .webp formats are supported.' }),
    ]),
    description: z.string().min(1, { message: "Description is required" }),
    redirect_to_list: z.boolean(),
  })

  type Generator = z.infer<typeof formSchema>

  const { 
    register, 
    handleSubmit, 
    control, 
    reset,
    formState: { errors, isSubmitting }, 
  } = useForm<Generator>({
    resolver: zodResolver(formSchema),
    defaultValues: { redirect_to_list: true }
  })

  useEffect(() => {
    const loadData = async () => {
      await fetchGenerator()
    }
    loadData()
  }, [fetchGenerator])

  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>('')

  useEffect(() => {
    if (!id || generators.length === 0) return;
  
    const generator = generators.find(g => String(g.id) === String(id));
    if (generator) {
      reset({
        name: generator.name || '',
        brandId: generator.brandId || 0,
        model: generator.model || '',
        watt: generator.watt || 0,
        fuelType: generator.fuelType || '',
        price: generator.price || 0,
        image: generator.image || '',  
        description: generator.description || '',
        redirect_to_list: true,
      });
      if (generator.image) {
        setImagePreview(generator.image)
      }
    }
  }, [id, generators, reset]);

  const formSubmit: SubmitHandler<Generator> = async (data) => {
    if (!id) return;
    
    let imageUrl = '';
    if (selectedFile) {
      imageUrl = URL.createObjectURL(selectedFile) 
    } else if (typeof data.image === 'string') {
      imageUrl = data.image 
    }
  
    try {
      await updateGenerator({
        id,
        ...data,
        image: imageUrl,
      });
  
      if (data.redirect_to_list) {
        navigate('/admin/generator');
      }
    } catch (error) {
      console.error("Error updating generator:", error)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      setImagePreview(URL.createObjectURL(file)) 
    }
  }

  return (
    <>
      <h2 className='pl-10 pt-5 font-medium text-xl'>Edit Generator</h2>
      <form className='grid grid-cols-12 gap-5 p-4 pl-10 pt-5' onSubmit={handleSubmit(formSubmit)}>
        <div className="col-span-3 grid gap-2">
          <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Name'> Generator Name</label>
          <Input type='text' id='name' placeholder='name' {...register('name')}/>
          {errors.name && <div className="text-red-500 text-xs">{errors.name.message}</div>}
        </div>

        <div className="col-span-3 grid gap-2">
          <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Brand'>Brand</label>
          <div className="flex items-center gap-2">
            <Controller 
              control={control} 
              name='brandId' 
              render={({field}) => (
                <SelectBrand 
                  {...field}
                  brands={brands}
                  value={field.value || 0} 
                  onChange={field.onChange} 
                />
              )}
            />
            <DialogCloseButton isBrand={true} />
          </div>
          {errors.brandId && <div className="text-red-500 text-xs">{errors.brandId.message}</div>}
        </div>

        <div className="row-start-2 col-span-3 grid gap-2">
          <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Model'>Model</label>
          <Input type='text' id='model' placeholder='model' {...register('model')}/>
          {errors.model && <div className="text-red-500 text-xs">{errors.model.message}</div>}
        </div>

        <div className="row-start-2 col-span-3 grid gap-2">
          <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Watt'>Watt</label>
          <Input type='number' id='watt' placeholder='watt' {...register('watt')}/>
          {errors.watt && <div className="text-red-500 text-xs">{errors.watt.message}</div>}
        </div>

        <div className="row-start-3 col-span-3 grid gap-2">
          <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='FuelType'>Fuel Type</label>
          <Input type='text' id='fuelType' placeholder='fuel type' {...register('fuelType')}/>
          {errors.fuelType && <div className="text-red-500 text-xs">{errors.fuelType.message}</div>}
        </div>

        <div className="row-start-3 col-span-3 grid gap-2">
          <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Price'>Price</label>
          <Input type='number' id='price' placeholder='price' {...register('price')}/>
          {errors.price && <div className="text-red-500 text-xs">{errors.price.message}</div>}
        </div>

        <div className="row-start-4 col-span-6 grid gap-2">
          <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Image'>Image</label>
          <Input 
            type='file' 
            id='image' 
            {...register('image')} 
            accept="image/png, image/jpeg, image/webp"
            onChange={handleFileChange} 
          />
          {errors.image && <div className="text-red-500 text-xs">{errors.image.message}</div>}
          
          {selectedFile && (
            <span className="text-gray-500 text-xs mt-2">{selectedFile.name}</span>
          )}
          {imagePreview && (
            <div className="mt-2">
              <img src={imagePreview} alt="Image Preview" className="w-32 h-32 object-cover" />
            </div>
          )}
        </div>

        <div className="row-start-5 col-span-6 grid gap-2">
          <label className='text-xs text-gray-600 after:ml-0.5 after:text-red-700 after:content-["*"]' htmlFor='Description'>Description</label>
          <Textarea id='description' placeholder='description' {...register('description')}/>
          {errors.description && <div className="text-red-500 text-xs">{errors.description.message}</div>}
        </div>

        <div className="row-start-6 col-span-3 flex items-center gap-4">
          <input
            className="size-4 inline flex-shrink-0"
            type="checkbox"
            id="redirect_to_list"
            {...register("redirect_to_list")}
          />
          <label
            className="text-gray-500 text-sm text-nowrap"
            htmlFor="redirect_to_list"
          >
            Redirect to generator list
          </label>
        </div>

        <div className="row-start-7">
          <Button 
            type='submit' 
            disabled={isSubmitting} 
            variant='default' 
            className='px-5 duration-500 bg-electric-500 hover:bg-electric-600 active:scale-95'
          >
            {isSubmitting ? 'Updating...' : 'Update'}
          </Button>
        </div>

        <div className="row-start-7">
          <Button 
            variant='outline' 
            onClick={() => navigate('/admin/generator')}
          >
            Cancel
          </Button>
        </div>
      </form>
    </>
  )
}

export default EditForm
