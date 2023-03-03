import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./Routers";
import ScrollToTop from "./Component/ScrollToTop";
function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routers />
      </Router>
    </div>
  );
}

export default App;
