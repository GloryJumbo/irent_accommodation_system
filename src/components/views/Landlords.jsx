import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Landlords() {
    const initialiser = {
        fullname : "",
        sex:"",
        location:""
    }
    const [landlord, saveLandlord] = useState(initialiser) 
    const [output, getLandlords] = useState([])
    const saveLandlordFunction = (event)=>{
        const value = event.target.value;
        saveLandlord({
          ...landlord,
          [event.target.name]: value
        });
    }
    const clearFields = ()=>{
        saveLandlord({...initialiser})
    }
    const saveLandlords = (e)=>{
        e.preventDefault()
        if(landlord.fullname === "" || landlord.fullname===null || landlord.fullname === undefined ){
            
        }else{
            if(landlord.sex === "" || landlord.sex===null || landlord.sex === undefined ){
                
            }else{
                if(landlord.location === "" || landlord.location===null || landlord.location === undefined ){
            
                }else{
                    axios
                    .post("http://localhost:8080/irent/api/landlord", {
                      landlord_name: landlord.fullname,
                      sex: landlord.sex,
                      location: landlord.location
                    })
                    .then((response) => {
                        
                        clearFields()
                        
                    });
                }
            }
        }
        
    }

    useEffect(() => {
        axios.get("http://localhost:8080/irent/api/landlords").then((response) => {
            getLandlords(response.data.data);
            
        });
      }, [output]);

    return (
        <div className="container" style={{ marginTop: "20px" }}>
            <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <div class="row gx-3 gy-2 align-items-center">
            <div class="col-sm-3">
                <input type="text" name="fullname" onChange={saveLandlordFunction} class="form-control" placeholder="Full name" aria-label="full name" />
            </div>
            <div class="col-sm-3">
            <select class="form-select" name="sex" onChange={saveLandlordFunction} aria-label="Default select example">
                
                <option>Sex</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                </select>
            </div>
            <div class="col-sm-3">
                <input type="text" class="form-control" name="location" onChange={saveLandlordFunction} placeholder="Location name" aria-label="Location name" />
            </div>
            
            <div class="col-sm-3">
                <button type="button" class="form-control btn btn-secondary" onClick={saveLandlords}>Save</button>
            </div>
        </div>
<hr/>
        <div className='row'>
            <div className='col-sm-3'></div>
            <div className='col-sm-6'>
            <table class="table table-secondary">
                <thead>
                    <tr>
                        
                        <th scope="col">Landlord Name</th>
                        <th scope="col">Sex</th>
                        <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        output.map((land, key)=>{
                            return <tr>
                                
                                    <td>{land.landlord_name}</td>
                                    <td>{land.sex}</td>
                                    <td>{land.location}</td>
                                
                            </tr>
                        })
                    }
                   
                    
                </tbody>
            </table>

            </div>
            <div className='col-sm-3'></div>
                    </div>

    </div>
    )
}

export default Landlords
