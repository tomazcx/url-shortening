import ig from '../assets/icon-instagram.svg'
import fb from '../assets/icon-facebook.svg'
import tt from '../assets/icon-twitter.svg'
import pint from '../assets/icon-pinterest.svg'
import { NavFooter } from './NavFooter'


export const Footer = () => {

    const features = ["Link Shortening", "Branded Links", "Analytics"]
    const resources = ["Blog", "Developers", "Support"]
    const company = ["About", "Our Team", "Carrers", "Contact"]

    return (
        <footer className="bg-violet-900 w-screen box-border text-white flex flex-col items-center lg:items-start lg:grid lg:grid-cols-5 grid-flow-col lg:px-36 pt-20 pb-36">
            <div className='lg:w-[300px]  mb-12 lg:mb-0'>
                <span className="text-3xl font-bold text-center">Shortly</span>
            </div>
            <div className='h-full'>
                <NavFooter key={0} title='Features'  items={features} />
            </div>
            <div className='h-full'>
                <NavFooter key={1} title='Resources' items={resources} />
            </div>
            <div className='h-full'>
                <NavFooter key={2} title='Company'  items={company} />
            </div>
            <div className='flex mt-12 gap-4 sm:mt-0 justify-center lg:items-start lg:justify-start '>
                <img src={fb} alt="Facebook icon" className='cursor-pointer hover:fill-cyan-400' />
                <img src={tt} alt="Twitter icon" className='cursor-pointer' />
                <img src={pint} alt="Pinterest icon" className='cursor-pointer' />
                <img src={ig} alt="Instagram icon" className='cursor-pointer' />
            </div>
        </footer>
    )
}