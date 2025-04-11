import { brands } from '@/admin/data/brands';
import { generators } from '@/admin/data/generator';
import { Button } from '@/components/ui/button';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const DetailForm = () => {
    const { id } = useParams();
  const generatorData = generators.find((generator) => generator.id === Number(id));
  const navigate = useNavigate();
  const previousPage = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="grid grid-cols-12 gap-6 p-4 pl-10 pt-5">
        <div className="col-span-3">
          <img
            className="w-full h-[180px] object-cover border-2 border-gray-200 rounded-lg"
            src={generatorData?.image}
            alt="inverter"
          />
        </div>
        <div className="grid grid-cols-4 gap-2 row-start-3 col-span-9">
          <p className="text-sm font-light text-gray-500">Model :</p>
          <p className="text-sm font-normal">{generatorData?.model}</p>
        </div>
        <div className="grid grid-cols-4 gap-2 row-start-4 col-span-9">
          <p className="text-sm font-light text-gray-500">Brand :</p>
          <p className="text-sm font-normal">
            200
            {/* {brands.find((brand) => brand.id === generatorData?.brandId)?.name} */}
          </p>
        </div>
        <div className="grid grid-cols-4 gap-2 row-start-5 col-span-9">
          <p className="text-sm font-light text-gray-500">
            Watt  :
          </p>
          <p className="text-sm font-normal">{generatorData?.watt}</p>
        </div>
        <div className="grid grid-cols-4 gap-2 row-start-6 col-span-9">
          <p className="text-sm font-light text-gray-500">Fuel Type :</p>
          <p className="text-sm font-normal">{generatorData?.fuelType}</p>
        </div>
       
        <div className="grid grid-cols-4 gap-2 row-start-7 col-span-9">
          <p className="text-sm font-light text-gray-500">Generator Price :</p>
          <p className="text-sm font-normal">$ {generatorData?.price}</p>
        </div>
        <div className="grid grid-cols-4 gap-2 row-start-8 col-span-9">
          <p className="text-sm font-light text-gray-500">
            Generator Description :
          </p>
          <p className="text-sm font-normal">{generatorData?.description}</p>
        </div>
        <div className="grid grid-cols-5 gap-2 row-start-9 col-span-9 mt-4 ">
          <Button
            onClick={previousPage}
            className="bg-electric-400 col-span-2 text-white rounded-lg hover:bg-electric-500 hover:text-white"
            variant="outline"
          >
            Manage Generator
          </Button>
        </div>
      </div>
    </>
  )
}

export default DetailForm