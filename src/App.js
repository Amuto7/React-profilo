import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      {/* <Layout/> */}
      
      <Routes>

        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} exact />
          <Route path="/about" element={<About />} exact/>
          <Route path="/contact" element={<Contact />} exact/>
        </Route>       

      </Routes>
    </>
  );
}

export default App;
