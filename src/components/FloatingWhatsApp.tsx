import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/85212345678?text=你好，我想查詢除蟲服務%0A地區：%0A害蟲種類：%0A面積："
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/40 hover:bg-green-600 transition-colors"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle size={32} />
      {/* Optional: Add a pulse effect behind the button */}
      <span className="absolute inset-0 rounded-full bg-green-500 opacity-50 animate-ping"></span>
    </motion.a>
  );
}
