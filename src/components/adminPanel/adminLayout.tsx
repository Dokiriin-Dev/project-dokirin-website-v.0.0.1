"use client"
import { ReactNode, useEffect, useState } from "react";
import { Descendant } from "slate";
import DashboardSidebar from "./adminSidebar";

type AdminLayoutProps = {
  children: ReactNode;
};
export interface PageData {
  [key: string]: Descendant[]; // Proprietà dinamica con index signature
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModified, setIsModified] = useState(false);

  const handleModified = () => {
    setIsModified(true);
  };

  useEffect(() => {
    if (isModified) {
      setIsModalOpen(true);
    }
  }, [isModified]);

  return (
    <div className="min-h-screen flex flex-row justify-start pt-12 md:pt-[4.5rem]">
      <DashboardSidebar />
      <div
        className="flex-1 text-2xl text-slate-300 pt-2.5 w-full"
        onClick={handleModified}
      >
        {children}
      </div>
    </div>
  );
}
