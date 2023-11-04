import React from 'react';
import ReactDOM from 'react-dom/client';
// import {HelloWorldApp} from './HelloWorldApp';
import {FirstApp} from './FirstApp';
import './styles.css'
// function App(){
//     // document crear
//     return (<h1>Hola mundo</h1>);
// }

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>litos
        {/* <HelloWorldApp /> */}
        <FirstApp title = "litos"  subtitle={123}/>
    </React.StrictMode>
)