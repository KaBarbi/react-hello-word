import { Route, Routes, useParams } from "react-router"
import posts from "@/json/posts.json"
import PostModelo from "@/Components/PostModelo"
import ReactMarkdown from "react-markdown"
import NotFound from "@/pages/NotFound"
import "./post.css"
import PaginaPadrao from "../../Components/PaginaPadrao"

const Post = () => {
    const parametros = useParams()

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if (!post) {
        return <NotFound />
    }

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route
                    index
                    element={
                        <PostModelo
                            fotoCapa={`/assets/posts/${post.id}/capa.png`}
                            titulo={post.titulo}
                        >
                            <div className="post-markdown-container">
                                <ReactMarkdown>{post.texto}</ReactMarkdown>
                            </div>
                        </PostModelo>
                    }
                />
            </Route>
        </Routes>
    )
}

export default Post
