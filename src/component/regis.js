import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import firebase, { auth, db } from '../firebase'
import QRCode from 'qrcode.react';

const Register = withRouter(({ history }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');

    const handleRegis = async () => {
        console.log(username, password, name, lastname, phone, role)
        const respone = await auth.createUserWithEmailAndPassword(username, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
            // ...
        })
        if (respone) {
            const { user } = respone
            console.log(user)
            // Add a new document in collection "cities"
            db.collection("users").doc(user.uid).set({
                name: name,
                lastname: lastname,
                phone: phone,
                role: role
            })
                .then(function () {
                    console.log("Document successfully written!");
                    localStorage.setItem("user_token", user.uid);
                    history.push("/user");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });

        }

    }
    return (
        <div className="container">

            <h1>ลงทะเบียนผู้ใช้</h1>
            <div className="form-group">
                <label for="sel1">ประเภทผู้ใช้งาน:</label>
                <select onChange={(e) => setRole(e.target.value)} class="form-control col-6" id="sel1" name="sellist1">
                    <option selected disabled hidden>กรุณาเลือกประเภท</option>
                    <option value="0">บุคคลทั่วไป</option>
                    <option value="1">นิสิต</option>
                    <option value="2">บุคลาการ</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="usr">email:</label>
                <input type="email" className="form-control col-6" id="usr" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="pwd">password:</label>
                <input type="password" className="form-control col-6" id="pwd" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="usr">ชื่อ:</label>
                <input type="text" className="form-control col-6" id="usr" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="pwd">นามสกุล:</label>
                <input type="text" className="form-control col-6" id="pwd" onChange={(e) => setLastname(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="pwd">เบอร์โทร:</label>
                <input type="text" className="form-control col-6" id="pwd" onChange={(e) => setPhone(e.target.value)} />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleRegis}>ลงทะเบียน</button>



            <button className="btn btn-secondary" onClick={() => history.push('/')}>กลับหน้าหลัก</button>
            <div className="mt-5">
                <QRCode value="https://upchana-fe032.web.app/Register" />
            </div>

        </div>
    )
})

export default Register;