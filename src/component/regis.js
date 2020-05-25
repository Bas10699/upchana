import React from 'react';
import { withRouter } from 'react-router-dom';
import QRCode from 'qrcode.react';

const Register = withRouter(({ history }) => {
    return (
        <div className="container">
            <div className="App">
                <h1>ลงทะเบียน</h1>
                <div className="row">
                    <div className="col-6">
                        <input className="form-control" />
                    </div>
                    <div className="col-6">
                        <input className="form-control" />
                    </div>
                </div>

                <button className="btn btn-secondary" onClick={() => history.push('/')}>กลับหน้าหลัก</button>
                <div className="mt-5">
                    <QRCode value="https://www.google.com/" />
                </div>

            </div>
        </div>
    )
})

export default Register;