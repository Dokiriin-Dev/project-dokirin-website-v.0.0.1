import { getApp, getApps, initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getDatabase,
  ref as databaseRef,
  ref,
  get,
  set,
} from "firebase/database";

import { getFirestore } from "firebase/firestore";
import {
  getStorage,
  ref as storageRef,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";

import "firebase/auth";
import "firebase/database";
import React, { useEffect, useMemo, useState } from "react";

// Configura le tue credenziali Firebase
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE,
};

// Inizializza l'app Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
// Ottieni l'istanza del database Firebase
export const database = getDatabase(app);

/** ---------- BEGIN CHECKING AUTHENTICATION ---------- */
export const useIsEditable = () => {
 const [isEditable, setIsEditable] = useState<boolean>(false);

  useEffect(() => {
    const isAdminRoute =
      typeof window !== "undefined" &&
      window.location.pathname.startsWith("/admin");

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsEditable(isAdminRoute);
      } else {
        setIsEditable(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return isEditable;
};
/** END CHECKING AUTHENTICATION */

// Funzione per verificare lo stato di autenticazione
export const checkAuth = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe(); // Ferma l'ascolto degli eventi dopo la prima chiamata
      if (user) {
        resolve(user);
      } else {
        reject(new Error("Utente non autenticato"));
      }
    });
  });
};

// ...

// Funzione per impostare i dati nel database
export const setDatabaseData = (path: string, data: any) => {
  try {
    set(ref(database, path), data);
  } catch (error) {
    console.error(
      `Errore durante il salvataggio dei dati nel percorso ${path}:`,
      error
    );
  }
};

// Funzione per ottenere i dati dal database
export const getDatabaseData = async <T>(path: string): Promise<T | null> => {
  try {
    const dataSnapshot = await get(ref(database, path));
    return dataSnapshot.exists() ? dataSnapshot.val() : null;
  } catch (error) {
    console.error(
      `Errore durante il recupero dei dati dal percorso ${path}:`,
      error
    );
    return null;
  }
};

// ...

// Funzione per impostare i dati nello storage
export const setStorageData = async (path: string, data: File | null) => {
  try {
    if (!data) {
      throw new Error("Devi selezionare un'immagine per salvare i dati");
    }

    const fileRef = storageRef(storage, path);
    await uploadBytes(fileRef, data);
    const downloadURL = await getDownloadURL(fileRef);

    await set(databaseRef(database, "images"), downloadURL);

    return true;
  } catch (error) {
    console.error(
      "Errore durante il salvataggio dell'immagine nello storage:",
      error
    );
    return false;
  }
};

// Funzione per ottenere i dati dallo storage
export const getStorageData = async (path: string): Promise<string | null> => {
  try {
    const fileRef = storageRef(storage, path);
    const downloadURL = await getDownloadURL(fileRef);
    return downloadURL;
  } catch (error) {
    console.error(
      `Errore durante il recupero dei dati dal percorso ${path} nello storage:`,
      error
    );
    return null;
  }
};

export { app, auth, firestore, storage, signInWithEmailAndPassword };
