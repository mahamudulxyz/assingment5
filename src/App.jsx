import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Technology from "./components/Technology";
import { Suspense } from "react";

const dataPromise = async () => {
  const res = await fetch("/data/technology.json");
    console.log("Response:", res);

  const data = await res.json();
    console.log("Fetched Data:", data);

  
  return data;
};


function App() {
  return (
    <div>

      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<div>Loading...</div>}>
        <Technology dataPromise={dataPromise()}/>
      </Suspense>
      
      <Footer></Footer>

      <Toaster></Toaster>
    </div>
  );
}

export default App;
