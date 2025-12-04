import { useContext, useState } from 'react';
import { AppContext } from '../App';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Search, Filter, Star, ChevronDown } from 'lucide-react';
import { mentors, categories } from '../data/mockData';

export function SearchMentor() {
  const context = useContext(AppContext);
  if (!context) return null;

  const { setCurrentPage, setSelectedMentorId } = context;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [minRating, setMinRating] = useState<number>(0);
  const [showFilters, setShowFilters] = useState(false);

  const handleViewProfile = (mentorId: string) => {
    setSelectedMentorId(mentorId);
    setCurrentPage('mentor-profile');
  };

  const filteredMentors = mentors.filter((mentor) => {
    // Search filter
    const matchesSearch = 
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.expertise.some(exp => exp.toLowerCase().includes(searchQuery.toLowerCase())) ||
      mentor.experienceSummary.toLowerCase().includes(searchQuery.toLowerCase());

    // Category filter
    const matchesCategory = 
      selectedCategory === 'all' || 
      mentor.expertise.some(exp => exp.toLowerCase().includes(selectedCategory.toLowerCase()));

    // Price filter
    let matchesPrice = true;
    if (priceRange === 'low') {
      matchesPrice = mentor.pricePerSession < 250000;
    } else if (priceRange === 'medium') {
      matchesPrice = mentor.pricePerSession >= 250000 && mentor.pricePerSession <= 300000;
    } else if (priceRange === 'high') {
      matchesPrice = mentor.pricePerSession > 300000;
    }

    // Rating filter
    const matchesRating = mentor.rating >= minRating;

    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Cari Mentor</h1>
          <p className="text-gray-600">
            Temukan mentor terbaik yang sesuai dengan kebutuhan dan tujuan Anda
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari berdasarkan nama mentor, bidang keahlian..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:w-auto bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <Filter className="w-5 h-5" />
              Filter
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Bidang Keahlian</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">Semua Bidang</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.name.toLowerCase()}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Filter */}
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Tarif Sesi</label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">Semua Harga</option>
                    <option value="low">{'< Rp 250.000'}</option>
                    <option value="medium">Rp 250.000 - 300.000</option>
                    <option value="high">{"> Rp 300.000"}</option>
                  </select>
                </div>

                {/* Rating Filter */}
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Rating Minimum</label>
                  <select
                    value={minRating}
                    onChange={(e) => setMinRating(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="0">Semua Rating</option>
                    <option value="4">4+ Bintang</option>
                    <option value="4.5">4.5+ Bintang</option>
                    <option value="4.8">4.8+ Bintang</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Menampilkan {filteredMentors.length} mentor
          </p>
        </div>

        {/* Mentor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="p-6">
                {/* Mentor Photo & Info */}
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={mentor.photo}
                    alt={mentor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1">{mentor.name}</h3>
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-700">{mentor.rating}</span>
                      <span className="text-sm text-gray-400">
                        ({mentor.reviewCount} review)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {mentor.expertise.slice(0, 3).map((exp, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs"
                    >
                      {exp}
                    </span>
                  ))}
                </div>

                {/* Summary */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {mentor.experienceSummary}
                </p>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500">Mulai dari</p>
                    <p className="text-blue-600">
                      Rp {mentor.pricePerSession.toLocaleString('id-ID')}
                    </p>
                  </div>
                  <button
                    onClick={() => handleViewProfile(mentor.id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    Lihat Profil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredMentors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">
              Tidak ada mentor yang sesuai dengan filter Anda
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setPriceRange('all');
                setMinRating(0);
              }}
              className="text-blue-600 hover:text-blue-700"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
