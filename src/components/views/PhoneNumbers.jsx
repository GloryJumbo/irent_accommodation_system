import React, {useState, useEffect} from 'react'
import axios from 'axios'
function PhoneNumbers() {
    const [landlords, getLandlord] = useState([])
    const [landlord, saveLandlordsFunction] = useState({
        phone:"",
        landlord_id:null
    })

    useEffect(()=>{
        axios.get("http://localhost:8080/irent/api/landlords").then(res=>{
            getLandlord(res.data.data)
        })
    })
    const saveLandlord = (event)=>{
        const value = event.target.value;
        saveLandlordsFunction({
          ...landlord,
          [event.target.name]: value
        });
    }
    const saveFunction =(e)=>{
        e.preventDefault()
        axios
        .post("http://localhost:8080/irent/api/phone-number", {
          phone_number: landlord.phone,
          landlord_id: landlord.landlord_id,
        })
        .then((response) => {
            
            console.log(response);
            
        });
    }
  return  (
        <div className="container" style={{ marginTop: "20px" }}>
            <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
            <div class="row gx-3 gy-2 align-items-center">
                <div class="col-sm-4">
                    <input type="text" name='phone' class="form-control" placeholder="Phone number" aria-label="House name" onChange={saveLandlord} />
                </div>
                
                <div class="col-sm-4">
                <select class="form-select" id="specificSizeSelect" name='landlord_id' onChange={saveLandlord}>
                        <option value="1">Landlord</option>
                        {
                            landlords.map((landlord, key)=>{
                                return <option value={landlord.id}>{landlord.landlord_name}</option>
                            })
                        }
                    </select>
                </div>
                <div class="col-sm-4">
                    <button type="button" class="form-control btn btn-secondary" onClick={saveFunction}>Save</button>
                </div>
            </div>
<hr/>
            <div>
                {/* <table class="table table-secondary">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead> */}
                    {/* <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                    </tbody> */}
                {/* </table> */}
            </div>

        </div>
    )
}

export default PhoneNumbers
