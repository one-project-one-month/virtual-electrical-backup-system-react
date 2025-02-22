import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useState } from 'react'
import type { ApiResponse } from '@/types/apiResponse'
import { generators } from '@/admin/data/generator'
import type { Generator } from '@/types/generator'
import GeneratorRow from './GeneratorRow'

const GeneratorTable = () => {
  const [generatorData, setGeneratorData] = useState<ApiResponse<Generator[]>>({
      message: "Data has been successfully",
      data: generators,
      
    });
    console.log(generatorData)
  return (
    <section className="px-5 mt-5">
      <Table className="bg-white rounded-lg shadow-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead className="text-right">Model</TableHead>
            <TableHead className="text-right">Watt</TableHead>
            <TableHead className="text-right">Fuel Type</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {generatorData?.data?.map((generator)=> (
            <GeneratorRow key={generator.id} generator={generator}/>
          ))}
        </TableBody>
      </Table>
    </section>
  )
}

export default GeneratorTable