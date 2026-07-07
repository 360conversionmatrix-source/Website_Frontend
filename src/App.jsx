import { useEffect, useState } from 'react';
import Navbar from './Components/Layout/Navbar.jsx';
import Home from './Pages/Home.jsx';
import Preloader from './Components/Layout/Loader.jsx';

function App() {
  const [activeLink, setActiveLink] = useState('Home');
  const [contactType, setContactType] = useState('Select Target Vertical');
  const [selectedService, setSelectedService] = useState('Select Your Vertical');
  
  // Track loading state
  const [loading, setLoading] = useState(true);

  // Automatically highlights the navbar link based on what section is on screen
  useEffect(() => {
    // Prevent execution if page is still in the custom loading phase
    if (loading) return; 

    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', 
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idToNameMap = {
            'home': 'Home',
            'about-us': 'About Us',
            'services': 'Services',
            'industries': 'Industries',
            'compliance': 'Compliance',
            'partners': 'Partners',
            'contact-us': 'Contact Us' 
          };
          
          const correspondingName = idToNameMap[entry.target.id];
          if (correspondingName) {
            setActiveLink(correspondingName);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [loading]); // Re-runs cleanly after loader vanishes

  // If loading is true, ONLY show the preloader and nothing else
  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  // Once loading is false (hits 100%), the actual website mounts cleanly
  return (
    <div className="min-h-screen flex flex-col bg-[#020617] text-white selection:bg-[#0077c8]/30">
      {/* Sticky top container holding our synchronized Navbar */}
      <Navbar 
        activeLink={activeLink} 
        setActiveLink={setActiveLink} 
        setContactType={setContactType} 
      />
      
      <main className="flex-grow">
        {/* Pass values to Home, which distributes them down to the forms */}
        <Home 
          contactType={contactType} 
          setContactType={setContactType} 
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />
      </main>
    </div>
  );
}

export default App;