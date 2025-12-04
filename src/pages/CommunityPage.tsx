import { useContext, useState } from 'react';
import { AppContext } from '../App';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { 
  MessageCircle, 
  ThumbsUp, 
  Calendar,
  Users,
  Bookmark,
  TrendingUp,
  Search
} from 'lucide-react';

interface Post {
  id: string;
  author: string;
  authorAvatar: string;
  role: 'mentor' | 'mentee';
  title: string;
  content: string;
  category: string;
  likes: number;
  comments: number;
  timestamp: string;
}

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  speaker: string;
  category: string;
  attendees: number;
}

const mockPosts: Post[] = [
  {
    id: '1',
    author: 'Dr. Sarah Wijaya',
    authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
    role: 'mentor',
    title: '5 Tips Mempersiapkan Wawancara Kerja',
    content: 'Banyak yang bertanya bagaimana cara mempersiapkan interview dengan baik. Berikut tips yang saya share berdasarkan pengalaman 10 tahun di HR...',
    category: 'Karir',
    likes: 45,
    comments: 12,
    timestamp: '2 jam yang lalu'
  },
  {
    id: '2',
    author: 'Ahmad Rizki',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    role: 'mentor',
    title: 'Memvalidasi Ide Bisnis Sebelum Launch',
    content: 'Salah satu kesalahan terbesar entrepreneur pemula adalah langsung build produk tanpa validasi. Mari kita bahas cara validasi yang efektif...',
    category: 'Bisnis',
    likes: 67,
    comments: 23,
    timestamp: '5 jam yang lalu'
  },
  {
    id: '3',
    author: 'Linda Kusuma',
    authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
    role: 'mentor',
    title: 'Roadmap Belajar Data Science untuk Pemula',
    content: 'Banyak yang bertanya dari mana harus mulai belajar data science. Berikut roadmap lengkap yang bisa kalian ikuti step by step...',
    category: 'IT/Data',
    likes: 89,
    comments: 34,
    timestamp: '1 hari yang lalu'
  },
  {
    id: '4',
    author: 'Andi Pratama',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    role: 'mentee',
    title: 'Journey Saya Career Switch ke Tech Industry',
    content: 'Setelah 6 bulan mentoring dan belajar intensif, akhirnya saya berhasil switch career dari finance ke tech. Ini cerita journey saya...',
    category: 'Karir',
    likes: 56,
    comments: 18,
    timestamp: '2 hari yang lalu'
  }
];

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Webinar: Strategi Negosiasi Gaji',
    date: '2024-12-15',
    time: '19:00 WIB',
    speaker: 'Dr. Sarah Wijaya',
    category: 'Karir',
    attendees: 234
  },
  {
    id: '2',
    title: 'Workshop: Build Your First Startup MVP',
    date: '2024-12-18',
    time: '14:00 WIB',
    speaker: 'Ahmad Rizki',
    category: 'Bisnis',
    attendees: 156
  },
  {
    id: '3',
    title: 'Live Coding: Machine Learning Project',
    date: '2024-12-20',
    time: '20:00 WIB',
    speaker: 'Linda Kusuma',
    category: 'IT/Data',
    attendees: 189
  }
];

export function CommunityPage() {
  const context = useContext(AppContext);
  if (!context) return null;

  const { user } = context;

  const [activeTab, setActiveTab] = useState<'discussions' | 'events' | 'resources'>('discussions');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Komunitas CariMentor</h1>
          <p className="text-gray-600">
            Tempat berbagi pengalaman, tips, dan diskusi dengan mentor & mentee lainnya
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm">Total Member</p>
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-gray-900">12,459</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm">Diskusi Aktif</p>
              <MessageCircle className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-gray-900">1,234</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm">Event Minggu Ini</p>
              <Calendar className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-gray-900">{mockEvents.length}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm">Mentor Aktif</p>
              <TrendingUp className="w-5 h-5 text-orange-600" />
            </div>
            <p className="text-gray-900">523</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Search & Tabs */}
            <div className="bg-white rounded-xl shadow-sm mb-6">
              {/* Search */}
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Cari diskusi, event, atau resource..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-200">
                <div className="flex gap-8 px-6">
                  <button
                    onClick={() => setActiveTab('discussions')}
                    className={`py-4 border-b-2 transition-colors ${
                      activeTab === 'discussions'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Diskusi
                  </button>
                  <button
                    onClick={() => setActiveTab('events')}
                    className={`py-4 border-b-2 transition-colors ${
                      activeTab === 'events'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Event & Webinar
                  </button>
                  <button
                    onClick={() => setActiveTab('resources')}
                    className={`py-4 border-b-2 transition-colors ${
                      activeTab === 'resources'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Resource
                  </button>
                </div>
              </div>

              <div className="p-6">
                {/* Discussions Tab */}
                {activeTab === 'discussions' && (
                  <div className="space-y-4">
                    {user && (
                      <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <textarea
                          placeholder="Bagikan pemikiran, tips, atau pertanyaan Anda..."
                          rows={3}
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                        />
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                          Posting
                        </button>
                      </div>
                    )}

                    {mockPosts.map((post) => (
                      <div key={post.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                          <img
                            src={post.authorAvatar}
                            alt={post.author}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-gray-900">{post.author}</h3>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                post.role === 'mentor' 
                                  ? 'bg-blue-100 text-blue-600' 
                                  : 'bg-gray-100 text-gray-600'
                              }`}>
                                {post.role === 'mentor' ? 'Mentor' : 'Mentee'}
                              </span>
                              <span className="text-sm text-gray-500">• {post.timestamp}</span>
                            </div>
                            <span className="text-xs text-blue-600 mb-2 inline-block">
                              {post.category}
                            </span>
                            <h4 className="text-gray-900 mb-2">{post.title}</h4>
                            <p className="text-gray-600 mb-4">{post.content}</p>
                            <div className="flex items-center gap-6 text-sm text-gray-500">
                              <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                <ThumbsUp className="w-4 h-4" />
                                {post.likes}
                              </button>
                              <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                <MessageCircle className="w-4 h-4" />
                                {post.comments}
                              </button>
                              <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                <Bookmark className="w-4 h-4" />
                                Simpan
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Events Tab */}
                {activeTab === 'events' && (
                  <div className="space-y-4">
                    {mockEvents.map((event) => (
                      <div key={event.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <span className="text-xs text-blue-600 mb-2 inline-block">
                              {event.category}
                            </span>
                            <h3 className="text-gray-900 mb-2">{event.title}</h3>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {event.date}
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                {event.attendees} peserta
                              </div>
                            </div>
                            <p className="text-gray-600 text-sm">
                              Speaker: {event.speaker}
                            </p>
                          </div>
                          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                            Daftar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Resources Tab */}
                {activeTab === 'resources' && (
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-gray-900 mb-2">📚 E-Book: Panduan Career Development</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Panduan lengkap untuk mengembangkan karir dari para mentor profesional
                      </p>
                      <button className="text-blue-600 hover:text-blue-700 text-sm">
                        Download →
                      </button>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-gray-900 mb-2">🎥 Video Series: Startup Fundamentals</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Seri video tentang dasar-dasar membangun startup dari nol
                      </p>
                      <button className="text-blue-600 hover:text-blue-700 text-sm">
                        Tonton →
                      </button>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-gray-900 mb-2">📝 Template: CV & Portfolio</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Kumpulan template CV dan portfolio yang sudah terbukti efektif
                      </p>
                      <button className="text-blue-600 hover:text-blue-700 text-sm">
                        Download →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Trending Topics */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h3 className="text-gray-900 mb-4">🔥 Trending Topics</h3>
              <div className="space-y-3">
                {[
                  { topic: 'Career Switching', posts: 234 },
                  { topic: 'Remote Work Tips', posts: 189 },
                  { topic: 'Startup Funding', posts: 156 },
                  { topic: 'Data Science', posts: 145 },
                  { topic: 'Work Life Balance', posts: 123 }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <p className="text-gray-900 text-sm mb-1">#{item.topic}</p>
                    <p className="text-xs text-gray-500">{item.posts} diskusi</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Mentors */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-gray-900 mb-4">💬 Mentor Aktif</h3>
              <div className="space-y-4">
                {mockPosts.filter(p => p.role === 'mentor').slice(0, 3).map((post) => (
                  <div key={post.id} className="flex items-center gap-3">
                    <img
                      src={post.authorAvatar}
                      alt={post.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-gray-900 text-sm">{post.author}</p>
                      <p className="text-xs text-gray-500">{post.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
