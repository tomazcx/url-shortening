import { List, ListDashes } from 'phosphor-react'
import { useState } from 'react'

export const Header = () => {

    const [modal, setModal] = useState(false)

    return (
        <header className='flex flex-col items-center'>
            <div className="flex px-8 md:px-32 py-8 justify-between w-full items-center">
                <div className="flex items-center gap-8">
                    <h1 className="text-3xl font-bold">Shortly</h1>
                    <nav className="md:items-center md:gap-6 hidden md:flex">
                        <span className="nav-menu ">Features</span>
                        <span className="nav-menu">Pricing</span>
                        <span className="nav-menu">Resources</span>
                    </nav>
                </div>

                <List color="#404040" className='cursor-pointer block md:hidden' size={32} onClick={() => setModal(prevState => !prevState)} />

                <div className="md:flex md:items-center md:gap-8 hidden">
                    <span className="nav-menu">Login</span>
                    <span className="button rounded-full">Sign Up </span>
                </div>
            </div>
            {modal ? 
            <nav className='bg-violet-700 animate-waving-hand rounded-xl p-8 absolute w-10/12 z-20 top-24 flex flex-col gap-8 font-bold items-center text-white'>
                <span>Features</span>
                <span>Pricing</span>
                <span>Resources</span>
                <hr className='w-full border-gray-500'/>
                <span>Login</span>
                <span className='button w-full rounded-full'>Sign Up</span>
            </nav>
             : <></> }


        </header>
    )
}