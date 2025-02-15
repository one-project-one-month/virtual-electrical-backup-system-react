import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminLayout() {
  const { user } = useAuth();

  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}
