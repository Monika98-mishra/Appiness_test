import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Login from './Login.js';
import Dashboard from './Dashboard';
if( sessionStorage.getItem("uname") == null ){
	
	ReactDOM.render( <Login /> , document.getElementById('root') );
	
}
else
{

ReactDOM.render( <App /> , document.getElementById('root') );

}


//ReactDOM.render( <App /> , document.getElementById('root') );

//http://localhost:3000/#/

serviceWorker.unregister();

