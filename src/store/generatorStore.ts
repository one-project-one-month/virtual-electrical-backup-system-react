import  axios  from 'axios';
import { create } from 'zustand';
import { Generator } from './../types/generator';
import { generators } from '@/admin/data/generator';
type GeneratorStore ={
    generators : Generator[],
    fetchGenerator : ()=> Promise<void>,
    createGenerator : (generator :  Omit<Generator, "id">) => void,
    removeGenerator: (id: string) => Promise<void>,
    getGeneratorById : (id : string) => Generator | undefined, // detail page
    updateGenerator : (updatedGenerator : Generator) => void
}

export const useGeneratorStore = create<GeneratorStore>((set, get) => ({
  generators: [],
  
  fetchGenerator: async () => {
    try {
      const res = await axios.get('http://localhost:5000/generators');
      set({ generators: res.data });
    } catch (error) {
      console.error("Failed to fetch generators:", error);
    }
  },

  createGenerator: async (generator: Omit<Generator, "id">) => {
    try {
      await axios.post('http://localhost:5000/generators', generator);
      await get().fetchGenerator();
    } catch (error) {
      console.error("Failed to create generator:", error);
      throw error;
    }
  },

  removeGenerator: async (id: string) => {
    try {
    
      await axios.delete(`http://localhost:5000/generators/${id}`);
    
      set((state) => ({
        generators: state.generators.filter((g) => g.id !== id),
      }));
      
      await get().fetchGenerator();
    } catch (error) {
      console.error("Failed to delete generator:", error);
      await get().fetchGenerator();
      throw error;
    }
  },

  getGeneratorById: (id : string) => {
    return get().generators.find(gen => gen.id === id);
  },

  updateGenerator: async (updatedGenerator) => {
    try {
      const { id, ...updateData } = updatedGenerator;
      const res = await axios.put(`http://localhost:5000/generators/${id}`, updateData);
      
      set(state => ({
        generators: state.generators.map(g => 
          g.id === id ? { ...g, ...res.data } : g
        )
      }));
      return res.data;
    } catch (error) {
      console.error("Failed to update generator:", error);
      throw error;
    }
  }
  }));
  
    
       
