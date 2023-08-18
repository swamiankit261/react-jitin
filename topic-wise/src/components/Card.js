import React from 'react'

function Card(props) {

    console.log(props)

    return (
        <div className="card my-3" style={{ width: "18rem" }}>
            <img src={props.data?.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.data?.title}</h5>
                <p className="card-text">{props.data?.desc}</p>
                <a href={props.data?.tage} target='_blank' className="btn btn-primary">{props.data?.tage}</a>
                <p>Views: {props.data?.view}</p>
            </div>
        </div>
    )
}

export default Card