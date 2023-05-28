import { getApp, getApps, initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ref, get, set, getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage, getDownloadURL } from "firebase/storage";
import "firebase/auth";
import "firebase/database";

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
export const db = getDatabase(app);

// Funzione per verificare lo stato di autenticazione
export const checkAuth = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);
      } else {
        reject(new Error("Utente non autenticato"));
      }
    });
  });
};

// Funzione per impostare i dati nel database
export const setDatabaseData = (path: string, data: any) => {
  try {
    set(ref(db, path), data);
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
    const dataSnapshot = await get(ref(db, path));
    return dataSnapshot.exists() ? dataSnapshot.val() : null;
  } catch (error) {
    console.error(
      `Errore durante il recupero dei dati dal percorso ${path}:`,
      error
    );
    return null;
  }
};

export { app, auth, firestore, storage, signInWithEmailAndPassword };
