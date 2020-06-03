import React from 'react'
import auth from '../firebase'
import { useHistory, Link } from "react-router-dom";
import '../App.css'

const User = () => {
    let history = useHistory();
    const handlelogout = () => {
        auth.signOut().then(() => {
            console.log("logout success")
            history.push("/");
        })
    }
    return (
        <div className="container">
            <div className="App pt-5">
                <button type="button" onClick={handlelogout}>ออกจากระบบ</button>
            </div>
        </div>
    )
}

export default User