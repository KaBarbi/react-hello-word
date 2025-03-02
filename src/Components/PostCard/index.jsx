import { Link } from "react-router"
import styles from "./postcard.module.css"
import BotaoPrincipal from "@/Components/BotaoPrincipal"

const PostCard = ({ post }) => {
    return (
        <Link to={`/post/${post.id}`}>
            <div className={styles.post}>
                <img
                    className={styles.capa}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt="Imagem de capa do post"
                />

                <h2 className={styles.titulo}>{post.titulo}</h2>
                <BotaoPrincipal>Ler</BotaoPrincipal>
            </div>
        </Link>
    )
}

export default PostCard
