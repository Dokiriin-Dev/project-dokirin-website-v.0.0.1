import { useState, ReactNode, useEffect } from "react";
import AdminModal from "./adminModal";
import DashboardSidebar from "./adminSidebar";
import { PageData, defaultData } from "@/pages/about";

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModified, setIsModified] = useState(false);
  const [modifiedData, setModifiedData] = useState<PageData>(defaultData);
  const [isSaving, setIsSaving] = useState(false);

  const handleModified = () => {
    setIsModified(true);
  };

  const handleSave = (data: PageData) => {
    setIsSaving(true);
  };

  const handleDiscard = () => {
    setIsModified(false);
    console.log("Dati ripristinati con successo");
    setIsModalOpen(false);
    // Effettua qui l'operazione per ripristinare le modifiche
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
      {isModalOpen && (
        <AdminModal
          onSave={() => handleSave(modifiedData)}
          isSaving={isSaving}
        />
      )}
    </div>
  );
}
