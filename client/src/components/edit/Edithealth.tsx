import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Edithealth() {
  return (
        <div>
        <>
        <Navbar />
        <section className="bg-white dark:bg-gray-950 text-left">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6 bg-green-200" >
                    </aside>
      
          <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">
              <a className="block text-blue-600" href="#">
              </a>
      
              <h1 className="mt-6 text-2xl font-bold text-gray-400 sm:text-3xl md:text-4xl dark:text-gray-100">
                Update Your
              </h1>
              <h1 className="mt- text-2xl font-bold text-gray-600 sm:text-3xl md:text-4xl dark:text-gray-300">
                Health Details
              </h1>
      

      
              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200"> Description </label>
      
                  <input
                    type="description"
                    id="Description"
                    name="description"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
      
            
                <div className="col-span-6">
                  <label form="Condition" className="block text-sm font-medium text-gray-700  dark:text-gray-200"> Condition </label>
      
                  <input
                    type="condition"
                    id="Condition"
                    name="condition"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
      
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700  dark:text-gray-200"> Blood Group </label>
      
                  <input
                    type="blood"
                    id="Blood"
                    name="blood"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
      
                <div className="col-span-6 sm:col-span-3">
                  <label  className="block text-sm font-medium text-gray-700  dark:text-gray-200">
                    Allergies
                  </label>
      
                  <input
                    type="allergies"
                    id="Allergies"
                    name="allergies"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
      
                
      
      
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                  Update Details
                  </button>
      
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
        <Footer />
        </>
    </div>
  )
}
