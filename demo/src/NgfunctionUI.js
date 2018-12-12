import React from 'react';
{/* Since this is a Functional UI Component i.e. we dont neeed any states here . This component is used just*/}
{/*to render the output so we dont use class here rather we make functions here */}



{/*const Ng = (props) =>  */}      	//when using functional components we need to use props as argument to function

const Ng = ({delNG,ng}) =>			//can also be written like this destructuring it inside the brackets used when more than 1 prop is recieved by the function
{	
	

	const nglist=ng.map(chaani=>{                    
	
	if(chaani.age>20)
	{		  
		
		return(	
				<div key={chaani.id}>    

					<div>name:{chaani.name} </div>
					<div>age: {chaani.age}	 </div>
					<div>DOB: {chaani.dob}	 </div>
					<div>Hub: {chaani.lp}	 </div>
					<button onClick ={ () =>{delNG(chaani.id)}}>Delete</button> 
				
				</div>
				
			  )
	}

	else
	{
		return null;
	}
})
	return(
			<div>
				{nglist}
			</div>
		)
}

export default Ng;                                                                   

