import React from 'react'

function Rooms() {
    return (
        <div className="container" style={{ marginTop: "20px" }}>
        <div class="row gx-3 gy-2 align-items-center">
            <div class="col-sm-3">
                <input type="text" class="form-control" placeholder="Room number" aria-label="House name" />
            </div>
            
            <div class="col-sm-3">
                <label class="visually-hidden" for="specificSizeSelect">Preference</label>
                <select class="form-select" id="specificSizeSelect">
                    <option value="1">Blue Complex</option>
                    <option value="2">Flats</option>
                    <option value="3">Wifi</option>
                </select>
            </div>
            <div class="col-sm-3">
                <label class="visually-hidden" for="specificSizeSelect">Preference</label>
                <select class="form-select" id="specificSizeSelect">
                    <option value="1">Vaccant</option>
                    <option value="2">Booked</option>
                    <option value="3">Pending</option>
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
                        
                        <th scope="col">Compound</th>
                        <th scope="col">Status</th>
                       
                    </tr>
                </thead>
                <tbody>
                   
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
                </tbody>
            </table>
        </div>

    </div>
    )
}

export default Rooms
