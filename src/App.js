import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { SignIn } from "./pages/SignIn/SignIn";
import { LogIn } from "./pages/LogIn/LogIn";
import { AdminPage } from "./pages/AdminPage/AdminPage";
import { AuthContext } from "./context/AuthContext";
import { PostsPage } from "./pages/PostsPage/PostsPage";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRout = ({ children }) => {
    if (!currentUser) return <Navigate to="/log-in" />;

    return children;
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <ProtectedRout>
                  <AdminPage />
                </ProtectedRout>
              }
            />
            <Route
              path="/posts"
              element={
                <ProtectedRout>
                  <PostsPage />
                </ProtectedRout>
              }
            />
            <Route path="/log-in" element={<LogIn />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
