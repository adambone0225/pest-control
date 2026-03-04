import { motion } from 'motion/react';
import { Award, Users, ShieldCheck } from 'lucide-react';

export default function About() {
  const features = [
    {
      title: '專業團隊',
      description: '擁有多年豐富經驗，技術精湛。',
      icon: <Users size={40} className="text-primary mb-4" />,
    },
    {
      title: '豐富經驗',
      description: '處理過無數家居及商業案例。',
      icon: <Award size={40} className="text-primary mb-4" />,
    },
    {
      title: '服務承諾',
      description: '提供優質售後服務及保固。',
      icon: <ShieldCheck size={40} className="text-primary mb-4" />,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">關於我們</h2>
          <p className="text-lg text-gray-600">
            建立品牌可信度，您的專屬害蟲防治專家
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
