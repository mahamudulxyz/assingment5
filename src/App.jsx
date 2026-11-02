import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Technology from "./components/Technology";
import { Suspense, useState } from "react";
import Loading from "./components/Loading";

const dataPromise = async () => {
  const res = await fetch("/data/technology.json");
  const data = await res.json();
  return data;
};

function App() {
  const [addstack, setaddstack] = useState([]);
  const [technologyPromise] = useState(() => dataPromise());

  return (
    <div>
      <Nav></Nav>
      <Banner></Banner>

      <Suspense fallback={<Loading/>}>
        <Technology
          dataPromise={technologyPromise}
          addstack={addstack}
          setaddstack={setaddstack}
        />
      </Suspense>

      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
}

export default App;