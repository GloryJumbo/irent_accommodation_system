import React, { useState, useEffect } from 'react'
import axios from 'axios'

function CompoundImages() {

    const [houses, getLandlordHouses] = useState([])
    const [imageName, getHouseImage] = useState("")
    const [roomDetails, setRoomDetails] = useState({
        compound_id: ""
    })

    useEffect(() => {
        axios.get("http://localhost:8080/irent/api/houses").then(resp => {
            getLandlordHouses(resp.data.houses)
        })
    }, [houses])

    const saveRoom =  (ev)  => {
        ev.preventDefault()

        setRoomDetails({
            ...roomDetails,
            [ev.target.name]: ev.target.value
        })
    }

    const saveImage = async (event)=>{
        event.preventDefault()

        const img = event.target.files[0]
        const binary = await convertImageToBinary(img)
        getHouseImage(binary)
    }

    const convertImageToBinary = (file)=>{
        return new Promise((resolve, reject)=>{
            let fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload = ()=>{
                resolve(fileReader.result)
            }

            fileReader.onerror = (err)=>{
                reject(err)
            }
        })
    }

    const saveImages = (e) => {
        e.preventDefault()
        const imageDetails = {
            image_name : imageName,
            compound_id : roomDetails.compound_id
        }
        axios.post("http://localhost:8080/irent/api/house/images", imageDetails).then(res=>{
            if (res.status === 200) {
                alert("Image sent...")
            }else{
                alert("failed to send image...")
            }
        })
    }

    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="container cs-ss">

                <select className="form-select" name="compound_id" id="specificSizeSelect" onChange={saveRoom}>
                    <option value="n">Compound</option>
                    {
                        houses.map((house, key) => {
                            return <option key={key} value={house.id}>{house.house_name}</option>
                        })
                    }

                </select>

                <input type="file" className="form-control m-1" name='image_name' onChange={saveImage} />


                <button type="button" className="btn m-1 btn-secondary form-control" onClick={saveImages}>
                    Save Image
                </button>


            </div>

            <div className='container'>
                <img src='' width={400} />
            </div>
        </div>
    )
}

export default CompoundImages
