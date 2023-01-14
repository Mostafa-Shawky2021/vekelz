
import { Routes, Route } from 'react-router-dom'
import { layout } from "./components/layout";
import { Layout } from "./components/layout/Layout";
import { Dashboard } from "./pages/dashboard";
import { Booking } from "./pages/booking";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';



function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/booking" element={<Booking />} />
      </Routes>
    </Layout>
  );
}

export default App;
