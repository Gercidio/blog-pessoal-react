import {FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">

                <div className="container flex flex-col items-center py-4">

                    <p className='text-xl font-bold'>Blog Pessoal - Generation | Copyright: {data}</p>

                    <p className='text-lg'>Acesse nossas redes sociais</p>

                    <div className='flex gap-2'>
                        <a href="https://github.com/gercidio" target="_blank">
                            <FaGithub size={48} />
                        </a>
                        <a href= "https://www.instagram.com/generationbrasil"target="_blank">
                            <FaInstagram size={48} />
                        </a>
                        <a href="https://www.linkedin.com/in/gercidiovaleriano" target="_blank">
                            <FaLinkedin size={48} />
                            </a>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Footer