import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Card from './components/card';
import Header from './components/header';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header search="yes" />
    {/* <App /> */}
    <container style={{display:"flex"}}>
      <Card title="Hello" url="https://picsum.photos/200/400"/>
      <Card title="World" url="https://picsum.photos/200/200"/>
      <Card title="Image" url="https://picsum.photos/200/300"/>
    </container>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
