import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LucidePlusCircle, LucideSearch } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-5 mt-5">
      <div className="flex items-center justify-between ">
        <div className="relative w-1/4 ">
          <LucideSearch className="absolute inset-0 text-gray-500 translate-x-full translate-y-3 size-4 " />

          <Input
            className=" focus-visible:ring-electric-600 focus:outline-none ps-10 focus:ring-0"
            placeholder="Search"
          />
        </div>

        <Link to="/admin/powerstation/create">
          <Button className="inline-flex gap-3 duration-500 bg-electric-500 hover:bg-electric-600 active:scale-95">
            <LucidePlusCircle /> Add
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;