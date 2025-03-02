import styles from "./sobremim.module.css"
import PostModelo from "@/Components/PostModelo"
import fotoCapa from "@/assets/sobre_mim_capa.png"

import fotoSobreMim from "@/assets/sobre_mim_foto.png"

const SobreMim = () => {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
            <h3 className={styles.subtitulo}>Olá, eu sou o Barbi!</h3>
            <img
                src={fotoSobreMim}
                alt="foto do bs"
                className={styles.fotoSobreMim}
            />
            <p clasName={styles.paragrafo}>
                Olá! Sou o Kauê, um estudante de tecnologia de 20 anos. Desde
                2022,
            </p>
            <br />
            <p clasName={styles.paragrafo}>
                me dedico ao mundo da programação, explorando diferentes
                linguagens e frameworks. No momento, curso Ciência da Computação
                na faculdade, buscando aprofundar meus conhecimentos e
                desenvolver minhas habilidades na área.
            </p>
            <br />
            <p clasName={styles.paragrafo}>
                Desenvolvedor web com experiência em Front-End (HTML, CSS,
                JavaScript, React) e Back-End (Java, Python), e conhecimento em
                bancos de dados MySQL e MongoDB. Tenho interesse em áreas como
                Cybersegurança, DevOps e Pentest.
            </p>
            <br />

            <p clasName={styles.paragrafo}>
                Habilidades e experiências: •Trabalho em equipe: comunicação
                eficaz, resolução de conflitos e liderança situacional. •Git:
                Controle de versão com Git e GitHub •Metodologias ágeis: Scrum,
                Kanban
            </p>
            <br />

            <p clasName={styles.paragrafo}>
                Minhas Badges: https://www.credly.com/users/kaue-barbi <br />
                Entre em contato: kauebarbicode@gmail.com <br />
                github: https://github.com/KaBarbi
            </p>
        </PostModelo>
    )
}

export default SobreMim
