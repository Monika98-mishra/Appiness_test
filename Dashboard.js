import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {
  constructor(){
    super();
    this.state={
        allUser:[], //variable declaration under state
    }
    this.readUser();//calling in constructer because it should load while constructer calling
   
}
readUser=()=>{
  axios.get("user1.json").then(responseData=>{
      this.setState({
          allUser:responseData.data //variable update under state
      })
  })
}
    render(){
     return (
      <div className="conatiner">
         <div className="row">
           <div className="col-md-2"></div>
                <div className="col-md-8">
                    {/* <h3 className="text-center">Paid Amount is : {this.state.amountlist.length} </h3> */}
                <table className="table table-bordered table-sm rounded">
                <thead className="text-danger">
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Email</th>
                                    <th>PhoneNo</th>
                                </tr>
                            </thead>
                        <tbody>
                           {
                               this.state.allUser.map((row , index)=>{
                                   return <tr key={index}>
                                            <td>{row.id}</td>
                                            <td>{row.name}</td>
                                            <td>{row.age}</td>
                                            <td>{row.gender}</td>
                                            <td>{row.email}</td>
                                            <td>{row.phoneNo}</td>
                                          </tr>
                               })
                           }  
                           
                    </tbody>
                </table>
                </div>
                <div className="col-md-2"></div>
            </div>
      </div>
      
     )
    }

}

export default Dashboard;