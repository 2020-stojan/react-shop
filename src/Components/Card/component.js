import React from "react";
import { Link } from "react-router-dom"

const Card = ({ item }) => {
    return (
        <div className="card">
            <div className="card-image">
                <Link to={'/product/' + item.id}>
                    <figure className="image is-4by3">
                        <img src={item.image} alt="Placeholder image" />
                    </figure>
                </Link>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{item.name}</p>
                    </div>
                </div>

                <div className="content">
                    <h4>Cena: {item.price} rsd.</h4>
                </div>
            </div>
        </div>
    )
}

export default Card;