import "./App.css";
import Dashboard from "./pages/DashboardPage";
import History from "./pages/HistoryPage";
import { Routes, Route } from "react-router-dom";

//Använd export default för att exportera en komponent från en fil

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/history" element={<History />} />
    </Routes>
    </>
  );
}
