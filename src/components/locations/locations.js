import React, {useEffect, useState} from 'react';
import { Component } from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

import './locations.css'


import tasteaLogo from './../../../assets/pics/locations/tasteaLogo.jpg';
import dingteaLogo from './../../../assets/pics/locations/dingteaLogo.png';
import bobafiendLogo from './../../../assets/pics/locations/bobafiendLogo.png';
import roastingwaterLogo from './../../../assets/pics/locations/roastingwaterLogo.jpg';
import tigersugarLogo from './../../../assets/pics/locations/tigersugarLogo.png';


const SliderData = [
    {
        image: tasteaLogo
    },
    {
        image: dingteaLogo
    },
    {
        image: bobafiendLogo
    },
    {
        image: roastingwaterLogo
    },
    {
        image: tigersugarLogo
    }
]



const locations = () => {

    const [current, setCurrent] = useState(0)
    const length = SliderData.length;


    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(SliderData) || SliderData.length <= 0){
        return null;
    }


    // automatically traverse slide show, NOT PROPERLY WORKING EPILEPSEY WARNING
    // useEffect(() => {
    //     setInterval(() => {
    //         nextSlide();
    // },4000)
    // },[current])
    
        return(
            <div id='vendorsComponent'>
                <div>
                    <h1 id='partners'>Partners</h1>
                </div>

                <div id='vendorsRow'>
                    <div id='vendorPictures'>

                    <section className ='slider'>
                    <FaArrowAltCircleLeft className='leftArrow' onClick={nextSlide}/>
                    <FaArrowAltCircleRight className='rightArrow' onClick={prevSlide}/>
                        {SliderData.map((slide,index) => {

                            return(
                                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (<img src={slide.image} alt='Missing image' className='img'/>)}
                                    
                                </div>
                                
                                    )            
                            })}
                    </section>

                    </div>
                    <div id='vendorsList'>
                            <h1>The Boba Pass offers top tier boba </h1>
                            <h2>Only the best of the best, we've hand selected a handful of shops to provide our customers with the best boba there is to offer! </h2>
                            <h3>Missing your favorite boba shop? <a href='/'>Submit a suggestion!</a></h3>
                    </div>

                </div>
                
            </div>
        )
    
}


 
export default locations;