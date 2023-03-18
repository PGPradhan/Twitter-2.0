import React from 'react';
import { Link } from "react-router-dom";
import Toxicity from './toxicityClassifier'
import ToxicityPage from './ToxicityPage';
const AdminSidebar = () => {
    return (
         <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{color:"black"}}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 " style={{backgroundColor:"white",color:"black"}}>
                <li class="nav-item mb-2 mt-3"><a class="nav-link text-secondary" href="#" style={{backgroundColor:"white",color:"black"}}><h2>Admin Panel</h2></a></li>
                <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="#"><i class="fas fa-user font-weight-bold"></i> <span className="ml-3">Accounts</span></a></li>
                <li class="nav-item mb-2">
                    <a class="nav-link text-secondary" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i class="far fa-file-word font-weight-bold"></i> <span className="ml-3">Complaints▾</span></a>
                    <a class="nav-link text-secondary" href="/toxicity" data-toggle="collapse" data-target="#submenu1"><i class="far fa-file-word font-weight-bold"></i> <span className="ml-3">Toxicity</span></a>
                    <ul class="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                       <li class="nav-item mb-2 "><a class="nav-link text-secondary" href=""><i class="fas fa-book-reader"></i> Data Report </a></li>
                       <li class="nav-item mb-2 "><a class="nav-link text-secondary" href=""> <i class="fas fa-book-medical"></i> File Report </a></li>
                    </ul>
                </li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Analytics</span></a></li>
                
            </ul>
       </div>
    )
}
 
export default AdminSidebar