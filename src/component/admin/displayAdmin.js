import React, { useState, useEffect } from 'react'
import { db } from '../../firebase'

const DisplayAdmin = () => {
    const [userAdmin, setUserAdmin] = useState('');
    useEffect(() => {
        let citiesRef = db.collection('users');
        let query = citiesRef.where('role', '==', "0").get()
            .then(snapshot => {
                if (snapshot.empty) {
                    console.log('No matching documents.');
                    return;
                }

                const updatedsnapshot =
                    snapshot.docs.map(docSnapshot => docSnapshot.data());
                setUserAdmin(updatedsnapshot);

            })
            .catch(err => {
                console.log('Error getting documents', err);
            });
    }, [])


    return (
        userAdmin ? <div className="container pt-3">
            <button className="btn btn-secondary float-right ">เพิ่มผู้ดูแล</button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">ชื่อ</th>
                        <th scope="col">สกุล</th>
                        <th scope="col">เบอร์โทร</th>
                    </tr>
                </thead>
                <tbody>
                    {userAdmin.map((element, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{element.name}</td>
                                <td>{element.lastname}</td>
                                <td>{element.phone}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>

        </div>
            :
            <div className="container pt-3">
                <div>
                    <button className="btn btn-secondary float-right ">เพิ่มผู้ดูแล</button>
                    <h1 className="App pt-5">ไม่พบข้อมูล</h1>
                </div>

            </div>
    )

}
export default DisplayAdmin