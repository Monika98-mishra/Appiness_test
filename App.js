import React from 'react';// calling th react.js library
import {Route , HashRouter } from 'react-router-dom';
//import {Route , BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './Dashboard';
import Header from './Header';
function App() {

	const myPage = (
					<HashRouter>
						<Header />
							{/* <Route path="/Dashboard" component={Dashboard} /> */}
							{/* <Route path="/Dashboard" component={Dashboard} /> */}
							<Route exact path="/Dashboard/" component={Dashboard}/>
						</HashRouter>
					);
  return (
			<> 
				{myPage} 
			</>
		);
}

export default App;
