import "./styles.css";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Adoption from "./Components/Adoption";
import Signin from "./Components/Signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DogDescription from "./Components/DogDescription";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/adoption/:id" element={<DogDescription />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
