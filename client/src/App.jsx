// import styling
import "./styles/partials/_global.scss";

// import browser router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import components
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { FloatingActionButton } from "./components/FloatingActionButton/FloatingActionButton.jsx";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop.js";

// import pages
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { AboutPage } from "./pages/AboutPage/AboutPage.jsx";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage.jsx";
import { FavoritesPage } from "./pages/FavoritesPage/FavoritesPage.jsx";

import { MoodsPage } from "./pages/MoodsPage/MoodsPage.jsx";
import { MoodPage } from "./pages/MoodsPage/MoodPage/MoodPage.jsx";

import { EducationalResourcesPage } from "./pages/EducationalResourcesPage/EducationalResourcesPage.jsx";
import { EducationalResourcePage } from "./pages/EducationalResourcesPage/EducationalResourcePage/EducationalResourcePage.jsx";

import { CopingStrategiesPage } from "./pages/CopingStrategiesPage/CopingStrategiesPage.jsx";
import { CopingStrategyPage } from "./pages/CopingStrategiesPage/CopingStrategyPage/CopingStrategyPage.jsx";

import { RegisterPage } from "./pages/RegisterPage/RegisterPage.jsx";
import { LoginPage } from "./pages/LoginPage/LoginPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage.jsx";

// import authentication
import { AuthProvider } from "./auth/AuthProvider.jsx";

// import protected route
import { ProtectedRoute } from "./auth/ProtectedRoute.jsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Header />
        <Hero />
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/about" element={ <AboutPage /> } />
          <Route path="/moods" element={ <MoodsPage /> } />
          <Route path="/moods/:id" element={ <MoodPage /> } />
          <Route path="/educational-resources" element={ <EducationalResourcesPage /> } />
          <Route path="/educational-resources/:id" element={ <EducationalResourcePage /> } />
          <Route path="/coping-strategies" element={ <CopingStrategiesPage /> } />
          <Route path="/coping-strategies/:id" element={ <CopingStrategyPage /> } />
          <Route path="/login" element={ <LoginPage /> } />
          <Route path="/register" element={ <RegisterPage /> } />
          <Route 
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />
          <Route path="/favorites" element={ 
            <ProtectedRoute>
              <FavoritesPage /> 
            </ProtectedRoute> 
          } />
          <Route path="*" element={ <NotFoundPage /> } />
        </Routes>

        <FloatingActionButton />

        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App
