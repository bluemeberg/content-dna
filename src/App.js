import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import MainPage from "./pages/MainPage/MainPage";
import ResultPage from "./pages/ResultPage/ResultPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
