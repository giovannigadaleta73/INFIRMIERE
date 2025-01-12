import React, { useState } from "react";
import { FaTint, FaQuestionCircle } from "react-icons/fa"; // Icone
import Help from "./Help"; // Componente Modal (da creare separatamente)

const Gouttes = () => {
    const [medicamentMg, setMedicamentMg] = useState(""); // mg (MÉDICAMENT)
    const [medicamentMl, setMedicamentMl] = useState("1"); // ml (MÉDICAMENT), default 1
    const [prescriptionMg, setPrescriptionMg] = useState(""); // mg (PRESCRIPTION MÉDICALE)
    const [ml_per_gocce, setMl_per_gocce] = useState("1");
    const [gocce_per_ml, setGocce_per_ml] = useState("20");
    const [isHelp1Open, setHelp1Open] = useState(false); // Modal per HELP1
    const [isHelp2Open, setHelp2Open] = useState(false); // Modal per HELP2

    const calculateResult = () => {
        const mgMed = parseFloat(medicamentMg);
        const mlMed = parseFloat(medicamentMl);
        const mgPres = parseFloat(prescriptionMg);
        const mlxGtt = parseFloat(ml_per_gocce);
        const gttxMl = parseFloat(gocce_per_ml);

        if (!mgMed || !mlMed || !mgPres || !mlxGtt || !gttxMl) {
            return "..."; // Mostra "..." se mancano valori validi
        }

        return ((mgPres / mgMed) * mlMed * (gttxMl / mlxGtt)).toFixed(0); // Risultato con due decimali
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-stretch bg-gray-50 p-4">
            {/** IMMAGINE */}
            <div className="mb-2 p-4  text-center">
                <FaTint className="w-12 h-12 text-green-600" />
            </div>

            {/** MEDICINALE */}
            <div className="mt-2 space-y-4 w-full max-w-md">
                <div>
                    <div className="flex flex-col p-4 items-center bg-slate-100 border border-slate-300 rounded-lg">
                        <h1 className="text-xl p-2 font-bold text-green-600">
                            MÉDICAMENT
                        </h1>

                        <div className="flex flex-row items-center">
                            <input
                                type="number"
                                className="w-20 p-2 border border-gray-300 rounded-lg text-2xl text-center"
                                value={medicamentMg}
                                onChange={(e) =>
                                    setMedicamentMg(e.target.value)
                                }
                                placeholder=""
                            />
                            <span className="text-gray-700 font-medium p-2">
                                mg /
                            </span>

                            <input
                                type="number"
                                className="w-20 p-2 border border-gray-300 rounded-lg text-2xl text-center"
                                value={medicamentMl}
                                onChange={(e) =>
                                    setMedicamentMl(e.target.value)
                                }
                                placeholder=""
                            />
                            <span className="text-gray-700 font-medium p-2">
                                ml
                            </span>
                            <FaQuestionCircle
                                className="text-yellow-500 w-6 h-6 cursor-pointer"
                                onClick={() => setHelp1Open(true)}
                            />
                        </div>

                        <div className="flex flex-row mt-2 py-2 px-4 items-center border border-dotted border-slate-400">
                            <input
                                type="number"
                                className="w-16 p-2 border border-gray-300 rounded-lg text-xl text-center"
                                value={ml_per_gocce}
                                onChange={(e) =>
                                    setMl_per_gocce(e.target.value)
                                }
                                placeholder=""
                            />
                            <span className="text-gray-700 font-medium p-2">
                                ml /
                            </span>

                            <input
                                type="number"
                                className="w-16 p-2 border border-gray-300 rounded-lg text-xl text-center"
                                value={gocce_per_ml}
                                onChange={(e) =>
                                    setGocce_per_ml(e.target.value)
                                }
                                placeholder=""
                            />
                            <span className="text-gray-700 font-medium p-2">
                                gtt
                            </span>
                            <FaQuestionCircle
                                className="text-yellow-500 w-6 h-6 cursor-pointer"
                                onClick={() => setHelp2Open(true)}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-4 items-center bg-slate-100 border border-slate-300 rounded-lg">
                    <h1 className="text-xl p-2 font-bold text-green-600">
                        PRESCRIPTION MÉDICALE
                    </h1>
                    <div className="flex flex-row items-center">
                        <input
                            type="number"
                            className="w-20 p-2 border border-gray-300 rounded-lg text-2xl text-center"
                            value={prescriptionMg}
                            onChange={(e) => setPrescriptionMg(e.target.value)}
                            placeholder=""
                        />
                        <span className="text-gray-700 font-medium p-2">
                            mg
                        </span>
                    </div>
                </div>

                <div className="mt-6 p-6 bg-green-100 border border-blue-300 rounded-lg text-center">
                    <span className="block text-4xl font-bold text-green-600 mt-2">
                        {calculateResult()} gtt
                    </span>
                </div>
            </div>

            {isHelp1Open && (
                <Help onClose={() => setHelp1Open(false)}>
                    <h2 className="text-lg font-bold">Spiegazione 1</h2>
                    <p className="mt-2 text-gray-600">
                        Insérez, s&apos;il vous plaît, la concentration du
                        médicament en <b>mg</b> et en <b>ml</b>.
                    </p>
                </Help>
            )}

            {isHelp2Open && (
                <Help onClose={() => setHelp2Open(false)}>
                    <h2 className="text-lg font-bold">Spiegazione 2</h2>
                    <p className="mt-2 text-gray-600">
                        Habituellement, 1 ml contient 20 gouttes, mais si un
                        autre rapport est indiqué sur le médicament, modifiez-le
                        ici.
                    </p>
                </Help>
            )}
        </div>
    );
};

export default Gouttes;
