
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link href="/signin">
        <a>Sign In</a>
      </Link>
      <Link href="/signup">
        <a>Sign Up</a>
      </Link>
    </div>
  );
}
