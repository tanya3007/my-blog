import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBweK0oopQ4uy8BZne9Yc3BIfJETEt3rAE",
  authDomain: "my-react-blog-504e3.firebaseapp.com",
  projectId: "my-react-blog-504e3",
  storageBucket: "my-react-blog-504e3.appspot.com",
  messagingSenderId: "744434509765",
  appId: "1:744434509765:web:cfa45027c75b7400400dac"
};


const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
