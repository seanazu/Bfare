import * as firebase from 'firebase'
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { ref as storageRef } from 'firebase/storage'; 
import 'dotenv/config' ;
 

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

let app ; 

if ( firebase.apps.length === 0 ){
  app = initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}
export const storage = getStorage(app); 

export { storageRef }