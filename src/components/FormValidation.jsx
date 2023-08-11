import React, { useState } from 'react'

const FormValidation = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [error, setError] = useState({})

    const handleSubmit = () => {
        if (verify()) {
            console.log("Submit")
        }
    }

    const verify = () => {
        let valid = true
        let localError = {}

        if (!username) {
            valid = false
            localError.username = 'username is required'
        } else if (username.length < 3) {
            valid = false
            localError.username = 'username must have 3 char'
        }

        if (!email) {
            valid = false
            localError.email = 'email is required'
        } else if (email.length < 8) {
            valid = false
            localError.email = 'email must have 8 chars'
        }

        setError(localError)
        return valid
    }


    return (
        <div>
            <div className="container-fluid form-validation p-5">
                <div className="row">
                    <div className="offset-md-4 col-md-4">
                        <div className='shadow-lg my-form rounded-3 p-4 m-4'>
                            <div>
                                <label className='mt-3' htmlFor="">Username</label>
                                <input type="text" className='form-control' placeholder='Naam likho' value={username} onChange={e => setUsername(e.target.value)} />
                                {error.username && <p className='my_err'>{error.username}</p>}
                            </div>
                            <div>
                                <label className='mt-3' htmlFor="">Email</label>
                                <input type="email" className='form-control' placeholder='Email likh de' value={email} onChange={e => setEmail(e.target.value)} />
                                {error.email && <p className='my_err'>{error.email}</p>}
                            </div>
                            <div>
                                <label className='mt-3' htmlFor="">Phone No.</label>
                                <input type="tel" className='form-control' placeholder='Number daal' value={phone} onChange={e => setPhone(e.target.value)} />
                            </div>
                            <div>
                                <label className='mt-3' htmlFor="">Password</label>
                                <input type="password" className='form-control' placeholder='Password de de' value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div>
                                <label className='mt-3' htmlFor="">Confirm password</label>
                                <input type="password" className='form-control' placeholder='Ek jesa dena' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                            </div>
                            <div>
                                <button onClick={handleSubmit} className='btn btn-light w-100 mt-3 d-block'>Let's go</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FormValidation