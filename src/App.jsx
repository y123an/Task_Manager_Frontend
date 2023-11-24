import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Task from "./pages/Task";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Task />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
