import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex h-screen">
      {/* SOL TARAF: FOTOĞRAF */}
      <div
        className="hidden md:flex md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1')"
        }}
      ></div>

      {/* SAĞ TARAF: FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 p-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Giriş Yap</h2>

          <form className="space-y-4">
            {/* E-POSTA */}
            <div>
              <label className="block text-gray-600">E-posta</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="E-posta adresinizi girin"
              />
            </div>

            {/* ŞİFRE */}
            <div>
              <label className="block text-gray-600">Şifre</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Şifrenizi girin"
              />
            </div>

            {/* GİRİŞ BUTONU */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Giriş Yap
            </motion.button>
          </form>

          {/* ŞİFREMİ UNUTTUM & KAYIT OL */}
          <div className="mt-4 text-center">
            <Link to="/forgot-password" className="text-blue-500 hover:underline">Şifremi Unuttum</Link>
          </div>
          <div className="mt-2 text-center">
            <span className="text-gray-600">Hesabınız yok mu?</span>
            <Link to="/register" className="text-blue-500 hover:underline ml-1">Kayıt Ol</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Login;
