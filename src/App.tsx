import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import NewsFullInfo from "./components/NewsFullInfo/NewsFullInfo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
   return (
      <Router>
         <div className="App">
            <Routes>
               <Route path="/" element={<HomePage />} />
               {/* <Route path="/:id" element={<NewsFullInfo />} /> */}
            </Routes>
         </div>
      </Router>
   );
}

export default App;
