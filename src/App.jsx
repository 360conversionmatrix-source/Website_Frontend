import { useEffect, useState } from 'react';
import Navbar from './Components/Layout/Navbar.jsx';
import Home from './Pages/Home.jsx';
import Preloader from './Components/Layout/Loader.jsx';
import PrivacyComponent from './Components/Privacy.jsx';
import Terms from './Components/Terms.jsx';

// 1. Import your chatbot component here'; // Adjust path if it is placed elsewhere
// import AIChatBot from './Components/Layout/Bot.jsx'; // Adjust path if it is placed elsewhere

function App() {
  const [activeLink, setActiveLink] = useState('Home');
  const [contactType, setContactType] = useState('Select Target Vertical');
  const [selectedService, setSelectedService] = useState('Select Your Vertical');
  
  // Track loading state
  const [loading, setLoading] = useState(true);

  // Read current browser path location directly
  const currentPath = window.location.pathname;

  // Automatically highlights the navbar link based on what section is on screen
  useEffect(() => {
    // Prevent execution if page is still in the custom loading phase or if we're on standalone legal pages
    if (loading || currentPath === '/privacy-policy' || currentPath === '/terms-and-conditions') return; 

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
  }, [loading, currentPath]); // Re-runs cleanly if path configuration modifies

  // If loading is true, ONLY show the preloader and nothing else
  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  // 1. STANDALONE ROUTE: Render Privacy Component exclusively
  if (currentPath === '/privacy-policy') {
    return (
      <div className="min-h-screen bg-white text-black p-6 md:p-12">
        <PrivacyComponent />
      </div>
    );
  }

  // 2. STANDALONE ROUTE: Render Terms Component exclusively
  if (currentPath === '/terms-and-conditions') {
    return (
      <div className="min-h-screen bg-white text-black p-6 md:p-12">
        <Terms />
      </div>
    );
  }

  // 3. MAIN SITE ROUTE: The actual website layout mounts cleanly with Navbar
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

      {/* 2. Placed right at the bottom of your main layout. 
          It stays minimized automatically until clicked. */}
      {/* <AIChatBot /> */}
    </div>
  );
}

export default App; 