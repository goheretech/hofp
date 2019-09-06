import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import firebase from 'firebase/app';
import { authState } from 'rxfire/auth';
import { collectionData } from 'rxfire/firestore';
import { map, startWith } from 'rxjs/operators';

// Your web app's Firebase configuration
const app = firebase.initializeApp({
    apiKey: 'AIzaSyBH2rmnyxYvCJUxFniY_UV5kIKdGcUpoVk',
    authDomain: 'houseofprovidence-2cce5.firebaseapp.com',
    databaseURL: 'https://houseofprovidence-2cce5.firebaseio.com',
    projectId: 'houseofprovidence-2cce5',
    storageBucket: '',
    messagingSenderId: '605608112562',
    appId: '1:605608112562:web:db5cd826ecd7269f'
});

function sendEmail() {
    const callable = functions.httpsCallable('genericEmail');
    return callable({
        text: 'Sending email with Svelte and SendGrid is fun!',
        subject: 'Email from Svelte'
    }).then(console.log);
}

const logIn = () => {
    const authProvider = new firebase.auth.GoogleAuthProvider();
    app.auth().signInWithPopup(authProvider);
};

const logOut = async () => {
    await firebase.auth().signOut();
};

const firestore = firebase.firestore(app);
const auth = firebase.auth(app);
const loggedIn$ = authState(auth).pipe(map(user => (user ? user : null)));

// //Databases
const employeeRef = firestore.collection('users');
const departmentRef = firestore.collection('dept');
const employees = collectionData(employeeRef.orderBy('lName', 'desc')).pipe(
    startWith([])
);
const departments = collectionData(departmentRef.orderBy('name', 'desc')).pipe(
    startWith([])
);

export {
    app,
    auth,
    firestore,
    collectionData,
    loggedIn$,
    logIn,
    logOut,
    sendEmail,
    employees,
    departments
};

export default firebase;
