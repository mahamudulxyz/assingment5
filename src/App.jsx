import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Technology from "./components/Technology";


function App() {
  return (
    <div>

      <Nav></Nav>
      <Banner></Banner>
      <Technology></Technology>
      
      <Footer></Footer>

      <Toaster></Toaster>
    </div>
  );
}

export default App;
