import Link from 'next/link';
import "../../app/globals.css";

export default function Login() {
    return (
        <div className="flex h-screen">
            <div className="flex-1 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white flex flex-col justify-center items-center text-center rounded-r-[50px] p-12">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold">Welcome to</h1>
                </div>
                <p>
                    ICell Form Builder Web is your go-to solution for creating, managing, and deploying professional forms easily. Whether you're building a simple contact form or a complex survey, we've got the tools to help you succeed.
                </p>
                
                <div className='flex'>
                    <Link href="/login/login" className="bg-white text-blue-800 border border-blue-800 px-4 py-2 rounded hover:bg-green-300 m-[15px]">
                        Login
                    </Link>
                    <Link href="/signup/signup" className="bg-white text-blue-800 border border-blue-800 px-4 py-2 rounded hover:bg-blue-100 m-[15px]">
                        Sign up
                    </Link>
                </div>
            </div>

            <div className="flex-1 bg-white p-12 overflow-y-auto rounded-l-[50px] ml-[10px]">
                <h2 className="text-2xl font-bold mb-5 text-blue-600">Login to your account</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-bold mb-2 text-black">E-mail Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-lg"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block font-bold mb-2 text-black">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-lg"
                        />
                    </div>

                    <div className="flex justify-between mt-6 text-black">
                        <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900">
                            Login
                        </button>
                    </div>
                </form>

                <div className="text-center mt-5 text-black">
                    <p>
                        Don't have an account?{' '}
                        <Link href="/signup/signup" className="border text-blue-800 rounded hover:bg-green-800 hover:text-white">
                            Sign Up
                        </Link>
                    </p>
                    <p>OR</p>
                    <p>If you have any problems, contact the technical team.</p>
                </div>
            </div>
        </div>
    );
}
