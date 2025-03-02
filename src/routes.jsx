import { BrowserRouter, Routes, Route } from "react-router"
import Inicio from "./pages/inicio"
import SobreMim from "./pages/sobreMim"
import Menu from "./Components/Menu"
import Rodape from "./Components/Rodape"

function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Menu />

                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="sobremim" element={<SobreMim />} />
                    <Route
                        path="*"
                        element={<div>Pagina não encontrada!</div>}
                    />
                </Routes>
                
                <Rodape />
            </BrowserRouter>
        </>
    )
}

export default AppRoutes
