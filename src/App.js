import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Header from "./components/Header";
import data from "./data.json";

function App() {
  const location = useLocation().pathname;
  const newClass = location.split("/")[1];
  return (
    <main className={`p-5 desktop:px-7 ${newClass}`}>
      <Header newClass={newClass} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/destination"
          element={<Destination data={data.destinations} />}
        />
        <Route path="/crew" element={<Crew data={data.crew} />} />
        <Route
          path="/technology"
          element={<Technology data={data.technology} />}
        />
      </Routes>
    </main>
  );
}

export default App;
