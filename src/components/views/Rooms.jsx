import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Rooms() {
    
    const [houses, getLandlordHouses] = useState([])
    const [statuses, getHouseStatus] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8080/irent/api/houses").then(resp=>{
            getLandlordHouses(resp.data.houses)
        })
    },[houses])

    useEffect(()=>{
        axios.get("http://localhost:8080/irent/api/statuses").then(respons=>{
            getHouseStatus(respons.data.data)
        })
    },[statuses])

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
                <input type="text" class="form-control" placeholder="Room number" aria-label="House name" />
            </div>
            
            <div class="col-sm-3">
                <label class="visually-hidden" for="specificSizeSelect">Preference</label>
                <select class="form-select" id="specificSizeSelect">
                    <option value="1">Compound</option>
                    {
                        houses.map((house, key)=>{
                            return <option value={house.id}>{house.house_name}</option>
                        })
                    }
                
                </select>
            </div>
            <div class="col-sm-3">
                <select class="form-select" id="specificSizeSelect">
                    <option value="1">Room Status</option>
                    {
                        statuses.map((status, key)=>{
                            return <option value={status.id}>{status.status}</option>
                        })
                    }
                   
                </select>
            </div>
            <div class="col-sm-3">
                <button type="button" class="form-control btn btn-secondary">Save</button>
            </div>
        </div>
<hr/>
        <div>
            <table class="table table-secondary">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        
                        <th scope="col">Landlord</th>
                        <th scope="col">Status</th>
                       
                    </tr>
                </thead>
                {/* <tbody>
                   
                    <tr>
                        
                        <td>1</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        
                        <td>2</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                </tbody> */}
            </table>
        </div>

    </div>
    )
}

export default Rooms
