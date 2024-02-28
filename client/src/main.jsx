import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import "../src/assets/css/style.css";
import "../src/assets/css/bootstrap.css";
import "../src/assets/css/animate.min.css";
import {Provider} from "react-redux";
import store from "../src/redux/store/store.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
       <App />
   </Provider>
  </React.StrictMode>,
)
