import { Header } from "./ui/Header";
import { ThemeProvider } from '@mui/material';
import {theme} from "./ui/Theme";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import Revolution from './pages/Revolution'
import Estimation from './pages/Estimation'
import MobileApps from './pages/MobileApps'
import Websites from './pages/Websites'
import Softwares from './pages/Softwares'
import Services from './pages/Services'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export function App() {
  return (
    <ThemeProvider theme={theme} >
      <Router>
      <Header />
      <Routes>
        <Route path="/"  element={<Home />}></Route>
        <Route path="/services"  element={<Services />}></Route>
        <Route path="/revolution"  element={<Revolution />}></Route>
        <Route path="/about"  element={<About />}></Route>
        <Route path="/contact"  element={<Contact />}></Route>
        <Route path="/custom-software"  element={<Softwares />}></Route>
        <Route path="/mobile-apps"  element={<MobileApps />}></Route>
        <Route path="/estimation"  element={<Estimation />}></Route>
        <Route path="/websites"  element={<Websites />}></Route>
      </Routes>
      </Router>
    </ThemeProvider>
  );
}
