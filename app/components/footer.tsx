import Link from "next/link";
import React from "react";


const Footer = () => {
    return (
        <footer>
            <div className='footer px-4 w-full h-16 flex flex-col justify-center md:flex-row md:justify-between items-center px-2 bg-slate-800'>
                <p className="mb-2 md:mb-0">Brandon Bankert</p>
                <Link
                    href='mailto:bankert.brandon@gmail.com?subject=Resume Site Contact'>
                    Email Me
                </Link>
            </div>
        </footer>
    )
}

export default Footer;