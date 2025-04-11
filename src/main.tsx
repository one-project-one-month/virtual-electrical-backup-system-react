import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./style/app.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./routes/router.tsx";
import axios from "axios";

const queryClient = new QueryClient();
axios.defaults.baseURL = "http://localhost:3000/api";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
  // </StrictMode>
);
