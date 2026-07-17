import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Home from "../../pages/Home/Home.jsx";
import Contact from "../../pages/Contact/Contact.jsx";
import Error from "../../pages/Error/Error.jsx";
import About from "../../pages/About/About.jsx";
import Footer from "../Footer/Footer.jsx";
import Apply from "../../pages/Apply/Apply.jsx";
import Auth from "../../components/Auth/Auth.jsx";
import { createContext, useState } from "react";

export const HiddenPageContext = createContext();

export const AuthPageContext = createContext();

function App() {
  const [hiddenPageStatus, setHiddenPageStatus] = useState(true);

  const hiddenPageCV = { hiddenPageStatus, setHiddenPageStatus };

  const [authPageStatus, setAuthPageStatus] = useState(false);

  const authPageCV = { authPageStatus, setAuthPageStatus };

  return (
    <HiddenPageContext.Provider value={hiddenPageCV}>
      <AuthPageContext.Provider value={authPageCV}>
        <BrowserRouter>
          <Header></Header>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/about-us" element={<About />}></Route>
            <Route path="/apply" element={<Apply />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </BrowserRouter>
        <Auth></Auth>
        <Footer></Footer>
      </AuthPageContext.Provider>
    </HiddenPageContext.Provider>
  );
}

export default App;
