import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Home from "../../pages/Home/Home.jsx";
import Contact from "../../pages/Contact/Contact.jsx";
import Error from "../../pages/Error/Error.jsx";
import About from "../../pages/About/About.jsx";
import Footer from "../Footer/Footer.jsx";
import Apply from "../../pages/Apply/Apply.jsx";
import { app, dataB, auth } from "../../lib/firebase.js";
import { createContext, useState } from "react";

export const HiddenPageContext = createContext();

function App() {
  const [hiddenPageStatus, setHiddenPageStatus] = useState(true);

  const contextValue = { hiddenPageStatus, setHiddenPageStatus };

  return (
    <HiddenPageContext.Provider value={contextValue}>
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
      <Footer></Footer>
    </HiddenPageContext.Provider>
  );
}

export default App;
