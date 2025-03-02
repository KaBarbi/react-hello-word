import styles from "./banner.module.css"
import circuloColorido from "@/assets/circulo_colorido.png"
import minhaFoto from "@/assets/minha_foto.png"

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá, Mundo!</h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou o Kauê, um
                    estudante de tecnologia de 20 anos. Desde 2022, me dedico ao
                    mundo da programação, explorando diferentes linguagens e
                    frameworks :)
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="foto do bs"
                />
            </div>
        </div>
    )
}
