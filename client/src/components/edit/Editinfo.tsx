import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
export default function Editinfo() {
  return (
        <>
        <Navbar />
    <div>
        <div className="bg-white dark:bg-gray-950 text-left">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6 " style={{backgroundColor: "#feffda"}}>
                  </aside>
      
          <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">
              <a className="block text-blue-600 dark:text-gray-200" href="#">
               <img src="" />
              </a>
      
              <h1 className="mt-6 text-2xl font-semibold text-gray-400 dark:text-gray-200 sm:text-3xl md:text-4xl">
                Fill Your
              </h1>
              <h1 className="mt- text-2xl font-bold text-gray-600 dark:text-gray-300 sm:text-3xl md:text-4xl">
                Personal Details
              </h1>
      

      
              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label htmlFor="Name" className="block text-sm font-medium text-gray-700 dark:text-gray-200"> Full Name </label>
      
                  <input
                    type="name"
                    id="Name"
                    name="nmae"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
      
            
                <div className="col-span-6">
                  <label htmlFor="Mobile" className="block text-sm font-medium text-gray-700 dark:text-gray-200"> Mobile </label>
      
                  <input
                    type="mobile"
                    id="Mobile"
                    name="mobile"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
      
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="Age" className="block text-sm font-medium text-gray-700 dark:text-gray-200"> Age </label>
      
                  <input
                    type="age"
                    id="Age"
                    name="age"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
      
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="Occupation" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Occupation
                  </label>
      
                  <input
                    type="occupation"
                    id="Occupation"
                    name="occupation"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
      
                
      
      
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                  Update 
                  </button>
                  
                  
                </div>
              </ form>
              
            </div>
          </main>
        </div>
      </div>
    </div>
    <Footer />
        </>
  )
}
