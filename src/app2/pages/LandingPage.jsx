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

// Import Accordion component
import Accordion from '../../app2/components/Accordion';

// Import React Icons
import { 
  IoSchoolOutline, 
  IoBookOutline, 
  IoVideocamOutline, 
  IoStatsChartOutline, 
  IoRibbonOutline,
  IoChatbubblesOutline,
  IoTimeOutline,
  IoAccessibilityOutline
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

  const images = [appImage1, appImage2, appImage3];
  
  // Course categories for the LMS
  const categories = [
    { icon: <IoSchoolOutline size={40} />, title: "Academic Courses", count: "250+" },
    { icon: <IoBookOutline size={40} />, title: "Professional Skills", count: "180+" },
    { icon: <IoVideocamOutline size={40} />, title: "Creative Arts", count: "120+" },
    { icon: <IoStatsChartOutline size={40} />, title: "Business & Finance", count: "200+" }
  ];
  
  // Learning statistics
  const stats = [
    { count: "15K+", label: "Active Students" },
    { count: "850+", label: "Courses" },
    { count: "120+", label: "Expert Instructors" },
    { count: "95%", label: "Success Rate" }
  ];

  return (
    <div className="font-sans overflow-hidden">
      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Ai-Nsider Logo" className="w-10 h-10 rounded-lg mr-2" />
            <span className={`font-bold text-xl ${scrolled ? 'text-[#8E44AD]' : 'text-white'}`}>Ai-Nsider</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className={`${scrolled ? 'text-[#2A2A2A]' : 'text-white'} hover:text-[#8E44AD] transition-colors duration-300`}>About</a>
            <a href="#features" className={`${scrolled ? 'text-[#2A2A2A]' : 'text-white'} hover:text-[#8E44AD] transition-colors duration-300`}>Features</a>
            <a href="#courses" className={`${scrolled ? 'text-[#2A2A2A]' : 'text-white'} hover:text-[#8E44AD] transition-colors duration-300`}>Courses</a>
            <a href="#testimonials" className={`${scrolled ? 'text-[#2A2A2A]' : 'text-white'} hover:text-[#8E44AD] transition-colors duration-300`}>Testimonials</a>
            <a href="#faq" className={`${scrolled ? 'text-[#2A2A2A]' : 'text-white'} hover:text-[#8E44AD] transition-colors duration-300`}>FAQ</a>
          </div>
          
          <div className="hidden md:block">
            <a href="#download" className="bg-[#8E44AD] text-white px-6 py-2 rounded-full hover:bg-[#6C3483] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Started
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className={`${scrolled ? 'text-[#8E44AD]' : 'text-white'} focus:outline-none`}
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
              <a href="#about" className="block text-[#2A2A2A] hover:text-[#8E44AD] py-2 transition-colors duration-300">About</a>
              <a href="#features" className="block text-[#2A2A2A] hover:text-[#8E44AD] py-2 transition-colors duration-300">Features</a>
              <a href="#courses" className="block text-[#2A2A2A] hover:text-[#8E44AD] py-2 transition-colors duration-300">Courses</a>
              <a href="#testimonials" className="block text-[#2A2A2A] hover:text-[#8E44AD] py-2 transition-colors duration-300">Testimonials</a>
              <a href="#faq" className="block text-[#2A2A2A] hover:text-[#8E44AD] py-2 transition-colors duration-300">FAQ</a>
              <a href="#download" className="block bg-[#8E44AD] text-white px-6 py-2 rounded-full hover:bg-[#6C3483] transition-colors duration-300 text-center">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Gradient Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#9C67B0] to-[#6C3483] text-white pt-28 pb-24 lg:pt-36 lg:pb-32">
        <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-10"></div>
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#D8A9E2] rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#8E44AD] rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <span className="text-sm font-medium">Transform Your Learning Experience</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Welcome to <br />
                <span className="text-[#FFD700]">Ai-Nsider</span> LMS
            </h1>
              
              <p className="text-white/80 text-lg max-w-lg mx-auto lg:mx-0">
                Your complete AI-powered learning management system with everything you need to master new skills, advance your career, and explore your creativity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
                <a href="#courses" className="bg-white text-[#8E44AD] px-8 py-3 rounded-full font-medium hover:bg-[#F7F3FC] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Explore Courses
                </a>
                <a href="#how-it-works" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#9C67B0]/30 to-[#6C3483]/30 rounded-2xl transform rotate-6 scale-105"></div>
                <div className="relative bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-2xl">
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
                          alt={`Ai-Nsider App Screenshot ${index + 1}`}
                          className="w-auto h-auto object-contain rounded-xl" 
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
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.count}</div>
                <div className="text-white/80 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section id="courses" className="py-20 bg-[#F7F3FC]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#8E44AD] bg-[#D8A9E2]/30 px-4 py-1 rounded-full text-sm font-medium">Discover Possibilities</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#2A2A2A]">Explore Our Course Categories</h2>
            <p className="mt-4 text-[#2A2A2A]/70 max-w-2xl mx-auto">
              Our comprehensive learning platform offers a wide range of courses across multiple disciplines to help you achieve your learning goals.
              </p>
            </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-[#8E44AD]">
                <div className="text-[#8E44AD] mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-[#2A2A2A] mb-2">{category.title}</h3>
                <p className="text-[#2A2A2A]/70 mb-4">Find specialized courses in this category designed by experts.</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#8E44AD] font-bold">{category.count} Courses</span>
                  <a href="#" className="text-[#6C3483] hover:text-[#8E44AD]">Explore &rarr;</a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="#all-courses" className="inline-block bg-[#8E44AD] text-white px-8 py-3 rounded-full font-medium hover:bg-[#6C3483] transition-all duration-300 shadow-lg">
              View All Courses
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#8E44AD] bg-[#D8A9E2]/30 px-4 py-1 rounded-full text-sm font-medium">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#2A2A2A]">Powerful Learning Features</h2>
            <p className="mt-4 text-[#2A2A2A]/70 max-w-2xl mx-auto">
              Our LMS platform is packed with innovative features designed to enhance your learning experience and help you achieve your goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-[#F7F3FC] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-[#8E44AD] text-white p-3 rounded-xl inline-block mb-6">
                <IoVideocamOutline size={28} />
              </div>
              <h3 className="text-xl font-semibold text-[#2A2A2A] mb-3">HD Video Courses</h3>
              <p className="text-[#2A2A2A]/70">
                Access high-quality video lessons with professional production value for an immersive learning experience.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-[#F7F3FC] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-[#8E44AD] text-white p-3 rounded-xl inline-block mb-6">
                <IoTimeOutline size={28} />
              </div>
              <h3 className="text-xl font-semibold text-[#2A2A2A] mb-3">Learn at Your Pace</h3>
              <p className="text-[#2A2A2A]/70">
                Study on your own schedule with flexible learning options that fit your lifestyle and commitments.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-[#F7F3FC] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-[#8E44AD] text-white p-3 rounded-xl inline-block mb-6">
                <IoChatbubblesOutline size={28} />
              </div>
              <h3 className="text-xl font-semibold text-[#2A2A2A] mb-3">Community Support</h3>
              <p className="text-[#2A2A2A]/70">
                Join course-specific discussion forums and connect with fellow learners and instructors.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-[#F7F3FC] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-[#8E44AD] text-white p-3 rounded-xl inline-block mb-6">
                <IoStatsChartOutline size={28} />
              </div>
              <h3 className="text-xl font-semibold text-[#2A2A2A] mb-3">Progress Tracking</h3>
              <p className="text-[#2A2A2A]/70">
                Monitor your performance with detailed analytics and progress reports to stay motivated.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-[#F7F3FC] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-[#8E44AD] text-white p-3 rounded-xl inline-block mb-6">
                <IoRibbonOutline size={28} />
              </div>
              <h3 className="text-xl font-semibold text-[#2A2A2A] mb-3">Verified Certificates</h3>
              <p className="text-[#2A2A2A]/70">
                Earn recognized certificates upon course completion to showcase your achievements.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-[#F7F3FC] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-[#8E44AD] text-white p-3 rounded-xl inline-block mb-6">
                <IoAccessibilityOutline size={28} />
              </div>
              <h3 className="text-xl font-semibold text-[#2A2A2A] mb-3">Accessible Learning</h3>
              <p className="text-[#2A2A2A]/70">
                Our platform is designed to be accessible to all learners, including those with disabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-[#9C67B0] to-[#6C3483] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium">Simple Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">How Ai-Nsider Works</h2>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              Get started in just a few easy steps and begin your learning journey today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center">
              <div className="bg-white text-[#8E44AD] font-bold text-2xl h-14 w-14 rounded-full flex items-center justify-center mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Create Your Account</h3>
              <p className="text-white/80">
                Sign up in less than a minute and create your personalized learning profile.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center">
              <div className="bg-white text-[#8E44AD] font-bold text-2xl h-14 w-14 rounded-full flex items-center justify-center mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Choose Your Courses</h3>
              <p className="text-white/80">
                Browse our extensive library and select the courses that match your interests.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center">
              <div className="bg-white text-[#8E44AD] font-bold text-2xl h-14 w-14 rounded-full flex items-center justify-center mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Start Learning</h3>
              <p className="text-white/80">
                Access your course materials anytime, anywhere, and begin your learning journey.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="#download" className="inline-block bg-white text-[#8E44AD] px-8 py-3 rounded-full font-medium hover:bg-[#F7F3FC] transition-all duration-300 shadow-lg">
              Get Started Now
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[#F7F3FC]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#8E44AD] bg-[#D8A9E2]/30 px-4 py-1 rounded-full text-sm font-medium">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#2A2A2A]">What Our Users Say</h2>
            <p className="mt-4 text-[#2A2A2A]/70 max-w-2xl mx-auto">
              Discover how Ai-Nsider has transformed the learning experience for thousands of students worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="h-14 w-14 bg-[#D8A9E2] rounded-full flex items-center justify-center text-[#8E44AD] font-bold text-xl">
                  AK
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[#2A2A2A]">Aisha Khan</h4>
                  <p className="text-[#2A2A2A]/60 text-sm">Data Science Student</p>
                </div>
                <div className="ml-auto text-[#FFD700]">★★★★★</div>
              </div>
              <p className="text-[#2A2A2A]/80 italic">
                "Ai-Nsider transformed my learning journey. The courses are well-structured, and the instructors are experts in their fields. I've gained valuable skills that have directly impacted my career."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="h-14 w-14 bg-[#D8A9E2] rounded-full flex items-center justify-center text-[#8E44AD] font-bold text-xl">
                  BA
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[#2A2A2A]">Bilal Ahmed</h4>
                  <p className="text-[#2A2A2A]/60 text-sm">Software Developer</p>
                </div>
                <div className="ml-auto text-[#FFD700]">★★★★★</div>
              </div>
              <p className="text-[#2A2A2A]/80 italic">
                "The platform is incredibly user-friendly and the content quality is outstanding. I've completed multiple programming courses and the hands-on projects have greatly improved my coding skills."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="h-14 w-14 bg-[#D8A9E2] rounded-full flex items-center justify-center text-[#8E44AD] font-bold text-xl">
                  SM
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[#2A2A2A]">Sara Malik</h4>
                  <p className="text-[#2A2A2A]/60 text-sm">Marketing Professional</p>
                </div>
                <div className="ml-auto text-[#FFD700]">★★★★★</div>
              </div>
              <p className="text-[#2A2A2A]/80 italic">
                "The flexibility of learning at my own pace has been a game-changer. I work full-time, and Ai-Nsider has made it possible for me to upskill without compromising my job commitments."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#8E44AD] bg-[#D8A9E2]/30 px-4 py-1 rounded-full text-sm font-medium">Have Questions?</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#2A2A2A]">Frequently Asked Questions</h2>
            <p className="mt-4 text-[#2A2A2A]/70 max-w-2xl mx-auto">
              Find answers to common questions about our learning platform and courses.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Accordion
              question="How do I enroll in a course?"
              answer="Enrolling is simple! Browse our course catalog, select the course you're interested in, and click the 'Enroll Now' button. Follow the prompts to complete your registration and payment."
            />
            <Accordion
              question="Can I access courses on mobile devices?"
              answer="Yes, our platform is fully responsive and optimized for mobile learning. You can download our app from the App Store or Google Play Store for an enhanced mobile learning experience."
            />
            <Accordion
              question="Are there any prerequisites for the courses?"
              answer="Prerequisites vary by course. Each course description clearly outlines any required prior knowledge or skills. Many of our introductory courses have no prerequisites and are suitable for beginners."
            />
            <Accordion
              question="How do I place an order?"
              answer="Browse our product catalog, select the notebook you desire, add it to your cart, and proceed to checkout to complete your purchase."
            />
            <Accordion
              question="What payment methods are accepted?"
              answer="We accept various payment methods including credit/debit cards, PayPal, and other secure online payment gateways."
            />
            <Accordion
              question="Can I track my order status?"
              answer="Yes, once your order is placed, you can track its status in real-time through your user profile."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#9C67B0] to-[#6C3483] text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Ai-Nsider</h3>
              <p className="text-white/80">Your AI-powered learning companion</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#FFD700] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#FFD700] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#FFD700] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-white/20 mt-6 pt-6">
            <p>&copy; {new Date().getFullYear()} Ai-Nsider. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
