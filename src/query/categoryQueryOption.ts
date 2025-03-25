import { getAllCategory } from "@/services/categoryService";
import { queryOptions } from "@tanstack/react-query";


export function getAllCategoryOption () {

    return queryOptions({
        queryKey: ["category"],
        queryFn: getAllCategory
    })
}