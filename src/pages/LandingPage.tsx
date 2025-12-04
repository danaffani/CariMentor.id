import { useContext } from 'react';
import { AppContext } from '../App';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { 
  Search, 
  CheckCircle, 
  Calendar, 
  CreditCard, 
  Users, 
  Briefcase, 
  TrendingUp, 
  Code, 
  Trophy, 
  DollarSign, 
  Heart, 
  Star,
  ArrowRight,
  Target,
  Shield,
  Zap
} from 'lucide-react';
import { categories, testimonials } from '../data/mockData';

export function LandingPage() {
  const context = useContext(AppContext);
  if (!context) return null;

  const { setCurrentPage } = context;

  const getCategoryIcon = (iconName: string) => {
    const icons: any = {
      briefcase: Briefcase,
      'trending-up': TrendingUp,
      code: Code,
      trophy: Trophy,
      users: Users,
      'dollar-sign': DollarSign,
      heart: Heart
    };
    const IconComponent = icons[iconName] || Briefcase;
    return <IconComponent className="w-8 h-8" />;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-gray-900 mb-6">
                Temukan Mentor Terbaik untuk Bimbingan Karir, Bisnis, dan Skill
              </h1>
              <p className="text-gray-600 mb-8">
                Platform mentoring personal berbasis pengalaman nyata dengan sistem smart matching. 
                Dapatkan bimbingan dari para ahli dan profesional terpercaya untuk mengakselerasi pengembangan diri Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setCurrentPage('search')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  Cari Mentor
                </button>
                <button
                  onClick={() => setCurrentPage('search')}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Daftar sebagai Mentor
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div>
                  <div className="text-blue-600 mb-1">500+</div>
                  <p className="text-gray-600 text-sm">Mentor Terverifikasi</p>
                </div>
                <div>
                  <div className="text-blue-600 mb-1">10,000+</div>
                  <p className="text-gray-600 text-sm">Sesi Mentoring</p>
                </div>
                <div>
                  <div className="text-blue-600 mb-1">4.9/5</div>
                  <p className="text-gray-600 text-sm">Rating Kepuasan</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1609503842755-77f4a81d69ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Mentoring session"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Success Rate</p>
                    <p className="text-gray-900">95% Mentee Satisfied</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Platform */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Mengapa CariMentor.id?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami memahami tantangan yang dihadapi profesional muda dalam mengembangkan karir. 
              CariMentor.id hadir sebagai solusi untuk mengatasi gap kebutuhan mentoring berkualitas di Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">Problem</h3>
              <p className="text-gray-600">
                Sulit menemukan mentor yang tepat dan terpercaya. Proses pencarian yang tidak terstruktur dan memakan waktu.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">Solution</h3>
              <p className="text-gray-600">
                Platform terpusat dengan smart matching algorithm, mentor terverifikasi, dan sistem booking yang mudah.
              </p>
            </div>

            <div className="bg-purple-50 p-8 rounded-2xl">
              <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">Trust</h3>
              <p className="text-gray-600">
                Semua mentor telah diverifikasi kredensialnya. Review transparan dari mentee untuk membantu keputusan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Fitur Unggulan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Platform lengkap dengan berbagai fitur untuk memastikan pengalaman mentoring yang optimal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Smart Matching</h3>
              <p className="text-gray-600 text-sm">
                Algoritma pintar yang mencocokkan Anda dengan mentor terbaik sesuai kebutuhan dan tujuan Anda
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Mentor Terverifikasi</h3>
              <p className="text-gray-600 text-sm">
                Semua mentor telah melalui proses verifikasi kredensial dan pengalaman yang ketat
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Penjadwalan Fleksibel</h3>
              <p className="text-gray-600 text-sm">
                Booking sesi mentoring dengan mudah sesuai jadwal yang Anda inginkan
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Pembayaran Terintegrasi</h3>
              <p className="text-gray-600 text-sm">
                Sistem pembayaran aman dan mudah dengan berbagai metode pembayaran
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Komunitas Aktif</h3>
              <p className="text-gray-600 text-sm">
                Bergabung dengan komunitas mentee dan mentor untuk sharing pengalaman dan tips
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Review Transparan</h3>
              <p className="text-gray-600 text-sm">
                Lihat review dan rating dari mentee lain untuk membantu keputusan Anda
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Kategori Bidang Mentoring</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan mentor sesuai dengan bidang yang Anda butuhkan
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setCurrentPage('search')}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-gray-100 hover:border-blue-600 transition-all hover:shadow-lg group"
              >
                <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform">
                  {getCategoryIcon(category.icon)}
                </div>
                <h3 className="text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Apa Kata Mereka?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Testimoni dari mentee yang telah merasakan manfaat mentoring di CariMentor.id
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.menteeAvatar}
                    alt={testimonial.menteeName}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-gray-900">{testimonial.menteeName}</p>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">{testimonial.comment}</p>
                <p className="text-gray-400 text-xs">Mentor: {testimonial.mentorName}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-4">Siap Mengakselerasi Perkembangan Karir Anda?</h2>
          <p className="text-blue-100 mb-8">
            Bergabung dengan ribuan profesional yang telah merasakan transformasi karir bersama mentor terbaik
          </p>
          <button
            onClick={() => setCurrentPage('search')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            Mulai Sekarang
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
