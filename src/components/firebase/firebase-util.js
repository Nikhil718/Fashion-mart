import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const Config = {
    apiKey: "AIzaSyD9OKoTf0qlM2bADPZs0uu6DuoRNGedQFU",
    authDomain: "fashion-mart-db.firebaseapp.com",
    projectId: "fashion-mart-db",
    storageBucket: "fashion-mart-db.appspot.com",
    messagingSenderId: "510063753646",
    appId: "1:510063753646:web:4b6c50e539a44f555af03f",
    measurementId: "G-76W7DYYB6Q"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};



firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const Provider = new firebase.auth.GoogleAuthProvider();
Provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(Provider);

export default firebase;