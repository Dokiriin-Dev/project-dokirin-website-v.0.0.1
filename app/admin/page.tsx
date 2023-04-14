"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
import AdminLayout from "../components/adminPanel/adminLayout";

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
  
  return <AdminLayout></AdminLayout>;
};

export default Sidebar;
