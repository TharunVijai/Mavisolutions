import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./Components/Login";
import Home from "./Components/Home";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* LOGIN PAGE */}
        <Route
          path="/"
          element={<Login />}
        />

        {/* HOME PAGE */}
        <Route
          path="/home"
          element={
            localStorage.getItem("isLoggedIn")
              ? <Home />
              : <Navigate to="/" />
          }
        />

        

      </Routes>

    </BrowserRouter>
  );
}

export default App;