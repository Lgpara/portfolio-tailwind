"use client"

import { useState } from "react"
import Image from "next/image"


export default function ImageCarousel({imagesArray}){
    const [carouselPosition, setCarouselPosition] = useState(0)
    const handleCarouselNavBtnClick = (side) => {
        if(side === "right") {
            if(carouselPosition < imagesArray.lenght - 1) {
                setCarouselPosition(carouselPosition + 1)
            } else {
                setCarouselPosition(0)
            }
        } else if (side === "left") {
            if(carouselPosition === 0) {
                setCarouselPosition(imagesArray.lenght - 1)
            } else {
                setCarouselPosition(carouselPosition - 1)
            }
        }
    }
    return(
        <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center">
                <div className="px-2" onClick={()=>{handleCarouselNavBtnClick("left")}}>left</div>
                <div className="px-2" onClick={()=>{handleCarouselNavBtnClick("right")}}>right</div>
            </div>
            <Image fill={true} src={imagesArray[carouselPosition]} />
        </div>
    )
}