import "./App.css";
import { Table } from "./components/Table";
// Import BrowserRouter
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Table />
      </div>
    </Router>
  );
}
export default App;
