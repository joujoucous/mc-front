import Link from "next/link";

const Login = () => (
  <div>
    <h1>Login</h1>
    <Link href="/">
      <a>Back to home</a>
    </Link>
    <Link href="/sign-in">
      <a>Go to sign in</a>
    </Link>
  </div>
);
export default Login;