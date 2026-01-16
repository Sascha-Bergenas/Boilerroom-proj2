
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/DashboardPage.jsx"

export default function App(){
    return (
        <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/history" element={<History />} />
          <Route path="/third" element={<Third />} /> */}
        </Route>
      </Routes>
        )
}