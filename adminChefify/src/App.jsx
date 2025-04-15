import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import RecipeSection from './components/RecipeSection';
import EditorsPickSection from './components/EditorsPickSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <RecipeSection />
      <EditorsPickSection />
      <Footer />
    </div>
  );
}

export default App;