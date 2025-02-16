import SideBar from "@/components/SideBar";
import useAuth from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function AdminLayout() {
  const { user } = useAuth();

  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <SideBar />
    </>
  );
}
