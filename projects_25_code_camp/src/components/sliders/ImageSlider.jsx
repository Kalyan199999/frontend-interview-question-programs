import React , { useState , useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { NextArrow , PrevArrow } from "./Arrows";

import axios from 'axios'

function Image_slider() 
{
    const [ data , setData ] = useState([])

    const fetchData = async ()=>{
        try 
        {
            const response = await axios.get("https://picsum.photos/v2/list")
            setData( response.data )
        } 
        catch (error) 
        {
            console.log("error");
        }
    }

    useEffect(() => {
        fetchData()
    } , [] )

    const settings = {
        dots: true,
        infinite: true,
        arrows:true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    }

  return (
    <>
        <Slider {...settings} >
            {
                data.map( (item )=>{
                    return(
                        <div key={item.id}>
                            <img src={item.download_url} alt="" className='w-52 h-52'/>
                        </div>
                    )
                } )
            }
        </Slider>
    </>
  )
}

export default Image_slider
