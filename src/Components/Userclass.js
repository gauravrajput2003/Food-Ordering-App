import React, { Component } from 'react';
class Userclass extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state={
count:0,
count2:0
        }       
    }
  render() {
    const { name, location } = this.props;
    return (
      <div className="">
        <h3>count:{this.state.count}</h3>
        {/* <button onClick={()=>{
          this.setState({
            count:this.state.count+1,
          });
        }}>Increase</button> */}
     
        <h3>{this.props.name}</h3>
        <h2>{this.props.location}</h2>
        <h2>Contact: @gauravRajput</h2>
      </div>
    );
  }
}


export default Userclass;
