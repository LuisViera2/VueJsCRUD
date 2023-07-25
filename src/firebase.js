import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBc1HgBgujE5FB5zhkrnv99IqdD8-NgINk",
    authDomain: "firestore-auth-1.firebaseapp.com",
    projectId: "firestore-auth-1",
    storageBucket: "firestore-auth-1.appspot.com",
    messagingSenderId: "725069451931",
    appId: "1:725069451931:web:d9a8acd10a087b0debac3e"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore()
const auth = firebase.auth()
const marcaTiempo = firebase.firestore.FieldValue.serverTimestamp

firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsuscribe = firebase.auth().onAuthStateChanged(user => {
            unsuscribe()
            resolve(user)
        }, reject)
    })
}

export {db, auth, marcaTiempo, firebase}