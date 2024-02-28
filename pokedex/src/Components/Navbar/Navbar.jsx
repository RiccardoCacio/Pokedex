import React from 'react'
import PokedexLogo from '../../Img/pokedexLogo.png'

const Navbar = () => {
    return (
        <nav className='max-sm:hidden backdrop-blur-sm bg-[#da2f37] text-xl fixed top-0 z-10 w-full'>
            <ul className='flex justify-around list-none'>
                <img className='w-[200px]' src={PokedexLogo} />
            </ul>
        </nav>
    )
}

export default Navbar
