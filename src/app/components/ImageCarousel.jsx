"use client"

import { useState } from "react"
import Image from "next/image"
import chevronLeftIcon from "../images/icons/chevronLeft.svg"
import chevronRightIcon from "../images/icons/chevronRight.svg"


export default function ImageCarousel({imagesArray}){
    const [carouselPosition, setCarouselPosition] = useState(0)
    const handleCarouselNavBtnClick = (side) => {
        if(side === "right") {
            if(carouselPosition < imagesArray.length - 1) {
                setCarouselPosition(carouselPosition + 1)
            } else {
                setCarouselPosition(0)
            }
        } else if (side === "left") {
            if(carouselPosition === 0) {
                setCarouselPosition(imagesArray.length - 1)
            } else {
                setCarouselPosition(carouselPosition - 1)
            }
        }
    }
    return(
        <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center">
                {/* <div className="px-2" onClick={()=>{handleCarouselNavBtnClick("left")}}>left</div>
                <div className="px-2" onClick={()=>{handleCarouselNavBtnClick("right")}}>right</div> */}
                <Image height={80} width={80} className="px-2 cursor-pointer" onClick={()=>{handleCarouselNavBtnClick("left")}} src={chevronLeftIcon} />
                <Image height={80} width={80} className="px-2 cursor-pointer" onClick={()=>{handleCarouselNavBtnClick("right")}} src={chevronRightIcon} />
                <div className="absolute left-3 text-3xl z-40 text-white">{carouselPosition}</div>
            </div>
            <Image src={imagesArray[carouselPosition]} height={940} width={1900} />
            <div className="absolute left-3 text-3xl z-40 text-white">{carouselPosition}</div>
        </div>
    )
}