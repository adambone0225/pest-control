import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: '陳先生',
      district: '九龍',
      content: '處理白蟻非常專業，師傅解釋得很清楚。',
      rating: 5,
    },
    {
      name: '李小姐',
      district: '將軍澳',
      content: 'WhatsApp 很快回覆，第二天就上門處理。',
      rating: 5,
    },
    {
      name: '張太',
      district: '沙田',
      content: '師傅準時到達，施工過程乾淨俐落，非常滿意。',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">客戶評價</h2>
          <p className="text-lg text-gray-600">
            建立信任，真實客戶見證
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative"
            >
              <Quote size={48} className="text-gray-100 absolute top-6 right-6" />
              <div className="flex space-x-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-8 relative z-10 italic">
                「{testimonial.content}」
              </p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-6 relative z-10">
                <span className="font-bold text-secondary text-lg">— {testimonial.name}</span>
                <span className="text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full">
                  {testimonial.district}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
