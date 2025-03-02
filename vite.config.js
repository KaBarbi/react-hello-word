import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
import path from "path"

export default defineConfig({
    plugins: [react(), svgr()], // Correção aqui: agora svgr() está dentro do mesmo array
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"), // Agora "@" representa "src"
        },
    },
})
