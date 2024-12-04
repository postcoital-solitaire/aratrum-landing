import Header from "../Header/Header.tsx";
import {ComponentWithChildren} from "../../types/types.ts";
import Footer from "../Footer/Footer.tsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

function Layout({ children }: ComponentWithChildren) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
