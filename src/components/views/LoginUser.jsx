import axios from "axios";
import React, { useState, useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { useNavigate } from "react-router-dom";

const LoginUser = (props) => {
    const [userDetails, getUSerDetails] = useState({
        username: "",
        password: ""
    })

    const navigate = useNavigate()
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("username")) === "" || JSON.parse(localStorage.getItem("username")) === null || JSON.parse(localStorage.getItem("username")) === undefined) {
            navigate("/login")
        } else {
            navigate("/irent/user/components")
            let us = JSON.parse(localStorage.getItem("username"))

        }

    }, [])
    const getUser = (user) => {
        let value = user.target.value

        getUSerDetails({
            ...userDetails,
            [user.target.name]: value
        })
    }

    const loginLandlord = (land) => {
        land.preventDefault()
        let pass = userDetails.password
        let usern = userDetails.username

        if (pass === "" || pass === null || pass === undefined) {

        } else {
            if (usern === "" || usern === null || usern === undefined) {

            } else {
                
                axios.get("http://localhost:8080/irent/api/user/landlord/" + usern + "&" + pass).then(res => {
                    
                    if (res.data.data[0].role.toLowerCase() === "landlord".toLowerCase()) {
                        
                        localStorage.setItem("username", JSON.stringify(res.data.data[0].landlord_name))
                        localStorage.setItem("landlord_id", JSON.stringify(res.data.data[0].id))
                        localStorage.setItem("userRole", JSON.stringify(res.data.data[0].role))
                        navigate("/irent/user/components")
                    }else{
                        alert("Invalid user details...")
                    }

                }).catch(err => {
                    axios.get("http://localhost:8080/irent/api/admin/" + usern + "&" + pass).then(res => {
                        console.log(res.data);
                    if (res.data.admin[0].role.toLowerCase() === "admin".toLowerCase()) {
                        localStorage.setItem("username", JSON.stringify(res.data.admin[0].username))
                        localStorage.setItem("landlord_id", JSON.stringify(res.data.admin[0].id))
                        localStorage.setItem("userRole", JSON.stringify(res.data.admin[0].role))
                        navigate("/admin")
                    }else{
                        alert("Invalid user details...")
                    }

                })
                })
                

            }
        }

    }

    return (
        <div className="bg-info" style={{ height: "100vh" }}>
            <div className="row align-items-center">
                <div className="col-sm-4">
                </div>
                <div className="col-sm-4">
                    <div className="m-4 p-4 text-center" style={{ fontSize: "5rem", color: "chocolate" }}>
                        iRent
                    </div>
                    <div className="form-group">

                        <input type="text" name="username" className="form-control m-1" placeholder="Username" aria-label="House name" onChange={getUser} />
                        <input type="password" name="password" className="form-control m-1" placeholder="Password" aria-label="Location name" onChange={getUser} />
                        <button type="button" className="form-control btn btn-secondary m-1" onClick={loginLandlord}>Signin</button>
                    </div>
                </div>

                <div className="col-sm-4">
                </div>
            </div>
        </div>
    )
}

export default LoginUser;