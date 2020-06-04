import React from 'react'
import { useHistory } from "react-router-dom";
import firebase, { auth } from '../firebase'
const Header = () => {
    let history = useHistory();
    const handlelogout = () => {
        auth.signOut().then(() => {
            console.log("logout success")
            localStorage.removeItem('user_token')
            history.push("/");
        })
    }
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    <button className="btn btn-outline-secondary my-2 my-sm-0" type="button" onClick={handlelogout}>ออกจากระบบ</button>
                </form>
            </div>
        </nav>


    )
}
export default Header