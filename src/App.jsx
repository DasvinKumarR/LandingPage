import React from 'react'
import Navigate from './components/navigate'
import Header from './components/header'
import SectionIconGrid from './components/sectionIconGrid'
import SectionImageShowcase from './components/sectionImageShowcase'
import Testimonial from './components/testimonial'
import SignupNow from './components/signupNow'
import Footer from './components/footer'

function App() {
  return (
    <>
      {/* Navigation component call */}
       <Navigate/>
       {/* Header component call */}
       <Header/>
       {/* Icon grid component call */}
       <SectionIconGrid/>
       {/* Image show case component call */}
       <SectionImageShowcase/>
       {/* People review component call */}
       <Testimonial/>
       {/* Signup component call */}
       <SignupNow/>
       {/* Footer component call */}
       <Footer/>
    </>
  )
}

export default App