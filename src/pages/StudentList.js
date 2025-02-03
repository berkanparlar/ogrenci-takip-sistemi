import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function StudentList() {

  const [search, setSearch] = useState("");
  const students = [
    { id: 1, name: "Berkan Parlar", class: "10A", parent: "Şükrü Parlar", attendance: "98%" },
    { id: 2, name: "Burak Dursun Parlar", class: "9B", parent: "Elmas Parlar", attendance: "95%" },
    { id: 3, name: "Beyza Parlar", class: "11C", parent: "Şükrü Parlar", attendance: "93%" }
  ];

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-700">Ögrenci Listesi</h1>
      {/*Arama Kutusu */}
      <input
        type="text"
        placeholder="Ögrenci ara..."
        className="mt-4 p-2 border rounded w-full md:w-1/3 focus:ring-2 focus:ring-blue-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/*Ögrenci Tablosu */}
      <div className="mt-6 bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3">Ad Soyad</th>
              <th className="p-3">Sınıf</th>
              <th className="p-3">Veli</th>
              <th className="p-3">Devamsızlık</th>
            </tr>
          </thead>
          <tbody>
            {
              filteredStudents.map((student, index) => (
                <motion.tr
                  key={student.id}
                  class={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}>
                  <td className="p-3 border">
                    <Link to={`/students/${student.id}`} className="text-blue-600 hover:underline">
                    {student.name}
                    </Link>
                    </td>
                  <td className="p-3 border">{student.class}</td>
                  <td className="p-3 border">{student.parent}</td>
                  <td className="p-3 border">{student.attendance}</td>
                </motion.tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default StudentList;