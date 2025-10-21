'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      setIsLoading(false);
      return;
    }
    
    // Simulate registration
    setTimeout(() => {
      alert('Account created successfully! You can now sign in.');
      router.push('/auth/signin');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center py-8 sm:py-12">
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

      <div className="relative z-10 w-full max-w-sm sm:max-w-md px-4 sm:px-6">
        {/* Logo */}
        <div className="text-center mb-6 sm:mb-8">
          <Link href="/" className="inline-flex items-center space-x-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-orange rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl sm:text-2xl">P</span>
            </div>
            <span className="text-white text-2xl sm:text-3xl font-bold">Postiva</span>
          </Link>
        </div>

        {/* Sign Up Form */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-800">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Create Account</h1>
            <p className="text-gray-400 text-sm sm:text-base">Join Postiva and start automating your growth</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 sm:py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-sm sm:text-base"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 sm:py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-sm sm:text-base"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 sm:py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-sm sm:text-base"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 sm:py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-sm sm:text-base"
                placeholder="Create a strong password"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 sm:py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-sm sm:text-base"
                placeholder="Confirm your password"
                required
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-orange-500 bg-gray-800 border-gray-700 rounded focus:ring-orange-500 focus:ring-2 mt-1"
                required
              />
              <label htmlFor="terms" className="ml-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
                I agree to the{' '}
                <Link href="#" className="text-orange-400 hover:text-orange-300 transition-colors">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="#" className="text-orange-400 hover:text-orange-300 transition-colors">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-orange text-white py-3 sm:py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 pulse-glow disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="mt-5 sm:mt-6 text-center">
            <p className="text-gray-400 text-sm sm:text-base">
              Already have an account?{' '}
              <Link href="/auth/signin" className="text-orange-400 hover:text-orange-300 transition-colors font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-5 sm:mt-6">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
