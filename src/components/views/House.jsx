import React, { useEffect, useState } from 'react'
import house from "../images/abc.jpeg";
import { useNavigate } from 'react-router-dom';
function House() {
    const [landlordInfo, getLandlord] = useState([])
    let hh = localStorage.getItem("houseId")
    const navigate = useNavigate()
    useEffect(()=>{
    let landId = localStorage.getItem("landlord")
        fetch("http://localhost:8080/irent/api/landlord/"+JSON.parse(landId))
        .then(res=>res.json()).then(data=>{
            getLandlord(data.data)
        })
    },[landlordInfo])

    const bookNow = ()=>{
        navigate("/book-room")
    }
    return (
        <div className="container" style={{ marginTop: "20px" }}>
            <div className='row'>
                <div className='col-sm-4'>
                    <div className='btn btn-secondary w-100 m-1'>{JSON.parse(hh)}</div>
                    <div>
                        <img src={house} className='w-100 m-1'/>
                    </div>
                    <div>
                        {
                            landlordInfo.map((d,k)=>{
                                return <p key={k} className='p-2 book-css'><span>{d.landlord_name} | {d.location}</span> <span className="btn btn-secondary" onClick={bookNow}>Book now</span></p>
                            })
                        }
                    </div>
                    
                </div>
                <div className='col-sm-8'>
                    Compound information
                    <hr/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque totam tempore animi hic id at dolorum eos illum molestiae? Aliquam voluptates aut atque. Animi corrupti autem cupiditate debitis laboriosam quae officiis, sed iure temporibus perspiciatis quis nemo quod aliquam, itaque commodi iusto dolorum illum. Tempora rem earum illum fuga molestias?
                </div>
                
            </div>
            <p></p>
        </div>
    )
}

export default House
