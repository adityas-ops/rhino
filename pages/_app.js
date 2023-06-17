import '@/styles/globals.css'
import 'public/fonts/recoleta/fonts.css'
import 'public/fonts/gordita/fonts.css'
import Header from '@/components/Header/Header'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DefaultFooter from '@/components/footer/DefaultFooter';


export default function App({ Component, pageProps }) {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  // console.log('page props', pageProps)
  const router = useRouter();
  const excludedRoutes = ['/signup','/login'];
  const excludedRoutesF = ['/signup','/login','/*'];
  const shouldRender = !excludedRoutes.includes(router.pathname);
  const shouldRenders = !excludedRoutes.includes(router.pathname);
  return (
    <>
      {shouldRender && <Header />}
      <div className={`${navbar && shouldRender? "mt-[100px]":"mt-0"}`}>
      <Component {...pageProps} />
      {shouldRenders && <DefaultFooter />}
     
      </div>
    </>
  )
}
