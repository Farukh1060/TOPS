import React, { useState } from "react"
import sale from "../../assets/sale.png"
import shopping from "../../assets/shopping.png"
import women from "../../assets/women.png"
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io"



const Slider = ()=>{
    let i =0;
    let  slider_imgs = [sale,shopping,women]
   let [img ,setimg] =  useState( )
    
    
    const onrightclick = (i)=>{
        console.log(i)
        setimg(slider_imgs[i])
        console.log(img)
    }
    const onleftclick = ()=>{
        i--
        slider_imgs[i]
        console.log(i)
    }
    // console.log(i)

    console.log(img)

  

    return(
        <>
            <div className="slider_container bg-primary/50 h-100vh">
                <div className="slider relative">
                    <div className="slider_img flex justify-center">
                        <img src={img} alt="" />
                    </div>
                    <div className=" top-1/2 -translate-y-1/2 absolute btn flex flex-row-reverse text-4xl justify-between w-full px-2">
                        <div className="right">
                            <IoIosArrowDropright onClick={onrightclick}/>
                        </div>
                        <div className="left">
                            <IoIosArrowDropleft onClick={onleftclick}/>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Slider