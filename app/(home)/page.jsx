import React from 'react'
import HeroSection from './components/HeroSection'
import TechStack from './components/TechStack'
import ExperienceSection from './components/Experience'
import Certifications from './components/Certifications'
import Activities from './components/Activities'
import Education from './components/Education'
import ContactCTA from './components/ContactCTA'

export const metadata = {
  title: "Vinay N - Home",
  description: "Portfolio of Vinay N, Embedded Systems Engineer & Prompt Engineer.",
};

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TechStack />
      <ExperienceSection />
      <Education />
      <Certifications />
      <Activities />

      <ContactCTA />
    </div>
  )
}

export default Home