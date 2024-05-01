import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={UserList} />
        <Route path="/:username" Component={UserDetails} />
      </Routes>
    </Router>
  );
}

export default App;
