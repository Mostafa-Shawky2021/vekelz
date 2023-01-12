
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { layout } from "./components/layout";
import { Container, Row, Col } from "react-bootstrap";
import { Layout } from "./components/layout/Layout";
import { Dashboard } from "./pages/dashboard";
function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
    </Layout>


  );
}

export default App;
