import React from 'react'

export default function Navbar() {
        return (
                <div>
                        <div>
                                <header className="bg-white dark:bg-gray-950 py-2 px-2 fixed top-0 left-0 right-0 w-full z-50">
                                        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                                                <div className="flex items-center gap-4">
                                                        <a className="block text-teal-600" href="#">
                                                                <span className="sr-only">Home</span>
                                                                <img className="h-10 rounded-full" src="https://i.pinimg.com/236x/27/e8/07/27e807e80993b12e1899b779fcde981b.jpg  " alt="Home" />
                                                        </a>
                                                        
                                                </div>

                                                <div className="flex flex-1 items-center justify-end">
                                                        <div className="flex items-center gap-4">
                                                                <div className="sm:flex sm:gap-4 text-right">
                                                                        <a href="/dashboard" className="text-sm font-semibold leading-6 text-grey-400 dark:text-white ">
                                                                                 Back <span aria-hidden="true">→</span></a>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </header>
                        </div>
                </div>
        )
}