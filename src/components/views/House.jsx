import React, { useEffect, useState } from 'react'
import house from "../images/abc.jpeg";
import { useNavigate } from 'react-router-dom';
function House() {
    const [landlordInfo, getLandlord] = useState([])
    const [house_image, getHouseImages] = useState("")
    const [house_images, getAllHouseImages] = useState([])
    const [houseInfo, getHouse] = useState([])
    let hh = localStorage.getItem("houseName")
    let hh_id = localStorage.getItem("housId")
    const navigate = useNavigate()
    let landId = localStorage.getItem("landlor_id")

    useEffect(() => {
        fetch("http://localhost:8080/irent/api/landlord/" + JSON.parse(landId))
            .then(res => res.json()).then(data => {
                getLandlord(data.data)
            })
    }, [landlordInfo])

    useEffect(() => {

        fetch("http://localhost:8080/irent/api/house-image/" + JSON.parse(hh_id))
            .then(res => res.json()).then(data => {
                getHouseImages(data.house[0].image)

            })
    }, [house_image])

    useEffect(() => {

        fetch("http://localhost:8080/irent/api/house-image/" + JSON.parse(hh_id))
            .then(res => res.json()).then(data => {
                getHouse(data.house[0])
            })
    }, [houseInfo])

    useEffect(() => {

        fetch("http://localhost:8080/irent/api/house/images/" + JSON.parse(hh_id))
            .then(res => res.json()).then(data => {
                getAllHouseImages(data.data)

            })
    }, [house_images])

    const bookNow = () => {
        navigate("/book-room")
    }
    return (
        <div className="container" style={{ marginTop: "20px" }}>
            <div className='row'>
                <div className='col-sm-4'>
                    <div className='btn btn-secondary w-100 m-1'>{houseInfo.house_name}</div>
                    <div>
                        <img src={house_image} className='w-100 m-1 img-css' />
                    </div>
                    <div>
                        {
                            landlordInfo.map((d, k) => {
                                return <p key={k} className='p-2 book-css'><span>{d.landlord_name} | {d.location}</span> <span className="btn btn-secondary" onClick={bookNow}>Book now</span></p>
                            })
                        }
                    </div>

                </div>
                <div className='col-sm-8'>
                    Description
                    <hr />
                    {
                        houseInfo.house_description
                    }
                </div>

            </div>
            <hr />
            <div className='container'>
                <div className='row'>

                    <div className='col-sm-12 text-center'>
                        <p>More Photos</p>
                        {
                            house_images.map((img_file, key) => {
                                return <div className='m-2' key={key} style={{ float: "left" }}>
                                    <img src={img_file.image_name} width={250} />
                                </div>
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default House
