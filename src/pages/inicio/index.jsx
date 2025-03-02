import styles from "./inicio.module.css"
import posts from "@/json/posts.json"
import PostCard from "../../Components/PostCard"

const Inicio = () => {
    return (
        <main>
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Inicio
