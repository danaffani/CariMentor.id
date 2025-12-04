import { useState } from 'react';
import React from 'react';
import { LandingPage } from './pages/LandingPage';
import { SearchMentor } from './pages/SearchMentor';
import { MentorProfile } from './pages/MentorProfile';
import { BookingPage } from './pages/BookingPage';
import { MenteeDashboard } from './pages/MenteeDashboard';
import { MentorDashboard } from './pages/MentorDashboard';
import { CommunityPage } from './pages/CommunityPage';
import { AdminDashboard } from './pages/AdminDashboard';

export type Page = 'landing' | 'search' | 'mentor-profile' | 'booking' | 'mentee-dashboard' | 'mentor-dashboard' | 'community' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'mentee' | 'mentor' | 'admin';
  avatar?: string;
}

export interface AppContextType {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  selectedMentorId: string | null;
  setSelectedMentorId: (id: string | null) => void;
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AppContext = React.createContext<AppContextType | null>(null);


export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [selectedMentorId, setSelectedMentorId] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const contextValue: AppContextType = {
    currentPage,
    setCurrentPage,
    selectedMentorId,
    setSelectedMentorId,
    user,
    setUser,
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage />;
      case 'search':
        return <SearchMentor />;
      case 'mentor-profile':
        return <MentorProfile />;
      case 'booking':
        return <BookingPage />;
      case 'mentee-dashboard':
        return <MenteeDashboard />;
      case 'mentor-dashboard':
        return <MentorDashboard />;
      case 'community':
        return <CommunityPage />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="min-h-screen bg-white">
        {renderPage()}
      </div>
    </AppContext.Provider>
  );
}
