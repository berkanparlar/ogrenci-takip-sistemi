import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



function StudentForm() {
    const { id } = useParams();
    const navigate = useNavigate();

    const students = [
        { id: 1, name: "Berkan Parlar", class: "10A", parent: "Şükrü Parlar", attendance: "98%", address: "İstanbul, Türkiye", phone: "555-123-4567" },
        { id: 2, name: "Burak Dursun Parlar", class: "9B", parent: "Elmas Parlar", attendance: "95%", address: "Ankara, Türkiye", phone: "555-987-6543" },
        { id: 3, name: "Beyza Parlar", class: "11C", parent: "Şükrü Parlar", attendance: "93%", address: "İzmir, Türkiye", phone: "555-456-7890" }
    ];
    //düzenleme
    const existingStudent = id ? students.find((student) => student.id.toString() === id) : null;

    const [formData, setFormData] = useState(
        existingStudent || { name: "", class: "", parent: "", attendance: "", address: "", phone: "" }
    );
    //input degiskenligi

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            alert("Öğrenci Güncellendi!");
        } else {
            alert("Yeni Öğrenci Eklendi!");
        }
        navigate("/studentList"); // Listeye geri dön
    }
    return (
        <motion.div
            className="p-6 bg-gray-100 min-h-screen flex items-center justify-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h1 className="text-3xl font-semibold text-gray-700 mb-4">
                    {id ? "Öğrenciyi Düzenle" : "Yeni Öğrenci Ekle"}
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Ad Soyad" className="w-full p-2 border rounded" />
                    <input type="text" name="class" value={formData.class} onChange={handleChange} placeholder="Sınıf" className="w-full p-2 border rounded" />
                    <input type="text" name="parent" value={formData.parent} onChange={handleChange} placeholder="Veli" className="w-full p-2 border rounded" />
                    <input type="text" name="attendance" value={formData.attendance} onChange={handleChange} placeholder="Devamsızlık (%)" className="w-full p-2 border rounded" />
                    <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Adres" className="w-full p-2 border rounded" />
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Telefon" className="w-full p-2 border rounded" />

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        {id ? "Güncelle" : "Ekle"}
                    </motion.button>
                </form>
                <button onClick={() => navigate("/student-list")} className="mt-4 w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500 transition">
                    İptal
                </button>
            </div>
        </motion.div>
    );

}
export default StudentForm;