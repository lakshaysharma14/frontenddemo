
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header 		from 		'./Header';
import InputForm 	from 		'./InputForm';
import Props 		  from		'./Props.js';
import PropMap    from    './PropMap.js';
import Ng         from    './NgfunctionUI.js';
import Ngform     from    './Ngform.js';



class App extends React.Component
{
	state ={
		ng:[
			{name: "Chaani", age:"22", dob:"18-02-2018", lp:"laksh",  id:1},
			{name: "LS",	 age:"19", dob:"14-05-1999", lp:"chaani", id:2},
			{name: "NG", 	 age:"22", dob:"18-02-2018", lp:"laksh",  id:3}
		]
	}


  addNG = (nidu) =>
  {
    nidu.id=Math.random();
    let NG =[...this.state.ng,nidu]
    this.setState
    ({
      ng:NG
    })
  }


   delNG = (Nidu) =>
  {
    let NG =this.state.ng.filter(nidi =>{
      return nidi.id!==Nidu
    });
    this.setState({
      ng:NG
    })
    console.log(Nidu);
  }




  render()
  {
    return(
        <div>
                 {/*	
                 	<Header/>	   
                  <InputForm/>  
                 	<Props name="ng" age:22 dob:"18-02-2018" lp:"laksh" />
                  <PropMap ng={this.state.ng} />
                */}
          <Ng delNG={this.delNG} ng={this.state.ng} />

          <Ngform addNG ={this.addNG} /> {/*Passing Prop as FUNCTION */}
          
         

         

        </div>  
    )
  }
}

export default App;


