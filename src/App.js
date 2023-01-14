
import { Routes, Route } from 'react-router-dom'
import { layout } from "./components/layout";
import { Layout } from "./components/layout/Layout";
import { Dashboard } from "./pages/dashboard";
import { Booking } from "./pages/booking";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

const NotFound = () => {
  return (
    <div style={{ height: '100%' }}>
      Not found page
    </div>
  )
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/booking" element={<Booking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
