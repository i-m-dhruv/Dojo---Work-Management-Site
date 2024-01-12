import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBrYuufBjX4VQIhHtC4oe6DV1F5IFYRMBM',
  authDomain: 'thedojosite-24941.firebaseapp.com',
  projectId: 'thedojosite-24941',
  storageBucket: 'thedojosite-24941.appspot.com',
  messagingSenderId: '613118824998',
  appId: '1:613118824998:web:118a5652e28be3a7964ce7',
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
