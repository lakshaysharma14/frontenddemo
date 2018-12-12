import React from 'react';

class PropMap extends React.Component
{

	render()
	{	
		const {ng} =this.props;
//making a new array nglist and mapping our old array ng to it
		const nglist=ng.map(chaani=>{ 
//chaani is random variable for accesing each entry in the array		  
		return(	
				<div key={chaani.id}>    

{/*Here we have return an template of Jsx for each Channi that we have to display */}
{/*here it is neccesary for us to provide unique id so that react can differentiate between each obj	*/}			
					<div>name:{chaani.name} </div>
					<div>age: {chaani.age}	 </div>
					<div>DOB: {chaani.dob}	 </div>
					<div>Hub: {chaani.lp}	 </div>
				</div>
			  )
		})
		

		return(
			<div>
				{nglist}
			</div>


			)
	}
}

export default PropMap;                                                                   