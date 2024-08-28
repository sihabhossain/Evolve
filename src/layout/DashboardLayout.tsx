import { useState } from "react";
import AdminLayout from "./AdminLayout";
import UserLayout from "./UserLayout";
import { useAppSelector } from "@/redux/store/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";

const DashboardLayout = () => {
  const user = useAppSelector(selectCurrentUser);

  return <div>{user?.role === "admin" ? <AdminLayout /> : <UserLayout />}</div>;
};

export default DashboardLayout;
