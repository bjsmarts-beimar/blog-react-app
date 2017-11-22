import React, { Component } from 'react';
import $ from 'jquery';
import jQuery from 'jquery';


import './LeftBar.css';

class LeftBar extends Component {

  constructor() {
    super();
  }

  componentDidMount() {  
    
        window.jQuery = window.$ = require('jquery');
        require('materialize-css/dist/js/materialize');
                
        (function($){
           $(function(){
    
              $('.button-collapse').sideNav();
            
              $('a').click(function(){                                                                                 
                return true;
              });
              
              $('.scrollTop a').scrollTop();                        
        
          }); 
        })(jQuery); 
  }
    
  render() {            
    return (
      <div>
          <ul id="slide-out" className="side-nav fixed leftbar-Color" style={{paddingTop: "0px", height: "680px"}}>            
            <img id="logo" alt="logo" src="/images/logo.gif" className="logo" />            
            <li><a href="/">HOME</a></li>
            <li><a href="/react">REACT</a></li>
            <li><a href="/angular">ANGULAR</a></li>
            <li><a href="/aspnet">ASP.NET</a></li>
            <li><a href="/node">NODE</a></li>
            <li><a href="/rails">RUBY ON RAILS</a></li>
            <li><a href="/lavarel">PHP LAVAREL</a></li>
            <li><a href="/django">PYTHON DJANGO</a></li>
          </ul>
          <a href="#" data-activates="slide-out" className="button-collapse show-on-large button-collapse-bg"><i className="material-icons">menu</i></a>
      </div>
    );
  }
}

export default LeftBar;