import React from 'react';
import ReactDOM from 'react-dom/client';
import {HelloWorldApp} from './HelloWorldApp';
import {FirstApp} from './FirstApp';
import './styles.css'
import {CounterApp} from './CounterApp';
// function App(){
//     // document crear
//     return (<h1>Hola mundo</h1>);
// }

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        <FirstApp title = "Hola soy vegeta" />
        {/* <CounterApp value = {10}/> */}
    </React.StrictMode>
)