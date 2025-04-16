// src/components/LandingPage.jsx

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper modules
import { EffectCards, Pagination, Navigation, Autoplay } from 'swiper';

// Import custom CSS
import '../components/styles.css';

// Import images (ensure these paths are correct)
import logo from '../assets/logo.png';
import playStoreBadge from '../assets/play-store-badge.png';
import appStoreBadge from '../assets/app-store-badge.png';
import appImage1 from '../assets/app-image1.jpg';
import appImage2 from '../assets/app-image2.jpg';
import appImage3 from '../assets/app-image3.jpg';
import appImage4 from '../assets/app-image4.jpg';
import appImage5 from '../assets/app-image5.jpg';
import appImage6 from '../assets/app-image6.jpg';
// Add more images as needed

// Import Accordion component
import Accordion from '../components/Accordion'; // Ensure the path is correct

// Import React Icons
import { 
  IoStatsChartOutline, 
  IoTrendingUpOutline, 
  IoBarChartOutline, 
  IoWalletOutline, 
  IoPhonePortraitOutline, 
  IoNotificationsOutline,
  IoSchoolOutline,
  IoSettingsOutline,
  IoShieldCheckmarkOutline,
  IoGlobeOutline
} from 'react-icons/io5';

const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const images = [
    appImage1,
    appImage2,
    appImage3,
    appImage4,
    appImage5,
    appImage6,
    // Add more image imports as needed
  ];

  // Trading features for the platform
  const tradingFeatures = [
    { icon: <IoStatsChartOutline size={40} />, title: "Real-Time Market Data", description: "Access live price updates, charts, and market analysis on major global markets." },
    { icon: <IoTrendingUpOutline size={40} />, title: "Technical Analysis Tools", description: "Utilize powerful technical indicators and drawing tools to analyze price action." },
    { icon: <IoSchoolOutline size={40} />, title: "Trading Education", description: "Learn trading strategies, risk management, and market fundamentals through comprehensive courses." },
    { icon: <IoBarChartOutline size={40} />, title: "Practice Accounts", description: "Hone your skills with paper trading accounts before risking real capital." }
  ];
  
  // Trading statistics
  const tradingStats = [
    { count: "50K+", label: "Active Traders" },
    { count: "100+", label: "Markets" },
    { count: "24/7", label: "Support" },
    { count: "93%", label: "Success Rate" }
  ];

  return (
    <div className="font-sans">
      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-[#1E2A38] py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Learn2Trade Logo" className="w-10 h-10 rounded-lg mr-2" />
            <span className={`font-bold text-xl ${scrolled ? 'text-[#1E2A38]' : 'text-white'}`}>Learn2Trade</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className={`${scrolled ? 'text-[#333333]' : 'text-white'} hover:text-[#007AFF] transition-colors duration-300`}>About</a>
            <a href="#features" className={`${scrolled ? 'text-[#333333]' : 'text-white'} hover:text-[#007AFF] transition-colors duration-300`}>Features</a>
            <a href="#markets" className={`${scrolled ? 'text-[#333333]' : 'text-white'} hover:text-[#007AFF] transition-colors duration-300`}>Markets</a>
            <a href="#testimonials" className={`${scrolled ? 'text-[#333333]' : 'text-white'} hover:text-[#007AFF] transition-colors duration-300`}>Testimonials</a>
            <a href="#faq" className={`${scrolled ? 'text-[#333333]' : 'text-white'} hover:text-[#007AFF] transition-colors duration-300`}>FAQ</a>
          </div>
          
          <div className="hidden md:block">
            <a href="#download" className="bg-[#007AFF] text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Trading
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className={`${scrolled ? 'text-[#1E2A38]' : 'text-white'} focus:outline-none`}
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-xl rounded-b-2xl animate-slideDown">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <a href="#about" className="block text-[#333333] hover:text-[#007AFF] py-2 transition-colors duration-300">About</a>
              <a href="#features" className="block text-[#333333] hover:text-[#007AFF] py-2 transition-colors duration-300">Features</a>
              <a href="#markets" className="block text-[#333333] hover:text-[#007AFF] py-2 transition-colors duration-300">Markets</a>
              <a href="#testimonials" className="block text-[#333333] hover:text-[#007AFF] py-2 transition-colors duration-300">Testimonials</a>
              <a href="#faq" className="block text-[#333333] hover:text-[#007AFF] py-2 transition-colors duration-300">FAQ</a>
              <a href="#download" className="block bg-[#007AFF] text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 text-center">
                Start Trading
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Gradient Background */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1E2A38] to-[#3A4A60] text-white pt-28 pb-24 lg:pt-36 lg:pb-32">
        <div className="absolute top-0 left-0 w-full h-full bg-pattern-grid opacity-5"></div>
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#007AFF] rounded-full filter blur-3xl opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-block px-4 py-1 bg-[#007AFF]/10 backdrop-blur-sm rounded-full mb-4">
                <span className="text-sm font-medium">Trade Smarter • Learn Faster • Grow Together</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Master Trading <br />
                <span className="text-[#34C759]">With Confidence</span>
              </h1>
              
              <p className="text-white/80 text-lg max-w-lg mx-auto lg:mx-0">
                Learn2Trade combines powerful trading tools with expert education to help you navigate financial markets with confidence and precision.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
                <a href="#markets" className="bg-[#007AFF] text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Explore Markets
                </a>
                <a href="#how-it-works" className="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300">
                  How It Works
                </a>
              </div>
              
              <div className="flex justify-center lg:justify-start space-x-4 mt-8">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                  <img src={playStoreBadge} alt="Download on Play Store" className="h-12 transform hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                  <img src={appStoreBadge} alt="Download on App Store" className="h-12 transform hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#007AFF]/20 to-[#34C759]/20 rounded-xl transform rotate-3"></div>
                <div className="relative bg-white/5 backdrop-blur-md p-4 rounded-xl shadow-2xl">
                  <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    navigation={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[EffectCards, Pagination, Navigation, Autoplay]}
                    className="mySwiper w-full mx-auto"
                  >
                    {images.map((src, index) => (
                      <SwiperSlide key={index} className="rounded-xl overflow-hidden">
                        <img 
                          src={src} 
                          alt={`Learn2Trade App Screenshot ${index + 1}`}
                          className="w-auto h-auto rounded-xl" 
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
            {tradingStats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/10">
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.count}</div>
                <div className="text-white/70 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#F5F5F5] py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#007AFF] bg-[#007AFF]/10 px-4 py-1 rounded-full text-sm font-medium">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#1E2A38]">What is Learn2Trade?</h2>
            <p className="mt-4 text-[#333333]/70 max-w-2xl mx-auto">
              Learn2Trade is a comprehensive trading education platform designed to help both beginners and experienced traders navigate financial markets with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-[#1E2A38] mb-6">Trading Education Reimagined</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#007AFF] p-2 rounded-lg text-white mr-4 shrink-0">
                    <IoSchoolOutline size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E2A38] mb-1">Learn from Expert Traders</h4>
                    <p className="text-[#333333]/70">
                      Our curriculum is designed by professional traders with decades of market experience, offering practical knowledge that works in real trading scenarios.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#007AFF] p-2 rounded-lg text-white mr-4 shrink-0">
                    <IoBarChartOutline size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E2A38] mb-1">Practice in Real Market Conditions</h4>
                    <p className="text-[#333333]/70">
                      Our simulator provides real-time market data, allowing you to practice trading strategies without risking real capital.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#007AFF] p-2 rounded-lg text-white mr-4 shrink-0">
                    <IoGlobeOutline size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E2A38] mb-1">Global Trading Community</h4>
                    <p className="text-[#333333]/70">
                      Connect with traders worldwide, share insights, and learn from the collective wisdom of our diverse trading community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-[#007AFF] opacity-5 rounded-xl transform rotate-6"></div>
                <img 
                  src={appImage5} 
                  alt="Learn2Trade App" 
                  className="relative z-10 rounded-xl shadow-xl" 
                />
                <div className="absolute -bottom-6 -right-6 bg-[#34C759] p-3 rounded-lg text-white shadow-lg">
                  <IoTrendingUpOutline size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#007AFF] bg-[#007AFF]/10 px-4 py-1 rounded-full text-sm font-medium">Platform Features</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#1E2A38]">Everything You Need to Succeed</h2>
            <p className="mt-4 text-[#333333]/70 max-w-2xl mx-auto">
              Our platform combines powerful trading tools, comprehensive education, and a supportive community to help you achieve your trading goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#F5F5F5] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-b-2 border-[#007AFF]">
              <div className="text-[#007AFF] mb-6">
                <IoStatsChartOutline size={48} />
              </div>
              <h3 className="text-xl font-semibold text-[#1E2A38] mb-3">Real-Time Market Data</h3>
              <p className="text-[#333333]/70">
                Access live price updates, charts, and market analysis on major global markets including stocks, forex, crypto, and commodities.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-[#F5F5F5] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-b-2 border-[#007AFF]">
              <div className="text-[#007AFF] mb-6">
                <IoSchoolOutline size={48} />
              </div>
              <h3 className="text-xl font-semibold text-[#1E2A38] mb-3">Comprehensive Education</h3>
              <p className="text-[#333333]/70">
                Learn trading strategies, risk management, and market fundamentals through structured courses, webinars, and daily market analysis.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-[#F5F5F5] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-b-2 border-[#007AFF]">
              <div className="text-[#007AFF] mb-6">
                <IoTrendingUpOutline size={48} />
              </div>
              <h3 className="text-xl font-semibold text-[#1E2A38] mb-3">Technical Analysis Tools</h3>
              <p className="text-[#333333]/70">
                Utilize over 100 technical indicators, drawing tools, and pattern recognition to analyze price action and identify trading opportunities.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-[#F5F5F5] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-b-2 border-[#007AFF]">
              <div className="text-[#007AFF] mb-6">
                <IoWalletOutline size={48} />
              </div>
              <h3 className="text-xl font-semibold text-[#1E2A38] mb-3">Practice Accounts</h3>
              <p className="text-[#333333]/70">
                Develop and test your trading strategies using paper trading accounts with virtual money in real market conditions.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-[#F5F5F5] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-b-2 border-[#007AFF]">
              <div className="text-[#007AFF] mb-6">
                <IoNotificationsOutline size={48} />
              </div>
              <h3 className="text-xl font-semibold text-[#1E2A38] mb-3">Trade Alerts</h3>
              <p className="text-[#333333]/70">
                Receive customizable alerts for price movements, technical indicators, and economic events that could impact your trading decisions.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-[#F5F5F5] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-b-2 border-[#007AFF]">
              <div className="text-[#007AFF] mb-6">
                <IoPhonePortraitOutline size={48} />
              </div>
              <h3 className="text-xl font-semibold text-[#1E2A38] mb-3">Mobile Trading</h3>
              <p className="text-[#333333]/70">
                Trade and learn on the go with our powerful mobile app available for iOS and Android devices with full platform functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section id="markets" className="py-20 bg-gradient-to-r from-[#1E2A38] to-[#3A4A60] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium">Global Markets</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">Markets You Can Trade</h2>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              Access a wide range of global markets to diversify your trading portfolio and discover new opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Market 1 - Forex */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 text-center border border-white/10">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">FX</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Forex</h3>
              <p className="text-white/70 text-sm">
                Major, minor and exotic currency pairs with competitive spreads
              </p>
            </div>
            
            {/* Market 2 - Stocks */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 text-center border border-white/10">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">S</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Stocks</h3>
              <p className="text-white/70 text-sm">
                Global shares from leading exchanges including NYSE, NASDAQ and more
              </p>
            </div>
            
            {/* Market 3 - Crypto */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 text-center border border-white/10">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">₿</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Crypto</h3>
              <p className="text-white/70 text-sm">
                Trade popular cryptocurrencies including Bitcoin, Ethereum and altcoins
              </p>
            </div>
            
            {/* Market 4 - Commodities */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 text-center border border-white/10">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">C</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Commodities</h3>
              <p className="text-white/70 text-sm">
                Trade gold, silver, oil and other popular commodities
              </p>
            </div>
            
            {/* Market 5 - Indices */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 text-center border border-white/10">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">I</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Indices</h3>
              <p className="text-white/70 text-sm">
                Major global indices including S&P 500, NASDAQ, FTSE and more
              </p>
            </div>
            
            {/* Market 6 - ETFs */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 text-center border border-white/10">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">E</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">ETFs</h3>
              <p className="text-white/70 text-sm">
                Trade sector-specific and broad market ETFs with low fees
              </p>
            </div>
            
            {/* Market 7 - Options */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 text-center border border-white/10">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">O</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Options</h3>
              <p className="text-white/70 text-sm">
                Learn and trade options strategies for various market conditions
              </p>
            </div>
            
            {/* Market 8 - Futures */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 text-center border border-white/10">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">F</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Futures</h3>
              <p className="text-white/70 text-sm">
                Trade futures contracts across multiple asset classes
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="#download" className="inline-block bg-[#007AFF] text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-all duration-300 shadow-lg">
              Start Trading Now
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#007AFF] bg-[#007AFF]/10 px-4 py-1 rounded-full text-sm font-medium">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#1E2A38]">What Our Traders Say</h2>
            <p className="mt-4 text-[#333333]/70 max-w-2xl mx-auto">
              Hear from traders who have transformed their trading journey with Learn2Trade.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-[#F5F5F5] p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="h-14 w-14 bg-[#007AFF]/20 rounded-full flex items-center justify-center text-[#007AFF] font-bold text-xl">
                  JD
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[#1E2A38]">Jack Donovan</h4>
                  <p className="text-[#333333]/60 text-sm">Forex Trader</p>
                </div>
                <div className="ml-auto text-[#FFD700]">★★★★★</div>
              </div>
              <p className="text-[#333333]/80 italic">
                "Learn2Trade completely changed my approach to trading. The structured courses helped me build a solid foundation, and the simulator allowed me to practice risk-free until I was confident enough to trade live."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-[#F5F5F5] p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="h-14 w-14 bg-[#007AFF]/20 rounded-full flex items-center justify-center text-[#007AFF] font-bold text-xl">
                  SL
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[#1E2A38]">Sarah Liu</h4>
                  <p className="text-[#333333]/60 text-sm">Stock Trader</p>
                </div>
                <div className="ml-auto text-[#FFD700]">★★★★★</div>
              </div>
              <p className="text-[#333333]/80 italic">
                "As a busy professional, I needed a platform that could fit my schedule. Learn2Trade's mobile app allowed me to learn and practice on the go. The technical analysis tools are intuitive and powerful."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-[#F5F5F5] p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="h-14 w-14 bg-[#007AFF]/20 rounded-full flex items-center justify-center text-[#007AFF] font-bold text-xl">
                  MR
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[#1E2A38]">Michael Rivera</h4>
                  <p className="text-[#333333]/60 text-sm">Crypto Trader</p>
                </div>
                <div className="ml-auto text-[#FFD700]">★★★★★</div>
              </div>
              <p className="text-[#333333]/80 italic">
                "The community aspect of Learn2Trade is invaluable. Being able to discuss ideas with other traders and get feedback from professionals accelerated my learning curve tremendously."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#007AFF] bg-[#007AFF]/10 px-4 py-1 rounded-full text-sm font-medium">Have Questions?</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#1E2A38]">Frequently Asked Questions</h2>
            <p className="mt-4 text-[#333333]/70 max-w-2xl mx-auto">
              Find answers to common questions about Learn2Trade and our platform.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Accordion
              question="Do I need previous trading experience to use Learn2Trade?"
              answer="No, our platform is designed for traders of all levels. We provide comprehensive beginner courses that start with the basics and gradually progress to more advanced concepts."
            />
            <Accordion
              question="Can I practice trading without risking real money?"
              answer="Yes, our platform includes a powerful simulator that allows you to practice trading with virtual funds in real market conditions. This is an essential step in our learning process before trading with real capital."
            />
            <Accordion
              question="What markets can I trade on Learn2Trade?"
              answer="Our platform provides access to multiple global markets including forex, stocks, cryptocurrencies, commodities, indices, ETFs, options, and futures, all with educational content specific to each market."
            />
            <Accordion
              question="Is Learn2Trade available on mobile devices?"
              answer="Yes, our platform is fully optimized for mobile use with dedicated apps for iOS and Android. You can learn, practice, and trade on the go with all the features available on the desktop version."
            />
            <Accordion
              question="How does the community feature work?"
              answer="Our community platform allows you to connect with other traders, join discussion groups, participate in trading challenges, and learn from experienced mentors through webinars and live trading sessions."
            />
            <Accordion
              question="Do you offer customer support for trading questions?"
              answer="Yes, we provide comprehensive support through multiple channels. Our team includes experienced traders who can answer technical questions about trading strategies and platform features."
            />
          </div>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section id="terms" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#007AFF] bg-[#007AFF]/10 px-4 py-1 rounded-full text-sm font-medium">Legal</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#1E2A38]">Terms and Conditions</h2>
            <p className="mt-4 text-[#333333]/70 max-w-2xl mx-auto">
              Important information about using our platform. We're committed to transparency and compliance.
            </p>
          </div>
          <div className="max-w-3xl mx-auto bg-[#F5F5F5] p-8 rounded-xl shadow-md space-y-6">
            <p className="text-[#333333]/80">
              Welcome to Learn2Trade! By accessing or using our platform, you agree to be bound by these Terms and Conditions. Please read them carefully.
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-[#007AFF] pl-4">
                <h3 className="text-xl font-semibold text-[#1E2A38]">1. Use of the Platform</h3>
                <p className="text-[#333333]/80 mt-2">
                  You agree to use Learn2Trade only for lawful purposes and in accordance with financial regulations in your jurisdiction.
                </p>
              </div>
              <div className="border-l-4 border-[#007AFF] pl-4">
                <h3 className="text-xl font-semibold text-[#1E2A38]">2. User Accounts</h3>
                <p className="text-[#333333]/80 mt-2">
                  You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
                </p>
              </div>
              <div className="border-l-4 border-[#007AFF] pl-4">
                <h3 className="text-xl font-semibold text-[#1E2A38]">3. Financial Risk Disclosure</h3>
                <p className="text-[#333333]/80 mt-2">
                  Trading financial instruments carries significant risk. Past performance is not indicative of future results. You should consider whether you understand how trading works and if you can afford to take the high risk of losing your money.
                </p>
              </div>
              <div className="border-l-4 border-[#007AFF] pl-4">
                <h3 className="text-xl font-semibold text-[#1E2A38]">4. Privacy</h3>
                <p className="text-[#333333]/80 mt-2">
                  Your privacy is important to us. Please refer to our Privacy Policy for information on how we collect, use, and protect your personal data.
                </p>
              </div>
              <div className="border-l-4 border-[#007AFF] pl-4">
                <h3 className="text-xl font-semibold text-[#1E2A38]">5. Changes to Terms</h3>
                <p className="text-[#333333]/80 mt-2">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting in the platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Tools Highlight Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E2A38] to-[#3A4A60] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium">Professional Tools</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">Advanced Trading Tools</h2>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              Get access to professional-grade tools that help you analyze markets and execute trades with precision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tool 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-all duration-300">
              <div className="mb-4 w-12 h-12 bg-[#007AFF] rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Charting</h3>
              <p className="text-white/70">
                Multiple chart types, 100+ technical indicators, and drawing tools to analyze price action with precision.
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <span className="text-[#34C759] text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Included in all plans
                </span>
              </div>
            </div>
            
            {/* Tool 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-all duration-300">
              <div className="mb-4 w-12 h-12 bg-[#007AFF] rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Trade Scanner</h3>
              <p className="text-white/70">
                Leverage machine learning algorithms to scan thousands of assets and identify potential trading opportunities.
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <span className="text-[#34C759] text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Premium feature
                </span>
              </div>
            </div>
            
            {/* Tool 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-all duration-300">
              <div className="mb-4 w-12 h-12 bg-[#007AFF] rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Alerts</h3>
              <p className="text-white/70">
                Set custom alerts for price movements, indicator crossovers, and economic events delivered instantly to your device.
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <span className="text-[#34C759] text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Included in all plans
                </span>
              </div>
            </div>
            
            {/* Tool 4 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-all duration-300">
              <div className="mb-4 w-12 h-12 bg-[#007AFF] rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Risk Calculator</h3>
              <p className="text-white/70">
                Advanced risk management tools to calculate position sizes, profit targets, and risk-to-reward ratios for each trade.
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <span className="text-[#34C759] text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Included in all plans
                </span>
              </div>
            </div>
            
            {/* Tool 5 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-all duration-300">
              <div className="mb-4 w-12 h-12 bg-[#007AFF] rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Community</h3>
              <p className="text-white/70">
                Connect with professional traders, join discussion forums, and participate in live trading sessions and webinars.
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <span className="text-[#34C759] text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Premium feature
                </span>
              </div>
            </div>
            
            {/* Tool 6 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-all duration-300">
              <div className="mb-4 w-12 h-12 bg-[#007AFF] rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Economic Calendar</h3>
              <p className="text-white/70">
                Comprehensive calendar with economic events, earnings releases, and central bank announcements with market impact ratings.
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <span className="text-[#34C759] text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Included in all plans
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="#download" className="inline-block bg-[#007AFF] text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-all duration-300 shadow-lg">
              Explore All Tools
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#007AFF] bg-[#007AFF]/10 px-4 py-1 rounded-full text-sm font-medium">Pricing Plans</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#1E2A38]">Choose Your Trading Journey</h2>
            <p className="mt-4 text-[#333333]/70 max-w-2xl mx-auto">
              Flexible plans designed to match your trading goals and experience level.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <div className="bg-[#F5F5F5] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1E2A38]">Starter</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-[#1E2A38]">Free</span>
                </div>
                <p className="mt-2 text-[#333333]/70">Perfect for beginners exploring trading basics</p>
                
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#34C759] mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#333333]">Basic charting tools</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#34C759] mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#333333]">Limited practice account</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#34C759] mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#333333]">5 beginner courses</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#34C759] mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#333333]">Community forum access</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-white">
                <a href="#download" className="block w-full py-3 px-6 text-center rounded-lg border border-[#007AFF] text-[#007AFF] font-medium hover:bg-[#007AFF]/5 transition-colors duration-300">
                  Get Started
                </a>
              </div>
            </div>
            
            {/* Premium Plan */}
            <div className="bg-[#1E2A38] rounded-xl overflow-hidden shadow-xl transform scale-105 md:scale-110 z-10 relative">
              <div className="absolute top-0 right-0 bg-[#007AFF] text-white text-xs font-bold uppercase py-1 px-3 rounded-bl-lg">
                Popular
              </div>
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold">Premium</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="ml-1 text-white/70">/month</span>
                </div>
                <p className="mt-2 text-white/70">For serious traders ready to advance</p>
                
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#34C759] mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">Advanced charting package</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#34C759] mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">Unlimited practice account</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#34C759] mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">Full course library access</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#34C759] mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">Weekly webinars</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#34C759] mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">Trading signals (20/month)</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-[#2D3A48]">
                <a href="#download" className="block w-full py-3 px-6 text-center rounded-lg bg-[#007AFF] text-white font-medium hover:bg-blue-600 transition-colors duration-300">
                  Start Free Trial
                </a>
              </div>
            </div>
            
            {/* Pro Plan */}
            <div className="bg-[#F5F5F5] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1E2A38]">Professional</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-[#1E2A38]">$99</span>
                  <span className="ml-1 text-[#333333]/70">/month</span>
                </div>
                <p className="mt-2 text-[#333333]/70">For professionals and institutional traders</p>
                
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#34C759] mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#333333]">Everything in Premium</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#34C759] mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#333333]">AI trade scanner</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#34C759] mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#333333]">1-on-1 coaching sessions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#34C759] mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#333333]">Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#34C759] mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#333333]">Unlimited trading signals</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-white">
                <a href="#download" className="block w-full py-3 px-6 text-center rounded-lg border border-[#007AFF] text-[#007AFF] font-medium hover:bg-[#007AFF]/5 transition-colors duration-300">
                  Get Started
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-[#333333]/70 mb-4">All plans include a 7-day free trial. No credit card required.</p>
            <p className="text-[#333333]/70">Need a custom enterprise solution? <a href="#contact" className="text-[#007AFF] font-medium hover:underline">Contact us</a> for tailored pricing.</p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gradient-to-r from-[#1E2A38] to-[#3A4A60] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Trading Journey Today</h2>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Download Learn2Trade now and join thousands of traders worldwide who are learning, practicing, and succeeding in the financial markets.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
              <img src={playStoreBadge} alt="Download on Play Store" className="h-16" />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
              <img src={appStoreBadge} alt="Download on App Store" className="h-16" />
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left border border-white/10">
              <div className="flex items-center mb-4">
                <div className="bg-[#007AFF] p-2 rounded-lg">
                  <IoShieldCheckmarkOutline size={24} />
                </div>
                <h3 className="text-xl font-semibold ml-3">Secure & Protected</h3>
              </div>
              <p className="text-white/80">
                Your data and virtual trading accounts are protected with enterprise-grade encryption and security protocols.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left border border-white/10">
              <div className="flex items-center mb-4">
                <div className="bg-[#34C759] p-2 rounded-lg">
                  <IoSettingsOutline size={24} />
                </div>
                <h3 className="text-xl font-semibold ml-3">Regular Updates</h3>
              </div>
              <p className="text-white/80">
                Our platform is continuously improved with new features, educational content, and market tools based on user feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#007AFF] bg-[#007AFF]/10 px-4 py-1 rounded-full text-sm font-medium">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#1E2A38]">Contact Our Team</h2>
            <p className="mt-4 text-[#333333]/70 max-w-2xl mx-auto">
              Have questions about Learn2Trade? Our team of trading experts is here to help you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <form className="space-y-6" action="https://formspree.io/f/{your_form_id}" method="POST">
                <div>
                  <label htmlFor="name" className="block text-[#1E2A38] font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF] bg-white"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#1E2A38] font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF] bg-white"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-[#1E2A38] font-semibold mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full p-3 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF] bg-white"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Account Questions">Account Questions</option>
                    <option value="Trading Education">Trading Education</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-[#1E2A38] font-semibold mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full p-3 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF] bg-white"
                    placeholder="How can we help you?"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#007AFF] text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="flex flex-col justify-center space-y-8">
              <div className="flex items-start">
                <div className="bg-[#007AFF] p-3 rounded-lg text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-[#1E2A38]">Support Hotline</h3>
                  <p className="text-[#333333]/70 mt-2">Our support team is available 24/7 to assist you.</p>
                  <a href="tel:+18001234567" className="text-[#007AFF] font-medium mt-1 inline-block hover:underline">+1 (800) 123-4567</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#007AFF] p-3 rounded-lg text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-[#1E2A38]">Email Us</h3>
                  <p className="text-[#333333]/70 mt-2">For general inquiries and support requests.</p>
                  <a href="mailto:support@learn2trade.com" className="text-[#007AFF] font-medium mt-1 inline-block hover:underline">support@learn2trade.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#007AFF] p-3 rounded-lg text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-[#1E2A38]">Live Chat</h3>
                  <p className="text-[#333333]/70 mt-2">Chat with our trading experts in real-time.</p>
                  <a href="#" className="text-[#007AFF] font-medium mt-1 inline-block hover:underline">Start Live Chat</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#007AFF] p-3 rounded-lg text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13c-1.168-.775-2.754-1.253-4.5-1.253-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-[#1E2A38]">Knowledge Base</h3>
                  <p className="text-[#333333]/70 mt-2">Find answers in our comprehensive documentation.</p>
                  <a href="#" className="text-[#007AFF] font-medium mt-1 inline-block hover:underline">Visit Knowledge Base</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#007AFF] bg-[#007AFF]/10 px-4 py-1 rounded-full text-sm font-medium">Simple Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#1E2A38]">How Learn2Trade Works</h2>
            <p className="mt-4 text-[#333333]/70 max-w-2xl mx-auto">
              Our structured approach helps you develop from a complete beginner to a confident trader in three simple steps.
            </p>
          </div>
          
          <div className="relative">
            {/* Progress Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#007AFF]/20 transform -translate-x-1/2"></div>
            
            <div className="space-y-24 relative">
              {/* Step 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <div className="bg-[#007AFF]/10 inline-block px-3 py-1 rounded-full text-[#007AFF] text-sm font-medium mb-4">Step 1</div>
                  <h3 className="text-2xl font-bold text-[#1E2A38] mb-3">Learn the Fundamentals</h3>
                  <p className="text-[#333333]/70 max-w-md ml-auto">
                    Begin with our comprehensive courses covering trading basics, market structure, chart analysis, and risk management principles.
                  </p>
                </div>
                <div className="relative order-1 md:order-2">
                  <div className="hidden md:block absolute left-0 top-1/2 w-6 h-6 bg-[#007AFF] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#007AFF]">
                    <div className="bg-[#007AFF] text-white p-3 inline-block rounded-lg mb-4">
                      <IoSchoolOutline size={28} />
                    </div>
                    <h4 className="text-lg font-semibold text-[#1E2A38] mb-2">Structured Learning Path</h4>
                    <p className="text-[#333333]/70">
                      From basic terminology to advanced concepts, our curriculum is designed to build your knowledge step by step.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className="hidden md:block absolute right-0 top-1/2 w-6 h-6 bg-[#007AFF] rounded-full transform translate-x-1/2 -translate-y-1/2 z-10"></div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-[#007AFF]">
                    <div className="bg-[#007AFF] text-white p-3 inline-block rounded-lg mb-4">
                      <IoBarChartOutline size={28} />
                    </div>
                    <h4 className="text-lg font-semibold text-[#1E2A38] mb-2">Practice Makes Perfect</h4>
                    <p className="text-[#333333]/70">
                      Apply what you've learned in a risk-free environment using historical data and real-time market conditions.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="bg-[#007AFF]/10 inline-block px-3 py-1 rounded-full text-[#007AFF] text-sm font-medium mb-4">Step 2</div>
                  <h3 className="text-2xl font-bold text-[#1E2A38] mb-3">Practice in a Simulator</h3>
                  <p className="text-[#333333]/70 max-w-md">
                    Put theory into practice with our advanced trading simulator. Test strategies, analyze trades, and refine your approach without risking real capital.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <div className="bg-[#007AFF]/10 inline-block px-3 py-1 rounded-full text-[#007AFF] text-sm font-medium mb-4">Step 3</div>
                  <h3 className="text-2xl font-bold text-[#1E2A38] mb-3">Trade with Confidence</h3>
                  <p className="text-[#333333]/70 max-w-md ml-auto">
                    Once you've mastered the fundamentals and proven your strategy in simulation, apply your skills in live markets with ongoing support from our community.
                  </p>
                </div>
                <div className="relative order-1 md:order-2">
                  <div className="hidden md:block absolute left-0 top-1/2 w-6 h-6 bg-[#007AFF] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#007AFF]">
                    <div className="bg-[#007AFF] text-white p-3 inline-block rounded-lg mb-4">
                      <IoTrendingUpOutline size={28} />
                    </div>
                    <h4 className="text-lg font-semibold text-[#1E2A38] mb-2">Continuous Improvement</h4>
                    <p className="text-[#333333]/70">
                      Review your performance, learn from experienced traders, and continuously refine your strategy as you grow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E2A38] text-white py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src={logo} alt="Learn2Trade Logo" className="w-10 h-10 rounded-lg mr-2" />
                <span className="font-bold text-xl">Learn2Trade</span>
              </div>
              <p className="text-white/60 mb-4">
                Your complete trading education platform combining powerful tools with expert knowledge.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/80 hover:text-[#007AFF]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-white/80 hover:text-[#007AFF]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-white/80 hover:text-[#007AFF]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Products</h3>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-[#007AFF]">Trading Platform</a></li>
                <li><a href="#" className="hover:text-[#007AFF]">Mobile App</a></li>
                <li><a href="#" className="hover:text-[#007AFF]">Practice Accounts</a></li>
                <li><a href="#" className="hover:text-[#007AFF]">Premium Courses</a></li>
                <li><a href="#" className="hover:text-[#007AFF]">Trading Signals</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-[#007AFF]">Blog</a></li>
                <li><a href="#" className="hover:text-[#007AFF]">Market News</a></li>
                <li><a href="#" className="hover:text-[#007AFF]">Economic Calendar</a></li>
                <li><a href="#" className="hover:text-[#007AFF]">Trading Guides</a></li>
                <li><a href="#" className="hover:text-[#007AFF]">Video Tutorials</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-[#007AFF]">About Us</a></li>
                <li><a href="#" className="hover:text-[#007AFF]">Careers</a></li>
                <li><a href="#" className="hover:text-[#007AFF]">Contact</a></li>
                <li><a href="#" className="hover:text-[#007AFF]">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#007AFF]">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">&copy; {new Date().getFullYear()} Learn2Trade. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-white/60 text-sm hover:text-[#007AFF] mx-3">Privacy</a>
              <a href="#" className="text-white/60 text-sm hover:text-[#007AFF] mx-3">Terms</a>
              <a href="#" className="text-white/60 text-sm hover:text-[#007AFF] mx-3">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

