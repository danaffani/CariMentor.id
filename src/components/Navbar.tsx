import { useContext } from 'react';
import { Menu, X, User, LogOut } from 'lucide-react';
import { AppContext } from '../App';
import { useState } from 'react';

export function Navbar() {
  const context = useContext(AppContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  if (!context) return null;

  const { setCurrentPage, user, setUser } = context;

  const handleNavigation = (page: any) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  const handleLogin = () => {
    // Mock login
    setUser({
      id: 'mentee1',
      name: 'Andi Pratama',
      email: 'andi@example.com',
      role: 'mentee',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    });
  };

  const handleLoginAsMentor = () => {
    setUser({
      id: 'mentor1',
      name: 'Dr. Sarah Wijaya',
      email: 'sarah@example.com',
      role: 'mentor',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop'
    });
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('landing');
    setProfileMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="cursor-pointer"
            onClick={() => handleNavigation('landing')}
          >
            <span className="text-blue-600">CariMentor</span>
            <span className="text-gray-800">.id</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavigation('search')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Cari Mentor
            </button>
            <button
              onClick={() => handleNavigation('community')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Komunitas
            </button>
            {user && user.role === 'admin' && (
              <button
                onClick={() => handleNavigation('admin')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Admin
              </button>
            )}
          </div>

          {/* User Menu / Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg transition-colors"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-gray-700">{user.name}</span>
                </button>

                {profileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    <button
                      onClick={() => {
                        handleNavigation(user.role === 'mentor' ? 'mentor-dashboard' : 'mentee-dashboard');
                        setProfileMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <User className="w-4 h-4" />
                      Dashboard
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2 text-red-600"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button
                  onClick={handleLogin}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Masuk
                </button>
                <button
                  onClick={handleLoginAsMentor}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Daftar sebagai Mentor
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleNavigation('search')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Cari Mentor
              </button>
              <button
                onClick={() => handleNavigation('community')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Komunitas
              </button>
              
              {user ? (
                <>
                  <button
                    onClick={() => handleNavigation(user.role === 'mentor' ? 'mentor-dashboard' : 'mentee-dashboard')}
                    className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={handleLogout}
                    className="text-red-600 hover:text-red-700 transition-colors text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleLogin}
                    className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                  >
                    Masuk
                  </button>
                  <button
                    onClick={handleLoginAsMentor}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
                  >
                    Daftar sebagai Mentor
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
