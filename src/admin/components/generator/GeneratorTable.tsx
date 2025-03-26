import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useEffect, useState } from 'react'
import GeneratorRow from './GeneratorRow'
import { useGeneratorStore } from '@/store/generatorStore'

const GeneratorTable = () => {
  const {generators, fetchGenerator} = useGeneratorStore();

  useEffect(()=>{
    fetchGenerator()
  },[])
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
          {generators?.map((generator,index)=> (
                <GeneratorRow key={generator.id} index={index} generator={generator}/>
          ))}
        </TableBody>
      </Table>
    </section>
  )
}

export default GeneratorTable