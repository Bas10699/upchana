import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import Header from '../header'

const HomeAdmin = () => {
    let history = useHistory();
    return (
        <div>
            <Header />
            <div className="container" style={{marginTop:"10vh", minHeight: "90vh"}}>
               
                     สวัสดี Admin
               
               
            </div>

        </div>
    )
}
export default HomeAdmin