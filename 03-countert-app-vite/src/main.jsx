import React from 'react';
import ReactDOM from 'react-dom/client';
import {HelloWorldApp} from './HelloWorldApp';
import {FirstApp} from './FirstApp';

// function App(){
//     // document crear
//     return (<h1>Hola mundo</h1>);
// }

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp />
        <FirstApp />
    </React.StrictMode>
)