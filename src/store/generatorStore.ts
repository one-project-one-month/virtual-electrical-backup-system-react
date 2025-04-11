import { create } from 'zustand';
import { Generator } from './../types/generator';
import { generators } from '@/admin/data/generator';
type GeneratorStore ={
    generators : Generator[],
    createGenerator : (generator : Generator) => void,
    updateGenerator : (updatedGenerator : Generator) => void
}

export const useGeneratorStore = create<GeneratorStore>((set)=>({
    generators: generators,
    createGenerator :(generator) => 
        set((state)=>({
        generators : [generator,...state.generators]
    })),
    updateGenerator :(updatedGenerator) => 
        set((state)=>({
            generators : state.generators.map((gen)=>
                gen.id === updatedGenerator.id ? {...gen,...updatedGenerator}  : gen 
            )
        })),
    
       
}))