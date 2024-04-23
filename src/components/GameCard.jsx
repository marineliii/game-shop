/* eslint-disable react/prop-types */

const GameCard = ({ game: { slug, released, background_image, name, parent_platforms } }) => {
    return (
        <div className="game" key={slug}>
            <div>
                <p>{released}</p>
            </div>

            <div>
                <img src={background_image !== "N/A" ? background_image : "https://via.placeholder.com/400"} alt={name} />
            </div>

            <div>
                <span>{parent_platforms}</span>
                <h3>{name}</h3>
            </div>
        </div>
    );
}

export default GameCard;