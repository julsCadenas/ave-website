import { NavLink } from 'react-router-dom';

function Header(){

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <header>
            <center>
                <p className="headerName" id="headerName">
                    <NavLink className="navlink" to="/about">Asaiah Igliane</NavLink>
                </p>
                <ul className="navbar" id="navbar">
                    <li>
                        <NavLink to="/photographs" >Photos</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/about" activeClassName="active">About</NavLink>
                    </li>
                    <li>
                        <a href='#contact' onClick={() => scrollToSection('footer')}>Contact</a>
                    </li>
                </ul>
            </center>
        </header>
    )
}

export default Header;