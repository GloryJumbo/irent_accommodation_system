import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Statuses() {

  const [data, loadData] = useState(null)
  const [list, saveData] = useState("")

  useEffect(() => {
    axios.get("http://localhost:8080/irent/api/statuses").then((response) => {
      loadData(response.data.data);
    });
  }, [data]);

  const deleteStatus = (ev) => {

    axios
      .delete("http://localhost:8080/irent/api/status/" + parseInt(ev.target.id))
      .then((response) => {
        console.log("Delete item id", ev.target.id);
        loadData(response.data.data);
      });

  }
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (list === "" || list === null || list === undefined) {

      } else {
        axios
          .post("http://localhost:8080/irent/api/status", {
            status: list
          })
          .then((response) => {
            loadData(response.data.data);
            saveData("")
          });
      }
    }
  }
  const editStatus = (ev) => {

    console.log("editing item id", ev.target.id);
  }
  if (!data) return null;

  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row gx-3 gy-2">

          <div className="col-sm-4">
          </div>
          <div className="col-sm-4">
            <input type="text" className="form-control" name={list} placeholder="Status" aria-label="House name" onChange={e => saveData(e.target.value)} onKeyDown={handleKeyDown} />
          </div>

          <div className="col-sm-4">
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <table class="table table-secondary">
              <thead>
                <tr>
                  <th scope="col" style={{ textAlign: "center" }}>Statuses</th>

                </tr>
              </thead>
              <tbody style={{ alignItems: "left" }}>
                {
                  data.map((d, k) => {
                    return <tr key={k}>

                      <td className="status-css d-flex justify-content-between">
                        <span>{d.status}</span>
                        <span>
                          <span class="btn btn-primary m-css" id={d.id} onClick={editStatus}>Edit</span>
                          <span class="btn btn-danger" id={d.id} onClick={deleteStatus}>Delete</span>
                        </span>

                      </td>

                    </tr>

                  })
                }


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
