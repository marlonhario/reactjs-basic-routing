import React, {Component} from 'react';
// import Contact from './Ftob_contact';
import Contacts from './contacts/Ftob_contacts';
import AddContact from './contacts/Ftob_addcontact';
import EditContact from './contacts/Ftob_editcontact';
// import AddContact from './contacts/Ftob_addcontact1';
import Header from './layout/Ftob_header';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Test from './test/Test';

import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from './context';

class Ftob_1 extends Component {
	// render() {
	// 	const name = 'Hario';
	// 	const showHello = true;
	// 	const showMath = true;
	// 	const num1 = 30;
	// 	const num2 = 25;

	// 	let math;
	// 	if (showMath) {
	// 		math = <h4>{num1} + {num2} = {num1+num2}</h4>;
	// 	} else {
	// 		math = null;
	// 	}

	// 	return (
	// 		<div>
	// 			<h1>The App Component</h1>
	// 				{showHello ? <h4>Hello {name.toUpperCase()}</h4> : null}
	// 				{math}
	// 				<hr />
	// 				<Header branding="Contact Manager1" />
	// 				<Contact name="Marlon Hario" email="oirah@gmail.com" phone="444-444-4444" />
	// 		</div>
	// 	);
	// }

	render() {
		return (
			<Provider>
				<Router>
					<div>
						<Header branding="Contact Manager1" />
						<div className="container">
							<Switch>
								<Route exact path="/ftob_1" component={Contacts} />
								<Route path="/ftob_1/addcontact" component={AddContact} />
								<Route path="/ftob_1/editcontact/:id" component={EditContact} />
								<Route path="/ftob_1/test" component={Test} />
								<Route path="/ftob_1/about/:id" component={About} />
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default Ftob_1;