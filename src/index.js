import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app'
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCI7VKEMSrXWOqj8eW55JyFl1X_UIb0hbI",
  authDomain: "reactcart-afcf4.firebaseapp.com",
  projectId: "reactcart-afcf4",
  storageBucket: "reactcart-afcf4.appspot.com",
  messagingSenderId: "131607008301",
  appId: "1:131607008301:web:f67aa980010d57dff954a4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
