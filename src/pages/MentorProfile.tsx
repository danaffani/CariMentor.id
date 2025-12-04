import { useContext } from 'react';
import { AppContext } from '../App';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Star, Award, Briefcase, GraduationCap, Calendar, ArrowLeft } from 'lucide-react';
import { mentors, testimonials } from '../data/mockData';

export function MentorProfile() {
  const context = useContext(AppContext);
  if (!context) return null;

  const { selectedMentorId, setCurrentPage, user } = context;

  const mentor = mentors.find((m) => m.id === selectedMentorId);

  if (!mentor) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <p className="text-gray-600 mb-4">Mentor tidak ditemukan</p>
          <button
            onClick={() => setCurrentPage('search')}
            className="text-blue-600 hover:text-blue-700"
          >
            Kembali ke Pencarian
          </button>
        </div>
      </div>
    );
  }

  const mentorTestimonials = testimonials.filter(t => t.mentorName === mentor.name);

  const handleBookSession = () => {
    if (!user) {
      alert('Silakan login terlebih dahulu untuk memesan sesi mentoring');
      return;
    }
    setCurrentPage('booking');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => setCurrentPage('search')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Kembali ke Pencarian
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Profile Header */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={mentor.photo}
                  alt={mentor.name}
                  className="w-32 h-32 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h1 className="text-gray-900 mb-2">{mentor.name}</h1>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-gray-700">{mentor.rating}</span>
                    </div>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600">{mentor.reviewCount} review</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {mentor.expertise.map((exp, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600">{mentor.experienceSummary}</p>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
              <h2 className="text-gray-900 mb-4">Tentang Saya</h2>
              <p className="text-gray-600 leading-relaxed">{mentor.about}</p>
            </div>

            {/* Education */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-gray-900">Pendidikan</h2>
              </div>
              <p className="text-gray-700">{mentor.education}</p>
            </div>

            {/* Work Experience */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-gray-900">Pengalaman Kerja</h2>
              </div>
              <ul className="space-y-3">
                {mentor.workExperience.map((exp, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                    <span className="text-gray-700">{exp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Portfolio & Certificates */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-gray-900">Portofolio & Sertifikat</h2>
              </div>

              <div className="mb-6">
                <h3 className="text-gray-900 mb-3">Achievements</h3>
                <ul className="space-y-2">
                  {mentor.portfolio.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-gray-900 mb-3">Certifications</h3>
                <ul className="space-y-2">
                  {mentor.certificates.map((cert, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                      <span className="text-gray-600">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-gray-900 mb-6">Ulasan dari Mentee</h2>
              {mentorTestimonials.length > 0 ? (
                <div className="space-y-6">
                  {mentorTestimonials.map((testimonial) => (
                    <div key={testimonial.id} className="border-b border-gray-100 pb-6 last:border-0">
                      <div className="flex items-start gap-4">
                        <img
                          src={testimonial.menteeAvatar}
                          alt={testimonial.menteeName}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-gray-900">{testimonial.menteeName}</h3>
                            <span className="text-sm text-gray-400">{testimonial.date}</span>
                          </div>
                          <div className="flex gap-1 mb-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-gray-600">{testimonial.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Belum ada ulasan untuk mentor ini</p>
              )}
            </div>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <div className="mb-6">
                <p className="text-gray-500 text-sm mb-1">Harga per sesi</p>
                <p className="text-gray-900">
                  Rp {mentor.pricePerSession.toLocaleString('id-ID')}
                </p>
              </div>

              <button
                onClick={handleBookSession}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mb-4"
              >
                Pesan Sesi Mentoring
              </button>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <h3 className="text-gray-900">Jadwal Tersedia</h3>
                </div>
                <ul className="space-y-2">
                  {mentor.availability.map((schedule, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      {schedule}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200 mt-6 pt-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-gray-900 mb-1">{mentor.reviewCount}</p>
                    <p className="text-gray-500 text-xs">Total Sesi</p>
                  </div>
                  <div>
                    <p className="text-gray-900 mb-1">{mentor.rating}/5.0</p>
                    <p className="text-gray-500 text-xs">Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
