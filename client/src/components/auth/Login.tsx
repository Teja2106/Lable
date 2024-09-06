import { SubmitHandler, useForm } from "react-hook-form";
import Footer from "../Footer";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email('Enter a valid E-mail.'),
  password: z.string().min(1, { message: 'Enter your password.' })
});

type LoginForm = z.infer<typeof formSchema>;

export default function Login() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginForm>({ resolver: zodResolver(formSchema) });

  const onSubmit: SubmitHandler<LoginForm> = async ({ email, password }: LoginForm) => {
    console.log({ email, password });
  }
  return (
    <>
      <div>
        <div className="relative h-screen  grid bg-white dark:bg-gray-950 ">
          <div className="flex flex-col md:col-1 sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 h-auto">
            <div
              className="relative sm:w-1/2 xl:w-3/5 h-screen hidden md:flex flex-auto items-center justify-center p- overflow-hidden  text-black bg-yellow-400 dark:text-white bg-no-repeat bg-cover "  >
              <div className="absolute bg-  opacity-25 inset-0 z-0"></div>
              <div className="w-full  lg:max-w-2xl md:max-w-md z-10 items-center text-center ">
                <div className=" font-bold leading-tight mb- mx-auto w-full content-center items-center ">
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
              className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-gray-100 dark:bg-gray-900"
            >
              <div className="max-w-xl w-full space-y-4">
                <div className="lg:text-left text-center">
                  <h2 className="mt-2 text-5xl font-bold text-gray-900 dark:text-gray-100">
                    Login
                  </h2>
                </div>
                <span className="flex flex-row justify-center items-center "></span>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-400 text-left " >Email</label>
                    <input type="text" id="email" {...register('email')} placeholder="example@email.com" className="dark:bg-gray-800 dark:text-white mt-1 p-2 w-full border rounded-md focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition-colors duration-300" />
                    {errors.email && (<p className="text-red-600 flex justify-start">{`${errors.email.message}`}</p>)}
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-400 text-left">Password</label>
                    <input type="password" id="password" {...register('password')} placeholder="password" className="mt-1 p-2 w-full border rounded-md dark:bg-gray-800 dark:text-white focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition-colors duration-300" />
                  </div>
                  {errors.password && (<p className="text-red-600 flex justify-start">{`${errors.password.message}`}</p>)}
                  <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-left">
                    <p>Need help with login? <Link to="" className="text-black dark:text-yellow-400 hover:underline">click here</Link>
                    </p>
                  </div>

                  <div>
                    <button type="submit" disabled={isSubmitting} className="w-full bg-black text-white  dark:bg-slate-200  dark:text-black font-semibold text-lg dark:hover:text-white p-2 rounded-md hover:bg-blue-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">{isSubmitting ? 'Logging In' : 'Login'}</button>
                  </div>
                </form>
                <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">
                  <p>Don't have an account? <a href="/auth/signup" className="text-black dark:text-yellow-400 hover:underline">Create now</a>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      < Footer />
    </>

  )
}
