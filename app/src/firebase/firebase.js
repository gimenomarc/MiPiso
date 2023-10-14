import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCc1LCP-U9vJEDlmwHRIYnSXS1vOyJcp0E",
  authDomain: "mipiso-df57b.firebaseapp.com",
  projectId: "mipiso-df57b",
  storageBucket: "mipiso-df57b.appspot.com",
  messagingSenderId: "921685621675",
  appId: "1:921685621675:web:e562a98e340d08515af0ee",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
