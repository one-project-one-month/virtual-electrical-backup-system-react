import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./style/app.css";
import "./style/loading.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./routes/router.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
  // </StrictMode>
);
