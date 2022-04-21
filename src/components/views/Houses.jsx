import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Houses() {
    const navigate = useNavigate()
    const [landlords, getLandlords] = useState([])
    const [compounds, getAllCompounds] = useState([])
    const [compoundImage, getCompoundImage] = useState("")
    const [house_images, getAllHouseImages] = useState([])
    let hh_id = localStorage.getItem("housId")
    const [housesContainer, saveHouseFunction] = useState({
        house: "",
        location: "",
        landlord: "",
        image_name: "",
        description:""
    })

    useEffect(() => {

        fetch("http://localhost:8080/irent/api/house/images/" + JSON.parse(hh_id))
            .then(res => res.json()).then(data => {
                getAllHouseImages(data.data)

            })
    }, [house_images])

    useEffect(() => {
        axios.get("http://localhost:8080/irent/api/houses").then(resp => {
            getAllCompounds(resp.data.houses)
        })
    }, [compounds])

    useEffect(() => {
        axios.get("http://localhost:8080/irent/api/landlords").then(res => {
            getLandlords(res.data.data)
        })


    }, [landlords])

    const getHouseValues = async (e) => {
        e.preventDefault()
        // check for file size not more than 1mb before sending to database
        const value = e.target.value;
        saveHouseFunction({
            ...housesContainer,
            [e.target.name]: value
        });

        const file = e.target.files[0]
        const res = await organiseFile(file)
        getCompoundImage(res)

    }

    const organiseFile = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
            fileReader.onerror = (err) => {
                reject(err)
            }
        })
    }

    const saveHouse = () => {

        let housDetails = {
            house_name: housesContainer.house,
            location: housesContainer.location,
            landlord_id: housesContainer.landlord,
            image: compoundImage,
            house_description: housesContainer.description
        }

        if (compoundImage === "" || compoundImage === null || compoundImage === undefined) {
            alert("Please select a file")
        } else if (housDetails.location === "" || housDetails.location === null || housDetails.location === undefined) {
            alert("Please select compoud")

        } else if (housDetails.landlord_id === "" || housDetails.landlord_id === null || housDetails.landlord_id === undefined) {
            alert("Please select room status")
        } else if (housDetails.house_description === "" || housDetails.house_description === null || housDetails.house_description === undefined) {
            alert("Please select compound description...")
        } 
        else {
            axios.post("http://localhost:8080/irent/api/house", housDetails).then(res => {
                // console.log(res);
                alert(res.data.message)
                saveHouseFunction({
                    house: "",
                    location: "",
                    landlord: "",
                    image_name: "",
                    description:""
                })
                
            }).catch(err => {
                alert("Error occured")
                // console.log(err);
            })
        }

    }
    return (
        <div className="container" style={{ marginTop: "20px" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="row gx-3 gy-2 align-items-center" encType="multipart/form-data">
                <div className="col-sm-3">
                    <input type="text" className="form-control" name='house' placeholder="Compound name" aria-label="House name" onChange={getHouseValues} />
                </div>
                <div className="col-sm-2">
                    <input type="text" className="form-control" name='location' placeholder="Location name" aria-label="Location name" onChange={getHouseValues} />
                </div>
                <div className="col-sm-2">
                    <select className="form-select" name='landlord' id="specificSizeSelect" onChange={getHouseValues}>
                        <option value="1">Landlord</option>
                        {
                            landlords.map((landlord, key) => {
                                return <option key={key} value={landlord.id} >{landlord.landlord_name}</option>
                            })
                        }
                    </select>
                </div>

                <div className="col-sm-3">
                    <input type="file" name="image_name" onChange={getHouseValues} />
                </div>

                <div className="col-sm-2">
                    <button type="button" className="form-control btn btn-dark" onClick={saveHouse}>Save</button>
                </div>
            </div>

            <div className=' m-2'>
                <div className="w-100">
                    <textarea className='form-control' placeholder='Compound description' name='description' onChange={getHouseValues}/>
                    
                </div>
            </div>

            <hr />
            <div className='row'>
                <div className="col-sm-3">
                    <p className='m-1'>List of Compounds</p>
                    <hr />
                    {
                        compounds.map((compound, key) => {
                            return <p key={key} className='list-group-item'>{compound.house_name}</p>
                        }),

                        house_images.map((img_file, key) => {
                            return <div className='m-2' style={{ float: "left" }}>
                                <img src={img_file.image_name} width={250} />
                            </div>
                        })
                    }
                </div>
                <div className="col-sm-9">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente nihil nemo quae est aspernatur culpa corrupti hic neque commodi iusto.
                </div>
            </div>

        </div>
    )
}

export default Houses
