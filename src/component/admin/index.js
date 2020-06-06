import React, { useState } from 'react'
import { Switch, Route, NavLink, useRouteMatch } from 'react-router-dom';
import Home from './home'
import OwnUserProfile from './test'
import Sidebar from './sidebar'
import './admin.css'
import Header from './header'
import DisplayAdmin from './displayAdmin'

const Admin = () => {
    let match = useRouteMatch();

    const [toggleActive, setToggleActive] = useState(false)

    return (
        <div className="wrapper">
            <nav id="sidebar" className={toggleActive? "active":""}>
                <div className="sidebar-header">
                    <h3>ADMIN UPCHANA</h3>
                </div>
                <ul className="list-unstyled components">
                    <p>Dummy Heading</p>
                    
                    <li>
                        <NavLink to="/admin/adminAll">จัดการผู้ดูแล</NavLink>
                       
                    </li>
                    <li>
                        <NavLink to="/admin/regis">จัดการสถานที่</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/regis">จัดการผู้ใช้งาน</NavLink>
                    </li>
                </ul>
                <ul className="list-unstyled CTAs">
                    <li>
                        <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download source</a>
                    </li>
                    <li>
                        <a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a>
                    </li>
                </ul>
            </nav>
            <div id="content">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <button type="button" id="sidebarCollapse" className={toggleActive? "navbar-btn active":"navbar-btn "} onClick={()=>setToggleActive(!toggleActive)}>
                            <span />
                            <span />
                            <span />
                        </button>
                        <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-align-justify" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="nav navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Page</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Page</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Page</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Page</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <Switch>
                    <Route exact path={`${match.path}/`} ><Home /></Route>
                    <Route path={`${match.path}/me`} ><OwnUserProfile /></Route>
                    <Route path={`${match.path}/adminAll`} ><DisplayAdmin /></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Admin