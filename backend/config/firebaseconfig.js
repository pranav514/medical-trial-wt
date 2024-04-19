// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCLRiFyQ-src7MaqhsqVD3BZFDcR6YwfYI",
//   authDomain: "medical-system-e99b0.firebaseapp.com",
//   projectId: "medical-system-e99b0",
//   storageBucket: "medical-system-e99b0.appspot.com",
//   messagingSenderId: "432345898200",
//   appId: "1:432345898200:web:88fa065ede91ff93118bad"
// };

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);

// // export default app;

import * as dotenv from 'dotenv';
dotenv.config();

export default {
    firebaseConfig: {
        apiKey:"AIzaSyCLRiFyQ-src7MaqhsqVD3BZFDcR6YwfYI",
        authDomain: "medical-system-e99b0.firebaseapp.com",
        projectId: "medical-system-e99b0",
        // databaseURL: process.env.FIRESTORE_DB_URL,
        storageBucket: "medical-system-e99b0.appspot.com",
        messagingSenderId:  "432345898200",
        appId: "1:432345898200:web:88fa065ede91ff93118bad",
        // measurementId: process.env.MEASUREMENT_ID,
    },
};