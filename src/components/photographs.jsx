import React, { useState, useEffect, useRef } from 'react';
import '../styles/photographs.css'

import cosmania1 from '../images/Cosmania/photo1.jpg'
import cosmania2 from '../images/Cosmania/photo2.jpg'
import cosmania3 from '../images/Cosmania/photo3.jpg'
import cosmania4 from '../images/Cosmania/photo4.jpg'
import cosmania5 from '../images/Cosmania/photo5.jpg'
import cosmania6 from '../images/Cosmania/photo6.jpg'
import cosmania7 from '../images/Cosmania/photo7.jpg'
import cosmania8 from '../images/Cosmania/photo8.jpg'
import cosmania9 from '../images/Cosmania/photo9.jpg'
import cosmania10 from '../images/Cosmania/photo10.jpg'
import cosmania11 from '../images/Cosmania/photo11.jpg'
import cosmania12 from '../images/Cosmania/photo12.jpg'
import cosmania13 from '../images/Cosmania/photo13.jpg'
import cosmania14 from '../images/Cosmania/photo14.jpg'
import cosmania15 from '../images/Cosmania/photo15.jpg'
import cosmania16 from '../images/Cosmania/photo16.jpg'
import cosmania17 from '../images/Cosmania/photo17.jpg'
import cosmania18 from '../images/Cosmania/photo18.jpg'
import cosmania19 from '../images/Cosmania/photo19.jpg'
import cosmania20 from '../images/Cosmania/photo20.jpg'
import cosmania21 from '../images/Cosmania/photo21.jpg'
import cosmania22 from '../images/Cosmania/photo22.jpg'
import cosmania23 from '../images/Cosmania/photo23.jpg'
import cosmania24 from '../images/Cosmania/photo24.jpg'
import cosmania25 from '../images/Cosmania/photo25.jpg'
import cosmania26 from '../images/Cosmania/photo26.jpg'
import cosmania27 from '../images/Cosmania/photo27.jpg'

import noir1 from '../images/NoirFreitag/photo1.JPG';
import noir2 from '../images/NoirFreitag/photo2.JPG';
import noir3 from '../images/NoirFreitag/photo3.JPG';
import noir4 from '../images/NoirFreitag/photo4.JPG';
import noir5 from '../images/NoirFreitag/photo5.JPG';
import noir6 from '../images/NoirFreitag/photo6.JPG';
import noir7 from '../images/NoirFreitag/photo7.JPG';
import noir8 from '../images/NoirFreitag/photo8.JPG';
import noir9 from '../images/NoirFreitag/photo9.JPG';
import noir10 from '../images/NoirFreitag/photo10.JPG';
import noir11 from '../images/NoirFreitag/photo11.JPG';
import noir12 from '../images/NoirFreitag/photo12.JPG';
import noir13 from '../images/NoirFreitag/photo13.JPG';
import noir14 from '../images/NoirFreitag/photo14.JPG';
import noir15 from '../images/NoirFreitag/photo15.JPG';
import noir16 from '../images/NoirFreitag/photo16.JPG';
import noir17 from '../images/NoirFreitag/photo17.JPG';
import noir18 from '../images/NoirFreitag/photo18.JPG';
import noir19 from '../images/NoirFreitag/photo19.JPG';
import noir20 from '../images/NoirFreitag/photo20.JPG';
import noir21 from '../images/NoirFreitag/photo21.JPG';
import noir22 from '../images/NoirFreitag/photo22.JPG';
import noir23 from '../images/NoirFreitag/photo23.JPG';
import noir24 from '../images/NoirFreitag/photo24.JPG';
import noir25 from '../images/NoirFreitag/photo25.JPG';
import noir26 from '../images/NoirFreitag/photo26.JPG';
import noir27 from '../images/NoirFreitag/photo27.JPG';
import noir28 from '../images/NoirFreitag/photo28.JPG';
import noir29 from '../images/NoirFreitag/photo29.JPG';
import noir30 from '../images/NoirFreitag/photo30.JPG';
import noir31 from '../images/NoirFreitag/photo31.JPG';
import noir32 from '../images/NoirFreitag/photo32.JPG';
import noir33 from '../images/NoirFreitag/photo33.JPG';
import noir34 from '../images/NoirFreitag/photo34.JPG';
import noir35 from '../images/NoirFreitag/photo35.JPG';
import noir36 from '../images/NoirFreitag/photo36.JPG';
import noir37 from '../images/NoirFreitag/photo37.JPG';

import cosmatsu1 from '../images/CosMatsuD2/photo1.jpg';
import cosmatsu2 from '../images/CosMatsuD2/photo2.jpg';
import cosmatsu3 from '../images/CosMatsuD2/photo3.jpg';
import cosmatsu4 from '../images/CosMatsuD2/photo4.jpg';
import cosmatsu5 from '../images/CosMatsuD2/photo5.jpg';
import cosmatsu6 from '../images/CosMatsuD2/photo6.jpg';
import cosmatsu7 from '../images/CosMatsuD2/photo7.jpg';
import cosmatsu8 from '../images/CosMatsuD2/photo8.jpg';
import cosmatsu9 from '../images/CosMatsuD2/photo9.jpg';
import cosmatsu10 from '../images/CosMatsuD2/photo10.jpg';
import cosmatsu11 from '../images/CosMatsuD2/photo11.jpg';
import cosmatsu12 from '../images/CosMatsuD2/photo12.jpg';
import cosmatsu13 from '../images/CosMatsuD2/photo13.jpg';
import cosmatsu14 from '../images/CosMatsuD2/photo14.jpg';
import cosmatsu15 from '../images/CosMatsuD2/photo15.jpg';
import cosmatsu16 from '../images/CosMatsuD2/photo16.jpg';
import cosmatsu17 from '../images/CosMatsuD2/photo17.jpg';

import ozine1 from '../images/OzineFest/photo1.jpg';
import ozine2 from '../images/OzineFest/photo2.jpg';
import ozine3 from '../images/OzineFest/photo3.jpg';
import ozine4 from '../images/OzineFest/photo4.jpg';
import ozine5 from '../images/OzineFest/photo5.jpg';
import ozine6 from '../images/OzineFest/photo6.jpg';
import ozine7 from '../images/OzineFest/photo7.jpg';
import ozine8 from '../images/OzineFest/photo8.jpg';
import ozine9 from '../images/OzineFest/photo9.jpg';
import ozine10 from '../images/OzineFest/photo10.jpg';
import ozine11 from '../images/OzineFest/photo11.jpg';
import ozine12 from '../images/OzineFest/photo12.jpg';
import ozine13 from '../images/OzineFest/photo13.jpg';
import ozine14 from '../images/OzineFest/photo14.jpg';
import ozine15 from '../images/OzineFest/photo15.jpg';
import ozine16 from '../images/OzineFest/photo16.jpg';
import ozine17 from '../images/OzineFest/photo17.jpg';
import ozine18 from '../images/OzineFest/photo18.jpg';
import ozine19 from '../images/OzineFest/photo19.jpg';
import ozine20 from '../images/OzineFest/photo20.jpg';
import ozine21 from '../images/OzineFest/photo21.jpg';
import ozine22 from '../images/OzineFest/photo22.jpg';
import ozine23 from '../images/OzineFest/photo23.jpg';
import ozine24 from '../images/OzineFest/photo24.jpg';
import ozine25 from '../images/OzineFest/photo25.jpg';
import ozine26 from '../images/OzineFest/photo26.jpg';
import ozine27 from '../images/OzineFest/photo27.jpg';
import ozine28 from '../images/OzineFest/photo28.jpg';
import ozine29 from '../images/OzineFest/photo29.jpg';
import ozine30 from '../images/OzineFest/photo30.jpg';
import ozine31 from '../images/OzineFest/photo31.jpg';
import ozine32 from '../images/OzineFest/photo32.jpg';
import ozine33 from '../images/OzineFest/photo33.jpg';
import ozine34 from '../images/OzineFest/photo34.jpg';
import ozine35 from '../images/OzineFest/photo35.jpg';
import ozine36 from '../images/OzineFest/photo36.jpg';
import ozine37 from '../images/OzineFest/photo37.jpg';
import ozine38 from '../images/OzineFest/photo38.jpg';
import ozine39 from '../images/OzineFest/photo39.jpg';
import ozine40 from '../images/OzineFest/photo40.jpg';
import ozine41 from '../images/OzineFest/photo41.jpg';
import ozine42 from '../images/OzineFest/photo42.jpg';
import ozine43 from '../images/OzineFest/photo43.jpg';
import ozine44 from '../images/OzineFest/photo44.jpg';
import ozine45 from '../images/OzineFest/photo45.jpg';
import ozine46 from '../images/OzineFest/photo46.jpg';
import ozine47 from '../images/OzineFest/photo47.jpg';
import ozine48 from '../images/OzineFest/photo48.jpg';
import ozine49 from '../images/OzineFest/photo49.jpg';
import ozine50 from '../images/OzineFest/photo50.jpg';
import ozine51 from '../images/OzineFest/photo51.jpg';
import ozine52 from '../images/OzineFest/photo52.jpg';
import ozine53 from '../images/OzineFest/photo53.jpg';
import ozine54 from '../images/OzineFest/photo54.jpg';

const Photographs = () => {
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [visibleImages, setVisibleImages] = useState([]);
    
    const imagesRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const imgIndex = parseInt(entry.target.getAttribute('data-index'));
                        const updatedImages = [...visibleImages, imgIndex];
                        setVisibleImages(updatedImages);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { root: null, rootMargin: '0px', threshold: 0.1 }
        );

        imagesRef.current.forEach((img) => observer.observe(img));

        return () => {
            observer.disconnect();
        };
    }, [visibleImages]);

    const handleAlbumClick = (album) => {
        setSelectedAlbum(album);
    };

    const renderCosmaniaImages = () => {
        const cosmaniaImages = [
            cosmania1, cosmania2, cosmania3, cosmania4, cosmania5,
            cosmania6, cosmania7, cosmania8, cosmania9, cosmania10,
            cosmania11, cosmania12, cosmania13, cosmania14, cosmania15,
            cosmania16, cosmania17, cosmania18, cosmania19, cosmania20,
            cosmania21, cosmania22, cosmania23, cosmania24, cosmania25,
            cosmania26, cosmania27
        ];

        return cosmaniaImages.map((image, index) => (
            <img
                ref={(el) => (imagesRef.current[index] = el)}
                key={index}
                src={image}
                alt={`Cosmania ${index}`}
                className={`image ${visibleImages.includes(index) ? 'visible' : 'hidden'}`}
                data-index={index}
            />
        ));
    };

    const renderNoirImages = () => {
        const noirImages = [
            noir1, noir2, noir3, noir4, noir5,
            noir6, noir7, noir8, noir9, noir10,
            noir11, noir12, noir13, noir14, noir15,
            noir16, noir17, noir18, noir19, noir20,
            noir21, noir22, noir23, noir24, noir25,
            noir26, noir27, noir28, noir29, noir30,
            noir31, noir32, noir33, noir34, noir35,
            noir36, noir37
        ];
    
        return noirImages.map((image, index) => (
            <img
                ref={(el) => (imagesRef.current[index] = el)}
                key={index}
                src={image}
                alt={`Noir ${index + 1}`}
                className={`image ${visibleImages.includes(index) ? 'visible' : 'hidden'}`}
                data-index={index}
            />
        ));
    };

    const renderCosMatsuImages = () => {
        const cosmatsuImages = [
            cosmatsu1, cosmatsu2, cosmatsu3, cosmatsu4, cosmatsu5,
            cosmatsu6, cosmatsu7, cosmatsu8, cosmatsu9, cosmatsu10,
            cosmatsu11, cosmatsu12, cosmatsu13, cosmatsu14, cosmatsu15,
            cosmatsu16, cosmatsu17
        ];

        return cosmatsuImages.map((image, index) => (
            <img
                ref={(el) => (imagesRef.current[index] = el)}
                key={index}
                src={image}
                alt={`CosMatsu ${index + 1}`}
                className={`image ${visibleImages.includes(index) ? 'visible' : 'hidden'}`}
                data-index={index}
            />
        ));
    };

    const renderOzineImages = () => {
        const ozineImages = [
            ozine1, ozine2, ozine3, ozine4, ozine5,
            ozine6, ozine7, ozine8, ozine9, ozine10,
            ozine11, ozine12, ozine13, ozine14, ozine15,
            ozine16, ozine17, ozine18, ozine19, ozine20,
            ozine21, ozine22, ozine23, ozine24, ozine25,
            ozine26, ozine27, ozine28, ozine29, ozine30,
            ozine31, ozine32, ozine33, ozine34, ozine35,
            ozine36, ozine37, ozine38, ozine39, ozine40,
            ozine41, ozine42, ozine43, ozine44, ozine45,
            ozine46, ozine47, ozine48, ozine49, ozine50,
            ozine51, ozine52, ozine53, ozine54
        ];

        return ozineImages.map((image, index) => (
            <img
                ref={(el) => (imagesRef.current[index] = el)}
                key={index}
                src={image}
                alt={`Ozine ${index + 1}`}
                className={`image ${visibleImages.includes(index) ? 'visible' : 'hidden'}`}
                data-index={index}
            />
        ));        
    };

    return (
        <center>
            <div className="photoContainer">
                <div className="photoTitle">
                    <p>PHOTOSHOOTS</p>
                </div>
                <ul className="albumSelector">
                    <li>
                        <a onClick={() => handleAlbumClick('CosMania')}>CosMania</a>
                    </li>
                    <li>
                        <a onClick={() => handleAlbumClick('CosMatsuriD2')}>CosMatsuD2</a>
                    </li>
                    <li>
                        <a onClick={() => handleAlbumClick('NoirFreitag')}>NoirFreitag</a>
                    </li>
                    <li>
                        <a onClick={() => handleAlbumClick('OzineFest')}>OzineFest</a>
                    </li>
                </ul>
                <hr class="breakline"/>
                <div className="album">
                    {selectedAlbum === 'CosMania' && (
                        <div className="grid">{renderCosmaniaImages()}</div>
                    )}
                    {selectedAlbum === 'NoirFreitag' && (
                        <div className="grid">{renderNoirImages()}</div>
                    )}
                    {selectedAlbum === 'CosMatsuriD2' && (
                        <div className="grid">{renderCosMatsuImages()}</div>
                    )}
                    {selectedAlbum === 'OzineFest' && (
                        <div className="grid">{renderOzineImages()}</div>
                    )}
                    {/* Render other albums conditionally */}
                </div>
            </div>
        </center>
    );
};

export default Photographs;
