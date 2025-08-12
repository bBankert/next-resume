'use client'

import React from 'react'
import { 
    FaBars, 
    FaXmark, 
    FaGithub, 
    FaEnvelope, 
    FaHouse 
} from "react-icons/fa6";
import { useSelector } from 'react-redux'
import { selectOpen, drawerSlice } from "../redux";
import Link from 'next/link';
import LinkIcon from './link-icon';
import { useAppDispatch } from '@/libs/hooks';
const {
    setOpen
} = drawerSlice.actions

const AppBar = () => {
    const dispatch = useAppDispatch();
    const open = useSelector(selectOpen);
    const handleOpenNavbarClick = () => {
        dispatch(setOpen(true))
    }

    const handleCloseNavbarClick = () => {
        dispatch(setOpen(false))
    }

    //separating these two in case they should have separate logic later
    const handleOverlayClick = () => {
        dispatch(setOpen(false))
    }

    const handleLinkClick = () => {
        dispatch(setOpen(false))
    }

    return (
        <>
            <div className='navbar-toggle-menu w-full h-16 flex align-middle px-2 bg-slate-800 fixed'>
                <button 
                    data-testid="navbar-toggle"
                    className={`navbar-open my-auto p-2 rounded-full hover:bg-slate-900/40`}
                    onClick={handleOpenNavbarClick}>
                        <FaBars className='min-w-[24px] min-h-[24px]' />
                </button>
            </div>
            <div className={`navbar-container flex flex-row fixed ${open ? 'w-full h-full' : ''}`}>   
                <div className={`navbar bg-slate-800 h-screen pt-8 flex flex-col fixed top-0 left-0 w-full md:w-72 ${open ? 'translate-x-0 z-10' : 'translate-x-[-100%]'} ease-in-out duration-300`}>
                    <>
                        <div className={`navbar-button-container flex flex-row justify-between px-4 ${open ? '' : 'hidden'}`}>
                            <Link 
                                href='/'
                                className='w-6 h-6'
                                onClick={handleCloseNavbarClick}
                                aria-label='Navigate back to home'>
                                    <FaHouse className='w-full h-full' title='Home icon' />
                            </Link>
                            <button 
                                className={`w-6 h-6 navbar-close ${open ? '' : 'hidden'}`}
                                data-testid='navbar-close-button'
                                onClick={handleCloseNavbarClick}
                                aria-label='Menu close button'>
                                    <FaXmark className='w-full h-full' title='Close icon' />
                            </button>
                        </div>     
                        <nav className={`pt-2 ${open ? '' : 'hidden'}`} data-testid='nav-links'>
                            <ul>
                                <li className='px-4 leading-10 bg-slate-950 text-slate-100'>Professional Experience</li>
                                <ul className='px-6 p-4'>
                                    <li className='mb-2'><Link href='/experience/travelers' onClick={handleLinkClick} data-testid='nav-link'>Travelers Insurance</Link></li>
                                    <li className='mb-2'><Link href='/experience/members-1st' onClick={handleLinkClick}>Members 1st</Link></li>
                                    <li className='mb-2'><Link href='/experience/select-medical' onClick={handleLinkClick}>Select Medical</Link></li>
                                </ul>
                                <li className='px-4 leading-10 bg-slate-950 text-slate-100'>Dashboards</li>
                                <ul className='px-6 p-4'>
                                    <li className='mb-2'><Link href='/projects' onClick={handleLinkClick}>Projects</Link></li>
                                    <li className='mb-2'><Link href='/education' onClick={handleLinkClick}>Education</Link></li>
                                </ul>
                                <li className='flex flex-row justify-around px-4'>
                                    <LinkIcon
                                        linkUrl='https://github.com/bBankert'
                                        linkAriaLabel="Link to Brandon Bankert's github"
                                        icon={<FaGithub className='w-6 h-6' title='Github logo icon'/>} />
                                    <LinkIcon
                                        icon={<FaEnvelope className='w-6 h-6' title='Email icon'/>}
                                        linkUrl='mailto:bankert.brandon@gmail.com?subject=Resume Site Contact'
                                        linkAriaLabel='Email Brandon' />
                                </li>
                            </ul>
                        </nav>
                    </>
                </div>
                {open ?
                    <div className='navbar-overlay flex-1 bg-black opacity-50' onClick={handleOverlayClick} data-testid='navbar-overlay' /> :
                    null
                }
                
            </div>
        </>
    )
}

export default AppBar;