import LazyLoad from "@/components/LazyLoad";
import {
    GeneratorPage,
  CreateGeneratorPage,
  EditGeneratorPage,
  GeneratorDetailPage,
} from "@/constants/lazyloadElement";

const generatorRoute = [
  {
    path: "generator",
    element: <LazyLoad component ={GeneratorPage}/>,
  },
  {
    path: "generator/create",
    element: <LazyLoad component ={CreateGeneratorPage}/>,
  },
  {
    path: "generator/edit/:id",
    element: <LazyLoad component ={EditGeneratorPage}/>,
  },
  {
    path: "generator/detail/:id",
    element: <LazyLoad component ={GeneratorDetailPage}/>,
  },
];
export default generatorRoute;
