import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Modal from 'react-responsive-modal';
import {Row, Input, Button, Icon} from 'react-materialize';
import AuthService from '../../services/AuthService';


import './Header.css';

class Header extends Component {

  constructor(props) 
  {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);    
    this.LogOut = this.LogOut.bind(this);
    this.Auth = new AuthService();

    this.state = {
      email: '',
      password: '',
      loggedIn : this.Auth.loggedIn(),
      openFirstModal: false,
      openSecondModal: false,      
    }
    
  }

  handleSubmit(val) {        

    val.preventDefault();   
    
    if (!this.showFormErrors()) {      
      console.log('form is invalid: do not submit');
    } 
    else {           

      this.Auth.login(this.state.email,this.state.password)
        .then(res =>{
                    
          this.props.parentProps.history.push(`/dashboard`);
          this.onCloseFirstModal();
          
        })
        .catch(err =>{          
          alert(err);
        })            
    }    
  }

  LogOut() {
    this.Auth.logout();               
    this.props.parentProps.history.push(`/`);                   
  }

  handleChange(e){    
    
    this.setState({
      [e.target.name]: e.target.value,               
    });

    this.showInputError(e.target.name);
  }  

  showFormErrors() {
    const inputs = document.querySelectorAll('input');
    let isFormValid = true;
    
    inputs.forEach(input => {
                  
      const  isInputValid = this.showInputError(input.name);      
      
      if (!isInputValid) {
        isFormValid = false;
      }
    });

    return isFormValid;
  }

  showInputError(refName) {

    if (refName)
    {  
      const validity = this.refs[refName].input.validity;
      const error = document.getElementById(`${refName}Error`);
      const label = this.refs[refName].props.label;      

      if ( !validity.valid ) {
        if( validity.valueMissing ) {  

          error.textContent = `${label} is a required field`;
          return false;
        }
      }
      else {
        error.textContent = '';
      }
    }

    return true;        
  }

  onOpenFirstModal = () => {
    this.setState({ openFirstModal: true });
  };

  onCloseFirstModal = () => {
    this.setState({ openFirstModal: false });
  };

  onOpenSecondModal = () => {
    this.setState({ openSecondModal: true });
  };

  onCloseSecondModal = () => {
    this.setState({ openSecondModal: false });
  };
    
  render() {
    const { openFirstModal, openSecondModal } = this.state;
    return (
      <div style={{height: "30px", paddingRight: "30px", paddingTop: "30px"}}>
          {this.state.loggedIn === false ? <span><a style={{color: "#424242", padding: "20px"}} onClick={this.onOpenSecondModal} href="#">Sign Up</a></span> : ''}
          {this.state.loggedIn === false ? <span><a style={{color: "#424242", padding: "20px"}} onClick={this.onOpenFirstModal} href="#">Log In</a></span>: ''}
          {this.state.loggedIn ? <span><a style={{color: "#424242", padding: "20px"}} onClick={this.LogOut} href="#">Log Out</a></span> : ''}
                             
          <Modal open={openFirstModal} onClose={this.onCloseFirstModal} little>
          <form noValidate onSubmit={(val) => this.handleSubmit(val)}>
            <Row>
              <h4>Log in to continue</h4>
            </Row>
            <Row>
              <Input s={12} m={12} 
                label="Email Address" 
                ref="email" 
                name="email" 
                onChange={this.handleChange}
                required 
                >
                <Icon>email</Icon>
              </Input>
              <div className="has-error" style={{color: 'red', paddingLeft: '55px'}} id="emailError" />  
              <Input s={12} m={12} 
                label="Password" 
                ref="password"
                type="password"
                name="password"
                onChange={this.handleChange} 
                required 
                >
                <Icon>lock_outline</Icon>
              </Input>     
              <div className="has-error" style={{color: 'red', paddingLeft: '55px'}} id="passwordError" />
            </Row>
            <Row>
              <span style={{color: "#424242"}}>Remember me</span>
            </Row>
            <Row>
              <Button
                waves='light' 
                style={{width: "480px"}}
                >Log in
              </Button>
            </Row>
            <Row style={{textAlign: "center"}}>
              <span><a href="#">forgot password?</a></span>
            </Row>
          </form>
          </Modal>
          <Modal open={openSecondModal} onClose={this.onCloseSecondModal} little>
            <Row>
              <h4>Sign Up</h4>
            </Row>
            <Row>
              <Input s={12} m={12} label="Email Address" ><Icon>email</Icon></Input>
              <Input s={12} m={12} label="First Name" ><Icon>person</Icon></Input> 
              <Input s={12} m={12} label="Last Name" ><Icon>person</Icon></Input>
              <Input s={12} m={12} label="Password" ><Icon>lock_outline</Icon></Input>              
            </Row>
            <Row style={{textAlign: "center"}}>
              <Button waves='light' style={{width: "500px"}} >Sign Up</Button>
            </Row>
          </Modal>          
      </div>
    );
  }
}

export default Header;