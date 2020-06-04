import React, { useState, useEffect } from 'react'
import firebase, { auth, db } from '../firebase'
import { useHistory, Link } from "react-router-dom";
import '../App.css'

const User = () => {
    const [name, setname] = useState('');
    const user_token = localStorage.getItem('user_token');

    let history = useHistory();
    const handlelogout = () => {
        auth.signOut().then(() => {
            console.log("logout success")
            localStorage.removeItem('user_token')
            history.push("/");
        })
    }

    useEffect(() => {
        if (!user_token) {
            history.push("/Login")
        } else {
            console.log(user_token)
            let cityRef = db.collection('users').doc(user_token);
            let getDoc = cityRef.get()
                .then(doc => {
                    if (!doc.exists) {
                        console.log('No such document!');
                    } else {
                        console.log('Document data:', doc.data());
                        setname(doc.data().name)
                    }
                })
                .catch(err => {
                    console.log('Error getting document', err);
                });


        }
    }, [])


    return (
        <div className="container">
            <div className="App pt-5">
                สวัสดี {name}
                <button type="button" onClick={handlelogout}>ออกจากระบบ</button>
            </div>
        </div>
    )
}

export default User