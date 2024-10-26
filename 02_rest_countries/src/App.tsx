import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Details from "./screens/Details";
import { useEffect } from "react";
function App() {
 

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === 'dark';
    if(isDark)
      document.documentElement.setAttribute("data-theme", "dark");
  },[])
  
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details" element={<Details/>}/>
      </Routes>
    </Router>
  );
}

export default App;
