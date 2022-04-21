import React from 'react'

function Statuses() {
    return (
        <div>
             <div className="container" style={{ marginTop: "20px" }}>
            <div class="row gx-3 gy-2 align-items-center">
                
                <div class="col-sm-3">
                </div>
                <div class="col-sm-3">
                    <input type="text" class="form-control" placeholder="Status" aria-label="House name" />
                </div>
                
                
                <div class="col-sm-3">
                    <button type="button" class="form-control btn btn-secondary">Save</button>
                </div>
                <div class="col-sm-3">
                </div>
            </div>
<hr/>
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                <table class="table table-secondary">
                    <thead>
                        <tr>
                            <th scope="col">Statuses</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                           
                            <td>Vaccant</td>
                           
                        </tr>
                        <tr>
                           
                            <td>Booked</td>
                           
                        </tr>
                        <tr>
                           
                            <td>Pending</td>
                           
                        </tr>
                        
                    </tbody>
                </table>

                </div>
                <div className="col-sm-4"></div>
                           </div>

        </div>
        </div>
    )
}

export default Statuses
