import React from 'react'

export default function Health() {
  return (
    <div>
    <div>
         <a href="/edit/health" className="section-link">

<section className="my-6 mx-4 text-left ">
  <div className="relative block overflow-hidden  rounded-xl hover:shadow-2xl hover:bg-gray-100 bg-slate-50 dark:bg-slate-950 dark:hover:bg-gray-900  duration-300 ease-in-out px-4 py-4 sm:p-6 lg:p-8 transition-all">
   <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-green-200 to-white"></span>
<div className="sm:flex sm:justify-between sm:items-center sm:gap-4">
<h3 className="text-lg font-bold text-gray-900 sm:text-xl text-left dark:text-gray-200">
Health Info
</h3>
<span className="flex-shrink-0 dark:text-gray-200">Edit
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>
</span>
</div>



<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
<div className="flex flex-col">
<dt className="text-sm font-medium text-gray-600 dark:text-gray-200">A+</dt>
<dd className="text-xs text-gray-500 dark:text-gray-100">Blood</dd>
</div>

<div className="flex flex-col">
<dt className="text-sm font-medium text-gray-600 dark:text-gray-200">Asthama</dt>
<dd className="text-xs text-gray-500 dark:text-gray-100">Condition(s)</dd>
</div>

<div className="flex flex-col">
<dt className="text-sm font-medium text-gray-600 dark:text-gray-200">20</dt>
<dd className="text-xs text-gray-500 dark:text-gray-100">Age</dd>
</div>

<div className="flex flex-col">
<dt className="text-sm font-medium text-gray-600 dark:text-gray-200">Dust</dt>
<dd className="text-xs text-gray-500 dark:text-gray-100">Allergies</dd>
</div>
<div className="flex flex-col">
<dt className="text-sm font-medium text-gray-600 dark:text-gray-200">70 kgs </dt>
<dd className="text-xs text-gray-500 dark:text-gray-100">Weight</dd>
</div>
</div>
  </div>
</section>
</a>
    </div>
    </div>
  )
}
