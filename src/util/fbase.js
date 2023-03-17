import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };
// // Use this to initialize the firebase App
// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
// appId: process.env.REACT_APP_APP_ID,
// };
// Use this to initialize the firebase App
