import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function SkeletonTable() {
  return (
    <section className="px-5 mt-5">
      <Table className="bg-white rounded-lg shadow-lg overflow-scroll overscroll-x-auto min-w-fit">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead className="">Name</TableHead>
            <TableHead className="text-nowrap">Efficiency</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Skeleton className="w-full h-[35px] bg-gray-200" />
            </TableCell>
            <TableCell>
              <Skeleton className="w-full h-[35px] bg-gray-200" />
            </TableCell>
            <TableCell>
              <Skeleton className="w-full h-[35px] bg-gray-200" />
            </TableCell>
            <TableCell className="flex gap-1 justify-center">
              <Skeleton className="size-8 rounded-full bg-gray-200" />
              <Skeleton className="size-8 rounded-full bg-gray-200" />
              <Skeleton className="size-8 rounded-full bg-gray-200" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
