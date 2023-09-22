import React from "react"

const InputField = React.memo(({ data, handleChange, value, error }) => {

    let { name, label, placeholder, type } = data

    console.log(name)
    return (
        <div>
            <label className='mt-3' >{label}</label>

            <input
                type={type}
                className='form-control'
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={handleChange}
            />

            {error && <p className='my_err'>{error}</p>}
        </div>
    )
})

export default InputField