import React, { useState } from 'react'
import firebase, { auth, db } from '../firebase'
import { useHistory } from "react-router-dom";
import '../App.css'

const Login = () => {
    let history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setloading] = useState(false);

    const handleLogin = async () => {
        console.log(username, password)
        setloading(true)
        const respone = await auth.signInWithEmailAndPassword(username, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
            // ...
        })
        if (respone) {
            const { user } = respone
            console.log(respone)
            localStorage.setItem("user_token", user.uid);

            let cityRef = db.collection('users').doc(user.uid);
            let getDoc = cityRef.get()
                .then(doc => {
                    if (!doc.exists) {
                        console.log('No such document!');
                    } else {
                        // console.log('Document data:', doc.data());
                        if (doc.data().role === "5") {
                            history.push('/Admin')
                        }
                        else {
                            history.push('/user')
                        }
                    }
                })
                .catch(err => {
                    console.log('Error getting document', err);
                });

            // history.push("/user");
        }

    }
    return (

        loading ?
            <div></div>
            : <div className="container">
                <div className="pt-5">
                    <div className="form-group">
                        <label htmlFor="usr">Username:</label>
                        <input type="text" className="form-control col-6" id="usr" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control col-6" id="pwd" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={handleLogin}>เข้าสู่ระบบ</button>

                </div>

            </div>


    )
}

export default Login;