import React, { Component } from 'react';
import Contact from './Ftob_contact';

import { Consumer } from '../context';

class Contacts extends Component {
	//first opntion
	// constructor () {
	// 	super();
	// 	this.state = {
	// 		contacts: [
	// 			{
	// 				id: 1,
	// 				name: 'Xin May',
	// 				email: 'jdoe@gmail.com',
	// 				phone: '555-555-5555s'
	// 			},
	// 			{
	// 				id: 2,
	// 				name: 'Marlon Hario',
	// 				email: 'marlon@gmail.com',
	// 				phone: '333-333-3333'
	// 			},
	// 			{
	// 				id: 3,
	// 				name: 'Nolram Oirah',
	// 				email: 'hario@gmail.com',
	// 				phone: '444-444-4444'
	// 			}
	// 		]
	// 	}
	// }
	
	// second opion
	// state = {
	// 	contacts: [
	// 		{
	// 			id: 1,
	// 			name: 'John Doe',
	// 			email: 'jdoe@gmail.com',
	// 			phone: '555-555-5555s'
	// 		},
	// 		{
	// 			id: 2,
	// 			name: 'Marlon Hario',
	// 			email: 'marlon@gmail.com',
	// 			phone: '333-333-3333'
	// 		},
	// 		{
	// 			id: 3,
	// 			name: 'Nolram Oirah',
	// 			email: 'hario@gmail.com',
	// 			phone: '444-444-4444'
	// 		}
	// 	]
	// }


	// these should be pass into contect =============
	// deleteContact = (id) => {
	// 	// console.log(id);
	// 	const { contacts } = this.state;

	// 	const newContacts = contacts.filter( contact => contact.id !== id);

	// 	this.setState({
	// 		contacts: newContacts
	// 	});
	// }



	render() {
		return (
			<Consumer>
				{value => {
					const { contacts } = value;
					return (
						<React.Fragment>
							<h1 className="display-4 mb-2">
								<span className="text-danger">Contact List</span>
							</h1>
							{contacts.map(contact => 
								<Contact key={contact.id} contact={contact} />
							)}
						</React.Fragment>
					)
				}}
			</Consumer>
		)
	}

	// render() {
	// 	const { contacts } = this.state;

	// 	return (
	// 		<React.Fragment>
	// 			{contacts.map(contact => 
	// 				<Contact key={contact.id} contact={contact} deleteClickHandler={this.deleteContact.bind(this, contact.id)} />

	// 			)}
	// 		</React.Fragment>
	// 	);
	// }
}

export default Contacts;