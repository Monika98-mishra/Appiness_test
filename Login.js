import React, { Component } from 'react';
// import {  BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
// import Dashboard from './Dashboard';
// import { hashHistory } from 'react-router';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            fileds: {},
            errors: {},
            msg: ''
        }

        this.save = this.save.bind(this);
        this.formCheck = this.formCheck.bind(this);
    }
    
    save = (event) => {
        event.preventDefault();
        if((this.state. fileds["uname"] =="hruday@gmail.com") && (this.state. fileds["password"] =="hruday123")){
            if(this.state. fileds["uname"] && this.state. fileds["password"]){
                this.setState({
                    msg:"Login Success! Redirecting...",
                   // url:"/#/"
                  
                   
                })
                
                if(this.state. fileds["uname"] && this.state. fileds["password"]){
                    window.location.href="#/Dashboard";
                    // document.getElementsByClassName("login").style.display="none";
                    //location.replace="/company";
                    window.location.reload(); // to reload the current page
                }
                else{
                    window.location.href="../";
                    //location.replace="/company";
                    window.location.reload(); // to reload the current page
                }
               
            }
            
        }
        else{
            this.setState({
                msg:"Invalid login details..."
            })
        }
        if (this.formCheck()) {
           
            let fileds = {};
            fileds["uname"] = "";
            fileds["password"]="";
            
    

        }
       
    }
    formCheck = () => {
        let fileds = this.state.fileds;
        let errors = {};
        let formStatus = true;
        if (!fileds["uname"]) {
            formStatus = false;
            errors["uname"] = "please enter username ?"
        }
        if (!fileds["password"]) {
            formStatus = false;
            errors["password"] = "please enter Password ?"
        }
        
        this.setState({
            errors: errors
        })
        return formStatus;
    }
    handleInput = (e) => {
        let fileds = this.state.fileds;
        fileds[e.target.name] = e.target.value;
        this.setState({
            fileds
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row login">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 bg-light p-3">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">Login</div>
                            <div className="card-body">
                                <p className="text-primary text-center">{this.state.msg}</p>
                                <div className="form-group">
                                <label>User Name</label>
                                    <input type="text" className="form-control" name="uname" value={this.state.fileds.uname} onChange={this.handleInput} />
                                    <i className="text-danger">{this.state.errors.uname}</i>
                                </div>
                                <div className="form-group">
                                <label>Password</label>
                                    <input type="password" className="form-control" name="password" value={this.state.fileds.password} onChange={this.handleInput} />
                                    <i className="text-danger">{this.state.errors.password}</i>
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <button className="btn btn-danger btn-sm" onClick={this.save}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>



        )
    }

}

export default Login;