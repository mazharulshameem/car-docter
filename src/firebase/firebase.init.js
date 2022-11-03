// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNaw6m7ypcAL6rA4OHI18Rdui9hPAyS2M",
  authDomain: "docter-car.firebaseapp.com",
  projectId: "docter-car",
  storageBucket: "docter-car.appspot.com",
  messagingSenderId: "552138097845",
  appId: "1:552138097845:web:f68861385d1d0988602afc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
