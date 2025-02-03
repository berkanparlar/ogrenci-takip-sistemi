import { Link } from "react-router-dom";
function Navbar(){
    return(
    <nav className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
            {/* LOGO */}
        
        <h1 className="text-2xl font-bold">Ögrenci Takip</h1>
        <ul className="flex space-x-6">
            <li>
                <Link to="/" className="hower:text-gray-300 transition">Giriş</Link>
            </li>
            <li>
                <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
            </li>
            <li>
                <Link to="/students" className="hower:text-gray-300 transition">Ögrenci Listesi</Link>
            </li>
            <li>
                <Link to="/attendance" className="hower:text-gray-300 transition">Yoklama</Link>
            </li>
            
        </ul>
        </div>
    </nav>
    )
}

export default Navbar;