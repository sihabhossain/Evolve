import { useState } from "react";
import AdminLayout from "./AdminLayout";
import UserLayout from "./UserLayout";

const DashboardLayout = () => {
  const [userRole, setUserRole] = useState("user");
  return <div>{userRole === "admin" ? <AdminLayout /> : <UserLayout />}</div>;
};

export default DashboardLayout;
