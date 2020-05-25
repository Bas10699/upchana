import React from 'react';
import logo from '../UPLogo.png';
import '../App.css';
import { withRouter } from 'react-router-dom'

const Home = withRouter(({ history }) => (

    <div className="container">
      <div className="App pt-5">
        {/* <header className="App-header"> */}
        <img src={logo} className="App-logo" alt="logo" />
        <div className="pt-3">
          <span class="badge badge-warning"><h1>
            มพ.ชนะ
        </h1></span>
        </div>
        <p>เปิดให้ลงทะเบียนวันไหน...</p>
        <div className="row">
          {/* <div className="col-sm-2"></div> */}
          <div className="col-lg-6 mt-3">
            <button className="btn btn-success col-8" onClick={() => history.push('/Register')}>ลงทะเบียนสถานที่</button>
          </div>
          <div className="col-lg-6 mt-3">
            <button className="btn btn-primary col-8">ดูข้อมูลสถานที่</button>
          </div>
          {/* <div className="col-sm-2"></div> */}
        </div>

        {/* </header> */}
      </div>
    </div>
  ))

export default Home;