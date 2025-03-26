import { brands } from '@/admin/data/brands';
import { generators } from '@/admin/data/generator';
import { Button } from '@/components/ui/button';
import { useGeneratorStore } from '@/store/generatorStore';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DetailForm = () => {
  const { id } = useParams<{ id: string }>();
  const fetchGenerator = useGeneratorStore((state) => state.fetchGenerator)
  const getGeneratorById = useGeneratorStore((state) => state.getGeneratorById);
  const generator = id ? getGeneratorById(id) : null;

  useEffect(() => {
    if (!generator) {
      fetchGenerator();
    }
  }, [generator, fetchGenerator]);

  if (!generator) return <p>Loading...</p>;
  console.log(generator)
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
            src={generator?.image}  
            alt="inverter"
          />
        </div>
        <div className="grid grid-cols-4 gap-2 row-start-3 col-span-9">
          <p className="text-sm font-light text-gray-500">Model :</p>
          <p className="text-sm font-normal">{generator?.model}</p>
        </div>
        <div className="grid grid-cols-4 gap-2 row-start-4 col-span-9">
          <p className="text-sm font-light text-gray-500">Brand :</p>
          <p className="text-sm font-normal">
            {
               generator?.brandId
               ? brands.find((brand) => brand.id === generator.brandId)?.name || "Unknown"
               : "No Brand"
            }
          </p>
        </div>
        <div className="grid grid-cols-4 gap-2 row-start-5 col-span-9">
          <p className="text-sm font-light text-gray-500">
            Watt  :
          </p>
          <p className="text-sm font-normal">{generator?.watt}</p>
        </div>
        <div className="grid grid-cols-4 gap-2 row-start-6 col-span-9">
          <p className="text-sm font-light text-gray-500">Fuel Type :</p>
          <p className="text-sm font-normal">{generator?.fuelType}</p>
        </div>
       
        <div className="grid grid-cols-4 gap-2 row-start-7 col-span-9">
          <p className="text-sm font-light text-gray-500">Generator Price :</p>
          <p className="text-sm font-normal">$ {generator?.price}</p>
        </div>
        <div className="grid grid-cols-4 gap-2 row-start-8 col-span-9">
          <p className="text-sm font-light text-gray-500">
            Generator Description :
          </p>
          <p className="text-sm font-normal">{generator?.description}</p>
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