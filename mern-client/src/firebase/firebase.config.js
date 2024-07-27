// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWnittlKiln725FtKWndfIhT3xngUwZxk",
  authDomain: "bookinventory-e069f.firebaseapp.com",
  projectId: "bookinventory-e069f",
  storageBucket: "bookinventory-e069f.appspot.com",
  messagingSenderId: "599944964086",
  appId: "1:599944964086:web:8955cdf65a619f3ac989d7",
  measurementId: "G-LBJK81D3GN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;