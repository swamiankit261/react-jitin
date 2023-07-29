import React, { useState } from 'react'

const Inputs = () => {

    const [deepu, setDeepu] = useState('jitin')
    const [color, setColor] = useState('')
    const [color2, setColor2] = useState('')

    const ankit = (e) => {
        setDeepu(e.target.value)
    }

    const handleColor = (e) => {
        setColor(e.target.value)
    }

    const handleColor2 = (e) => {
        setColor2(e.target.value)
    }

    const handleUpperCase = () => {
        let a = deepu.toUpperCase()
        setDeepu(a)
    }

    return (
        <div className='vh-100' style={{ background: color }}>
            Name
            <div className="container text-center d-flex align-items-center justify-content-center">
                <input className='jitin' value={deepu} style={{ background: color2 }} type="text" onChange={ankit} />
                <input type="color" defaultValue='#FFFFFF' className='border-0 p-0 color' onChange={handleColor2} />
            </div>


            <button onClick={handleUpperCase}>UPPERCASE</button>


            <div className="container w-25">
                <button className='btn btn-primary w-100'> {deepu}</button>
            </div>


            <input type="color" defaultValue='#FFFFFF' className='border-0 p-0 color' onChange={handleColor} />
        </div >
    )
}

export default Inputs