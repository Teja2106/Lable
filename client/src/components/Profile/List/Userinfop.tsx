import React from 'react'

export default function Userinfop() {
  return (
    <div>
        <div>
        <div className="">
        <a className="section-link">
            <section className="my-6 mx-4 text-left">
                <div className="relative block overflow-hidden  rounded-xl hover:shadow-2xl bg-slate-50 hover:bg-gray-100 dark:bg-slate-950 dark:hover:bg-gray-900 duration-300 ease-in-out p-4 sm:p-6 lg:p-8">
                    <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-yellow-300 via-yellow-200 to-white "></span>
                    <div className="sm:flex sm:justify-between sm:items-center sm:gap-4">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200 sm:text-xl">
                            Your Info
                        </h3>
                        {/* <span className="flex-shrink-0 dark:text-gray-200"> Edit
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"> 
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                            </svg>
                        </span> */}
                    </div>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        <div className="flex flex-col">
                            <dt className="text-sm font-medium text-gray-600 dark:text-gray-200">Vishnu Damuloori</dt>
                            <dd className="text-xs text-gray-500 dark:text-gray-100">Name</dd>
                        </div>
                        <div className="flex flex-col">
                            <dt className="text-sm font-medium text-gray-600 dark:text-gray-200">6281693119</dt>
                            <dd className="text-xs text-gray-500 dark:text-gray-100">Mobile</dd>
                        </div>
                        <div className="flex flex-col">
                            <dt className="text-sm font-medium text-gray-600 dark:text-gray-200">2 </dt>
                            <dd className="text-xs text-gray-500 dark:text-gray-100">Age</dd>
                        </div>
                        <div className="flex flex-col">
                            <dt className="text-sm font-medium text-gray-600 dark:text-gray-200">Vishnu.damuluri@gmail.com</dt>
                            <dd className="text-xs text-gray-500 dark:text-gray-100">Mail</dd>
                        </div>
                        <div className="flex flex-col">
                            <dt className="text-sm font-medium text-gray-600 dark:text-gray-200">Co-Founder, opaq</dt>
                            <dd className="text-xs text-gray-500 dark:text-gray-100">Occupation</dd>
                        </div>
                        <div className="flex flex-col">
                            <dt className="text-sm font-medium text-gray-600 dark:text-gray-200">Madhurwada,visakapatnam</dt>
                            <dd className="text-xs text-gray-500 dark:text-gray-100">Home</dd>
                        </div>
                    </div>
                </div>
            </section>
        </a>
        
    </div>
    </div>
    </div>
  )
}
