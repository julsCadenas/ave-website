
function Header(){

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <header>
            <center>
                {/* <h1 class="headerName" id="headerName" >Asaiah Igliane</h1> */}
                <a class="headerName" id="headerName" href="#" >Asaiah Igliane</a>
                <ul class="navbar" id="navbar">
                    <li>
                        <a href="#" >Photographs</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => scrollToSection('About')}>About</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => scrollToSection('footer')}>Contact</a>
                    </li>
                </ul>
            </center>
        </header>
    )
}

export default Header;