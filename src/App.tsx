import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/page";
import Pricing from "./pages/pricing/page";
import Contacts from "./pages/contacts/page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
