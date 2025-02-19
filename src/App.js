import React, { useState, useEffect } from 'react';
import './App.css';
import companyImage from './Image1.jpg';
import companyLogo from './logo.jpg';
import video from './video2.mp4'; 
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image11 from './image11.jpg';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const uspPoints = [
    {
      title: 'LFP Battery',
      content: `Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire associated with other Lithium batteries. These batteries boast a broader temperature range, ideal for the diverse Indian climate. Our technology enhances Rhyno's longevity, complemented by an Active Balancing Smart Battery Management System (BMS) for extended life and reduced maintenance. Each battery undergoes rigorous waterproofing tests according to IP76 standards. But it doesn't stop there—our technology goes the extra mile in ensuring the battery's lasting durability. Connect with us to discover the thoughtful engineering behind our batteries!`
    },
    {
      title: 'Wider Tyres',
      content: `Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast that ensures stability on different terrains such as wet roads, mud, and sand.`
    },
    {
      title: 'Range Prediction',
      content: `Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With Rhyno, you can ride with peace of mind, thanks to the scooter providing precise information about the remaining battery.`
    },
    {
      title: 'Extraordinary Experience',
      content: `Rhyno is more than just a mode of transportation. It is an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication, and a touch of masculinity!`
    },
    {
      title: 'Rugged and Simple Design',
      content: `We’ve had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking in minor accidents, ending up spending weeks and months at service stations for complex repairs. We took a bold step of making something raw, rugged, and practical. We kept it so simple that even your trusted local mechanic can understand and repair most of it. If you have reached this far, why not take a test ride? Click here to locate your nearest dealership or book a test ride at your home!`
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % uspPoints.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [uspPoints.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % uspPoints.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + uspPoints.length) % uspPoints.length);
  };

  return (
    <div className="app-container">
      <video className="background-video" src={video} autoPlay loop muted />
      <header>
        <div className="centered-text">Project By: Shubhangi Sharma</div> {/* Added this line */}
        <div className="company-header">
          <img src={companyLogo} alt="Company Logo" className="company-logo" />
          <div className="company-text">
            <h1 className="company-name">RhynoEv</h1>
            <p className="motto">Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets Style.</p>
          </div>
        </div>
      </header>

      <main>
        <section className="company-info">
          <h2>About Us</h2>
          <p>Established in 2019 by an automotive engineer with a vision for sustainable and robust mobility solutions, Rhyno EV is not just a company; it's a collective effort of a dynamic team of young individuals passionately driving innovation in the electric vehicle industry. We believe in engineering solutions that solve problems.</p>
          <p>With our first product, we've taken a bold step to create something more than just a vehicle; it's a unique experience of elegance, comfort, and style, addressing the pitfalls of conventional electric scooters. Our design prioritizes safety, eliminating concerns of fires and ensuring a longer battery lifespan with our battery technology. Perfectly suited for fleet operators, especially in tourist-centric locations like Goa, our rugged yet aesthetically appealing scooters are engineered for longevity and reliability. Join us as we pioneer a new era in sustainable and dependable electric transportation.</p>
        </section>

        <div className="image-section">
          <img src={companyImage} alt="Company Visual" className="company-image" />
        </div>

        <section className="products-section">
          <h2>Our Products</h2>
          <div className="product-comparison">
            <div className="product-box">
              <h3>Rhyno SE03 Lite</h3>
              <ul>
                <li>Battery: 2.7Kwh</li>
                <li>Battery features: LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</li>
                <li>Battery warranty: 3 years</li>
                <li>Charging time: 4 hours (12A)</li>
                <li>Motor: 1500W</li>
                <li>Max speed: 55 km/h</li>
                <li>Max range (@30km/h): 150 km</li>
                <li>Max range (@45km/h): 110 km</li>
                <li>Max range (@full speed): 90 km</li>
                <li>Other key benefits: Fire-safe Battery, Range prediction, Comfortable ride, Stable and safe</li>
              </ul>
              <img src={image2} alt="Rhyno SE03 Lite" className="product-image" />
            </div>
            <div className="product-box">
              <h3>Rhyno SE03</h3>
              <ul>
                <li>Battery: 2.7Kwh</li>
                <li>Battery features: LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</li>
                <li>Battery warranty: 3 years</li>
                <li>Charging time: 4 hours (12A)</li>
                <li>Motor: 1500W</li>
                <li>Max speed: 55 km/h</li>
                <li>Max range (@30km/h): 150 km</li>
                <li>Max range (@45km/h): 110 km</li>
                <li>Max range (@full speed): 90 km</li>
                <li>Other key benefits: Fire-safe Battery, Range prediction, Comfortable ride, Stable and safe</li>
              </ul>
              <img src={image3} alt="Rhyno SE03" className="product-image" />
            </div>
            <div className="product-box">
              <h3>Rhyno SE03 Max</h3>
              <ul>
                <li>Battery: 2.7Kwh</li>
                <li>Battery features: LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</li>
                <li>Battery warranty: 3 years</li>
                <li>Charging time: 4 hours (12A)</li>
                <li>Motor: 2000W</li>
                <li>Max speed: 65 km/h</li>
                <li>Max range (@30km/h): 150 km</li>
                <li>Max range (@45km/h): 110 km</li>
                <li>Max range (@full speed): 90 km</li>
                <li>Other key benefits: Fire-safe Battery, Range prediction, Comfortable ride, Stable and safe</li>
              </ul>
              <img src={image11} alt="Rhyno SE03 Max" className="product-image" />
            </div>
          </div>
        </section>

        <section className="usp-section">
          <h2>Unique Selling Points</h2>
          <div className="carousel">
            <div className="carousel-slide">
              <h3>{uspPoints[currentIndex].title}</h3>
              <p>{uspPoints[currentIndex].content}</p>
            </div>
          </div>
          <div className="carousel-controls">
            <button className="carousel-control prev" onClick={goToPrevious}>Previous</button>
            <button className="carousel-control next" onClick={goToNext}>Next</button>
          </div>
        </section>

        <section className="contact-us">
          <h2>Contact Us</h2>
          <p>Email: info@rhynoev.com</p>
          <p>Mobile: +91 123 456 7890</p>
          <p>Location: 123 Main Street, City, Country</p>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <p>Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
