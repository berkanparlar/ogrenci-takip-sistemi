import { motion } from "framer-motion"
import { Link } from "react-router-dom"



function Register() {
    return (
        <div className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ background: "url('https://images.unsplash.com/photo-1606636660801-c61b8e97a1dc?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1606636660801-c61b8e97a1dc?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            {/* opaklık efekti */}
            <div className="absolute inset-0 bg-black bg-opacity-50">
            </div>
            {/*FORM */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative bg-white bg-opacity-80 p-8 shadow-lg rounded-lg w-full max-w-md"
            >
                <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Kayıt Ol</h2>
                <form className="space-y-4">
                    {/*Kullanıcı adı */}
                    <div>
                        <label className="block text-gray-600">Kullanıcı Adı</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Kullanıcı adınızı girin"
                        />
                    </div>
                    {/*E-POSTA */}
                    <div>
                        <label className="block text-gray-600">E-posta</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="E-posta adresinizi girin"
                        />
                    </div>
                    {/*Şifre */}
                    <div>
                        <label className="block text-gray-600">Şifre</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Şifrenizi girin"
                        />
                    </div>
                    {/*Şifre tekrar */}
                    <div>
                        <label className="block text-gray-600">Şifre Tekrar</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Şifrenizi tekrar girin"
                        />
                    </div>
                    {/*KAYIT OL BUTONU */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                    >
                        Kayıt Ol
                    </motion.button>
                </form>
                {/*GİRİŞ SAYFASINA YÖNLENDİRME */}
                <div className="mt-4 text-center">
                    <span className="text-gray-600">Zaten bir hesabınız var mı?</span>
                    <Link to="/" className="text-blue-500 hover:underline ml-1">Giriş Yap</Link>
                </div>
            </motion.div>
        </div>
    )
}
export default Register