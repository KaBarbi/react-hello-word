import { Link } from "react-router"
import styles from "./menu.module.css"

const Menu = () => {
    return (
        <header>
            <nav className={styles.navegacao}>
                <Link clLinkssNLinkme={styles.link} to="/">
                    Inicio
                </Link>
                <Link className={styles.link} to="/sobremim">
                    Sobre Mim
                </Link>
            </nav>
        </header>
    )
}

export default Menu
