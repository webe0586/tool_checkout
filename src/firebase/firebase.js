import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
  apiKey: "AIzaSyD7m0oRFWXSAsaHR2TwP3gNrahGCG3ar7s",
  authDomain: "exceedlab-96f76.firebaseapp.com",
  databaseURL: "https://exceedlab-96f76.firebaseio.com",
  projectId: "exceedlab-96f76",
  storageBucket: "exceedlab-96f76.appspot.com",
  messagingSenderId: "279585243195"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
