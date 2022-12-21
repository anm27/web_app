// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import Section2 from "./components/Section2";
import Services from "./pages/Services";
import Header from "./components/Header";
import Blog from "./pages/Blog";
// import Slides from "./components/Slides";
import Pencil from "./components/Pencil";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import ParticularService from "./pages/ParticularService";
import Feedback from "./pages/Feedback";
import { useEffect, useState } from "react";
import sanityClient from "./sanity";

function App() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type=="service"]{
  
      ...,
      
    }
    `
      )
      .then((service) => [setServices(service)]);
  }, []);

  console.log(services);

  return (
    <>
      <div>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/service" element={<ParticularService />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/slider" element={<Pencil />} />
          </Routes>

          {/* <Route path="/products">
          <Products />
        </Route> */}
        </main>

        <Footer />
        {/* <ScrollTop /> */}
      </div>
    </>
  );
}

export default App;
