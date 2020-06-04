import React from 'react';
import logo from '../UPLogo.png';
import '../App.css';
import { withRouter } from 'react-router-dom'

const Home = withRouter(({ history }) => {
  console.log("token",localStorage.getItem('user_token'))
  return (
    <div className="container">
      <div className="App pt-5">
        {/* <header className="App-header"> */}
        <img src={logo} className="App-logo" alt="logo" />
        <div className="pt-3">
          <span className="badge badge-warning"><h1>
            มพ.ชนะ
        </h1></span>
        </div>
        <p>เปิดให้ลงทะเบียนวันไหน...</p>
        <div className="row">
          {/* <div className="col-sm-2"></div> */}
          <div className="col-lg-6 mt-3">
            <button className="btn btn-success col-8" onClick={() => history.push('/Register')}>ลงทะเบียนผู้ใช้</button>
          </div>
          <div className="col-lg-6 mt-3">
            <button className="btn btn-primary col-8" onClick={() => history.push('/Login')}>เข้าสู่ระบบ</button>
          </div>
          {/* <div className="col-sm-2"></div> */}
        </div>

        {/* </header> */}
      </div>
    </div>
  )
})

export default Home;
