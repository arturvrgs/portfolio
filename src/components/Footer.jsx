import {Download} from 'lucide-react'

function Footer() {
    return (
        <footer className="h-60 border-t-4 p-10 border-zinc-800 mt-[15%] backdrop-blur-sm tracking-wider flex justify-center">
            <div className='flex gap-10  lg:w-[45%]'>
                <nav className="text-zinc-200 gap-10">
                    <h1 className="font-bold list-none text-xl">REDES SOCIAIS</h1>
                    <ul className="list-none text-lg mt-2">
                        <li className=""><a className='hover:underline decoration-[#D08700] decoration-3 underline-offset-4' href="https://github.com/arturvrgs">GitHub</a></li>
                        <li><a className='hover:underline decoration-[#D08700] decoration-3 underline-offset-4' href="https://www.linkedin.com/in/artur-vargas-37b426250/">Linkedin</a></li>
                    </ul>
                </nav>
                <nav className=" flex-col text-zinc-200 ">
                    <h1 className="font-bold list-none text-xl">CURRÍCULO</h1>
                    <a className='flex items-center bg-green-700 py-2 px-1 rounded-sm text-sm mt-2 hover:underline' href="https://i.imgur.com/Xo72xkY.png"><Download size={18}/>Download CV</a>
                </nav>
            </div>
            
        </footer>
    )
}

export default Footer