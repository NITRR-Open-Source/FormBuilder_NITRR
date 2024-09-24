import { useState } from 'react';
import Link from 'next/link';
import "../../app/globals.css";

export default function SignUp() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        contact: '',
        clubName: '',
        position: '',
        securityKey: '',
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = "First Name is required";
        if (!formData.lastName) newErrors.lastName = "Last Name is required";
        if (!formData.email.includes('@')) newErrors.email = "Invalid email format";
        if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
        if (!formData.contact) newErrors.contact = "Contact Number is required";
        if (!formData.clubName) newErrors.clubName = "Club/Committee Name is required";
        if (!formData.position) newErrors.position = "Position is required";
        if (!formData.securityKey) newErrors.securityKey = "Security Key is required";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form Data:", formData);
        }
    };

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

            <main className="flex-1 bg-white p-12 overflow-y-auto rounded-l-[50px] ml-[10px]">
                <h2 className="text-2xl font-bold mb-5 text-blue-600">Create your account</h2>
                <form onSubmit={handleSubmit}>
                    {/* Input Fields */}
                    <div className="mb-4">
                        <label htmlFor="first-name" className="block font-bold mb-2 text-black">First Name</label>
                        <input
                            type="text"
                            id="first-name"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            aria-label="First Name"
                            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-lg"
                        />
                        {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="last-name" className="block font-bold mb-2 text-black">Last Name</label>
                        <input
                            type="text"
                            id="last-name"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            aria-label="Last Name"
                            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-lg"
                        />
                        {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
                    </div>

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

                    <div className="mb-4">
                        <label htmlFor="contact" className="block font-bold mb-2 text-black">Contact Number</label>
                        <input
                            type="text"
                            id="contact"
                            placeholder="Enter your Contact Number"
                            value={formData.contact}
                            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                            aria-label="Contact Number"
                            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-lg"
                        />
                        {errors.contact && <span className="text-red-500">{errors.contact}</span>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="club-name" className="block font-bold mb-2 text-black">Club / Committee Name</label>
                        <input
                            type="text"
                            id="club-name"
                            placeholder="Enter your Club / Committee Name"
                            value={formData.clubName}
                            onChange={(e) => setFormData({ ...formData, clubName: e.target.value })}
                            aria-label="Club / Committee Name"
                            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-lg"
                        />
                        {errors.clubName && <span className="text-red-500">{errors.clubName}</span>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="position" className="block font-bold mb-2 text-black">Your Position</label>
                        <input
                            type="text"
                            id="position"
                            placeholder="Enter your Position"
                            value={formData.position}
                            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                            aria-label="Position"
                            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-lg"
                        />
                        {errors.position && <span className="text-red-500">{errors.position}</span>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="security-key" className="block font-bold mb-2 text-black">Security Key</label>
                        <input
                            type="text"
                            id="security-key"
                            placeholder="Enter Security Key"
                            value={formData.securityKey}
                            onChange={(e) => setFormData({ ...formData, securityKey: e.target.value })}
                            aria-label="Security Key"
                            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-lg"
                        />
                        {errors.securityKey && <span className="text-red-500">{errors.securityKey}</span>}
                    </div>

                    <div className="flex justify-between mt-6 text-black">
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800">
                            Sign Up
                        </button>
                    </div>
                </form>

                <div className="text-center mt-5 text-black">
                    <p>
                        Already have an account?{' '}
                        <Link href="/login/login" className="border text-blue-600 rounded hover:bg-green-800 hover:text-white">
                            Login here
                        </Link>
                    </p>
                </div>
            </main>
        </div>
    );
}
