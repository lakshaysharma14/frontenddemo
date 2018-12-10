import React from 'react';

class Header extends React.Component
{
	state = {
		name:'Chaani',
		age:22
	}

	handleClick = (e)=> // ALWAYS USE ARROW FUNCTION WHEN MAKING CUSTOM FUNCTION IN REACT TO REMOVE THE SCOPE AND AMBIGUITY OF THE USAGE OF "this" Keyword.
	{
		//console.log(e.target);
		this.setState({
			name:"nidhi"
		})
		console.log(this.state);
	}

	handleMouse = (e) =>
	{
		console.log(e.target,e.pageX,e.pageY);
	}

	handlecopy = (e) =>
	{
		alert("dnt try to steal her ");
	}


	render()
	{
		return(
			<div>
			<h1>{this.state.name}</h1>
			
			<button onClick={this.handleClick}>Click Me</button>
			<br/>
			<button onMouseMove={this.handleMouse}>Hover Me</button>
			<br/>
			<p onCopy={this.handlecopy}>Indore is Love</p>

 			</div>

			)
	}
}

export default Header;