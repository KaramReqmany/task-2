

import './App.css'
import BenefitsSection from './componants/BenefitsSection/BenefitsSection'
import Header from './componants/Header/Header'
import Hero from './componants/Hero/Hero'
import HomeSection from './componants/HomeSection/HomeSection'

import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonials from './componants/Testimonials/Testimonials'
import Questions from './componants/Questions/Questions'
import Explore from './componants/ExploreSection/Explore'
import Navbar from './componants/Navbar/Navbar'
import NavAdmission from './componants/NavAdmission/NavAdmission'


function App() {


  return (
    <>
      <div>
        <NavAdmission/>
        <Navbar/>
        <HomeSection />
        <BenefitsSection />
        <Testimonials/>
        <Questions/>
        <Explore/>
      </div>

    </>
  )
}

export default App
