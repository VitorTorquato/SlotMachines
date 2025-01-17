import { Link } from "react-router-dom";

import { FaFacebookF , FaInstagram,  FaTwitter   } from "react-icons/fa";

export function Footer(){
    return(
        <div className="w-full"
            style={{ backgroundColor: '#232323' }}
        >
            <footer className="w-full max-w-7xl mx-auto flex items-center justify-between px-2 py-6">
                <p className="text-white text-sm">© 2025 Gaming Corps.</p>

                <div className="flex items-center justify-center gap-4">
                    <Link to='https://x.com/gamingcorps' target='_blank'>
                        <FaTwitter size={24} color="#FFF" />
                    </Link>
                    <Link to='https://www.facebook.com/hellogamingcorps/' target='_blank'>
                        <FaFacebookF size={24} color="#FFF" />
                    </Link>
                    <Link to='https://www.instagram.com/gaming_corps/' target='_blank'>
                        <FaInstagram size={24} color="#FFF" />
                    </Link>
                </div>
            </footer>
        </div>
    )
}