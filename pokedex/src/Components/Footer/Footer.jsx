import React from 'react'
import IgSvg from '../../Img/instagram.svg'
import LinkedinSvg from '../../Img/linkedin.svg'
import GitHubSvg from '../../Img/github.svg'
const Footer = () => {
    return (
        <footer className='max-sm:hidden flex flex-wrap mt-5 justify-around bg-[#da2f37] p-10 w-full '>
            <div className=''>
                <p className=''> Copyright © 2023 - Riccardo Cacio -</p>
                <p className=''>Developed by Riccardo Cacio</p>
            </div>
            <div className='flex gap-[10px] max-md:justify-center'>
                <a target='_blank' href="https://github.com/RiccardoCacio"><img src={GitHubSvg} alt="" /></a>
                <a target='_blank' href="https://www.instagram.com/riccardo_cacio/"><img src={IgSvg} alt="" /></a>
                <a target='_blank' href="https://www.linkedin.com/in/riccardo-cacio-98713017a/"><img src={LinkedinSvg} alt="" /></a>
            </div>
            <div className=''>
                <p className=''>Telefono +39 3917254971</p>
                <p className=''>Mail riccardo1918@live.it  </p>

            </div>
        </footer>
    )
}

export default Footer
