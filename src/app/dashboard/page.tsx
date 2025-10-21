"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/lib/hooks/auth/AuthContext';
import AuthGuard from '@/lib/hooks/auth/AuthGuard';

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { logout } = useAuthContext();

  const handleLogout = () => {
    const redirect = logout('/auth/signin');
    router.push(redirect);
  };

  const socialPlatforms = [
    {
      name: 'LinkedIn',
      description: 'Professional networking and B2B marketing',
      icon: '/linkedin.png',
      color: 'from-blue-500 to-blue-600',
      href: '/platforms/linkedin',
      stats: '2.3M+ users',
      highlighted: false
    },
    {
      name: 'Instagram',
      description: 'Visual content and influencer marketing',
      icon: '/instagram.svg',
      color: 'from-pink-500 to-purple-600',
      href: '/platforms/instagram',
      stats: '1.4B+ users',
      highlighted: false
    },
    {
      name: 'Facebook',
      description: 'Social media marketing and community building',
      icon: '/facebook.png',
      color: 'from-blue-600 to-blue-700',
      href: '/platforms/facebook',
      stats: '2.9B+ users',
      highlighted: false
    },
    {
      name: 'TikTok',
      description: 'Short-form video content and viral marketing',
      icon: '/tik-tok.png',
      color: 'from-black to-gray-800',
      href: '/platforms/tiktok',
      stats: '1B+ users',
      highlighted: true
    },
    {
      name: 'YouTube',
      description: 'Video content creation and channel growth',
      icon: '/youtube (1).png',
      color: 'from-red-500 to-red-600',
      href: '/platforms/youtube',
      stats: '2.7B+ users',
      highlighted: false
    },
    {
      name: 'Twitter',
      description: 'Real-time updates and micro-blogging',
      icon: '/twitter1.png',
      color: 'from-blue-400 to-blue-500',
      href: '/platforms/twitter',
      stats: '450M+ users',
      highlighted: false
    }
  ];

  return (
    <AuthGuard>
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
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-orange-400 transition-colors">Home</Link>
            <Link href="#dashboard" className="text-orange-400 border-b-2 border-orange-400 pb-1">Dashboard</Link>
            <Link href="#analytics" className="text-white hover:text-orange-400 transition-colors">Analytics</Link>
            <Link href="#settings" className="text-white hover:text-orange-400 transition-colors">Settings</Link>
          </div>

          {/* Desktop User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-white">
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">U</span>
              </div>
              <span className="text-sm">test@gamil.com</span>
            </div>
            <button
              onClick={handleLogout}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-9999">
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
                      href="#dashboard" 
                      className="block text-orange-200 py-4 text-lg text-center font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link 
                      href="#analytics" 
                      className="block text-white hover:text-orange-200 transition-colors py-4 text-lg text-center font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Analytics
                    </Link>
                    <Link 
                      href="#settings" 
                      className="block text-white hover:text-orange-200 transition-colors py-4 text-lg text-center font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Settings
                    </Link>
                  </div>

                  {/* User Info Card */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl">U</span>
                      </div>
                      <h3 className="text-white text-lg font-bold mb-2">Welcome Back!</h3>
                      <p className="text-orange-100 text-sm">test@gamil.com</p>
                    </div>
                  </div>

                  {/* Logout Button */}
                  <div className="pt-4">
                    <button
                      className="block w-full bg-white text-orange-600 px-6 py-4 rounded-xl font-bold text-lg hover:bg-orange-100 transition-all duration-300 text-center shadow-lg"
                      onClick={() => {
                        setIsMenuOpen(false);
                        handleLogout();
                      }}
                    >
                      Logout
                    </button>
                  </div>

                  {/* Descriptive Text */}
                  <div className="pt-4">
                    <p className="text-white text-sm leading-relaxed text-center">
                      Manage your social media automation dashboard. Connect platforms, 
                      schedule posts, and track your performance across all channels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-4">
              Choose Your Platform
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Connect and automate your social media presence across multiple platforms. 
              Select a platform to get started with AI-powered content creation and scheduling.
            </p>
          </div>

          {/* Platform Cards - 3 per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {socialPlatforms.map((platform, index) => (
              <Link
                key={platform.name}
                href={platform.href}
                className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border transition-all duration-300 hover:scale-105 ${
                  platform.highlighted 
                    ? 'border-orange-500 shadow-lg shadow-orange-500/25' 
                    : 'border-gray-800 hover:border-orange-500/50'
                }`}
              >
                <div className={`absolute inset-0 bg-linear-to-br ${platform.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10 text-center">
                  {/* Platform Icon */}
                  <div className="mb-4 sm:mb-6 flex justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={platform.icon} 
                        alt={platform.name}
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          // Fallback to emoji if image not found
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = platform.name === 'Instagram' ? '📸' : 
                                            platform.name === 'TikTok' ? '🎵' : 
                                            platform.name === 'YouTube' ? '📺' : 
                                            platform.name === 'Twitter' ? '🐦' : 
                                            platform.name === 'LinkedIn' ? '💼' : '👥';
                            parent.className = 'w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-4xl';
                          }
                        }}
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{platform.name}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{platform.description}</p>
                  <div className="text-orange-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">{platform.stats}</div>
                  
                  {/* Orange Arrow Button */}
                  <div className="flex justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-800">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">Your Automation Overview</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">0</div>
                <div className="text-gray-400 text-xs sm:text-sm">Connected Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">0</div>
                <div className="text-gray-400 text-xs sm:text-sm">Scheduled Posts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">0</div>
                <div className="text-gray-400 text-xs sm:text-sm">AI-Generated Content</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">0</div>
                <div className="text-gray-400 text-xs sm:text-sm">Total Engagement</div>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gray-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-orange-500/10 to-transparent"></div>
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">
                  Ready to Automate Your Social Media?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Start by connecting your first platform. Our AI will help you create engaging content 
                  and schedule posts automatically.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link 
                    href="/platforms/linkedin" 
                    className="inline-flex items-center bg-gradient-orange text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 pulse-glow"
                  >
                    Start with LinkedIn
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link 
                    href="#help" 
                    className="inline-flex items-center border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Need Help?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </AuthGuard>
  );
}
