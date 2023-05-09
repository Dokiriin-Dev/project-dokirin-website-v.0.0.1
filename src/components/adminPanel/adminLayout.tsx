import { useState, ReactNode } from "react";
import AdminModal from "./adminModal";
import DashboardSidebar from "./adminSidebar";

type AdminLayoutProps = {
  children: ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [isModified, setIsModified] = useState(false);

  const handleModified = () => {
    setIsModified(true);
  };

  const handleSave = () => {
    setIsModified(false);
    console.log("Dati salvati con successo");
  };

  const handleDiscard = () => {
    setIsModified(false);
    console.log("Dati ripristinati con successo");
    // Effettua qui l'operazione per ripristinare le modifiche
  };

  return (
    <div className="min-h-screen flex flex-row justify-start pt-12 md:pt-[4.5rem]">
      <DashboardSidebar />
      <div
        className="flex-1 text-2xl text-slate-300 pt-2.5 w-full"
        onClick={handleModified}
      >
        {children}
      </div>
      {isModified && (
        <AdminModal onSave={handleSave} onDiscard={handleDiscard} />
      )}
    </div>
  );
};

export default AdminLayout;
