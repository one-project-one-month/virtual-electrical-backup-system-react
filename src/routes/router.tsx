import { createBrowserRouter } from "react-router-dom";
import adminRoute from "./admin/adminRoute";
import publicRoute from "./public/publicRoute";

const router = createBrowserRouter([
  {
    errorElement: <div>404</div>,
  },
  ...adminRoute,
  ...publicRoute,
]);

export default router;
