import React from "react";
import "./style.css";

class App extends React.Component{
  constructor(){
    super();
    this.firstref=React.createRef();
    this.secondref=React.createRef();
    this.thirdref=React.createRef();
    this.fourthref=React.createRef();
    
  }
  componentDidMount(){
    this.firstref.current.focus();
  }
  input1=(e)=>{
     this.secondref.current.focus();
  }
  input2=(e)=>{
     this.thirdref.current.focus();
  }
  input3=(e)=>{
     this.fourthref.current.focus();
  }
  render(){
  return (
    <div className='betterview'>
      <div className='inputbox'>
      <input type='text' maxlength='1' ref={this.firstref} onKeyUp={this.input1} />
      <input type='text' maxlength='1' ref={this.secondref}onKeyUp={this.input2}/>
      <input type='text' maxlength='1' ref={this.thirdref}onKeyUp={this.input3}/>
      <input type='text' maxlength='1' ref={this.fourthref}onKeyUp={this.input4}/>
      </div>
    </div>
  );
  }
}
export default App;