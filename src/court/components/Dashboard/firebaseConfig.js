import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDcPFR8XVse7dEbzVN6pO29NCbwudCWTKg",
    authDomain: "ccms-2c1f2.firebaseapp.com",
    projectId: "ccms-2c1f2",
    storageBucket: "ccms-2c1f2.firebasestorage.app",
    messagingSenderId: "777265489131",
    appId: "1:777265489131:web:38ad33e777bf6957c68aae",
    measurementId: "G-FPDR38YQJE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber };
