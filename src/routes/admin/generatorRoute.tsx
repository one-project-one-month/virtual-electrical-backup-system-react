import {
    GeneratorPage,
  CreateGeneratorPage,
  EditGeneratorPage,
} from "@/constants/lazyloadElement";

const generatorRoute = [
  {
    path: "generator",
    element: <GeneratorPage />,
  },
  {
    path: "generator/create",
    element: <CreateGeneratorPage />,
  },
  {
    path: "generator/edit/:slug",
    element: <EditGeneratorPage />,
  },
];
export default generatorRoute;
