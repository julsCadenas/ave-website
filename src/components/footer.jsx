import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
    const originalText = "iglianeasaiah@gmail.com";

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(originalText).then(() => {
        }).catch((error) => {
            console.error('Failed to copy email: ', error);
        });
    };

    const handleNameClick = () => {
        copyEmailToClipboard();
    };

    const text = ( <p>For any inquiries, bookings, collaborations, or any other realated questions email me at <strong class="email" title='click to copy' onClick={() => handleNameClick()}>{originalText}
        </strong>. I will reply as soon as convenient.</p>);

    return (
        <center id="footer">
            <footer>
                <hr className="breakline" />
                <div className="getintouch">Get in Touch</div>
                <div className="contactext">
                    <p>{text}</p>
                </div>
                <a href='https://www.instagram.com/aai.psd/' target='_blank' rel="noreferrer" >
                    <i className='bi bi-instagram' />
                </a>
                <div className="whitespace">Portfolio Website</div>
            </footer>
        </center>
    )
}

export default Footer;