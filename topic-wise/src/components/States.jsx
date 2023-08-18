import React, { useState } from 'react'

function States() {

    // State is a container to storing data for a component. 
    // State shows difference on page but variable not.
    const [first, setFirst] = useState(2)

    let a = 23

    function handleClick() {

        a = 1000
        // first = 45
        setFirst(1000)

    }

    return (
        <div>
            a: {a}
            <br />
            first: {first}
            <br />
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default States