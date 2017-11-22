import React, { Component } from 'react';


import './RightBar.css';

class RightBar extends Component {

  constructor() {
    super();
  }
    
  render() {            
    return (
      <div className="rightbar-Color" style={{height: "1500px"}}>           
          <h4>Popular Posts</h4>                                                         
      </div>
    );
  }
}

export default RightBar;