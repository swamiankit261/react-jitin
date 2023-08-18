import React, { useMemo, useState } from 'react'
import InputField from './InputField'
import { inputJson } from './inputJson'

const FormValidationMore = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState({})

    const handleSubmit = () => {
        if (verify()) {
            console.log("Submit")
        }
    }

    const handleChange = useMemo(() => (e) => {
        user[e.target.name] = e.target.value
        setUser({ ...user })
    }, [])

    const verify = () => {
        let valid = true
        let localError = {}

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

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
        } else if (!emailRegex.test(user.email)) {
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
        <>
            <div className="container-fluid form-validation p-5">
                <div className="row">
                    <div className="offset-md-4 col-md-4">
                        <div className='shadow-lg my-form rounded-3 p-4 m-4'>

                            {inputJson.map(inputData => (
                                <InputField data={inputData} handleChange={handleChange} value={user[inputData.name]} error={error[inputData.name]} />
                            ))}

                            <div>
                                <button onClick={handleSubmit} className='btn btn-light w-100 mt-3 d-block'>Let's go</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormValidationMore