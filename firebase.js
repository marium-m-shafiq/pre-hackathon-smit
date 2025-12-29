import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  import {getauth} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js"
  import{getfirestore} from "https://www.gstatic.com/firebasejs/12.7.0/firestore.js"


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB_0T_DmXaIUFEUJ4kUHl9xKXHb8tIUnVU",
    authDomain: "pre-hackathon-2.firebaseapp.com",
    projectId: "pre-hackathon-2",
    storageBucket: "pre-hackathon-2.firebasestorage.app",
    messagingSenderId: "412184639590",
    appId: "1:412184639590:web:5a34e9ed5652c2180c95a7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth =getAuth(app);
  export const db = getfirebase(app);

  console.log("firebase connected")