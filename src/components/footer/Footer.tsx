import { Link } from "react-router-dom";

import {FaGithub , FaLinkedin   } from "react-icons/fa";

export function Footer(){
    return(
        <div className="w-full"
            style={{ backgroundColor: '#232323' }}
        >
            <footer className="w-full max-w-7xl mx-auto flex items-center justify-between px-2 py-6">
                <p className="text-white text-sm">© 2025 Vitor Torquato.</p>

                <div className="flex items-center justify-center gap-4">
                    <Link to='https://www.linkedin.com/in/vitor-torquatos/' target='_blank'>
                        <FaLinkedin size={24} color="#FFF" />
                    </Link>
                    <Link to='https://github.com/VitorTorquato' target='_blank'>
                        <FaGithub size={24} color="#FFF" />
                    </Link>
                
                </div>
            </footer>
        </div>
    )
}