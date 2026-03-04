import { motion } from 'motion/react';
import { CheckCircle2, Info } from 'lucide-react';

export default function Pricing() {
  const prices = [
    { service: '家居除蟲', price: '$800 起' },
    { service: '白蟻處理', price: '$1500 起' },
    { service: '床蝨處理', price: '$1200 起' },
    { service: '商舖消毒', price: '$1000 起' },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">參考價目</h2>
          <p className="text-lg text-gray-600">
            建立價格透明度，讓您安心選擇
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <div className="bg-primary px-8 py-6">
              <h3 className="text-2xl font-bold text-white">服務收費標準</h3>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                {prices.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <span className="text-lg font-medium text-secondary">{item.service}</span>
                    <span className="text-xl font-bold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Info size={28} className="text-accent" />
              <h3 className="text-2xl font-bold text-secondary">備註</h3>
            </div>
            <p className="text-lg text-gray-600 mb-6">實際價格會因以下因素改變：</p>
            <ul className="space-y-4">
              {['面積', '害蟲情況', '嚴重程度'].map((factor, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 size={24} className="text-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">{factor}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-gray-500 text-sm">
                * 以上價格僅供參考，實際收費需視乎現場環境及具體情況而定。歡迎聯絡我們獲取免費報價。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
