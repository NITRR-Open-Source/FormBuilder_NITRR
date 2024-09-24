import "../../app/globals.css";

export default function SignUp() {
    return (
        <div className="flex h-screen">
            <div className="flex-1 bg-blue-600 text-white p-12 rounded-3xl m-2 flex flex-col justify-center items-center text-center">
                <div className="mb-8">
                    <h1 className="text-5xl font-bold">Welcome to</h1>
                    <h2 className="text-4xl font-semibold mt-3">ICell Form Builder Web</h2>
                </div>
             
                <p className="max-w-xl text-lg mb-10">
                    Your go-to solution for creating, managing, and deploying professional forms easily. Whether you're building a simple contact form or a complex survey, we've got the tools to help you succeed.
                </p>
                <div className="flex">
                  
                    <button type="button" className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg border-2 border-blue-600 hover:border-blue-800 hover:bg-blue-600 hover:text-white transition duration-300 m-[15px]">Login</button>
                    <button type="button" className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg border-2 border-blue-700 hover:border-white transition duration-300 m-[15px]">Sign Up</button>
                </div>
            </div>

            <div className="flex-1 bg-white p-12 rounded-3xl m-2 overflow-y-auto">
                <h2 className="text-2xl font-bold mb-5 text-blue-600">Create your account</h2>
                <form>
                    {/* Input Group - First Name */}
                    <div className="mb-4">
                        <label htmlFor="first-name" className="block font-bold mb-2 text-black">First Name</label>
                        <input
                            type="text"
                            id="first-name"
                            placeholder="First Name"
                            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-lg"
                        />
                    </div>

                    {/* Input Group - Last Name */}
                    <div className="mb-4">
                        <label htmlFor="last-name" className="block font-bold mb-2 text-black">Last Name</label>
                        <input
                            type="text"
                            id="last-name"
                            placeholder="Last Name"
                            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-lg"
                        />
                    </div>

                    {/* Input Group - E-mail */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-bold mb-2 text-black">E-mail Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-lg"
                        />
                    </div>

                    {/* Input Group - Password */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-bold mb-2 text-black">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-lg"
                        />
                    </div>

                    {/* Input Group - Contact Number */}
                    <div className="mb-4">
                        <label htmlFor="contact" className="block font-bold mb-2 text-black">Contact Number</label>
                        <input
                            type="text"
                            id="contact"
                            placeholder="Enter your Contact Number"
                            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-lg"
                        />
                    </div>

                    {/* Input Group - Club / Committee Name */}
                    <div className="mb-4">
                        <label htmlFor="club-name" className="block font-bold mb-2 text-black">Club / Committee Name</label>
                        <input
                            type="text"
                            id="club-name"
                            placeholder="Enter your Club / Committee Name"
                            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-lg"
                        />
                    </div>

                    {/* Input Group - Your Position */}
                    <div className="mb-4">
                        <label htmlFor="position" className="block font-bold mb-2 text-black">Your Position</label>
                        <input
                            type="text"
                            id="position"
                            placeholder="Enter your Position"
                            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-lg"
                        />
                    </div>

                    {/* Input Group - Security Key */}
                    <div className="mb-4">
                        <label htmlFor="security-key" className="block font-bold mb-2 text-black">Security Key</label>
                        <input
                            type="text"
                            id="security-key"
                            placeholder="Enter Security Key"
                            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-lg"
                        />
                    </div>
                    

                    <div className="flex justify-center mt-6 text-black">
                        <button
                            type="submit"
                            className="w-[48%] bg-blue-600 text-white p-3 rounded-full border-2 border-blue-600 hover:border-white active:bg-blue-700 active:scale-95 transition-all duration-300">
                            Sign Up
                        </button>
                    </div>
               
                </form>
                

                <div className="text-center mt-8 text-blue-600">
                    <p>
                        Already have an account?{' '}
                        <button
                            type="button"
                            className="font-semibold underline hover:text-blue-800">
                            Login
                        </button>
                    </p>
                    <p className="mt-2">OR</p>
                    <p>If you have any problems, contact the technical team.</p>
                </div>
                
            </div>
        </div>
    );
}