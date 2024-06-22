import Footer from "../Footer";

export default function Login() {
  return (
    <>
    
       <div>
      <div className="relative h-screen  grid bg-white dark:bg-gray-950 ">
        <div className="flex flex-col md:col-1 sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 h-auto">
          <div
            className="relative sm:w-1/2 xl:w-3/5 h-screen hidden md:flex flex-auto items-center justify-center p- overflow-hidden  text-black bg-yellow-400 dark:text-white bg-no-repeat bg-cover relative"  > 
            <div className="absolute bg-black  opacity-25 inset-0 z-0"></div>
            <div className="w-full  lg:max-w-2xl md:max-w-md z-10 items-center text-center ">
              <div className=" font-bold leading-tight mb-6 mx-auto w-full content-center items-center ">
                          {/* <svg viewBox="0 0 24 24" className=" text-white ml-3 w-auto lg:h-20 h-10 inline" fill="currentColor" <style={{backgroundColor: "#fcdf03"}}/>>
            <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">
                </path>
            </g>
        </svg> */}
              </div>
            </div>
          </div>
          <div
            className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none "
          >
            <div className="max-w-xl w-full space-y-12">
              <div className="lg:text-left text-center">
              <h2 className="mt-2 text-5xl font-bold text-gray-900 dark:text-gray-100">
                Login
                </h2>
              </div>
              <div className="flex flex-row justify-center items-center space-x-3"></div>

              <div className="mt-2 flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 mb-2 lg:mb-0">
          <button type="button" className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4" id="google">
              <path fill="#fbbb00" d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"></path>
              <path fill="#518ef8" d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"></path>
              <path fill="#28b446" d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"></path>
              <path fill="#f14336" d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"></path>
            </svg> Login with Google </button>
        </div>
        <div className="w-full lg:w-1/2 ml-0 lg:ml-2">
    <button type="button" className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
        <img src="https://upload.wikimedia.org/wikipedia/hi/c/cf/Aadhaar_Logo.svg" alt="Aadhar Logo" className="h-4 flex justify-left" id="aadhaar" />
        Login with Aadhar
    </button>
</div>

      </div>
     
      <form action="#" method="POST" className="space-y-4">
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-400 text-left " >Email</label>
          <input type="text" id="email" name="email" placeholder="example@email.com"  className="dark:bg-gray-800 mt-1 p-2 w-full border rounded-md focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition-colors duration-300"/>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-400 text-left">Password</label>
          <input type="password" id="password" name="password" placeholder="password" className="mt-1 p-2 w-full border rounded-md dark:bg-gray-800 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition-colors duration-300"/>
        </div>
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-left">
        <p>Need help with login? <a href="/auth/login/otp" className="text-black dark:text-yellow-400 hover:underline">click here</a>
        </p>
      </div>
        
        <div>
          <button type="submit" className="w-full bg-black dark:bg-slate-200  text-black font-semibold text-lg dark:hover:text-white p-2 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">login</button>
        </div>
      </form>
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">
        <p>Don't have an account? <a href="/auth/signup" className="text-black dark:text-yellow-400 hover:underline">Create account here</a>
        </p>
      </div>
      </div>
      
            </div>
          </div>
        </div>
      </div>
      < Footer/>
      </>
   
  )
}
