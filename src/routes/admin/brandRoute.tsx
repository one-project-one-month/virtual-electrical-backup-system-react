import LazyLoad from "@/components/LazyLoad";
import {
  BrandPage,
  CreateBrandPage,
  EditBrandPage,
} from "@/constants/lazyloadElement";

const brandRoute = [
  {
    path: "brand",
    element: <LazyLoad component={BrandPage} />,
  },
  {
    path: "brand/create",
    element: <LazyLoad component={CreateBrandPage} />,
  },
  {
    path: "brand/edit/:id",
    element: <LazyLoad component={EditBrandPage} />,
  },
];
export default brandRoute;
