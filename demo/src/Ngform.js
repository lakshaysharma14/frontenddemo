import React ,{Component} from 'react';

class Ngform extends Component
{
	state =
	{
		name:null,
		age:null,
		dob:null,
		hub:null

	}

	handleChange = (e) =>
	{
		this.setState
		({
			[e.target.id]:e.target.value
		})

	}

	handleSubmit = (e) =>
	{
		e.preventDefault();
		this.props.addNG(this.state);
	}
	


	render()
	{
		return(
				<div>
					<form onSubmit ={this.handleSubmit}>
						<label htmlFor="name">Name</label>
						<input type="text" id = "name" onChange ={this.handleChange} />

						<label htmlFor="name">Age</label>
						<input type="text" id = "age" onChange ={this.handleChange} />

						<label htmlFor="name">Dob</label>
						<input type="text" id = "dob" onChange ={this.handleChange} />

						<label htmlFor="name">Hub</label>
						<input type="text" id = "hub" onChange ={this.handleChange} />

						<button>Submmit</button>
					</form>	
				</div>
			)
	}




}

export default Ngform;