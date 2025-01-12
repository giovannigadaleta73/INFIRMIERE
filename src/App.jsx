import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { FaSyringe, FaTint } from "react-icons/fa"; // Icone
import Injection from "./pages/Injection";
import Gouttes from "./pages/Gouttes";
import Footer from "./pages/Footer"

export default function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                {/* Menu di Navigazione */}
                <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md">
                    <ul className="flex justify-around py-3">
                        <li>
                            <Link to="/injection" className="text-blue-600">
                                <FaSyringe className="w-8 h-8" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/gouttes" className="text-green-600">
                                <FaTint className="w-8 h-8" />
                            </Link>
                        </li>
                    </ul>
                </nav>
                    <Footer />

                {/* Definizione delle Route */}
                <Routes>
                    <Route path="/" element={<Navigate to="/injection" />} /> {/* Percorso predefinito */}
                    <Route path="/injection" element={<Injection />} />
                    <Route path="/gouttes" element={<Gouttes />} />
                </Routes>
            </div>
        </Router>
    );
}
