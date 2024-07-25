import Switcher from '@/components/ui/Switcher'
import React from 'react'
import { RiMoonClearLine, RiSunLine } from "react-icons/ri"
import Sidebar from './Sidebar'
import ThemeToggol from './ThemeToggol'

function Navigation() {
    return (
        <div className='lg:ml-48'>
            <header className="relative flex flex-wrap lg:justify-start lg:flex-nowrap z-10 w-full py-4 bg-white lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none dark:bg-slate-900 dark:lg:bg-transparent">
                <nav className="max-w-[85rem] flex flex-wrap basis-full items-center w-full mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
                    { /* Logo Wrapper */}
                    <div className="flex items-center gap-x-2 md:gap-x-3">
                        { /* Logo */}
                        <a className="flex-none rounded-md dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="./index.html">
                            <div className="text-2xl">Shadhin Jurney</div>
                        </a>
                    </div>
                    { /* End Logo Wrapper */}

                    <div className="flex items-center gap-x-1 ms-auto lg:ps-1 lg:order-3">

                        { /* End Form */}
                        {/* 
                        <div className="flex items-center gap-x-1 relative z-10 before:hidden lg:before:block before:w-px before:h-4 before:bg-gray-300 dark:before:bg-gray-700">
                            <div className="flex gap-x-1">
                                <a className="inline-flex flex-shrink-0 justify-center items-center h-9 w-9 font-medium rounded-full text-gray-800 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://www.figma.com/community/file/1179068859697769656" target="_blank">
                                    <svg className="flex-shrink-0 w-4 h-4" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.875 18C8.531 18 9.875 16.656 9.875 15V12H6.875C5.219 12 3.875 13.344 3.875 15C3.875 16.656 5.219 18 6.875 18Z" fill="#0ACF83" />
                                        <path d="M3.875 9C3.875 7.344 5.219 6 6.875 6H9.875V12H6.875C5.219 12 3.875 10.656 3.875 9Z" fill="#A259FF" />
                                        <path d="M3.875 3C3.875 1.344 5.219 0 6.875 0H9.875V6H6.875C5.219 6 3.875 4.656 3.875 3Z" fill="#F24E1E" />
                                        <path d="M9.87501 0H12.875C14.531 0 15.875 1.344 15.875 3C15.875 4.656 14.531 6 12.875 6H9.87501V0Z" fill="#FF7262" />
                                        <path d="M15.875 9C15.875 10.656 14.531 12 12.875 12C11.219 12 9.87501 10.656 9.87501 9C9.87501 7.344 11.219 6 12.875 6C14.531 6 15.875 7.344 15.875 9Z" fill="#1ABCFE" />
                                    </svg>
                                </a>
                                <a className="inline-flex flex-shrink-0 justify-center items-center h-9 w-9 font-medium rounded-full text-gray-800 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://github.com/htmlstreamofficial/preline" target="_blank">
                                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                </a>
                            </div>

                        <button type="button" className="hs-dark-mode-active:hidden block hs-dark-mode rounded-full dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-theme-click-value="dark">
                            <span className="group inline-flex flex-shrink-0 justify-center items-center h-9 w-9 font-medium rounded-full text-gray-800 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-800">
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                                </svg>
                            </span>
                        </button>
                        <button type="button" className="hs-dark-mode-active:block hidden hs-dark-mode rounded-full dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-theme-click-value="light">
                            <span className="group inline-flex flex-shrink-0 justify-center items-center h-9 w-9 font-medium rounded-full text-gray-800 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-800">
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="4" />
                                    <path d="M12 8a2 2 0 1 0 4 4" />
                                    <path d="M12 2v2" />
                                    <path d="M12 20v2" />
                                    <path d="m4.93 4.93 1.41 1.41" />
                                    <path d="m17.66 17.66 1.41 1.41" />
                                    <path d="M2 12h2" />
                                    <path d="M20 12h2" />
                                    <path d="m6.34 17.66-1.41 1.41" />
                                    <path d="m19.07 4.93-1.41 1.41" />
                                </svg>
                            </span>
                        </button>
                        
                    </div>
                         */}

                        { /* Collapse Button */}
                        <div className="lg:hidden">
                            <button type="button" className="hs-collapse-toggle w-9 h-9 inline-flex justify-center items-center gap-x-2 rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#docs-navbar" aria-controls="docs-navbar" aria-label="Toggle navigation">
                                <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="3" x2="21" y1="6" y2="6" />
                                    <line x1="3" x2="21" y1="12" y2="12" />
                                    <line x1="3" x2="21" y1="18" y2="18" />
                                </svg>
                                <svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </div>
                        { /* End Collapse Button */}
                    </div>

                    { /* Collapse */}
                    <div id="docs-navbar" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow ms-auto lg:block lg:w-auto lg:basis-auto lg:order-2">
                        <div className="flex flex-col gap-1.5 mt-5 lg:flex-row lg:items-center lg:justify-end lg:mt-0 lg:ps-5">
                            <a className="inline-flex items-center gap-x-3 text-gray-800 p-2 text-sm font-medium rounded-lg hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400 active-link !text-blue-600 hover:text-blue-500 dark:!text-blue-500 dark:hover:text-blue-400" href="./index.html">
                                <svg className="flex-shrink-0 w-4 h-4 block lg:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    <polyline points="9 22 9 12 15 12 15 22" />
                                </svg>
                                Home
                            </a>
                            <a className="inline-flex items-center gap-x-3 text-gray-800 p-2 text-sm font-medium rounded-lg hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400" href="./docs/index.html">
                                <svg className="flex-shrink-0 w-4 h-4 block lg:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                </svg>
                                Documentation
                            </a>
                            <a className="inline-flex items-center gap-x-3 text-gray-800 p-2 text-sm font-medium rounded-lg hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400 " href="./examples.html">
                                <svg className="flex-shrink-0 w-4 h-4 block lg:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                                    <line x1="3" x2="21" y1="9" y2="9" />
                                    <line x1="9" x2="9" y1="21" y2="9" />
                                </svg>
                                Examples
                            </a>
                            <a className="inline-flex items-center gap-x-3 text-gray-800 p-2 text-sm font-medium rounded-lg hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400 " href="./plugins.html">
                                <svg className="flex-shrink-0 w-4 h-4 block lg:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="7" height="7" x="14" y="3" rx="1" />
                                    <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
                                </svg>
                                Plugins
                            </a>

                        </div>
                    </div>
                    { /* End Collapse */}
                    {/* <div>
                        <ThemeToggol />
                    </div> */}

                </nav>
            </header>
        </div >
    )
}

export default Navigation
