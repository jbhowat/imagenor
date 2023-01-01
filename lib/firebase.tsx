// Import the functions you need from the SDKs you need
import { FirebaseOptions, getApp, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, where, getDocs, query, limit } from "firebase/firestore";
import { getStorage, getStream } from "firebase/storage";

// Firebase configuration details - not secret
const firebaseConfig = {
  apiKey: "AIzaSyBBUPxjJ49U3lFVvETgohtff92XWhYxX0c",
  authDomain: "imagenor-e5e04.firebaseapp.com",
  projectId: "imagenor-e5e04",
  storageBucket: "imagenor-e5e04.appspot.com",
  messagingSenderId: "977352930068",
  appId: "1:977352930068:web:70b6950477e774f88cc801",
};

// Initialize Firebase
function createFirebaseApp(config: FirebaseOptions) {
	try {
		return getApp();
	} catch {
		return initializeApp(config);
	}
}

const firebaseApp = createFirebaseApp(firebaseConfig);

// Auth exports
export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();

// Firestore exports
export const firestore = getFirestore(firebaseApp);

// Storage exports
export const storage = getStorage(firebaseApp);
export const STATE_CHANGED = 'state_changed';

