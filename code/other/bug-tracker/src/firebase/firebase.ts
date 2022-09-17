import firebase from 'src/firebase/firebase';

// Your web app's Firebase configuration
const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyC2WEAT0vCnT1Z5xkwK2gZCX_edveAOBqQ',
  authDomain: 'new-bugtracker.firebaseapp.com',
  databaseURL: 'https://new-bugtracker-default-rtdb.firebaseio.com',
  projectId: 'new-bugtracker',
  storageBucket: 'new-bugtracker.appspot.com',
  messagingSenderId: '459031864379',
  appId: '1:459031864379:web:9cdb53f8546f14cede681e',
};

// Initialize Firebase
export default function firebaseClient() {
  if (!firebase.apps?.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
}
