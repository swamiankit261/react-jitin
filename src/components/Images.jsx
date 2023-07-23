import React from 'react'
import deepu from "../images/download.jfif"
const svg1 = require('../images/History.svg')
const ankit = require("../images/pexels-eury-escudero-9962890.jpg")

function Images() {

    return (
        <div style={{width:"200px", overflow:"auto"}} className='container d-flex'>
            {/* Online image */}
            <img src="https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg" height="100px" alt="" />

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
    )
}

export default Images