import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/pest.png"
          alt="白蟻特寫"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
              白蟻防治｜專業除蟲服務<br />
              <span className="text-red-500">香港上門除蟲</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-10 font-medium leading-relaxed">
              白蟻、蟑螂、床蝨、跳蚤等害蟲處理<br />
              快速上門｜專業施工｜服務可靠
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/85212345678?text=你好，我想查詢除蟲服務%0A地區：%0A害蟲種類：%0A面積："
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all hover:shadow-lg hover:shadow-green-600/30 transform hover:-translate-y-1"
              >
                <MessageCircle size={24} />
                <span>WhatsApp 查詢</span>
              </a>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
