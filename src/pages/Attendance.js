import { useState } from "react";
import { motion } from "framer-motion";

function Attendance() {
  const [date, setDate] = useState("");
  const [attendance, setAttendance] = useState({});

  const students = [
    { id: 1, name: "Berkan Parlar" },
    { id: 2, name: "Burak Dursun Parlar" },
    { id: 3, name: "Beyza Parlar" }
  ];

  const handleCheckboxChange = (id) => {
    setAttendance((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSubmit = () => {
    const formattedAttendance = students.reduce((acc, student) => {
      acc[student.name] = attendance[student.id] ? "Geldi" : "Gelmedi";
      return acc;
    }, {});
    alert("Yoklama Kaydedildi!");
  };

  return (
    <motion.div 
      className="p-6 bg-gray-100 min-h-screen flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-semibold text-gray-700 mb-4">Yoklama</h1>
      
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        className="p-2 border rounded mb-4"
      />

      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">Öğrenci Listesi</h2>
        {students.map((student) => (
          <div key={student.id} className="flex items-center justify-between py-2 border-b">
            <span>{student.name}</span>
            <input
              type="checkbox"
              checked={!!attendance[student.id]}
              onChange={() => handleCheckboxChange(student.id)}
            />
          </div>
        ))}
        
        <motion.button
          onClick={handleSubmit}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Yoklamayı Gönder
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Attendance;
