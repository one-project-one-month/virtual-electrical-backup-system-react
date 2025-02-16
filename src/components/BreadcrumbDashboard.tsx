import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

type BreadcrumbProps = {
  currentPageTitle: string;
  links: { name: string; path: string }[];
};
const BreadcrumbDashboard = ({
  currentPageTitle,
  links,
}: Partial<BreadcrumbProps>) => {
  return (
    <div className="px-5">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink>
              <Link to="/admin">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {currentPageTitle && (
            <BreadcrumbSeparator className="hidden md:block" />
          )}
          {links?.map((link, index) => (
            <Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-500">
                  <Link to={link.path}> {link.name} </Link>
                </BreadcrumbPage>
                <BreadcrumbSeparator className="hidden md:block" />
              </BreadcrumbItem>
            </Fragment>
          ))}

          <BreadcrumbItem>
            <BreadcrumbPage> {currentPageTitle} </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbDashboard;
