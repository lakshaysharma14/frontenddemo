import React from 'react';

class InputForm extends React.Component
{
	state = {
		name:'Chaani',
		age:22
	}

	handleChange = (e)=>
	{
		this.setState({                       //to locally change the state
			name:e.target.value
		})
	}

	handleSubmit = (e)=>
	{
		e.preventDefault();
		console.log("form submitted",this.state.name);
	}

	render()
	{
		return(
			<div>
			<h1>My name is {this.state.name}</h1>
			<form onSubmit={this.handleSubmit}>
				<input type="text"	onChange={this.handleChange}/>
				<br />
				<button>Suubmit</button>


			</form>
			</div>

			)
	}
}

export default InputForm;