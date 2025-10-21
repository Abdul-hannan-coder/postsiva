"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useAuthContext } from '@/lib/hooks/auth/AuthContext';
import useLinkedinAuth from '@/lib/hooks/auth/platforms/linkedin/useLinkedinAuth';

export default function LinkedInPage() {
  const [showConnectForm, setShowConnectForm] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated } = useAuthContext();
  const { isLoading, error, initiateLinkedinConnect } = useLinkedinAuth();

  const handleConnect = async () => {
    if (!isAuthenticated) {
      window.location.href = '/auth/signin?next=/platforms/linkedin';
      return;
    }
    try {
      await initiateLinkedinConnect();
      setShowConnectForm(false);
    } catch {}
  };

  const features = [
    {
      title: "Professional Content Creation",
      description: "Generate LinkedIn posts, articles, and company updates that resonate with your professional network.",
      icon: "📝"
    },
    {
      title: "B2B Lead Generation",
      description: "Automate outreach messages and connection requests to grow your professional network.",
      icon: "🎯"
    },
    {
      title: "Company Page Management",
      description: "Schedule posts, manage company updates, and maintain consistent brand presence.",
      icon: "🏢"
    },
    {
      title: "Analytics & Insights",
      description: "Track engagement, reach, and performance metrics to optimize your LinkedIn strategy.",
      icon: "📊"
    }
  ];

  const stats = [
    { label: "Professional Users", value: "2.3M+" },
    { label: "Companies", value: "58M+" },
    { label: "Job Postings", value: "40M+" },
    { label: "Monthly Active Users", value: "930M+" }
  ];

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
        
        {/* Glowing abstract lines - blue on right */}
        <div className="absolute top-0 right-0 w-96 h-full opacity-20">
          <div className="absolute top-20 right-20 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-40 w-32 h-32 bg-orange-400 rounded-full blur-2xl"></div>
          <div className="absolute top-60 right-60 w-48 h-48 bg-orange-600 rounded-full blur-3xl"></div>
        </div>
        
        {/* Glowing abstract lines - orange on left */}
        <div className="absolute top-0 left-0 w-96 h-full opacity-15">
          <div className="absolute top-32 left-20 w-48 h-48 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute top-52 left-40 w-32 h-32 bg-orange-400 rounded-full blur-2xl"></div>
          <div className="absolute top-72 left-60 w-40 h-40 bg-orange-600 rounded-full blur-3xl"></div>
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
            <Link href="/" className="text-white hover:text-orange-400 transition-colors text-sm xl:text-base">Home</Link>
            <Link href="/dashboard" className="text-white hover:text-orange-400 transition-colors text-sm xl:text-base">Dashboard</Link>
            <Link href="#linkedin" className="text-orange-400 border-b-2 border-orange-400 pb-1 text-sm xl:text-base">LinkedIn</Link>
            <Link href="#analytics" className="text-white hover:text-orange-400 transition-colors text-sm xl:text-base">Analytics</Link>
          </div>

          {/* Desktop Connect Button */}
          <button
            onClick={() => setShowConnectForm(true)}
            className="hidden lg:block bg-orange-500 text-white px-4 xl:px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors pulse-glow text-sm xl:text-base"
          >
            Connect with LinkedIn
          </button>

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
                  {/* Navigation Links */}
                  <div className="space-y-4">
                    <Link 
                      href="/" 
                      className="block text-white hover:text-orange-200 transition-colors py-4 text-lg text-center font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link 
                      href="/dashboard" 
                      className="block text-white hover:text-orange-200 transition-colors py-4 text-lg text-center font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link 
                      href="#linkedin" 
                      className="block text-orange-200 py-4 text-lg text-center font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      LinkedIn
                    </Link>
                    <Link 
                      href="#analytics" 
                      className="block text-white hover:text-orange-200 transition-colors py-4 text-lg text-center font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Analytics
                    </Link>
                  </div>

                  {/* LinkedIn Connect Card */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                    <div className="text-center">
                      <h3 className="text-white text-xl font-bold mb-3">LinkedIn AI Powered</h3>
                      <div className="flex justify-center mb-2">
                        <div className="flex space-x-1">
                          <span className="text-yellow-300 text-lg">★★★★★</span>
                        </div>
                      </div>
                      <p className="text-orange-100 text-sm">2.3M+ Professional Users</p>
                    </div>
                  </div>

                  {/* Connect Button */}
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setShowConnectForm(true);
                        setIsMenuOpen(false);
                      }}
                      className="w-full bg-white text-orange-600 px-6 py-4 rounded-xl font-bold text-lg hover:bg-orange-100 transition-all duration-300 text-center shadow-lg"
                    >
                      Connect with LinkedIn
                    </button>
                  </div>

                  {/* Descriptive Text */}
                  <div className="pt-4">
                    <p className="text-white text-sm leading-relaxed text-center">
                      Transform your LinkedIn presence with AI-powered content creation, automated outreach, 
                      and intelligent networking strategies that drive real business results.
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
        <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-center">
          <div className="max-w-4xl mx-auto">
            {/* LinkedIn Badge */}
            <div className="inline-flex items-center space-x-3 bg-orange-900/50 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-800">
              <div className="text-2xl">💼</div>
              <span className="text-white text-sm font-medium">LinkedIn Automation</span>
            </div>

            {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4">
                Professional Networking.<br />
                <span className="text-orange-500">Powered by AI.</span>
              </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Transform your LinkedIn presence with AI-powered content creation, automated outreach, 
              and intelligent networking strategies that drive real business results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <button
                onClick={() => setShowConnectForm(true)}
                className="w-full sm:w-auto bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 pulse-glow"
              >
                Connect LinkedIn Account
              </button>
              <Link 
                href="/dashboard" 
                className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-300 text-center"
              >
                Back to Dashboard
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-orange-500 text-sm font-semibold uppercase tracking-wider">{stat.label}</h3>
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 px-4">
                LinkedIn Features
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Everything you need to build a powerful professional presence and grow your network.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 group">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="text-3xl sm:text-4xl">{feature.icon}</div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{feature.title}</h3>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gray-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-orange-500/10 to-transparent"></div>
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 px-4">
                  Ready to Grow Your Professional Network?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Connect your LinkedIn account and start automating your professional growth. 
                  Create engaging content, build meaningful connections, and drive business results.
                </p>
                <button
                  onClick={() => setShowConnectForm(true)}
                  className="inline-flex items-center bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 pulse-glow w-full sm:w-auto justify-center mx-4 sm:mx-0"
                >
                  Connect LinkedIn Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Connect Form Modal */}
      {showConnectForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-800 relative">
            <button
              onClick={() => setShowConnectForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💼</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Connect with LinkedIn</h2>
              <p className="text-gray-400">Authorize Postiva to access your LinkedIn account</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-300 text-sm">Read your profile information</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-300 text-sm">Post content on your behalf</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-300 text-sm">Manage your connections</span>
              </div>
            </div>

            <div className="space-y-4">
              {error && (
                <div className="text-red-400 text-sm bg-red-900/30 border border-red-800 rounded p-2 text-left">
                  {error}
                </div>
              )}
              <button
                disabled={isLoading}
                onClick={handleConnect}
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Opening LinkedIn...' : 'Authorize LinkedIn Access'}
              </button>
              <button
                onClick={() => setShowConnectForm(false)}
                className="w-full border border-gray-600 text-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 px-6 py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
            {/* About Us */}
            <div>
              <h3 className="text-orange-500 font-bold text-lg mb-4">About Us</h3>
              <p className="text-white text-sm leading-relaxed">
                We're a team of designers, engineers, and innovators building AI tools that empower anyone 
                to turn imagination into stunning visuals—faster, smarter, and effortlessly.
              </p>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-orange-400 font-bold text-lg mb-4">Useful Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-white hover:text-orange-400 transition-colors">About</Link></li>
                <li><Link href="/services" className="text-white hover:text-orange-400 transition-colors">Services</Link></li>
                <li><Link href="/team" className="text-white hover:text-orange-400 transition-colors">Team</Link></li>
                <li><Link href="/pricing" className="text-white hover:text-orange-400 transition-colors">Pricing</Link></li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="text-orange-400 font-bold text-lg mb-4">Help</h3>
              <ul className="space-y-2">
                <li><Link href="#support" className="text-white hover:text-orange-400 transition-colors">Customer Support</Link></li>
                <li><Link href="#terms" className="text-white hover:text-orange-400 transition-colors">Terms & Conditions</Link></li>
                <li><Link href="#privacy" className="text-white hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/contact" className="text-white hover:text-orange-400 transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Connect With Us */}
            <div>
              <h3 className="text-orange-400 font-bold text-lg mb-4">Connect With Us</h3>
              <div className="space-y-2 text-white text-sm">
                <p>27 Division St, New York, NY 10002, USA</p>
                <p>+123 324 2653</p>
                <p>username@mail.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm">© 2025 All Right Reserved.</p>
            <div className="flex space-x-3 sm:space-x-4">
              {/* Social Media Icons */}
               {[
                 { name: 'linkedin', icon: '/linkedin.png', href: '/platforms/linkedin' },
                 { name: 'instagram', icon: '/instagram.png', href: '/platforms/instagram' },
                 { name: 'facebook', icon: '/facebook.png', href: '/platforms/facebook' },
                 { name: 'youtube', icon: '/youtube (1).png', href: '/platforms/youtube' }
               ].map((social) => (
                <Link key={social.name} href={social.href} className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300 cursor-pointer">
                  <img src={social.icon} alt={social.name} className="w-6 h-6 object-contain" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
