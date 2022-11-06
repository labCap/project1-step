import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignIn } from "./pages/SignIn/SignIn";
import { LogIn } from "./pages/LogIn/LogIn";
import { AdminPage } from "./pages/AdminPage/AdminPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<AdminPage />} />
            <Route path="/log-in" element={<LogIn />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
