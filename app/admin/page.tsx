"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
import DashboardSidebar from "../components/adminPanel/adminSidebar";

const Sidebar = () => {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  // Ascolta gli eventi di cambio URL
  useEffect(() => {
    // Esegui il controllo di autenticazione quando si cambia l'URL
    if (!user) {
      // L'utente non è autenticato, reindirizza alla pagina di login
      router.push("/auth/login");
    }
  }, [router, user]);
  return <DashboardSidebar></DashboardSidebar>;
};

export default Sidebar;
