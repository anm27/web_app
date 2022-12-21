import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./pages/Services";
import Header from "./components/Header";
import Blog from "./pages/Blog";
import Pencil from "./components/Pencil";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";
// import ScrollTop from "./components/ScrollTop";
import ParticularService from "./pages/ParticularService";
import Feedback from "./pages/Feedback";
import ParticularBlog from "./pages/ParticularBlog";

function App() {
  return (
    <>
      <div>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/services" element={<Services />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/blogg" element={<ParticularBlog />} />
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
