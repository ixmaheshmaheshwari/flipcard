import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import artistsData from "./data";
import ReactFlipCard from 'reactjs-flip-card'

const CardFlip = () => {
    const [flip, setFlip] = useState(false);

    const frontcard = (artist) => {
        return (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" style = {{width:"15rem", height:"15rem"}}>  
                <div className="card" style = {{width:"15rem", height:"15rem"}}>
                    <div className="card-body" >
                        <h5 className="card-title">{artist.name}</h5>
                        <p className="card-text"><strong>Birth Year: </strong>{artist.birthYear}</p>
                        <p className="card-text"><strong>Country: </strong>{artist.country}</p>
                    </div>
                </div>
            </div>
        );
    };

    const backcard = (artist) => {
        return (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" style = {{width:"15rem", height:"auto"}}>
                <div className="card" style = {{width:"15rem", height:"auto"}}>
                    <div className="card-body" >
                        <h5 className="card-title">{artist.name}</h5>
                        <p className="card-text"><strong>Genres: </strong>{artist.genres.join(", ")}</p>
                        <p className="card-text"><strong>Hit Songs: </strong>{artist.hitSongs.join(", ")}</p>
                        <p className="card-text"><strong>Description: </strong>{artist.description}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            <div className="row row-cols-1 row-cols-md-3 g-4" id="rows">
                {artistsData.map((artist, index) => (
                    <div key={index} onClick={() => setFlip(!flip)}>{frontcard(artist)}</div>
                ))}
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4" id="rows">
                {artistsData.map((artist, index) => (
                    <div key={index} onClick={() => setFlip(!flip)}>{backcard(artist)}</div>
                ))}
            </div>
        </ReactCardFlip>
        // <div className="row row-cols-1 row-cols-md-3 g-4" id="rows">
        //     {artistsData.map((artist, index) => (
        //         <ReactFlipCard
        //             key={index}
        //             isFlipped={flip}
        //             flipDirection="horizontal"
        //             onClick={() => setFlip(!flip)}
        //             frontComponent={ frontcard(artist)}
        //             backComponent={backcard(artist)}
        //         />
        //     ))}
        // </div>
    );
};

export default CardFlip;
