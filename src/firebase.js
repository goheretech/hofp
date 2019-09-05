import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: 'AIzaSyBH2rmnyxYvCJUxFniY_UV5kIKdGcUpoVk',
    authDomain: 'houseofprovidence-2cce5.firebaseapp.com',
    databaseURL: 'https://houseofprovidence-2cce5.firebaseio.com',
    projectId: 'houseofprovidence-2cce5',
    storageBucket: '',
    messagingSenderId: '605608112562',
    appId: '1:605608112562:web:db5cd826ecd7269f'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
