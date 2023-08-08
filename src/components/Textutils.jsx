import React, { useState } from 'react'

function Textutils() {
    const [ankit, setankit] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')

    const ram = (r) => {
        setankit(r.target.value)
    }

    // console.log("myCOndition", !!{})

    // existance => true
    // 0, '', undefined, null, false => false
    // [], {}, 123, 'abc' => true

    const uppercase = () => {
        let b = ankit.toUpperCase()
        setankit(b)
        setShowAlert(true)
        setAlertMessage('Text converted to UPPERCASE 😃.')

        setTimeout(() => {
            setShowAlert(false)
        }, 1000);
    }

    const lowercase = () => {
        let no = ankit.toLowerCase()
        setankit(no);
        setShowAlert(true);
        setAlertMessage('Text converted to lowercase.');
        setTimeout(() => {
            setShowAlert(false);
        }, 1000);
    }

    const clear = () => {
        setankit("")
        setShowAlert(true)
        setAlertMessage("Text is Clear.")
        setTimeout(() => {
            setShowAlert(false)
        }, 1000);
    }

    const copy = () => {
        navigator.clipboard.writeText(ankit)
        setShowAlert(true);
        setAlertMessage("Text is copyed.");
        setTimeout(() => {
            setShowAlert(false);
        }, 1000);
    }

    // const num = ankit.filter( (value) => {
    //     return value !=''
    // });

    const cut = () => {
        setankit("")
        navigator.clipboard.writeText(ankit)
        setShowAlert(true)
        setAlertMessage("Text is cut.");
        setTimeout(() => {
            setShowAlert(false);
        }, 1000);
    }

    const paste = () => {
        navigator.clipboard.readText().then(res => setankit(ankit + res))
        setShowAlert(true);
        setAlertMessage("Text has been pasted.");
        setTimeout(() => {
            setShowAlert(false);
        }, 1000);
    }

    const duplicate = () => {
        setankit(ankit + ' ' + ankit)
        setShowAlert(true);
        setAlertMessage("Text has been duplicated.");
        setTimeout(() => {
            setShowAlert(false)
        }, 1000);

    }

    return (
        <>
            {showAlert && <p className='alert' >
                <div className='text-center alert alert-primary'>
                    {alertMessage}
                </div>
            </p>}
            <div className='text-center'>

                <textarea className='my-4' name="" id="" value={ankit} cols="70" rows="10" onChange={ram}></textarea>
                <div className='mx-auto m-2'>
                    <button accessKey='u' className='btn btn-success' onClick={uppercase}>uppercase</button>
                    <button accessKey='l' className='btn btn-info mx-2' onClick={lowercase}>lowercase</button>
                    <button className='btn btn-warning' onClick={clear}>clear</button>
                    <button className='btn btn-primary mx-2' onClick={copy}>Copy</button>
                    <button className='btn btn-danger' onClick={cut}>cut</button>
                    <button className='btn btn-secondary mx-2' onClick={duplicate}>duplicate</button>
                    <button className='btn btn-light mx-2' onClick={paste}>paste</button>
                </div>
                <div className=' text-success-emphasis d-inline' >Characters= {ankit.length}</div>
                <div className=' mx-5'>word count= {ankit.split(' ').filter(e => e != '').length}</div>

                <div contentEditable className='w-50 shadow mx-auto p-4 m-4 rounded-5'>{ankit}</div>
            </div>
        </>
    )
}

export default Textutils