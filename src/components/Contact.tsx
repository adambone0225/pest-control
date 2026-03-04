import { motion } from 'motion/react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <MessageCircle size={24} className="text-primary" />,
      title: 'WhatsApp',
      content: '+852 1234 5678',
      link: 'https://wa.me/85212345678',
    },
    {
      icon: <Phone size={24} className="text-primary" />,
      title: '電話',
      content: '+852 1234 5678',
      link: 'tel:+85212345678',
    },
    {
      icon: <MapPin size={24} className="text-primary" />,
      title: '地址',
      content: '香港九龍旺角彌敦道 123 號',
      link: '#',
    },
    {
      icon: <Clock size={24} className="text-primary" />,
      title: '營業時間',
      content: '星期一至日 09:00 - 21:00',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">聯絡我們</h2>
          <p className="text-lg text-gray-600">
            立即行動，解決您的害蟲煩惱
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-secondary mb-8">聯絡資訊</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.title === 'WhatsApp' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">{info.title}</h4>
                    <p className="text-lg font-bold text-secondary">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-100">
              <a
                href="https://wa.me/85212345678?text=你好，我想查詢除蟲服務%0A地區：%0A害蟲種類：%0A面積："
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all hover:shadow-lg hover:shadow-green-600/30"
              >
                <MessageCircle size={24} />
                <span>立即 WhatsApp 查詢</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-200 rounded-3xl overflow-hidden h-[500px] lg:h-auto relative"
          >
            {/* Placeholder for Google Map */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 font-medium">Google Map 載入中...</p>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.123456789012!2d114.16789012345678!3d22.312345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400c123456789%3A0x1234567890abcdef!2sMong%20Kok%2C%20Hong%20Kong!5e0!3m2!1sen!2shk!4v1620000000000!5m2!1sen!2shk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative z-10 opacity-80 hover:opacity-100 transition-opacity duration-300"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
