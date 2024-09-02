import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.js';
import reportWebVitals from './reportWebVitals';
import Register from './components/Register/Register.tsx';
import Login from './components/Login/Login.tsx';
import WeatherForecastComponent from './components/WeatherForecastComponent/WeatherForecastComponent.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Register></Register>
    <Login></Login>
    <WeatherForecastComponent></WeatherForecastComponent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
