
import firebase from "firebase";
const firebaseConfig = {
  apiKey:process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APPID,
    measurementId:  process.env.REACT_APP_MEASUREMENT_ID
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider =new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore()
export { auth, provider, db };

  //https://www.googleapis.com/auth/youtube.force-ssl (for youtube api control)
  
  // import the functions you need from the SDKs you need

