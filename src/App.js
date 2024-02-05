import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import Docs from "./Docs/Docs";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<Docs />} />
    </Routes>
    </>
  );
}

export default App;
