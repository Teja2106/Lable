import Navbar from './Navbar'
import Footer from './Footer'

export default function Editcontact1() {
  return (
        <div>
        <>
        <Navbar />
        <section className="bg-white text-left dark:bg-gray-950">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6 bg-red-400">
                    </aside>
      
          <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">
              <a className="block text-red-600" href="#">
              </a>
      
              <h1 className="mt-6 text-2xl font-bold text-gray-400 sm:text-3xl md:text-4xl dark:text-gray-100">
                Fill Your
              </h1>
              <h1 className="md-6 text-2xl font-bold text-gray-600 sm:text-3xl md:text-4xl dark:text-gray-200">
                Emergency Contact 1
              </h1>
      

      
              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label htmlFor="Description" className="block text-sm font-medium text-gray-700 dark:text-gray-200"> Name </label>
      
                  <input
                    type="description"
                    id="Description"
                    name="description"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white  text-gray-700 shadow-sm text-lg dark:bg-gray-900 dark:text-white p-1"
                  />
                </div>
      
            
                <div className="col-span-6">
                  <label htmlFor="Condition" className="block text-sm font-medium text-gray-700 dark:text-gray-200"> Mobile </label>
      
                  <input
                    type="condition"
                    id="Condition"
                    name="condition"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg dark:bg-gray-900 dark:text-white p-1 text-gray-700 shadow-sm"
                  />
                </div>
      
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="Blood" className="block text-sm font-medium text-gray-700 dark:text-gray-200"> Age </label>
      
                  <input
                    type="blood"
                    id="Blood"
                    name="blood"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg dark:bg-gray-900 dark:text-white p-1 text-gray-700 shadow-sm"
                  />
                </div>
      
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="Allergies" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Relation
                  </label>
      
                  <input
                    type="allergies"
                    id="Allergies"
                    name="allergies"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg dark:bg-gray-900 dark:text-white p-1 text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="Allergies" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Primary Language
                  </label>
      
                  <input
                    type="allergies"
                    id="Allergies"
                    name="allergies"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-lg dark:bg-gray-900 dark:text-white p-1 text-gray-700 shadow-sm"
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
        <Footer/>
        </>
    </div>
  )
}
