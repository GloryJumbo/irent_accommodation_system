import $ from "jquery";
import React, { Component, useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const BottomCarousel = (props) => {
    const [images, setImages] = useState([])
    const [houses, setHouses] = useState([])
    useEffect(() => {
        let landId = localStorage.getItem("landlor_id")

        fetch("http://localhost:8080/irent/api/rooms/images")
            .then(res => res.json()).then(data => {

                setImages(data.images)
            })
    }, [images])

    useEffect(() => {
        fetch("http://localhost:8080/irent/api/houses")
            .then(res => res.json()).then(data => {

                setHouses(data.houses)
            })
    }, [houses])

    return (
        <div className="row">
            <div className="col-md-6">
            <Carousel
            showArrows={false}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={4000}
        >

            {
                images.map((image, key) => {
                    return <div>
                        {
                            houses.map((hs, k) => {
                                return hs.id === image.compound_id ? <div>
                                    
                                    <div className="myCarousel">
                                        <h3>{hs.house_name}</h3>
                                        <h4>{hs.location}</h4>
                                        <p>
                                           {hs.house_description}
                                        </p>
                                    </div>
                                </div>:null
                            })
                        }

                    </div>
                })
            }
        </Carousel>
            </div>
            <div className="col-md-6">
            <Carousel
            showArrows={false}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={4000}
        >

            {
                images.map((image, key) => {
                    return <div>
                        {
                            houses.map((hs, k) => {
                                return hs.id === image.compound_id ? <div>
                                    
                                    <div className="myCarousel">
                                        <h3>{hs.house_name}</h3>
                                        <h4>{hs.location}</h4>
                                        <p>
                                           {hs.house_description}
                                        </p>
                                    </div>
                                </div>:null
                            })
                        }

                    </div>
                })
            }
        </Carousel>
            </div>
        </div>
        
    );
}

export default BottomCarousel