import styles from "./rodape.module.css"
import MarcaRegistrada from "@/assets/marca_registrada.svg?react" 

const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />
            Desenvolvido por Alura.
        </footer>
    )
}

export default Rodape
