import React from 'react'
import deepu from "../images/download.jfif"
import { useLocation } from 'react-router-dom'
const svg1 = require('../images/History.svg')
const ankit = require("../images/pexels-eury-escudero-9962890.jpg")

function Images() {

    const location = useLocation()
    console.log(location)

    return (
        <>
            {location.state}

            <div style={{ width: "200px", overflow: "auto" }} className='container d-flex'>
                <img src="https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg" height="100px" alt="" />
                {/* Online image */}
                {/* In public folder */}
                <img src="/images/abcd.jfif" alt="" height='100px' />

                {/* In src folder with import */}
                <img src={deepu} height={100} alt="" />
                <img src={deepu} height={100} alt="" />

                {/* In src folder with require */}
                <img src={ankit} height={100} alt="" />
                <img src={require("../images/pexels-eury-escudero-9962890.jpg")} height={100} alt="" />

                <img src={svg1.default} alt="" />

            </div>
        </>
    )
}

export default Images