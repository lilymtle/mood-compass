// import styling
import "./styles/partials/_global.scss";

// import browsers
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import components
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

// import pages
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { AboutPage } from "./pages/AboutPage/AboutPage.jsx";
import { MoodsPage } from "./pages/MoodsPage/MoodsPage.jsx";
import { EducationalResourcesPage } from "./pages/EducationalResourcesPage/EducationalResourcesPage.jsx";
import { CopingStrategiesPage } from "./pages/CopingStrategiesPage/CopingStrategiesPage.jsx";
import { LoginPage } from "./pages/LoginPage/LoginPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage.jsx";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Hero />

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/about" element={ <AboutPage /> } />
        <Route path="/moods-list" element={ <MoodsPage /> } />
        <Route path="/educational-resources" element={ <EducationalResourcesPage /> } />
        <Route path="/coping-strategies" element={ <CopingStrategiesPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="*" element={ <NotFoundPage /> } />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
