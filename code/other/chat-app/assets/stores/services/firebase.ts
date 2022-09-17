import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyAydULhd8QzHf5SIfWpx1ModJytUQo-5mQ",
   authDomain: "chat-app-754be.firebaseapp.com",
   projectId: "chat-app-754be",
   storageBucket: "chat-app-754be.appspot.com",
   messagingSenderId: "972529340821",
   appId: "1:972529340821:web:6be398727618273ed5669c",
};

// initialize firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
