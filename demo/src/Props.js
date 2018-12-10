import React from 'react';

class Props extends React.Component
{

	render()
	{	
		console.log(this.props);  // will console the whole output passed as props in the root component
		const {name,age,dob,lp} =this.props;  //shortcut for avoiding writing like the first method.....
		return(
			<div>
			{/*
				<div>name:{this.props.name}</div>
				<div>age:{this.props.age}</div>
				<div>DOB:{this.props.dob}</div>
				<div>Hub:{this.props.lp}</div>
			*/}

				<div>name:{name} </div>
				<div>age: {age}	 </div>
				<div>DOB: {dob}	 </div>
				<div>Hub: {lp}	 </div>


			</div>
			)
	}
}

export default Props;