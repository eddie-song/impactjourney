// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDIDt6UxrD9wO9V-QhSDmDG2D45gGb65U",
  authDomain: "impact-journey-e6c69.firebaseapp.com",
  projectId: "impact-journey-e6c69",
  storageBucket: "impact-journey-e6c69.appspot.com",
  messagingSenderId: "47757712051",
  appId: "1:47757712051:web:f743a841b113e820d52ec6",
  measurementId: "G-KD7TZ35BER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
