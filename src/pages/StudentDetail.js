import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

function StudentDetail() {

  const { id } = useParams();
  const navigate = useNavigate();
  //Gecici 
  const students = [
    { id: 1, name: "Berkan Parlar", class: "10A", parent: "Şükrü Parlar", attendance: "98%", address: "İstanbul, Türkiye", phone: "555-123-4567" },
    { id: 2, name: "Burak Dursun Parlar", class: "9B", parent: "Elmas Parlar", attendance: "95%", address: "Ankara, Türkiye", phone: "555-987-6543" },
    { id: 3, name: "Beyza Parlar", class: "11C", parent: "Şükrü Parlar", attendance: "93%", address: "İzmir, Türkiye", phone: "555-456-7890" }
  ];

  const student = students.find((s) => s.id === Number(id));

  if (!student) {
    return <div className="p-6 text-red-500">Ögrenci bulunamadı!</div>
  }
  return (
    <motion.div
      className="p-6 bg-gray-100 min-h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-3xl font-semibold text-gray-700 mb-4"> Ögrenci Detayı</h1>
        <p className="text-lg"><strong>Ad Soyad: </strong>{student.name}</p>
        <p className="text-lg"><strong>Sınıf: </strong>{student.class}</p>
        <p className="text-lg"><strong>Veli: </strong>{student.parent}</p>
        <p className="text-lg"><strong>Devamsızlık: </strong>{student.attendance}</p>
        <p className="text-lg"><strong>Adres: </strong>{student.address}</p>
        <p className="text-lg"><strong>Telefon: </strong>{student.phone}</p>
      

      <button
      onClick={()=>navigate("/students")}
      className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Ögrenci listesine dön
      </button>
      </div>
    </motion.div>
  );
}
export default StudentDetail;