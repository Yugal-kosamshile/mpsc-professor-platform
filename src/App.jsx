import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Lectures from '../components/Lectures'
import Navbar from '../components/Navbar'
import ContactUs from '../components/ContactUs'
import Notes from '../components/Notes'
import AboutUs from '../components/AboutUs'
import './App.css'

function App() { 
  // 1. THIS IS THE MISSING FUNCTION! It finds the ID on the page and scrolls to it smoothly.
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <div className="d-flex flex-column min-vh-100 bg-light">
      
      {/* 2. WE PASS THE FUNCTION TO THE NAVBAR HERE */}
      <Navbar scrollToSection={scrollToSection} />

      <main className="flex-grow-1">
        
        {/* News Ticker */}
        <div className="bg-primary text-white py-2 overflow-hidden position-relative text-nowrap">
          <div className="marquee-content d-inline-block px-4 fw-medium">
            🚨 RECENT UPLOAD: "महाराष्ट्राचा भूगोल | महाराष्ट्रातील राष्ट्रीय उद्याने" out now on the channel &bull; Complete Polity Revision.
          </div>
        </div>

        {/* Sections (Make sure these components have id="videos", id="notes", etc. inside them!) */}
        <Hero scrollToSection={scrollToSection} />
        <Lectures />
        <Notes />
        <AboutUs />
        <ContactUs />
        
      </main>

      <Footer />
      
    </div></>
  )
}

export default App;