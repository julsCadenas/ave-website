import { NavLink } from 'react-router-dom';

function Header(){

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <header>
            <center>
                <a class="headerName" id="headerName">
                    <NavLink class="navlink" to="/about">Asaiah Igliane</NavLink>
                </a>
                <ul class="navbar" id="navbar">
                    <li>
                        <NavLink to="/photographs" >Photoshoots</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/about" activeClassName="active">About</NavLink>
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