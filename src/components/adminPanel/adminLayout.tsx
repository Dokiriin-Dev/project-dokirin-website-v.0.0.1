import React from "react";
import DashboardSidebar from "./adminSidebar";
import Section from "../layout/Section";
import classNames from "classnames";

const DashboardLayout = ({ children }: any) => {
  return (
    <div className="min-h-screen flex flex-row justify-start pt-12 md:pt-[4.5rem]">
      <DashboardSidebar />
      <div className="flex-1 text-2xl text-slate-300 pt-2.5 w-full">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
