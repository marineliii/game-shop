/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const GameCard = ({ game: { id, released, background_image, name, parent_platforms, rating } }) => {
    return (
        <div className="game" key={id}>
            <div>
                <p>Released: {released}</p>
                <p>Rating: {rating}</p>
                <p>Max Rating: 5</p>
            </div>

            <div>
                <img src={background_image !== "N/A" ? background_image : "https://via.placeholder.com/400"} alt={name} />
            </div>

            <div>
                <span>
                    {parent_platforms && parent_platforms.map(platform => platform.platform.name).join(', ')}
                </span>
                <h3>{name}</h3>
            </div>
        </div>
    );
}

export default GameCard;

