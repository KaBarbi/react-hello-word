import { BrowserRouter, Routes, Route } from "react-router"
import Inicio from "./pages/inicio"
import SobreMim from "./pages/sobreMim"
import Menu from "./Components/Menu"
import Rodape from "./Components/Rodape"
import PaginaPadrao from "./Components/PaginaPadrao"
import Post from "./pages/Post"
import NotFound from "./pages/NotFound"

function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Menu />

                <Routes>
                    <Route path="/" element={<PaginaPadrao />}>
                        <Route path="/" element={<Inicio />} />
                        <Route path="sobremim" element={<SobreMim />} />
                    </Route>
                    <Route path="post/:id" element={<Post />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

                <Rodape />
            </BrowserRouter>
        </>
    )
}

export default AppRoutes
