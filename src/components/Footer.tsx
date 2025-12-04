import { Facebook, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-blue-400">CariMentor</span>
              <span>.id</span>
            </div>
            <p className="text-gray-400 text-sm">
              Platform mentoring terpercaya untuk pengembangan karir, bisnis, dan skill profesional Anda.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Tentang */}
          <div>
            <h3 className="mb-4">Tentang</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cara Kerja</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Karir</a></li>
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="mb-4">Layanan</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cari Mentor</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Jadi Mentor</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Komunitas</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Event & Webinar</a></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="mb-4">Kontak</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Bantuan</a></li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@carimentor.id" className="hover:text-blue-400 transition-colors">
                  hello@carimentor.id
                </a>
              </li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Kebijakan Privasi</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 CariMentor.id. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
