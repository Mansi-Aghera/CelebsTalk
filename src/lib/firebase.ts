// ✅ STEP 5: firebase.ts file

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyD5AtoqKMnjKmJvM2Tkjc7yrcogdPk7kvk",
//   authDomain: "YOUR_DOMAIN",
//   projectId: "celebs-talk-35c02",
//   appId: "1:1008949736928:android:f40b5278e41d462bbb2785",
// };

const firebaseConfig = {
  apiKey: "AIzaSyAIfEZntT-GQmBlb_mypMyHpQgQQPn-hVc",
  authDomain: "celebs-talk-35c02.firebaseapp.com",
  projectId: "celebs-talk-35c02",
  storageBucket: "celebs-talk-35c02.firebasestorage.app",
  messagingSenderId: "1008949736928",
  appId: "1:1008949736928:web:d213bc8256d5505fbb2785",
  measurementId: "G-WYR0VKYD37"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);