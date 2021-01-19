import Link from "next/link";

const Home = () => (
  <div>
    <h1>Homepage</h1>
    <Link href="/login">
      <a>Go to login</a>
    </Link>
    <Link href="/sign-in">
      <a>Go to sign in</a>
    </Link>
  </div>
);
export default Home;