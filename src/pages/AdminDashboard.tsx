import { useContext, useState } from 'react';
import { AppContext } from '../App';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  CheckCircle,
  XCircle,
  AlertCircle,
  Search,
  Filter
} from 'lucide-react';

export function AdminDashboard() {
  const context = useContext(AppContext);
  if (!context) return null;

  const { user } = context;

  const [activeTab, setActiveTab] = useState<'overview' | 'mentors' | 'transactions' | 'support'>('overview');

  if (!user || user.role !== 'admin') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <p className="text-gray-600 mb-4">Access denied. Admin only.</p>
        </div>
      </div>
    );
  }

  const pendingMentors = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      expertise: 'Product Management',
      experience: '8 years at Google, Meta',
      status: 'pending'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      expertise: 'Marketing Strategy',
      experience: '6 years at Unilever, P&G',
      status: 'pending'
    }
  ];

  const transactions = [
    {
      id: 't1',
      mentee: 'Andi Pratama',
      mentor: 'Dr. Sarah Wijaya',
      amount: 250000,
      date: '2024-12-04',
      status: 'completed'
    },
    {
      id: 't2',
      mentee: 'Siti Nurhaliza',
      mentor: 'Ahmad Rizki',
      amount: 300000,
      date: '2024-12-03',
      status: 'completed'
    },
    {
      id: 't3',
      mentee: 'David Wijaya',
      mentor: 'Linda Kusuma',
      amount: 350000,
      date: '2024-12-03',
      status: 'pending'
    }
  ];

  const supportTickets = [
    {
      id: 's1',
      user: 'Andi Pratama',
      subject: 'Pembayaran belum diproses',
      priority: 'high',
      status: 'open',
      date: '2024-12-04'
    },
    {
      id: 's2',
      user: 'Siti Nurhaliza',
      subject: 'Pertanyaan tentang reschedule',
      priority: 'medium',
      status: 'in-progress',
      date: '2024-12-03'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Platform management & monitoring</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm">Total Users</p>
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-gray-900 mb-1">12,459</p>
            <p className="text-sm text-green-600">+12% this month</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm">Active Mentors</p>
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-gray-900 mb-1">523</p>
            <p className="text-sm text-green-600">+8% this month</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm">Total Revenue</p>
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-gray-900 mb-1">Rp 45.5M</p>
            <p className="text-sm text-green-600">+25% this month</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm">Pending Reviews</p>
              <AlertCircle className="w-5 h-5 text-orange-600" />
            </div>
            <p className="text-gray-900 mb-1">{pendingMentors.length}</p>
            <p className="text-sm text-gray-500">Mentor verification</p>
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
                onClick={() => setActiveTab('mentors')}
                className={`py-4 border-b-2 transition-colors ${
                  activeTab === 'mentors'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Mentor Verification
                {pendingMentors.length > 0 && (
                  <span className="ml-2 bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                    {pendingMentors.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setActiveTab('transactions')}
                className={`py-4 border-b-2 transition-colors ${
                  activeTab === 'transactions'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Transactions
              </button>
              <button
                onClick={() => setActiveTab('support')}
                className={`py-4 border-b-2 transition-colors ${
                  activeTab === 'support'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Support
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Recent Activity */}
                  <div>
                    <h2 className="text-gray-900 mb-4">Recent Activity</h2>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                        <div>
                          <p className="text-sm text-gray-900">New mentor approved</p>
                          <p className="text-xs text-gray-600">Dr. Sarah Wijaya • 2h ago</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <DollarSign className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <p className="text-sm text-gray-900">Payment processed</p>
                          <p className="text-xs text-gray-600">Rp 250,000 • 3h ago</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Users className="w-5 h-5 text-purple-600 mt-1" />
                        <div>
                          <p className="text-sm text-gray-900">New user registered</p>
                          <p className="text-xs text-gray-600">Andi Pratama • 5h ago</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Platform Stats */}
                  <div>
                    <h2 className="text-gray-900 mb-4">Platform Statistics</h2>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm text-gray-600">Total Sessions</span>
                        <span className="text-gray-900">8,234</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm text-gray-600">Completion Rate</span>
                        <span className="text-green-600">94%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm text-gray-600">Average Rating</span>
                        <span className="text-yellow-600">4.8/5.0</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm text-gray-600">Support Tickets</span>
                        <span className="text-gray-900">{supportTickets.length} open</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Mentor Verification Tab */}
            {activeTab === 'mentors' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-gray-900">Pending Mentor Applications</h2>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search mentors..."
                      className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {pendingMentors.map((mentor) => (
                  <div key={mentor.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-gray-900 mb-1">{mentor.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{mentor.email}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs">
                            {mentor.expertise}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{mentor.experience}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Approve
                        </button>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2">
                          <XCircle className="w-4 h-4" />
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {pendingMentors.length === 0 && (
                  <div className="text-center py-12">
                    <CheckCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">No pending applications</p>
                  </div>
                )}
              </div>
            )}

            {/* Transactions Tab */}
            {activeTab === 'transactions' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-gray-900">Transaction History</h2>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                    <Filter className="w-5 h-5" />
                    Filter
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 text-sm text-gray-600">ID</th>
                        <th className="text-left py-3 text-sm text-gray-600">Mentee</th>
                        <th className="text-left py-3 text-sm text-gray-600">Mentor</th>
                        <th className="text-left py-3 text-sm text-gray-600">Amount</th>
                        <th className="text-left py-3 text-sm text-gray-600">Date</th>
                        <th className="text-left py-3 text-sm text-gray-600">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction) => (
                        <tr key={transaction.id} className="border-b border-gray-100">
                          <td className="py-4 text-sm text-gray-600">{transaction.id}</td>
                          <td className="py-4 text-sm text-gray-900">{transaction.mentee}</td>
                          <td className="py-4 text-sm text-gray-900">{transaction.mentor}</td>
                          <td className="py-4 text-sm text-gray-900">
                            Rp {transaction.amount.toLocaleString('id-ID')}
                          </td>
                          <td className="py-4 text-sm text-gray-600">{transaction.date}</td>
                          <td className="py-4">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              transaction.status === 'completed'
                                ? 'bg-green-100 text-green-600'
                                : 'bg-yellow-100 text-yellow-600'
                            }`}>
                              {transaction.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Support Tab */}
            {activeTab === 'support' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-gray-900">Support Tickets</h2>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search tickets..."
                      className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {supportTickets.map((ticket) => (
                  <div key={ticket.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-gray-900">{ticket.subject}</h3>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            ticket.priority === 'high'
                              ? 'bg-red-100 text-red-600'
                              : 'bg-yellow-100 text-yellow-600'
                          }`}>
                            {ticket.priority}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            ticket.status === 'open'
                              ? 'bg-blue-100 text-blue-600'
                              : 'bg-purple-100 text-purple-600'
                          }`}>
                            {ticket.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">From: {ticket.user}</p>
                        <p className="text-xs text-gray-500">{ticket.date}</p>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
