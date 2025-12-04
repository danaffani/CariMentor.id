export interface Mentor {
  id: string;
  name: string;
  photo: string;
  expertise: string[];
  experienceSummary: string;
  rating: number;
  reviewCount: number;
  pricePerSession: number;
  background: string;
  education: string;
  workExperience: string[];
  portfolio: string[];
  certificates: string[];
  availability: string[];
  about: string;
}

export interface Testimonial {
  id: string;
  menteeName: string;
  menteeAvatar: string;
  mentorName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Karir',
    icon: 'briefcase',
    description: 'Konsultasi pengembangan karir dan transisi pekerjaan'
  },
  {
    id: '2',
    name: 'Bisnis',
    icon: 'trending-up',
    description: 'Bimbingan strategi bisnis dan entrepreneurship'
  },
  {
    id: '3',
    name: 'IT/Data',
    icon: 'code',
    description: 'Mentoring programming, data science, dan teknologi'
  },
  {
    id: '4',
    name: 'Persiapan Lomba',
    icon: 'trophy',
    description: 'Persiapan kompetisi dan olimpiade'
  },
  {
    id: '5',
    name: 'Organisasi',
    icon: 'users',
    description: 'Leadership dan manajemen organisasi'
  },
  {
    id: '6',
    name: 'Finansial & Investasi',
    icon: 'dollar-sign',
    description: 'Perencanaan keuangan dan investasi'
  },
  {
    id: '7',
    name: 'Kesehatan Mental',
    icon: 'heart',
    description: 'Konseling dan wellness mental'
  }
];

export const mentors: Mentor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Wijaya',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    expertise: ['Karir', 'HR Management'],
    experienceSummary: '10+ tahun di bidang Human Resources, ex-HR Director di perusahaan multinasional',
    rating: 4.9,
    reviewCount: 127,
    pricePerSession: 250000,
    background: 'HR Professional dengan pengalaman lebih dari 10 tahun di berbagai perusahaan multinasional',
    education: 'S2 Manajemen SDM - Universitas Indonesia',
    workExperience: [
      'HR Director - PT Global Solutions (2018-2023)',
      'Senior HR Manager - PT Tech Indonesia (2015-2018)',
      'HR Business Partner - Unilever Indonesia (2012-2015)'
    ],
    portfolio: [
      'Mengembangkan program talent development untuk 500+ karyawan',
      'Meningkatkan employee retention rate hingga 85%'
    ],
    certificates: [
      'SHRM-SCP Certified',
      'Professional Coach Certification'
    ],
    availability: ['Senin 19:00-21:00', 'Rabu 19:00-21:00', 'Sabtu 09:00-17:00'],
    about: 'Saya passionate dalam membantu profesional muda mengembangkan karir mereka. Dengan pengalaman di berbagai industri, saya dapat memberikan perspektif yang komprehensif tentang strategi karir yang efektif.'
  },
  {
    id: '2',
    name: 'Ahmad Rizki',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    expertise: ['Bisnis', 'Entrepreneurship', 'Marketing'],
    experienceSummary: 'Founder 3 startup sukses, mentor di berbagai accelerator program',
    rating: 4.8,
    reviewCount: 98,
    pricePerSession: 300000,
    background: 'Serial entrepreneur dengan track record membangun dan mengembangkan bisnis dari nol',
    education: 'S1 Teknik Industri - ITB',
    workExperience: [
      'Founder & CEO - TechStart Indonesia (2019-sekarang)',
      'Co-founder - EduPlatform (2016-2019, Exit)',
      'Business Development Manager - Tokopedia (2014-2016)'
    ],
    portfolio: [
      'Membangun startup dengan valuasi $5M dalam 3 tahun',
      'Mentor di Google for Startups Accelerator',
      'Speaker di berbagai startup conference'
    ],
    certificates: [
      'Y Combinator Startup School',
      'Google Analytics Certified'
    ],
    availability: ['Selasa 18:00-21:00', 'Kamis 18:00-21:00', 'Minggu 13:00-17:00'],
    about: 'Saya membantu calon entrepreneur untuk memvalidasi ide bisnis dan mengembangkan strategi go-to-market yang efektif. Mari belajar dari pengalaman saya membangun 3 startup yang sukses.'
  },
  {
    id: '3',
    name: 'Linda Kusuma',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    expertise: ['IT/Data', 'Data Science', 'Machine Learning'],
    experienceSummary: 'Senior Data Scientist, ex-Google, expert dalam ML dan AI',
    rating: 4.9,
    reviewCount: 156,
    pricePerSession: 350000,
    background: 'Data Scientist dengan 8+ tahun pengalaman di tech companies terkemuka',
    education: 'S2 Computer Science - Stanford University',
    workExperience: [
      'Senior Data Scientist - Gojek (2021-sekarang)',
      'Data Scientist - Google (2018-2021)',
      'Machine Learning Engineer - Microsoft (2016-2018)'
    ],
    portfolio: [
      'Mengembangkan ML model yang meningkatkan conversion rate 30%',
      'Published 5 papers di conference internasional',
      'Kontributor open source TensorFlow'
    ],
    certificates: [
      'Google Professional Data Engineer',
      'AWS Machine Learning Specialty',
      'Deep Learning Specialization - Coursera'
    ],
    availability: ['Senin 20:00-22:00', 'Rabu 20:00-22:00', 'Sabtu 14:00-18:00'],
    about: 'Passionate tentang data science dan AI. Saya membantu profesional IT untuk career transition ke data science atau meningkatkan skill ML/AI mereka.'
  },
  {
    id: '4',
    name: 'Budi Santoso',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    expertise: ['Finansial & Investasi', 'Personal Finance'],
    experienceSummary: 'Certified Financial Planner, 12 tahun pengalaman wealth management',
    rating: 4.7,
    reviewCount: 89,
    pricePerSession: 200000,
    background: 'Financial advisor yang membantu ratusan klien mencapai kebebasan finansial',
    education: 'S1 Akuntansi - Universitas Gadjah Mada',
    workExperience: [
      'Senior Financial Advisor - Manulife (2018-sekarang)',
      'Wealth Manager - BCA (2015-2018)',
      'Financial Analyst - Mandiri Sekuritas (2012-2015)'
    ],
    portfolio: [
      'Mengelola portfolio investasi > 10 Miliar',
      'Membantu 200+ klien mencapai tujuan finansial mereka'
    ],
    certificates: [
      'Certified Financial Planner (CFP)',
      'Wakil Manajer Investasi (WMI)',
      'Certified Investment Analyst'
    ],
    availability: ['Senin-Jumat 18:00-20:00', 'Sabtu 10:00-16:00'],
    about: 'Saya percaya setiap orang bisa mencapai kebebasan finansial dengan perencanaan yang tepat. Mari saya bantu Anda membuat rencana keuangan yang sesuai dengan goals Anda.'
  },
  {
    id: '5',
    name: 'Dewi Lestari, M.Psi',
    photo: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop',
    expertise: ['Kesehatan Mental', 'Career Counseling'],
    experienceSummary: 'Psikolog klinis, spesialis career & mental wellness',
    rating: 5.0,
    reviewCount: 143,
    pricePerSession: 275000,
    background: 'Psikolog profesional dengan fokus pada mental wellness dan career counseling',
    education: 'S2 Psikologi Klinis - Universitas Indonesia',
    workExperience: [
      'Psikolog Klinis - Klinik Mindwell (2017-sekarang)',
      'Career Counselor - Universitas Indonesia (2015-2020)',
      'Clinical Psychologist - RS Cipto Mangunkusumo (2014-2017)'
    ],
    portfolio: [
      'Menangani 500+ kasus konseling',
      'Workshop facilitator untuk berbagai perusahaan',
      'Penulis buku "Mengelola Stress di Tempat Kerja"'
    ],
    certificates: [
      'Lisensi Psikolog Klinis',
      'Certified Career Counselor',
      'Cognitive Behavioral Therapy (CBT) Practitioner'
    ],
    availability: ['Selasa-Kamis 16:00-20:00', 'Sabtu 09:00-15:00'],
    about: 'Mental health adalah fondasi kesuksesan karir. Saya membantu profesional muda mengelola stress, anxiety, dan menemukan work-life balance yang sehat.'
  },
  {
    id: '6',
    name: 'Rafi Prasetyo',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    expertise: ['IT/Data', 'UI/UX Design', 'Product Design'],
    experienceSummary: 'Lead Product Designer, ex-Tokopedia, portfolio international',
    rating: 4.8,
    reviewCount: 112,
    pricePerSession: 280000,
    background: 'Product designer dengan pengalaman menciptakan produk digital yang user-centric',
    education: 'S1 Desain Komunikasi Visual - Institut Teknologi Bandung',
    workExperience: [
      'Lead Product Designer - Traveloka (2020-sekarang)',
      'Senior UI/UX Designer - Tokopedia (2017-2020)',
      'Product Designer - Bukalapak (2015-2017)'
    ],
    portfolio: [
      'Redesign fitur yang meningkatkan user engagement 45%',
      'Awwwards Site of the Day winner',
      'Mentor di design bootcamp'
    ],
    certificates: [
      'Google UX Design Professional Certificate',
      'Interaction Design Foundation Certificate'
    ],
    availability: ['Senin 19:00-21:00', 'Rabu 19:00-21:00', 'Jumat 19:00-21:00'],
    about: 'Design bukan hanya soal estetika, tapi problem solving. Saya akan membantu Anda memahami design thinking dan menciptakan produk yang users love.'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    menteeName: 'Andi Pratama',
    menteeAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    mentorName: 'Dr. Sarah Wijaya',
    rating: 5,
    comment: 'Mentoring dengan Bu Sarah sangat membantu saya dalam merencanakan karir. Beliau memberikan insight yang sangat valuable dan actionable. Highly recommended!',
    date: '2024-11-15'
  },
  {
    id: '2',
    menteeName: 'Siti Nurhaliza',
    menteeAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    mentorName: 'Ahmad Rizki',
    rating: 5,
    comment: 'Mas Ahmad membuka perspektif saya tentang entrepreneurship. Setelah 3 sesi mentoring, saya berhasil launch MVP produk pertama saya!',
    date: '2024-11-10'
  },
  {
    id: '3',
    menteeName: 'David Wijaya',
    menteeAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    mentorName: 'Linda Kusuma',
    rating: 5,
    comment: 'Mbak Linda sangat expert di bidang data science. Penjelasannya mudah dipahami dan saya jadi lebih confident untuk career switch ke data science.',
    date: '2024-11-08'
  },
  {
    id: '4',
    menteeName: 'Ratna Sari',
    menteeAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
    mentorName: 'Dewi Lestari',
    rating: 5,
    comment: 'Sesi konseling dengan Bu Dewi membantu saya mengelola work stress dengan lebih baik. Professional dan empathetic. Thank you!',
    date: '2024-11-05'
  }
];

export interface Session {
  id: string;
  mentorId: string;
  mentorName: string;
  mentorPhoto: string;
  menteeId: string;
  menteeName: string;
  date: string;
  time: string;
  duration: number;
  price: number;
  status: 'scheduled' | 'completed' | 'cancelled' | 'pending';
  topic?: string;
  rating?: number;
  review?: string;
}

export const mockSessions: Session[] = [
  {
    id: 's1',
    mentorId: '1',
    mentorName: 'Dr. Sarah Wijaya',
    mentorPhoto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    menteeId: 'mentee1',
    menteeName: 'Andi Pratama',
    date: '2024-12-10',
    time: '19:00',
    duration: 60,
    price: 250000,
    status: 'scheduled',
    topic: 'Career transition consultation'
  },
  {
    id: 's2',
    mentorId: '3',
    mentorName: 'Linda Kusuma',
    mentorPhoto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    menteeId: 'mentee1',
    menteeName: 'Andi Pratama',
    date: '2024-11-25',
    time: '20:00',
    duration: 60,
    price: 350000,
    status: 'completed',
    topic: 'Machine Learning fundamentals',
    rating: 5,
    review: 'Sangat membantu!'
  }
];
