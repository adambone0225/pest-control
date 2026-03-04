import { Link } from 'react-scroll';
import { Facebook, Instagram, Phone, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6">殺蟲特工隊</h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              香港本地專業害蟲防治公司，致力為家居及商業客戶提供安全、快速、有效的除蟲服務。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">快速連結</h4>
            <ul className="space-y-3">
              {['服務與害蟲', '施工流程', '價目表', '常見問題', '客戶評價', '關於我們'].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link === '服務與害蟲' ? 'services' : link === '施工流程' ? 'process' : link === '價目表' ? 'pricing' : link === '常見問題' ? 'faq' : link === '客戶評價' ? 'testimonials' : 'about'}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">聯絡方式</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">+852 1234 5678</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">info@pestcontrol.com.hk</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">香港九龍旺角彌敦道 123 號</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} 殺蟲特工隊. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">私隱政策</a>
            <a href="#" className="hover:text-white transition-colors">服務條款</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
