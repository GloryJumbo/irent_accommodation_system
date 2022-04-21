import React from 'react'

function Landlords() {
    return (
        <div className="container" style={{ marginTop: "20px" }}>
        <div class="row gx-3 gy-2 align-items-center">
            <div class="col-sm-3">
                <input type="text" class="form-control" placeholder="First name" aria-label="House name" />
            </div>
            <div class="col-sm-3">
                <input type="text" class="form-control" placeholder="Last name" aria-label="Location name" />
            </div>
            <div class="col-sm-3">
                <input type="text" class="form-control" placeholder="Location name" aria-label="Location name" />
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
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
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
                    
                </tbody>
            </table>
        </div>

    </div>
    )
}

export default Landlords
