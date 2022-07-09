// Libs
import axios from "axios"

// Hooks
import { useEffect, useState } from "react"

// Components
import { ShortedLink } from "./ShortedLink"
import { Card } from "./Card"

// Images
import illustrationWorking from '../assets/illustration-working.svg'
import brandRecognition from '../assets/icon-brand-recognition.svg'
import detailedRecords from '../assets/icon-detailed-records.svg'
import fullyCustomized from '../assets/icon-fully-customizable.svg'

interface LinksInterface {
    full: string;
    shorted: string;
}

const getLocalStorage = () =>{
    let linksStorage = localStorage.getItem('links')

    if(linksStorage){
        return linksStorage !== null ? JSON.parse(linksStorage) : {}
    }
    return []
}

export const Content = () => {
    const [inputText, setText] = useState("")
    const [error, setError] = useState(false)
    const [links, setLinks] = useState<LinksInterface[]>(getLocalStorage())

    async function getShortLink(url: string) {
        try {
            if (url === "") {
                throw new Error
            }
            const result = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`)
            const data = await result.data
            const newLink: LinksInterface = {
                full: url,
                shorted: data.result.short_link2
            }

            setError(false)
            setLinks(prevState => [...prevState, newLink])
        } catch (e) {
            setError(true)
        }

    }

    useEffect(() =>{
        localStorage.setItem("links", JSON.stringify(links))
    }, [links])

    return (
        <main className="flex flex-col mx-auto items-center gap-36 ">
            <section className="flex flex-col-reverse items-center justify-between gap-4 lg:pl-32 px-4 lg:flex-row overflow-hidden">
                <div className="flex flex-col items-center lg:items-start gap-4">
                    <h1 className="text-5xl sm:text-6xl font-bold text-violet-800 text-center lg:text-left">More than just shorter links</h1>
                    <p className="text-gray-400 text-center sm:text-left">  Build your brand’s recognition and get detailed insights
                        on how your links are performing.</p>

                    <span className="button rounded-full">Get Started</span>
                </div>
                <img src={illustrationWorking} alt="Illustration working" className="w-screen relative left-12 lg:left-24 object-cover" />
            </section>
            <section className="bg-gray-100 w-full flex-col flex items-center ">
                <div className="flex-col flex items-center w-10/12 relative bottom-16">
                    <div className="bg-shorten-destkop bg-no-repeat mb-6 py-10 px-8 sm:px-20 bg-violet-700 rounded-md w-full flex flex-col ">
                        <div className="flex w-full gap-4 flex-col sm:flex-row">
                            <input type="text" className="flex-1 rounded-md py-2.5 px-6" placeholder="Shorten a link here" onChange={(e) => setText(e.target.value)} />
                            <span className="text-red-400 block sm:hidden">{error ? "Please add a link" : ""}</span>
                            <span className="button rounded-lg" onClick={() => getShortLink(inputText)}>Shorten It!</span>
                        </div>
                        <span className="text-red-400 hidden mt-2 sm:block">{error ? "Please add a link" : ""}</span>

                    </div>
                    {links.map(link => <ShortedLink key={link.shorted} link={link.full} shorted={link.shorted} />)}
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-violet-900 text-4xl mb-8 text-center">Advanced Settings</h1>
                    <p className="text-gray-400 text-center"> Track how your links are performing across the web with our <br />
                        advanced statistics dashboard.</p>
                </div>
                <div className="flex flex-col w-10/12 mb-64">
                    <div className="border-4 border-cyan-400 w-full relative top-56 hidden sm:block" />
                    <div className="flex flex-col lg:flex-row items-center sm:gap-8 w-full">
                        <Card key={0} title="Brand Recognition" text="Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content." icon={brandRecognition} topPos={"0"} />
                        <Card key={1} title="Detailed Records" text="Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions." icon={detailedRecords} topPos={"8"} />
                        <Card key={2} title="Fully Customizable" text="Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement." icon={fullyCustomized} topPos={"16"} />
                    </div>


                </div>

                <div className="w-full bg-boost-destkop bg-violet-700 bg-no-repeat flex flex-col justify-center p-12 items-center gap-8">
                    <h1 className="text-white text-4xl font-bold text-center">Boost your links today</h1>
                    <span className="button rounded-full">Get Started</span>

                </div>
            </section>

        </main>
    )
}
