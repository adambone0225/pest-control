import { motion } from 'motion/react';
import { MessageSquare, Search, Bug, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '1',
      title: '聯絡查詢',
      description: 'WhatsApp 或電話查詢',
      icon: <MessageSquare size={32} />,
    },
    {
      number: '2',
      title: '現場評估',
      description: '技術員到場檢查害蟲情況',
      icon: <Search size={32} />,
    },
    {
      number: '3',
      title: '專業施工',
      description: '使用安全藥劑處理害蟲',
      icon: <Bug size={32} />,
    },
    {
      number: '4',
      title: '完成與跟進',
      description: '確保害蟲問題得到改善',
      icon: <CheckCircle size={32} />,
    },
  ];

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">施工流程</h2>
          <p className="text-lg text-gray-600">
            降低客戶的不確定感，四步解決害蟲煩惱
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-white border-4 border-primary flex items-center justify-center text-primary mb-6 shadow-lg shadow-primary/20 transition-transform duration-300 hover:scale-110">
                {step.icon}
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 w-full h-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-accent font-bold text-lg mb-2 block">Step {step.number}</span>
                <h3 className="text-xl font-bold text-secondary mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
