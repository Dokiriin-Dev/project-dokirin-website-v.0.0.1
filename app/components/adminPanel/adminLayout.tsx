import React from "react";
import DashboardSidebar from "./adminSidebar";

const DashboardLayout = ({ children }: any) => {
  return (
    <div className="min-h-screen flex flex-row justify-start">
      <DashboardSidebar />
      <div className="flex-1 text-2xl text-white">{children}</div>
    </div>
  );
};

export default DashboardLayout;
