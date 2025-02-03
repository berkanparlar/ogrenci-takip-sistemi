import {motion} from "framer-motion"

function Dashboard() {
  return (
    <div classname="flex h-screen bg-gray-100">
      {/*Sidebar */}
      <div className="w-64 bg-white shadow-lg rounded-lg p-5 md:block">
        <h2 className="text-2xl font-bold text-gray-700">Ögrenci Takip</h2>
        <ul className="mt-5 space-y-3">
          <li className="p-2 bg-blue-500 text-white rounded-lg cursor-pointer">Dashboard</li>
          <li className="p-2 hover:bg-blue-100 rounded-lg cursor-pointer">Ögrenci listesi</li>
          <li className="p-2 hover:bg-blue-100 rounded-lg cursor-pointer">Devamsızlık</li>
          <li className="p-2 hover:bg-blue-100 rounded-lg cursor-pointer">Veliler</li>
        </ul>
      </div>
      {/* İÇERİK */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-semibold text-gray-700">Ana Sayfa</h1>
        {/*kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <motion.div
            className="bg-white p-5 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold">Toplam Ögrenci</h3>
            <p className="text-gray-500 text-lg">120</p>
          </motion.div>
          <motion.div
            className="bg-white p-5 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold">Bugün gelen Ögrenci</h3>
            <p className="text-gray-500 text-lg">110</p>
          </motion.div>
          <motion.div
            className="bg-white p-5 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold">Devamsızlık</h3>
            <p className="text-gray-500 text-lg">120</p>
          </motion.div>
        </div>
      </div>
    </div>);
}
export default Dashboard;