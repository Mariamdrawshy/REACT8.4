import React, { useState } from 'react';
import './Homework2.css';

const images = [
    {
        id: "J2PmlIizw",
        url: "https://cdn2.thecatapi.com/images/J2PmlIizw.jpg",
        width: 1080,
        height: 1350
    },
    {
        id: "LSaDk6OjY",
        url: "https://cdn2.thecatapi.com/images/LSaDk6OjY.jpg",
        width: 1080,
        height: 1080
    },
    {
        id: "8pCFG7gCV",
        url: "https://cdn2.thecatapi.com/images/8pCFG7gCV.jpg",
        width: 750,
        height: 937
    },
    {
        id: "IFXsxmXLm",
        url: "https://cdn2.thecatapi.com/images/IFXsxmXLm.jpg",
        width: 973,
        height: 973
    }
];

const Homework2 = () => {
    const [index, setIndex] = useState(0);

    const prevImage = () => {
        setIndex((index - 1 + images.length) % images.length);
    };

    const nextImage = () => {
        setIndex((index + 1) % images.length);
    };

    return (
        <div className="homework2-container">
            <div className="gallery">
                <img src={images[index].url} alt={`Image ${index + 1}`} />
            </div>
            <button onClick={prevImage}>BACK</button>
            <button onClick={nextImage}>NEXT</button>
        </div>
    );
};

export default Homework2;
