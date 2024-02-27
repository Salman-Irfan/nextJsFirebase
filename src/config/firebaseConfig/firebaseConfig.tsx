// Import the functions you need from the SDKs you need
import envVar from "@/constants/env/envVar";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { FIREBASE_REALTIME_DATABASE_URL } from "@/secrets/firebaseRealTimeDb";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: envVar.API_KEY,
    authDomain: envVar.AUTH_DOMAIN,
    projectId: envVar.PROJECT_ID,
    storageBucket: envVar.STORAGE_BUCKET,
    messagingSenderId: envVar.MESSAGING_SENDER_ID,
    appId: envVar.APP_ID,
    databaseURL: FIREBASE_REALTIME_DATABASE_URL
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const firestoreDb = getFirestore(firebaseApp);
export const firebaseRealTimeDb = getDatabase(firebaseApp);
