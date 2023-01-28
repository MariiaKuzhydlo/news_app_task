import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import NewsFullInfo from "./components/NewsFullInfo/NewsFullInfo";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
   return (
      // <HashRouter>
      <div className="App">
         <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/:id" element={<NewsFullInfo />} /> */}
         </Routes>
      </div>
      // {/* </HashRouter> */}
   );
}

export default App;
