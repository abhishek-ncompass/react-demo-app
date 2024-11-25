// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>
//         This is my react app hosted on S3
//         <br /> bucket and accessing via CloudFront
//       </h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>Increase</button>
//         <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
//         <h1>{count}</h1>
//       </div>
//     </>
//   );
// }

// export default App;


import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={
            <>
              <h1>
                This is my React app hosted on S3
                <br /> bucket and accessing via CloudFront
              </h1>
              <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>Increase</button>
                <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
                <h1>{count}</h1>
              </div>
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;