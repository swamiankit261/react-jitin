import React, { useState } from 'react'

const FormValidation = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState({})

    const handleChange = (e) => {
        user[e.target.name] = e.target.value
        setUser({ ...user })
    }

    const handleSubmit = () => {
        if (verify()) {
            console.log("Submit")
        }
    }

    const verify = () => {
        let valid = true
        let localError = {}

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gs

        if (!user.username) {
            valid = false
            localError.username = '*username is required!'
        } else if (user.username.length < 3) {
            valid = false
            localError.username = '*username is to short!'
        }

        if (!user.email) {
            valid = false
            localError.email = '*Email is required!'
        } else if (emailRegex.test(user.email)) {
            valid = false
            localError.email = '*invalid email!'
        }
        if (!user.phone) {
            valid = false
            localError.phone = '*Phone No. is required!'
        } else if (user.phone.length < 10) {
            valid = false
            localError.phone = '*Phone No. is to short!'
        } else if (user.phone.length > 10) {
            valid = false
            localError.phone = '*Phone No. is to long!'
        }

        if (!user.password) {
            valid = false
            localError.password = '*Password is required!'
        } else if (user.password.length < 3) {
            valid = false
            localError.password = '*Password is to short!'
        }

        if (!user.confirmPassword) {
            valid = false
            localError.confirmPassword = '*ConfirmPassword is required!'
        } else if (user.confirmPassword.length < 3) {
            valid = false
            localError.confirmPassword = '*ConfirmPassword is to short!'
        } else if (user.password !== user.confirmPassword) {
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
                                <input type="text" className='form-control' placeholder='Naam likho' name='username' value={user.username} onChange={handleChange} />
                                {error.username && <p className='my_err'>{error.username}</p>}

                            </div>
                            <div>
                                <label className='mt-3' htmlFor="">Email</label>
                                <input type="email" className='form-control' placeholder='Email likh de' name='email' value={user.email} onChange={handleChange} />
                                {error.email && <p className='my_err'>{error.email}</p>}

                            </div>
                            <div>
                                <label className='mt-3' htmlFor="">Phone No.</label>
                                <input type="tel" className='form-control' placeholder='Number daal' name='phone' value={user.phone} onChange={handleChange} />
                                {error.phone && <p className='my_err'>{error.phone}</p>}

                            </div>
                            <div>
                                <label className='mt-3' htmlFor="">Password</label>
                                <input type="password" className='form-control' placeholder='Password de de' name='password' value={user.password} onChange={handleChange} />
                                {error.password && <p className='my_err'>{error.password}</p>}
                            </div>
                            <div>
                                <label className='mt-3' htmlFor="">Confirm password</label>
                                <input type="password" className='form-control' placeholder='Ek jesa dena' name='confirmPassword' value={user.confirmPassword} onChange={handleChange} />
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