import { useEffect, useState } from 'react';
import Navbar from './Components/Layout/Navbar.jsx';
import Home from './Pages/Home.jsx';

function App() {
  const [activeLink, setActiveLink] = useState('Home');

  // Automatically highlights the navbar link based on what section is on screen
  useEffect(() => {
    // Looks for any HTML elements containing an id attribute across the document
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Triggers when a section occupies the upper-middle section of the screen
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Maps section HTML IDs to your exact Navbar text strings perfectly
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
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#020617] text-white selection:bg-[#0077c8]/30">
      {/* Sticky top container to hold your animated header navigation */}
      <div className="sticky top-0 z-50 w-full shadow-2xl">
        <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
      </div>
      
      <main className="flex-grow">
        {/* Home contains all subcomponents layered on a single landing experience */}
        <Home />
      </main>
    </div>
  );
}

export default App;