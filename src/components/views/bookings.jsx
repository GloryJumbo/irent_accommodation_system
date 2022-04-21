import React from 'react'

function Bookings() {
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
                <input type="text" class="form-control" placeholder="Booked by" aria-label="House name" />
            </div>
            <div class="col-sm-3">
                <input type="text" class="form-control" placeholder="Phone number" aria-label="Location name" />
            </div>
            <div class="col-sm-3">
                
                <select class="form-select" id="specificSizeSelect">
                    <option value="1">Matiya</option>
                    <option value="2">Flats</option>
                    <option value="3">Tholo</option>
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
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                
            </table>
        </div>

    </div>
    )
}

export default Bookings
