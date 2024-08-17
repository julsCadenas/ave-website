import { NavLink } from 'react-router-dom';

function Header(){

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <header>
            <center>
                <div className="headerName" id="headerName">
                    <NavLink className="navlink" to="/about">Asaiah Igliane</NavLink>
                </div>
                <ul className="navbar" id="navbar">
                    <li>
                        <NavLink to="/photographs" >Photos</NavLink>
                    </li>
                    <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
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