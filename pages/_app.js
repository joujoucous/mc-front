import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/menu';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu islogged={false}/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
