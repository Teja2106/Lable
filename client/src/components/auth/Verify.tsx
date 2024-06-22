import React from 'react'

export default function Verify() {
  return (
    <div>
     
     <div className="flex items-center justify-center h-screen">
  
  <div className="w-full bg-gray-100 dark:bg-gray-800  lg:w-1/2 flex items-center justify-center">
    <div className="max-w-md w-full p-6">
      <h1 className="text-3xl font-semibold mb-6 text-black dark:text-white text-center">Verify OTP</h1>
      <h1 className="text-sm font-semibold mb-6 text-gray-500 dark:text-gray-300 text-center">we sent an OTP to <a> ******examole@email.com</a> </h1>
      
      <form action="#" method="POST" className="space-y-4">
        
        <div>
          <label htmlFor="text" className="block text-sm font-medium text-gray-700 dark:text-gray-400 text-left">OTP</label>
          <input type="text" id="text" name="email" placeholder="Enter your 6 digit OTP" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"/>
        </div>
        
       
        <div className='mt-8'>
          <button type="submit" className="w-full bg-black dark:bg-slate-600  text-white  p-2 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300 text-lg font-semibold">Verify</button>
        </div>
      </form>
      <div className="mt-4  text-gray-600 dark:text-gray-400 text-center text-md">
        <p>Didn't recieve code? <a href="/auth/signup" className="text-black dark:text-yellow-400  hover:underline">Resend</a>
        </p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
