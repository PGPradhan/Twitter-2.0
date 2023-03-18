import React from 'react';
import { BsTwitter } from "react-icons/bs";
 
export const Navbar = () => {
    return (
            <nav class="navbar fixed-top navbar-expand-md mb-3" style={{backgroundColor:"#1DA1F2"}}>
                <div class="flex-row d-flex">
                
                    <button type="button" class="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="title">
            
              <BsTwitter />
            
          </div>
                    <a class="navbar-brand" href="#" title="Free Bootstrap 4 Admin Template" >Twitter</a>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse" id="collapsingNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">Home</span></a>
                        </li>
                        
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        
                        <li class="nav-item">
                            <a class="nav-link" href="" data-target="#myModal" data-toggle="modal">About</a>
                        </li>
                        <li class="nav-item">
                  <a class="nav-link waves-effect waves-light text-white">
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link waves-effect waves-light text-white">
                        <i class="fas fa-envelope-open-text"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link waves-effect waves-light text-white">
                          <i class="fas fa-align-justify"></i>
                      </a>
                    </li>
                    </ul>
                </div>
       </nav>
    )
}
export default Navbar