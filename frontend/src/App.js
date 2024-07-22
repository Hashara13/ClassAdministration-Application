import "./App.css";
import AddStudent from "./components/AddStudent";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllStudent from "./components/AllStudent";
import NewLessons from "./components/NewLessons";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<AllStudent />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/add/lessons" element={<NewLessons />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
