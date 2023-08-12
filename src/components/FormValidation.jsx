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

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gs

        if (!username) {
            valid = false
            localError.username = '*username is required!'
        } else if (username.length < 3) {
            valid = false
            localError.username = '*username is to short!'
        }

        if (!email) {
            valid = false
            localError.email = '*Email is required!'
        } else if (emailRegex.test(email)) {
            valid = false
            localError.email = '*invalid email!'
        }
        if (!phone) {
            valid = false
            localError.phone = '*Phone No. is required!'
        } else if (phone.length < 10) {
            valid = false
            localError.phone = '*Phone No. is to short!'
        } else if (phone.length > 10) {
            valid = false
            localError.phone = '*Phone No. is to long!'
        }

        if (!password) {
            valid = false
            localError.password = '*Password is required!'
        } else if (password.length < 3) {
            valid = false
            localError.password = '*Password is to short!'
        }

        if (!confirmPassword) {
            valid = false
            localError.confirmPassword = '*ConfirmPassword is required!'
        } else if (confirmPassword.length < 3) {
            valid = false
            localError.confirmPassword = '*ConfirmPassword is to short!'
        } else if (password !== confirmPassword) {
            valid = false
            localError.confirmPassword = '*ConfirmPassword not mach!'
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
                                {error.phone && <p className='my_err'>{error.phone}</p>}

                            </div>
                            <div>
                                <label className='mt-3' htmlFor="">Password</label>
                                <input type="password" className='form-control' placeholder='Password de de' value={password} onChange={e => setPassword(e.target.value)} />
                                {error.password && <p className='my_err'>{error.password}</p>}
                            </div>
                            <div>
                                <label className='mt-3' htmlFor="">Confirm password</label>
                                <input type="password" className='form-control' placeholder='Ek jesa dena' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                                {error.confirmPassword && <p className='my_err'>{error.confirmPassword}</p>}
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