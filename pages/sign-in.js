import Link from "next/link";

const SignIn = () => (
  <div>
    <h1>Sign in</h1>
    <Link href="/">
      <a>Back to home</a>
    </Link>
    <Link href="/login">
      <a>Go to Login</a>
    </Link>
  </div>
);
export default SignIn;