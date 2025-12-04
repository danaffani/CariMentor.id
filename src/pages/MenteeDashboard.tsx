import { useContext, useState } from 'react';
import { AppContext } from '../App';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Calendar, Clock, Star, MessageCircle, History, User } from 'lucide-react';
import { mockSessions, mentors } from '../data/mockData';

export function MenteeDashboard() {
  const context = useContext(AppContext);
  if (!context) return null;

  const { user, setCurrentPage, setSelectedMentorId } = context;

  const [activeTab, setActiveTab] = useState<'upcoming' | 'history' | 'profile'>('upcoming');

  if (!user || user.role !== 'mentee') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <p className="text-gray-600 mb-4">Silakan login sebagai mentee untuk mengakses dashboard</p>
        </div>
      </div>
    );
  }

  const upcomingSessions = mockSessions.filter(s => s.status === 'scheduled');
  const completedSessions = mockSessions.filter(s => s.status === 'completed');

  const handleViewMentor = (mentorId: string) => {
    setSelectedMentorId(mentorId);
    setCurrentPage('mentor-profile');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Dashboard Mentee</h1>
          <p className="text-gray-600">Selamat datang kembali, {user.name}!</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm">Sesi Mendatang</p>
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-gray-900">{upcomingSessions.length}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm">Sesi Selesai</p>
              <History className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-gray-900">{completedSessions.length}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm">Total Mentor</p>
              <User className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-gray-900">{new Set(mockSessions.map(s => s.mentorId)).size}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm">Total Investasi</p>
              <MessageCircle className="w-5 h-5 text-orange-600" />
            </div>
            <p className="text-gray-900">
              Rp {mockSessions.reduce((sum, s) => sum + s.price, 0).toLocaleString('id-ID')}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <div className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`py-4 border-b-2 transition-colors ${
                  activeTab === 'upcoming'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Sesi Mendatang
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`py-4 border-b-2 transition-colors ${
                  activeTab === 'history'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Riwayat
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`py-4 border-b-2 transition-colors ${
                  activeTab === 'profile'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Profil Saya
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* Upcoming Sessions Tab */}
            {activeTab === 'upcoming' && (
              <div className="space-y-4">
                {upcomingSessions.length > 0 ? (
                  upcomingSessions.map((session) => (
                    <div
                      key={session.id}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4 flex-1">
                          <img
                            src={session.mentorPhoto}
                            alt={session.mentorName}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="text-gray-900 mb-1">{session.mentorName}</h3>
                            <p className="text-gray-600 text-sm mb-3">{session.topic}</p>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {session.date}
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {session.time} ({session.duration} menit)
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <button
                            onClick={() => handleViewMentor(session.mentorId)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                          >
                            Lihat Detail
                          </button>
                          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                            Reschedule
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">Belum ada sesi mendatang</p>
                    <button
                      onClick={() => setCurrentPage('search')}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      Cari Mentor
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* History Tab */}
            {activeTab === 'history' && (
              <div className="space-y-4">
                {completedSessions.length > 0 ? (
                  completedSessions.map((session) => (
                    <div
                      key={session.id}
                      className="border border-gray-200 rounded-lg p-6"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4 flex-1">
                          <img
                            src={session.mentorPhoto}
                            alt={session.mentorName}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="text-gray-900 mb-1">{session.mentorName}</h3>
                            <p className="text-gray-600 text-sm mb-2">{session.topic}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {session.date}
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {session.time}
                              </div>
                            </div>
                            {session.rating && (
                              <div className="flex items-center gap-2">
                                <div className="flex gap-1">
                                  {[...Array(session.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-600">{session.review}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        {!session.rating && (
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                            Beri Rating
                          </button>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <History className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Belum ada riwayat sesi</p>
                  </div>
                )}
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="max-w-2xl">
                <div className="flex items-center gap-6 mb-8">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-gray-900 mb-1">{user.name}</h2>
                    <p className="text-gray-600">{user.email}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      defaultValue={user.name}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue={user.email}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Nomor Telepon</label>
                    <input
                      type="tel"
                      placeholder="+62"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Bio</label>
                    <textarea
                      placeholder="Ceritakan tentang diri Anda..."
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Simpan Perubahan
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recommended Mentors */}
        {activeTab === 'upcoming' && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-gray-900 mb-6">Rekomendasi Mentor untuk Anda</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mentors.slice(0, 3).map((mentor) => (
                <div key={mentor.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={mentor.photo}
                      alt={mentor.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-gray-900">{mentor.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">{mentor.rating}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {mentor.experienceSummary}
                  </p>
                  <button
                    onClick={() => handleViewMentor(mentor.id)}
                    className="w-full bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition-colors text-sm"
                  >
                    Lihat Profil
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
