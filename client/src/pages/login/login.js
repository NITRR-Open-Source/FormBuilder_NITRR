import { useState } from 'react';
import Link from 'next/link';
import "../../app/globals.css";

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.email.includes('@')) newErrors.email = "Invalid email format";
        if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Handle successful login
            console.log("Login Data:", formData);
        }
    };

    return (
        <div className="flex h-screen">
            <div className="flex-1 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white flex flex-col justify-center items-center text-center rounded-r-[50px] p-12">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold">Welcome Back</h1>
                </div>
                <p>
                    Login to continue managing your forms and accessing exclusive features tailored for you.
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

            <main className="flex-1 bg-white p-12 overflow-y-auto rounded-l-[50px] ml-[10px]">
                <h2 className="text-2xl font-bold mb-5 text-blue-600">Login to Your Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-bold mb-2 text-black">E-mail Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            aria-label="Email"
                            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-lg"
                        />
                        {errors.email && <span className="text-red-500">{errors.email}</span>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block font-bold mb-2 text-black">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            aria-label="Password"
                            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-lg"
                        />
                        {errors.password && <span className="text-red-500">{errors.password}</span>}
                    </div>

                    <div className="flex justify-between mt-6 text-black">
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800">
                            Login
                        </button>
                    </div>
                </form>

                <div className="text-center mt-5 text-black">
                    <p>
                        Don’t have an account?{' '}
                        <Link href="/signup/signup" className="border text-blue-600 rounded hover:bg-green-800 hover:text-white">
                            Sign up here
                        </Link>
                    </p>
                </div>
            </main>
        </div>
    );
}
