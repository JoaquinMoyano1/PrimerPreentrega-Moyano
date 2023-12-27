import './NavBar.css';
import CardWidget from '../CardWidget'


const NavBar = () => {
    return (
        <header>
            <h1>Givree</h1>
            <nav>
                <ul>
                    <li>Eventos</li>
                    <li>Productos</li>
                    <li>Quienes Somos</li>
                </ul>
            </nav>
            <CardWidget/>
        </header>
    )
}

export default NavBar