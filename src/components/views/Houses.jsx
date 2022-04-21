import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Houses() {
    const [landlords, getLandlords] = useState([])

    const [housesContainer, saveHouseFunction] = useState({
        house:"",
        location:"",
        landlord:""
    })

    useEffect(()=>{
        axios.get("http://localhost:8080/irent/api/landlords").then(res=>{
            getLandlords(res.data.data)
        })
    })

    const getHouseValues = (e)=>{
        e.preventDefault()
        const value = e.target.value;
        saveHouseFunction({
          ...housesContainer,
          [e.target.name]: value
        });
    }
    const saveHouse = ()=>{
        axios.post("http://localhost:8080/irent/api/house",{
            house_name : housesContainer.house,
            location : housesContainer.location,
            landlord_id : housesContainer.landlord
        }).then(res=>{
            if (res.status == 200) {
                alert("Compound added successfully...")
            }
            // console.log(res);
        })
    }
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
                    <input type="text" class="form-control" name='house' placeholder="Compound name" aria-label="House name" onChange={getHouseValues}/>
                </div>
                <div class="col-sm-3">
                    <input type="text" class="form-control" name='location' placeholder="Location name" aria-label="Location name" onChange={getHouseValues}/>
                </div>
                <div class="col-sm-3">
                    <select class="form-select" name='landlord' id="specificSizeSelect" onChange={getHouseValues}>
                        <option value="1">Landlord</option>
                        {
                            landlords.map((landlord, key)=>{
                                return <option value={landlord.id} name="landlord">{landlord.landlord_name}</option>
                            })
                        }
                    </select>
                </div>
                <div class="col-sm-3">
                    <button type="button" class="form-control btn btn-dark" onClick={saveHouse}>Save</button>
                </div>
            </div>
<hr/>
            <div>
                <table class="table table-secondary">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    {/* <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        
                    </tbody> */}
                </table>
            </div>

        </div>
    )
}

export default Houses
