import selfportrait from '../images/selfportrait.jpg';

const About = () => {
    
    const text = (
        <p>
            <strong>ASAIAH IGLIANE</strong>, a photographer based in Manila who started photography at the young age of 12 and developed and honed his skills through the years. Primarily focuses on Cosplay photography, and portraiture. Asaiah has his style based on what he feels like would look good taking inspiration from portrait photographers and anime scenes. He strives to make it so that the subjects he takes photos of would be awe-inspiring. Asaiah Igliane a photographer based in Manila who started photography at the young age of 12 and developed and honed his skills through the years. Primarily focuses on Cosplay photography, and portraiture. Asaiah has his style based on what he feels like would look good taking inspiration from portrait photographers and anime scenes. He strives to make it so that the subjects he takes photos of would be awe-inspiring. He primarily uses a Nikon D5300 equipped with a 35mm 1.4 lens although sometimes opts for an 85mm lens as well.
        </p>
    );
    
    const text2 = (
        <p>
            Asaiah has covered events for his high school and has joined photography organizations, eventually becoming vice president of creatives and design, and later president of a photography organization. He has conducted multiple photoshoots, ranging from photowalks to studio sessions.
        </p>
    );

    return (
        <center id="About">
            <div className="aboutContainer">
                <div className="aboutTitle">ABOUT</div>
                <div className="mainProfile">
                    <div className="profile">
                        {text}
                        {text2}
                    </div>
                    <div className="selfPortrait">
                        <img src={selfportrait} alt="Self Portrait" />
                    </div>
                </div>
            </div>
        </center>
    );
}

export default About;
