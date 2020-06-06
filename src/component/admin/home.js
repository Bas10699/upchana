import React, { useState } from 'react'
import { useHistory , Link } from "react-router-dom";


const HomeAdmin = () => {
    let history = useHistory();
    return (
        <div>
            
            <div className="container" style={{ minHeight: "75vh" }}>

                สวัสดี Admin
                     <nav>
                    <Link to="Admin/me">My Profile</Link>
                </nav>

            </div>

        </div>
    )
}
export default HomeAdmin