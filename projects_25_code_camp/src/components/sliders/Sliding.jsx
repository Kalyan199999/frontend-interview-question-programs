import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import React , {useEffect, useState} from 'react'

import { NextArrow , PrevArrow } from "./Arrows";

const hexa = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

const generateColors = (n)=>
{
  // console.log(n);
  
  let colors = []

  for(let i=0;i<n;i++)
  {
      const len = hexa.length;

        let colorGenerated = "#"

        for(let i=0;i<6;i++)
        {
            const idx = Math.floor( Math.random()*len ) 
            colorGenerated += hexa[ idx ]
        }
    colors.push( colorGenerated )
  }

  return colors
}

function Sliding( { num } ) 
{
  const [arr,setArr] = useState( [] )
  
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  useEffect(  ()=>{
    setArr( generateColors(num) )
  } , 
  [num])
  
  
  return (
    <Slider {...settings} >
      {
        
        arr.map( (color , idx) =>
        {
          return(
            <div key={idx} >

              <div
                style={{backgroundColor:color}}
                className="h-52 text-white text-2xl"
              >
                {color}-{idx+1}
              </div>

            </div>
          )
        })
      }
    </Slider>
);
}

export default Sliding