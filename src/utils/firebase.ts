// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
    

} from 'firebase/auth'


import {
    getDoc,
    setDoc,
    doc,
    getFirestore,
    collection,
    writeBatch,
    query,
    docs,
    getDocs,


} from 'firebase/firestore'

import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat";
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1iwBYgtAw4cfvT5zme7HVmC_Nrf1fCBg",
    authDomain: "dial-a-pizza-8a1de.firebaseapp.com",
    projectId: "dial-a-pizza-8a1de",
    storageBucket: "dial-a-pizza-8a1de.appspot.com",
    messagingSenderId: "798199137528",
    appId: "1:798199137528:web:ffc7a1a8051fa8a1e8670d",
    measurementId: "G-L8G0MFN4TL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Set auth provider

const provider = new GoogleAuthProvider()

//forces user to select an account

provider.setCustomParameters({
    prompt:'select_account'
})

export const auth = getAuth();

export const signInWithGoogleRedirect = signInWithRedirect(auth, provider);


// export const createUserFromDocumentAuth = async( userAuth, additionalInfomation) => {
//     //contains information like names.
//
//     if(!userAuth) return;
//
//     const userDocRef = doc(db, 'users', userAuth.uid)
//     console.log(userDocRef)
//
//
// }

export const createUserWithEmailAndPassword = async(email:string, password:string, confirmPassword:string) => {

    if(!email || !password || !confirmPassword) return ;
    if(password !== confirmPassword) return;


    return await createUserWithEmailAndPassword(auth, email, password)

}

export const signInWithUserEmailAndPassword = async(email:string, password:string) => {
    if(!email || !password ) return ;
    return await  signInWithEmailAndPassword(auth, email, password)
}


export const signOutUser = async() => {

    await signOut(auth)
}


export const onAuthStateChangeListener = (callback) => {
    return onAuthStateChanged(auth, callback)
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {

        const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
            unsubscribe()
            resolve(userAuth)
        },
            reject

        )
    })
}
//const analytics = getAnalytics(app);