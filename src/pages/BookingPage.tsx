import { useContext, useState } from 'react';
import { AppContext } from '../App';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowLeft, Clock, Calendar, CreditCard, Check } from 'lucide-react';
import { mentors } from '../data/mockData';

export function BookingPage() {
  const context = useContext(AppContext);
  if (!context) return null;

  const { selectedMentorId, setCurrentPage, user } = context;

  const mentor = mentors.find((m) => m.id === selectedMentorId);

  const [selectedDuration, setSelectedDuration] = useState(60);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [topic, setTopic] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [bookingComplete, setBookingComplete] = useState(false);

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

  const durations = [
    { value: 60, label: '60 menit', price: mentor.pricePerSession },
    { value: 90, label: '90 menit', price: mentor.pricePerSession * 1.5 },
    { value: 120, label: '120 menit', price: mentor.pricePerSession * 2 },
  ];

  const selectedDurationData = durations.find(d => d.value === selectedDuration);
  const totalPrice = selectedDurationData?.price || 0;

  const handleConfirmBooking = () => {
    if (!selectedDate || !selectedTime || !paymentMethod) {
      alert('Mohon lengkapi semua data pemesanan');
      return;
    }
    setBookingComplete(true);
  };

  if (bookingComplete) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-gray-900 mb-2">Pemesanan Berhasil!</h2>
            <p className="text-gray-600 mb-6">
              Sesi mentoring Anda dengan {mentor.name} telah dikonfirmasi.
              Detail sesi telah dikirim ke email Anda.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Mentor</p>
                  <p className="text-gray-900">{mentor.name}</p>
                </div>
                <div>
                  <p className="text-gray-500">Tanggal</p>
                  <p className="text-gray-900">{selectedDate}</p>
                </div>
                <div>
                  <p className="text-gray-500">Waktu</p>
                  <p className="text-gray-900">{selectedTime}</p>
                </div>
                <div>
                  <p className="text-gray-500">Durasi</p>
                  <p className="text-gray-900">{selectedDuration} menit</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setCurrentPage('mentee-dashboard')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Lihat Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => setCurrentPage('mentor-profile')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Kembali ke Profil Mentor
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <h1 className="text-gray-900 mb-6">Pesan Sesi Mentoring</h1>

            {/* Mentor Summary */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex items-center gap-4">
                <img
                  src={mentor.photo}
                  alt={mentor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-gray-900">{mentor.name}</h3>
                  <p className="text-gray-600 text-sm">{mentor.expertise.join(', ')}</p>
                </div>
              </div>
            </div>

            {/* Duration Selection */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-blue-600" />
                <h2 className="text-gray-900">Pilih Durasi</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {durations.map((duration) => (
                  <button
                    key={duration.value}
                    onClick={() => setSelectedDuration(duration.value)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedDuration === duration.value
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <p className="text-gray-900 mb-1">{duration.label}</p>
                    <p className="text-blue-600 text-sm">
                      Rp {duration.price.toLocaleString('id-ID')}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Date & Time Selection */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-blue-600" />
                <h2 className="text-gray-900">Pilih Jadwal</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Tanggal</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Waktu</label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Pilih waktu</option>
                    <option value="09:00">09:00 WIB</option>
                    <option value="10:00">10:00 WIB</option>
                    <option value="13:00">13:00 WIB</option>
                    <option value="14:00">14:00 WIB</option>
                    <option value="15:00">15:00 WIB</option>
                    <option value="19:00">19:00 WIB</option>
                    <option value="20:00">20:00 WIB</option>
                  </select>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800 mb-2">Jadwal Tersedia Mentor:</p>
                <ul className="text-sm text-blue-700 space-y-1">
                  {mentor.availability.map((schedule, idx) => (
                    <li key={idx}>• {schedule}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Topic */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-gray-900 mb-4">Topik Mentoring (Opsional)</h2>
              <textarea
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Ceritakan apa yang ingin Anda diskusikan..."
                rows={4}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-5 h-5 text-blue-600" />
                <h2 className="text-gray-900">Metode Pembayaran</h2>
              </div>
              <div className="space-y-3">
                {['Bank Transfer', 'E-Wallet (GoPay, OVO, Dana)', 'Credit Card', 'Virtual Account'].map((method) => (
                  <label
                    key={method}
                    className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      paymentMethod === method
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method}
                      checked={paymentMethod === method}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-gray-700">{method}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="text-gray-900 mb-4">Ringkasan Pemesanan</h3>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Durasi</span>
                  <span className="text-gray-900">{selectedDuration} menit</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Harga per sesi</span>
                  <span className="text-gray-900">
                    Rp {totalPrice.toLocaleString('id-ID')}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Biaya platform</span>
                  <span className="text-gray-900">Gratis</span>
                </div>
              </div>

              <div className="flex justify-between mb-6">
                <span className="text-gray-900">Total</span>
                <span className="text-gray-900">
                  Rp {totalPrice.toLocaleString('id-ID')}
                </span>
              </div>

              <button
                onClick={handleConfirmBooking}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mb-3"
              >
                Konfirmasi Pemesanan
              </button>

              <p className="text-xs text-gray-500 text-center">
                Dengan melakukan pemesanan, Anda menyetujui syarat dan ketentuan yang berlaku
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
