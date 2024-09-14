import Link from 'next/link';
import './globals.css';
export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">Welcome to Innovation Cell</h1>
        <p className="mb-4">Please sign in or sign up to continue.</p>
        <div>
          <Link href="/signin/signin" className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 mr-4">
            Sign In
          </Link>
          <Link href="/signup/signup" className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
