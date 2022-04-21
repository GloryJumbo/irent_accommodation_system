import React from 'react'

function PhoneNumbers() {
    return (
        <div className="container" style={{ marginTop: "20px" }}>
            <div class="row gx-3 gy-2 align-items-center">
                <div class="col-sm-4">
                    <input type="text" class="form-control" placeholder="Phone number" aria-label="House name" />
                </div>
                
                <div class="col-sm-4">
                    <label class="visually-hidden" for="specificSizeSelect">Preference</label>
                    <select class="form-select" id="specificSizeSelect">
                        <option value="1">kawisa</option>
                        <option value="2">Lutepo</option>
                        <option value="3">Namondwe</option>
                    </select>
                </div>
                <div class="col-sm-4">
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
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default PhoneNumbers
