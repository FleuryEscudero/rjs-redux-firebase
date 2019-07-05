import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDlDohrmEL4mEPxi3i9hRjtUd4ajQGm9sY",
    appId: "1:620233048551:web:f30501ca3c019daa",
    authDomain: "instaclon-d3dac.firebaseapp.com",
    databaseURL: "https://instaclon-d3dac.firebaseio.com",
    messagingSenderId: "620233048551",
    projectId: "instaclon-d3dac",
    storageBucket: "instaclon-d3dac.appspot.com",
};

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()