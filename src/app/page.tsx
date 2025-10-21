"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/lib/hooks/auth/AuthContext";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { isAuthenticated, logout } = useAuthContext();

  const handleLogout = () => {
    const redirect = logout("/");
    router.push(redirect);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Star-like particles */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            radial-gradient(2px 2px at 20px 30px, white, transparent),
            radial-gradient(2px 2px at 40px 70px, white, transparent),
            radial-gradient(1px 1px at 90px 40px, white, transparent),
            radial-gradient(1px 1px at 130px 80px, white, transparent),
            radial-gradient(2px 2px at 160px 30px, white, transparent)
          `,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 100px'
        }}></div>
        
        {/* Glowing abstract lines - orange/red on right */}
        <div className="absolute top-0 right-0 w-96 h-full opacity-20">
          <div className="absolute top-20 right-20 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-40 w-32 h-32 bg-red-500 rounded-full blur-2xl"></div>
          <div className="absolute top-60 right-60 w-48 h-48 bg-orange-400 rounded-full blur-3xl"></div>
        </div>
        
        {/* Glowing abstract lines - blue/teal on left */}
        <div className="absolute top-0 left-0 w-96 h-full opacity-15">
          <div className="absolute top-32 left-20 w-48 h-48 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute top-52 left-40 w-32 h-32 bg-teal-400 rounded-full blur-2xl"></div>
          <div className="absolute top-72 left-60 w-40 h-40 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-50 px-4 sm:px-6 py-3 sm:py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-orange rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">P</span>
            </div>
            <span className="text-white text-xl sm:text-2xl font-bold">Postiva</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="/services" className="text-white hover:text-orange-400 transition-colors text-sm xl:text-base relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/pricing" className="text-white hover:text-orange-400 transition-colors text-sm xl:text-base relative group">
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="text-white hover:text-orange-400 transition-colors text-sm xl:text-base relative group">
              Contact us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-white hover:text-orange-400 transition-colors text-sm xl:text-base relative group">
              About us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {isAuthenticated ? (
              <>
                <button
                  className="text-white hover:text-orange-400 transition-colors font-medium text-sm xl:text-base"
                  onClick={() => router.push("/dashboard")}
                >
                  Dashboard
                </button>
                <button
                  className="bg-gray-800 text-white px-4 xl:px-6 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors text-sm xl:text-base"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/signin"
                  className="text-white hover:text-orange-400 transition-colors font-medium text-sm xl:text-base"
                >
                  Login
                </Link>
                <Link
                  href="/auth/signup"
                  className="bg-gradient-orange text-white px-4 xl:px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 pulse-glow text-sm xl:text-base"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-9999">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-orange-500/95 backdrop-blur-md"></div>
            
            {/* Menu Content */}
            <div className="relative h-full overflow-y-auto z-10000">
              <div className="bg-orange-600/90 backdrop-blur-sm border-t border-orange-400/30">
                {/* Close Button */}
                <div className="flex justify-end p-4">
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white hover:text-orange-200 transition-colors p-2"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="px-4 sm:px-6 pb-6 space-y-6">
                  {/* Auth Buttons - Top */}
                  

                  {/* Navigation Links */}
                  <div className="space-y-4">
                    <Link 
                      href="/services" 
                      className="block text-white hover:text-orange-200 transition-colors py-4 text-lg text-center font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Services
                    </Link>
                    <Link 
                      href="/contact" 
                      className="block text-white hover:text-orange-200 transition-colors py-4 text-lg text-center font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact us
                    </Link>
                    <Link 
                      href="/about" 
                      className="block text-white hover:text-orange-200 transition-colors py-4 text-lg text-center font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About us
                    </Link>
                  </div>

                  {/* Pricing AI Powered Card */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                    <div className="text-center">
                      <h3 className="text-white text-xl font-bold mb-3">Pricing AI Powered</h3>
                      <div className="flex justify-center mb-2">
                        <div className="flex space-x-1">
                          <span className="text-yellow-300 text-lg">★★★★★</span>
                        </div>
                      </div>
                      <p className="text-orange-100 text-sm">115+ happy clients</p>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3 pt-4">
                    {isAuthenticated ? (
                      <>
                        <button
                          className="block bg-white text-orange-600 px-6 py-4 rounded-xl font-bold text-lg hover:bg-orange-100 transition-all duration-300 text-center shadow-lg"
                          onClick={() => {
                            setIsMenuOpen(false);
                            router.push("/dashboard");
                          }}
                        >
                          Dashboard
                        </button>
                        <button
                          className="block bg-white text-orange-600 px-6 py-4 rounded-xl font-bold text-lg hover:bg-orange-100 transition-all duration-300 text-center shadow-lg"
                          onClick={() => {
                            setIsMenuOpen(false);
                            handleLogout();
                          }}
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          href="/auth/signin"
                          className="block bg-white text-orange-600 px-6 py-4 rounded-xl font-bold text-lg hover:bg-orange-100 transition-all duration-300 text-center shadow-lg"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Login
                        </Link>
                        <Link
                          href="/auth/signup"
                          className="block bg-white text-orange-600 px-6 py-4 rounded-xl font-bold text-lg hover:bg-orange-100 transition-all duration-300 text-center shadow-lg"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>

                  {/* Descriptive Text */}
                  <div className="pt-4">
                    <p className="text-white text-sm leading-relaxed text-center">
                      Our AI-powered SaaS platform empowers businesses to streamline operations, 
                      automate repetitive tasks, and make smarter, data-driven decisions—all from 
                      one intuitive dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20"
        >
          <div className="relative w-full h-full">
            {/* Background decorations - Responsive */}
            <div className="absolute top-0 left-1/2 translate-x-[50px] sm:translate-x-[100px] md:translate-x-[194px] w-[300px] sm:w-[500px] md:w-[774px] h-[400px] sm:h-[600px] md:h-[985px] opacity-20">
              <div className="w-full h-full bg-linear-to-br from-orange-500/20 to-transparent rounded-full blur-3xl"></div>
            </div>
            <div className="absolute top-0 left-1/2 translate-x-[-200px] sm:translate-x-[-400px] md:translate-x-[-860px] w-[250px] sm:w-[400px] md:w-[666px] h-[400px] sm:h-[600px] md:h-[985px] opacity-15">
              <div className="w-full h-full bg-linear-to-br from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
            </div>
          </div>

          <div className="absolute top-0 left-1/2 translate-x-[100px] sm:translate-x-[200px] md:translate-x-[341px] w-[400px] sm:w-[800px] md:w-[1259px] h-[300px] sm:h-[500px] md:h-[796px] opacity-10">
            <div className="w-full h-full bg-linear-to-br from-orange-400/30 to-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="relative flex flex-col w-full max-w-[1005px] mx-auto items-center gap-4 sm:gap-6 md:gap-[27px] pt-8 sm:pt-12 md:pt-[50px] px-4">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex flex-row items-center gap-3 px-4 py-3 rounded-[50.9px] border-[0.94px] border-[#ffffff26] bg-[linear-gradient(90deg,rgba(255,84,31,0.13)_0%,rgba(255,84,31,0.04)_100%)] h-auto"
            >
              <div className="flex items-center justify-center">
                <span className="text-white font-semibold text-sm">AI Powered</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-yellow-400 text-sm">★★★★★</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="font-normal text-[#ffffffa6] text-sm tracking-[-0.36px] leading-[21.8px] whitespace-nowrap">
                  115+ happy clients
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="self-stretch font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] text-center tracking-[0] leading-tight sm:leading-normal md:leading-[88px]"
            >
              <span className="text-white">Automate </span>
              <span className="text-[#ff531f]">Intelligence</span>
              <span className="text-white"> Accelerate Growth</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full max-w-[681px] font-normal text-[#ffffffb2] text-base sm:text-lg md:text-xl lg:text-[22px] text-center tracking-[0] leading-relaxed px-4"
            >
              Our AI-powered SaaS platform empowers businesses to streamline
              operations, automate repetitive tasks, and make smarter, data-driven
              decisions—all from one intuitive dashboard.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-[23px] w-full sm:w-auto px-4 sm:px-0"
            >
              {isAuthenticated ? (
                <button
                  onClick={() => router.push("/dashboard")}
                  className="w-full sm:w-auto px-[35px] py-[15px] bg-[#ff531f] hover:bg-[#ff531f]/90 rounded-[10px] h-auto transition-all duration-300 text-center"
                >
                  <span className="font-bold text-white text-lg sm:text-xl tracking-[0] leading-[19.2px]">
                    Go to Dashboard
                  </span>
                </button>
              ) : (
                <Link
                  href="/auth/signup"
                  className="w-full sm:w-auto px-[35px] py-[15px] bg-[#ff531f] hover:bg-[#ff531f]/90 rounded-[10px] h-auto transition-all duration-300 text-center"
                >
                  <span className="font-bold text-white text-lg sm:text-xl tracking-[0] leading-[19.2px]">
                    Get Started
                  </span>
                </Link>
              )}

              <Link 
                href="/services"
                className="w-full sm:w-auto px-[35px] py-[15px] rounded-[10px] border-[#fcfcfc3b] bg-transparent hover:bg-white/5 h-auto transition-all duration-300 text-center"
              >
                <span className="font-normal text-white text-lg sm:text-xl tracking-[0] leading-[19.2px]">
                  See Details
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Statistics Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="px-4 sm:px-6 py-8 sm:py-12 md:py-16"
        >
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
              {[
                { label: "CLIENTS", value: "120K+" },
                { label: "PROJECTS", value: "150+" },
                { label: "5-STAR REVIEWS", value: "32K+" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-center text-center group"
                >
                  <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-5 border border-gray-800/50 hover:border-orange-500/30 transition-all duration-300 group-hover:scale-105">
                    <h3 className="text-orange-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1 sm:mb-2">{stat.label}</h3>
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-white tracking-tight">{stat.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 px-4">
                Designed for Designers.<br />
                <span className="text-orange-400">Powered by AI.</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Unlock the full potential of your creativity with our AI-powered design assistant. 
                Explore new dimensions of design.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Feature Cards */}
              {[
                {
                  title: "Instant Ideation",
                  description: "Skip the blank canvas and spark creativity instantly. Our AI generates high-quality, on-brand design concepts within seconds.",
                  gradient: "from-orange-500/20 to-transparent"
                },
                {
                  title: "Smart Adaptability", 
                  description: "No two creators are the same, and neither are their styles. Our AI learns from your inputs, understands your aesthetic preferences, and fine-tunes every design.",
                  gradient: "from-transparent to-transparent"
                },
                {
                  title: "Multi-Format Export",
                  description: "Design once, export anywhere. Whether you need high-res graphics for print, responsive visuals for the web, mobile-optimized assets.",
                  gradient: "from-transparent to-transparent"
                },
                {
                  title: "Seamless Revisions",
                  description: "Say goodbye to repetitive tweaks and endless back-and-forths. With intuitive prompt-based editing.",
                  gradient: "from-orange-500/20 to-transparent"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 group"
                >
                  <div className={`absolute inset-0 bg-linear-to-br ${feature.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className="flex justify-end mb-3 sm:mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{feature.description}</p>
                    <h3 className="text-white text-lg sm:text-xl font-bold">{feature.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="px-4 sm:px-6 py-12 sm:py-16 md:py-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 border border-gray-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-orange-500/10 to-transparent"></div>
              <div className="relative z-10">
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 px-4"
                >
                  Ready to Design Smarter?
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-4"
                >
                  Whether you're a freelancer, a team, or a growing agency—our tools adapt to your workflow. 
                  Design faster. Deliver better.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {isAuthenticated ? (
                    <button
                      onClick={() => router.push("/dashboard")}
                      className="inline-flex items-center bg-gradient-orange text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 pulse-glow w-full sm:w-auto justify-center"
                    >
                      Go to Dashboard
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href="/auth/signup"
                      className="inline-flex items-center bg-gradient-orange text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 pulse-glow w-full sm:w-auto justify-center"
                    >
                      Get Started
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* About Us */}
            <div>
              <h3 className="text-orange-400 font-bold text-base sm:text-lg mb-3 sm:mb-4">About Us</h3>
              <p className="text-white text-xs sm:text-sm leading-relaxed">
                We're a team of designers, engineers, and innovators building AI tools that empower anyone 
                to turn imagination into stunning visuals—faster, smarter, and effortlessly.
              </p>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-orange-400 font-bold text-base sm:text-lg mb-3 sm:mb-4">Useful Links</h3>
              <ul className="space-y-2">
                <li><Link href="#about" className="text-white hover:text-orange-400 transition-colors text-xs sm:text-sm">About</Link></li>
                <li><Link href="#services" className="text-white hover:text-orange-400 transition-colors text-xs sm:text-sm">Services</Link></li>
                <li><Link href="#team" className="text-white hover:text-orange-400 transition-colors text-xs sm:text-sm">Team</Link></li>
                <li><Link href="#prices" className="text-white hover:text-orange-400 transition-colors text-xs sm:text-sm">Prices</Link></li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="text-orange-400 font-bold text-base sm:text-lg mb-3 sm:mb-4">Help</h3>
              <ul className="space-y-2">
                <li><Link href="#support" className="text-white hover:text-orange-400 transition-colors text-xs sm:text-sm">Customer Support</Link></li>
                <li><Link href="https://terms.postsiva.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400 transition-colors text-xs sm:text-sm">Terms & Conditions</Link></li>
                <li><Link href="https://privacy-policy.postsiva.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400 transition-colors text-xs sm:text-sm">Privacy Policy</Link></li>
                <li><Link href="#contact" className="text-white hover:text-orange-400 transition-colors text-xs sm:text-sm">Contact Us</Link></li>
              </ul>
            </div>

            {/* Connect With Us */}
            <div>
              <h3 className="text-orange-400 font-bold text-base sm:text-lg mb-3 sm:mb-4">Connect With Us</h3>
              <div className="space-y-2 text-white text-xs sm:text-sm">
                <p>27 Division St, New York, NY 10002, USA</p>
                <p>+123 324 2653</p>
                <p>username@mail.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-4 sm:pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white text-xs sm:text-sm">© 2025 All Right Reserved.</p>
             <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
               {/* Social Media Icons */}
               {[
                 { name: 'linkedin', icon: '/linkedin.png', href: '/platforms/linkedin' },
                 { name: 'instagram', icon: '/instagram.png', href: '/platforms/instagram' },
                 { name: 'facebook', icon: '/facebook.png', href: '/platforms/facebook' },
                 { name: 'youtube', icon: '/youtube (1).png', href: '/platforms/youtube' }
               ].map((social) => (
                 <Link key={social.name} href={social.href} className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300 cursor-pointer">
                   <img src={social.icon} alt={social.name} className="w-4 h-4 sm:w-6 sm:h-6 object-contain" />
                 </Link>
               ))}
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

