import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {

    const text = ( <p>For any inquiries, bookings, collaborations, or any other realated questions email me at <strong class="email">iglianeasaiah@gmail.com
        </strong>. I will reply as soon as convenient.</p>);

    return (
        <center id="footer">
            <footer>
                <hr class="breakline" />
                <div class="getintouch">Get in Touch</div>
                <div class="contactext">
                    <p>{text}</p>
                </div>
                <a href='https://www.instagram.com/aai.psd/' target='_blank'>
                    <i class='bi bi-instagram' />
                </a>
                <div class="whitespace">Portfolio Website</div>
            </footer>
        </center>
    )
}

export default Footer;