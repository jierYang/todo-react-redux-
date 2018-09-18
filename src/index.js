import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

fetch('/todos')
    .then(function(response){
        return response.json();
    })
    .then(function(myJson){
        console.log(myJson)
    });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
