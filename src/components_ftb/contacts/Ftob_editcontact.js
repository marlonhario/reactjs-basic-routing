import React, { Component } from 'react';
import { Consumer } from '../context';
import TextInputGroup from '../layout/Ftop_textinputgroups';
// import uuid from 'uuid';
import axios from 'axios';


class EditContact extends Component {
	state = {
		name: '',
		email: '',
		phone: '',
		errors: {}
	}


	async componentDidMount() {
		const { id } = this.props.match.params;
		var res = await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`);

		const contact = res.data;

		this.setState({
			name: contact.name,
			email: contact.email,
			phone: contact.phone
		});
	}

	onSubmit = async (dispatch, e) => {
		e.preventDefault();

		const { name, email, phone } = this.state;

		if (name === "") {
			this.setState({errors: {name: 'Name is required'}});
			return;
		}
		if (email === "") {
			this.setState({errors: {email: 'Email is required'}});
			return;
		}
		if (phone === "") {
			this.setState({errors: {phone: 'Phone is required'}});
			return;
		}

		const updContact = {
			name,
			email,
			phone
		}

		const { id } = this.props.match.params;
		const res = await axios.put(`http://jsonplaceholder.typicode.com/users/${id}`, updContact);

		dispatch({type: 'UPDATE_CONTACT', payload: res.data});


		this.setState({
			name: '',
			email: '',
			phone: '',
			errors: {}
		});

		this.props.history.push('/ftob_1');
	}

	onChange = e => this.setState({ [e.target.name] : e.target.value }); 

	render() {
		const { name, email, phone, errors } = this.state; 

		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					return(
						<div className="card mb-3">
							<div className="card-header" style={{color: 'gray', textAlign: 'left'}}>
								Edit Contact
							</div>
							<div className="card-body">
								<form onSubmit={this.onSubmit.bind(this, dispatch)}>
									<TextInputGroup 
										label="Name"
										name="name"
										placeholder="Enter name..."
										value={name}
										onChange={this.onChange}
										error={errors.name}
									/>
									<TextInputGroup 
										label="Email"
										name="email"
										type="email"
										placeholder="Enter email..."
										value={email}
										onChange={this.onChange}
										error={errors.email}
									/>
									<TextInputGroup 
										label="Phone"
										name="phone"
										placeholder="Enter phone..."
										value={phone}
										onChange={this.onChange}
										error={errors.phone}
									/>
									
									<input type="submit" value="Edit Conact" className="btn btn-info btn-block" />
								</form>
							</div>
						</div>
					)
				}}
			</Consumer>
		)
	}
}

export default EditContact;