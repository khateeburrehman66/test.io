import React from 'react';
import ReactDOM from 'react-dom/client';


import './index.css';
//  import App from './App';
 import MainBootstrap from './components/bootstraptesting/mainBootstrap';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>

// );



const btn= ReactDOM.createRoot(document.getElementById("btn"));
btn.render(<React.StrictMode>
 <MainBootstrap/>
</React.StrictMode>
  );
// ReactDOM.render(<Btn/> , document.getElementById("btn"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
