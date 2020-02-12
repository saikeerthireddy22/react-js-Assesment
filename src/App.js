import React from 'react';
import logo from './logo.svg';
import './App.css';

var result;
class App extends React.Component{
  constructor(){
    super(); 
    this.state = {
     x:[]  
    }
  }
  async componentWillMount(){
    // const url="http://dummy.restapiexample.com/api/v1/employees"
    // const response=fetch(url);
    // const res1=(await response).json();
    //const data=res1.data;
    function f1() {     return new Promise((resolve, reject) => {    
      const url= 'http://dummy.restapiexample.com/api/v1/employees';
          fetch(url).
          then(obj => obj.json()).
          then(obj => resolve(obj.data)).catch(reject); }); }

         await f1().then(obj => result = obj);
        // console.log(result)
         this.setState({x:result})
  }
  add=()=>{

    const{x}=this.state;
    var a={
      id:25,
      employee_name:"Keerthi",
      employee_age:21,
      employee_salary:20000
    }
    x.push(a);
    this.setState({
      x : x
    });
  }
  delete=()=>{
    const {x}=this.state;
    x.pop();
    this.setState({
      x:x
    });


  }
  
  render() {
   
   const { x} = this.state;
   
    console.log(x)
    return (
      <div>
        
                <h1> add app</h1>
       <table border ="1px">
         <tbody>
               { x.map((x,i)=>
               <tr>
                <td>{x.id}</td>
                <td>{x.employee_name}</td>
                <td>{x.employee_salary}</td>
                <td>{x.employee_age}</td>
                </tr>
           )
               }
          
           </tbody>
        </table>
        
<button onClick={this.add}>Add Member</button>
<button onClick={this.delete}>Delete Member</button> 
      </div>

    );
  }
}

export default App;