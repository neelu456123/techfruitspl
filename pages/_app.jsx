import './styles/style.css';
import Header from './header';
import Footer from './footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}