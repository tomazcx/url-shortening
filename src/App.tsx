import { Content } from "./components/Content"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import './styles/global.css'

export const App = () =>{
    return (
        <div className="flex flex-col justify-between min-h-screen w-full">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}