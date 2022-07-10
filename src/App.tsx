import { Content } from "./components/Content"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import './styles/global.css'

export const App = () =>{
    return (
        <div className="flex flex-col w-screen">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}