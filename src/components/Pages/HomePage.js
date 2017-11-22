import React, { Component } from 'react';
import {Row, Col, Icon, Input, Card} from 'react-materialize';
import { Redirect } from "react-router-dom";
import LeftBar from '../Layout/LeftBar';
import RightBar from '../Layout/RightBar';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import AuthService from '../../services/AuthService';
import PostService from '../../services/PostService';


import './Style.css';

class HomePage extends Component {

  constructor(props) 
  {
    super(props);
    this.Auth = new AuthService();
    this.Post = new PostService();
    this.reload = this.reload.bind(this);

    this.state = {
      loggedIn : this.Auth.loggedIn(),
      pageTitle: 'Category "React"',
      posts: [] 
    }
    
  }  

  reload() {
    
    this.Post.getPosts().then((response) => {

              console.log(response);
    
              this.setState({
                posts: response
              })
          });
    
  }

  componentWillMount() {
    this.reload();
  }
    
  render() {
    
    return (
      <div>       
          <Row className="right-align" >
              <Header parentProps={this.props}/>
          </Row>                       
          <Row>
	          <Col s={12} m={9} >
              <LeftBar />  
              <div className="workarea">
                  <Input s={12} m={12}
                  id="userInput"
                  ref="userInput"
                  name="userInput"
                  placeholder="   Search ...  "  
                  type="text" 
                  noValidate >                  
                  <Icon>search</Icon>
                  </Input>                                
                  <h4>{this.state.pageTitle}</h4>
                  {this.state.posts
                      .filter((row, i) => (i < 5))
                      .map(function(row, i) {
                      return (                        
                        <Card key={i} className='small black-text' textClassName='black-text' title={row.title} >
                        {row.body}
                        </Card>
                      );
                  }.bind(this))}  


              </div>
            </Col>
	          <Col s={12} m={3}>
              <RightBar />  
            </Col>
          </Row>
          <Row>
            <Col s={12} >
              <Footer />
            </Col>
          </Row>                                    
      </div>
    );
  }
}

export default HomePage;