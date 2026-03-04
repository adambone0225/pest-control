import { motion } from 'motion/react';
import { Shield, Bug, Search } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: '除白蟻',
      icon: <Shield size={40} className="text-primary mb-4" />,
      description: '白蟻會破壞木材及結構，如果不及早處理可能造成嚴重損害。',
      features: ['白蟻檢查', '白蟻藥劑處理', '地基防治', '長效保護'],
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop',
    },
    {
      title: '除蟲服務',
      icon: <Bug size={40} className="text-primary mb-4" />,
      description: '我們使用專業藥劑及安全施工方式，有效減少害蟲滋生。',
      features: ['蟑螂', '螞蟻', '床蝨', '跳蚤', '蚊蟲', '蒼蠅'],
      image: 'https://images.unsplash.com/photo-1594818379496-da1e345b0ded?q=80&w=1000&auto=format&fit=crop',
    },
    {
      title: '害蟲種類',
      icon: <Search size={40} className="text-primary mb-4" />,
      description: '針對不同害蟲特性，提供最合適的解決方案。',
      features: ['白蟻', '蟑螂', '螞蟻', '床蝨', '跳蚤', '老鼠', '蚊蟲'],
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">服務與害蟲</h2>
          <p className="text-lg text-gray-600">
            專業防治各類害蟲，為您提供安全、有效的解決方案
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                {service.icon}
                <h3 className="text-2xl font-bold text-secondary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-secondary mb-3">
                    {service.title === '除蟲服務' ? '常見害蟲包括：' : service.title === '除白蟻' ? '我們提供：' : '涵蓋種類：'}
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-sm">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
