import { useContext, useState } from 'react';
import { AppContext } from '../App';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { 
  Calendar, 
  DollarSign, 
  Users, 
  Star, 
  TrendingUp,
  Clock,
  CheckCircle,
  Settings
} from 'lucide-react';
import { mockSessions } from '../data/mockData';

export function MentorDashboard() {
  const context = useContext(AppContext);
  if (!context) return null;

  const { user } = context;

  const [activeTab, setActiveTab] = useState<'overview' | 'sessions' | 'earnings' | 'settings'>('overview');

  if (!user || user.role !== 'mentor') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <p className="text-gray-600 mb-4">Silakan login sebagai mentor untuk mengakses dashboard</p>
        </div>
      </div>
    );
  }

  const totalSessions = mockSessions.length;
  const completedSessions = mockSessions.filter(s => s.status === 'completed').length;
  const upcomingSessions = mockSessions.filter(s => s.status === 'scheduled').length;
  const totalEarnings = mockSessions.reduce((sum, s) => sum + s.price, 0);
  const avgRating = 4.9;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Dashboard Mentor</h1>
          <p className="text-gray-600">Selamat datang kembali, {user.name}!</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm">Total Sesi</p>
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-gray-900 mb-1">{totalSessions}</p>
            <p className="text-sm text-green-600 flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              +12% dari bulan lalu
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm">Sesi Mendatang</p>
              <Calendar className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-gray-900 mb-1">{upcomingSessions}</p>
            <p className="text-sm text-gray-500">Minggu ini</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm">Total Penghasilan</p>
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-gray-900 mb-1">
              Rp {totalEarnings.toLocaleString('id-ID')}
            </p>
            <p className="text-sm text-gray-500">Bulan ini</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm">Rating Rata-rata</p>
              <Star className="w-5 h-5 text-yellow-500" />
            </div>
            <p className="text-gray-900 mb-1">{avgRating}/5.0</p>
            <p className="text-sm text-gray-500">Dari {completedSessions} review</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <div className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 border-b-2 transition-colors ${
                  activeTab === 'overview'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('sessions')}
                className={`py-4 border-b-2 transition-colors ${
                  activeTab === 'sessions'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Jadwal Sesi
              </button>
              <button
                onClick={() => setActiveTab('earnings')}
                className={`py-4 border-b-2 transition-colors ${
                  activeTab === 'earnings'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Penghasilan
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`py-4 border-b-2 transition-colors ${
                  activeTab === 'settings'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Pengaturan
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Recent Activity */}
                <div>
                  <h2 className="text-gray-900 mb-4">Aktivitas Terbaru</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                      <div className="bg-green-100 p-2 rounded-full">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900">Sesi mentoring selesai</p>
                        <p className="text-sm text-gray-600">dengan Andi Pratama • 2 jam yang lalu</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Star className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900">Rating baru diterima: 5/5</p>
                        <p className="text-sm text-gray-600">dari Siti Nurhaliza • 1 hari yang lalu</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <Calendar className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900">Sesi baru dijadwalkan</p>
                        <p className="text-sm text-gray-600">dengan David Wijaya • 3 hari yang lalu</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Performance Chart Placeholder */}
                <div>
                  <h2 className="text-gray-900 mb-4">Performa Bulanan</h2>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
                    <div className="grid grid-cols-3 gap-6 text-center">
                      <div>
                        <p className="text-3xl text-blue-600 mb-2">{completedSessions}</p>
                        <p className="text-sm text-gray-600">Sesi Selesai</p>
                      </div>
                      <div>
                        <p className="text-3xl text-purple-600 mb-2">
                          Rp {(totalEarnings / 1000000).toFixed(1)}jt
                        </p>
                        <p className="text-sm text-gray-600">Total Pendapatan</p>
                      </div>
                      <div>
                        <p className="text-3xl text-green-600 mb-2">{avgRating}</p>
                        <p className="text-sm text-gray-600">Rating Rata-rata</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Sessions Tab */}
            {activeTab === 'sessions' && (
              <div className="space-y-4">
                <h2 className="text-gray-900 mb-4">Jadwal Sesi Mendatang</h2>
                {mockSessions.filter(s => s.status === 'scheduled').map((session) => (
                  <div
                    key={session.id}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <Calendar className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-gray-900 mb-1">{session.menteeName}</h3>
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
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                          Join Meeting
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                          Reschedule
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {mockSessions.filter(s => s.status === 'scheduled').length === 0 && (
                  <div className="text-center py-12">
                    <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Belum ada sesi mendatang</p>
                  </div>
                )}
              </div>
            )}

            {/* Earnings Tab */}
            {activeTab === 'earnings' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                    <p className="text-sm text-gray-600 mb-2">Bulan Ini</p>
                    <p className="text-gray-900 mb-1">
                      Rp {totalEarnings.toLocaleString('id-ID')}
                    </p>
                    <p className="text-sm text-green-600">+25% dari bulan lalu</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
                    <p className="text-sm text-gray-600 mb-2">Total Tahun Ini</p>
                    <p className="text-gray-900 mb-1">
                      Rp {(totalEarnings * 8).toLocaleString('id-ID')}
                    </p>
                    <p className="text-sm text-blue-600">8 bulan</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                    <p className="text-sm text-gray-600 mb-2">Rata-rata per Sesi</p>
                    <p className="text-gray-900 mb-1">
                      Rp {Math.round(totalEarnings / totalSessions).toLocaleString('id-ID')}
                    </p>
                    <p className="text-sm text-purple-600">{totalSessions} sesi</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-gray-900 mb-4">Riwayat Transaksi</h2>
                  <div className="space-y-3">
                    {mockSessions.map((session) => (
                      <div
                        key={session.id}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                      >
                        <div>
                          <p className="text-gray-900">{session.menteeName}</p>
                          <p className="text-sm text-gray-600">{session.date} • {session.duration} menit</p>
                        </div>
                        <div className="text-right">
                          <p className="text-green-600">
                            + Rp {session.price.toLocaleString('id-ID')}
                          </p>
                          <p className="text-xs text-gray-500">
                            {session.status === 'completed' ? 'Selesai' : 'Dijadwalkan'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="max-w-2xl space-y-6">
                <div>
                  <h2 className="text-gray-900 mb-4">Pengaturan Profil</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Tarif per Sesi (60 menit)</label>
                      <input
                        type="number"
                        defaultValue="250000"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Bidang Keahlian</label>
                      <input
                        type="text"
                        defaultValue="Karir, HR Management"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Tentang Saya</label>
                      <textarea
                        rows={4}
                        defaultValue="Saya passionate dalam membantu profesional muda mengembangkan karir mereka..."
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-gray-900 mb-4">Jadwal Ketersediaan</h2>
                  <div className="space-y-3">
                    {['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'].map((day) => (
                      <div key={day} className="flex items-center gap-4">
                        <input type="checkbox" className="w-4 h-4 text-blue-600" />
                        <span className="w-24 text-gray-700">{day}</span>
                        <input
                          type="time"
                          defaultValue="09:00"
                          className="px-3 py-1 border border-gray-200 rounded-lg text-sm"
                        />
                        <span className="text-gray-500">-</span>
                        <input
                          type="time"
                          defaultValue="17:00"
                          className="px-3 py-1 border border-gray-200 rounded-lg text-sm"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Simpan Perubahan
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
