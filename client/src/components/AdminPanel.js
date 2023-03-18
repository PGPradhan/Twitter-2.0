import React from 'react'
import Dashboard from './AdminDashBoard';
import Navbar from './AdminNavbar';
import AdminSidebar from './AdminSideBar'; 

export const AdminPanel = () => {
    return (
            <div>
             <Navbar/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <AdminSidebar/>
                  <Dashboard/>
                  </div>
                  </div>
            </div>
    )
}
export default AdminPanel