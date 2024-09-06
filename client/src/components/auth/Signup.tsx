import { Link } from "react-router-dom";
import Footer from "../Footer";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(1, 'Enter your full name.').max(20, 'You exceeded the maximum character limit.'),
  email: z.string().email('Enter a valid email address.'),
  password1: z.string().min(8, 'It should contain ATLEAST 8 characters.').max(32, 'Password exceeded the maximum of 32 characters limit.').regex(/^(?=.*[A-Z])(?=.*[!@%^*,_]).*$/, { message: 'Password must have ATLEAST 1 uppercase and 1 special character.' }),
  password2: z.string(),
})
  .refine((data) => data.password1 === data.password2, {
    message: 'Passwords do not match.',
    path: ['password2']
  });

type SignUpForm = z.infer<typeof formSchema>;

export default function Signup() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignUpForm>({ resolver: zodResolver(formSchema) });

  const onSubmit: SubmitHandler<SignUpForm> = async ({ name, email, password1, password2 }: SignUpForm) => {
    console.log(name)
    console.log(email)
    console.log(password1)
    console.log(password2)
  }
  return (
    <div>

      <div className="flex max-h-full pb-4 rounded-lg">
        <div className="hidden lg:flex h-screen items-center justify-center flex-1 bg-yellow-400 text-black dark:text-white">
          {/* <div className="max-w-md text-center">

          </div> */}
        </div>
        <div className="w-screen h-screen bg-gray-100 dark:bg-gray-900  lg:w-1/2 flex items-center justify-center">
          <div className="max-w-md w-full p-6 ">
            {/* <div className="lg:text-left text-center">
              <h2 className="mt-6 text-5xl font-bold text-gray-900 dark:text-gray-100">
                Diagnosis at your convinence
              </h2>
            </div> */}
            <h1 className="text-3xl font-bold mb-6 text-gray-500 dark:text-gray-300 mt-8 text-center lg:text-left">Get your lable and join the health convinence </h1>
            <form className="space-y-3 p-4 " onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-left dark:text-gray-400 text-gray-700">Full Name</label>
                <input type="text" id="username" {...register('name')} className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-21focus:ring-offset-1 focus:ring-gray-300 transition-colors duration-300 dark:bg-gray-800 dark:text-white" placeholder="Full name" />
                {errors.name && (<p className="text-red-600 flex justify-start">{`${errors.name.message}`}</p>)}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-400 text-left">Email</label>
                <input type="text" id="email" {...register('email')} className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 dark:bg-gray-800 dark:text-white" placeholder="example@email.com" />
                {errors.email && (<p className="text-red-600 flex justify-start">{`${errors.email.message}`}</p>)}
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-400 text-left">Password</label>
                <input type="password" id="password" {...register('password1')} className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 dark:bg-gray-800 dark:text-white" placeholder="Password" />
                {errors.password1 && (<p className="text-red-600 flex justify-start">{`${errors.password1.message}`}</p>)}
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-400 text-left">Confirm Password</label>
                <input type="password" id="password2" {...register('password2')} className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 dark:bg-gray-800 dark:text-white" placeholder="Confirm Password" />
                {errors.password2 && (<p className="text-red-600 flex justify-start">{`${errors.password2.message}`}</p>)}
              </div>
              <br />
              <div>
                <button type="submit" disabled={isSubmitting} className="w-full bg-black dark:bg-white dark:text-black text-lg font-semibold  text-white p-2 rounded-md dark:hover:text-white hover:bg-blue-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">{isSubmitting ? 'Signing Up...' : 'Sign Up'}</button>
              </div>

              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">
                <p>Already have an account? <Link to="/login" className="text-black dark:text-yellow-400 hover:underline">Login here</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
