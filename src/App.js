import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Screens/LandingPage";
import NavBar from "./Components/NavBar";
import AboutUs from "./Screens/AboutUs";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import Privacy from "./Components/Privacy";
import GoogleForm from "./Screens/GoogleForm";
import Teams from "./Screens/Teams";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/form" element={<GoogleForm />} />
            <Route path="/teams" element={<Teams />} />
          </Routes>
        </main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
