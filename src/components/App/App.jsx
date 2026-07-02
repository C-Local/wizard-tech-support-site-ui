<<<<<<< HEAD
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Home from "../../pages/Home/Home.jsx";
import Contact from "../../pages/Contact/Contact.jsx";
import Error from "../../pages/Error/Error.jsx";
import About from "../../pages/About/About.jsx";
import Footer from "../Footer/Footer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
=======
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Header from "../Header/Header.jsx"
import Home from "../../pages/Home/Home.jsx"
import Contact from "../../pages/Contact/Contact.jsx"
import Error from "../../pages/Error/Error.jsx"
import About from "../../pages/About/About.jsx"
import Footer from "../Footer/Footer.jsx"

function App() {

  return (
    <>
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/about-us" element={<About/>}></Route>
      <Route path="*" element={<Error/>}></Route>
    </Routes>
    </BrowserRouter>
     <Footer></Footer>
    </>
  )
}

export default App
>>>>>>> 1613dee4d0a2c4b4332300c9639e4bb059751dfd
