import { useState } from "react";
import Help from "./Help";
import { FaQuestionCircle } from "react-icons/fa"; // Icone
const appVersion = import.meta.env.VITE_APP_VERSION || "1.0.0";

function Footer() {
    const [isHelp1Open, setHelp1Open] = useState(false);
    return (
        <footer className="flex  bg-slate-300 text-gray-500 p-4">
            Infirmière: {appVersion} &nbsp;
            <FaQuestionCircle
                className="text-slate-600 w-6 h-6 cursor-pointer"
                onClick={() => setHelp1Open(true)}
            />
{isHelp1Open && (
    <Help onClose={() => setHelp1Open(false)}>
        <h2 className="text-sm font-bold mb-2 text-blue-600">Comment installer l&apos;application</h2>
        
        <div className="space-y-6">
            {/* Sezione Android */}
            <div className="p-2 border border-green-200 bg-green-50 rounded-md">
                <h3 className="text-sm font-semibold text-green-600 mb-2">Pour Android</h3>
                <ol className="list-decimal list-inside text-gray-600 text-xs space-y-2">
                    <li>Ouvrez le navigateur sur votre appareil Android (de préférence <b>Google Chrome</b>).</li>
                    <li>Visitez le site web : <b>[insérez le lien du site]</b>.</li>
                    <li>Appuyez sur l&apos;icône du menu (<b>⋮</b>) en haut à droite.</li>
                    <li>Sélectionnez <b>&quot;Ajouter à l&apos;écran d&apos;accueil&quot;</b> dans le menu.</li>
                    <li>Confirmez en appuyant sur <b>&quot;Ajouter&quot;</b>.</li>
                    <li>Vous trouverez l&apos;icône de l&apos;application sur l&apos;écran d&apos;accueil de votre téléphone.</li>
                </ol>
            </div>

            {/* Sezione iPhone */}
            <div className="p-2 border border-blue-200 bg-blue-50 rounded-md">
                <h3 className="text-sm font-semibold text-blue-600 mb-2">Pour iPhone</h3>
                <ol className="list-decimal list-inside text-gray-600  text-xs space-y-2">
                    <li>Ouvrez <b>Safari</b> sur votre appareil iOS.</li>
                    <li>Visitez le site web : <b>[insérez le lien du site]</b>.</li>
                    <li>Appuyez sur le bouton <b>Partager</b> (le carré avec une flèche vers le haut).</li>
                    <li>Faites défiler vers le bas et sélectionnez <b>&quot;Ajouter à l&apos;écran d&apos;accueil&quot;</b>.</li>
                    <li>Entrez un nom pour l&apos;application (par exemple : <b>&quot;Infirmière&quot;</b>) et appuyez sur <b>&quot;Ajouter&quot;</b>.</li>
                    <li>L&apos;icône apparaîtra sur l&apos;écran d&apos;accueil de votre iPhone.</li>
                </ol>
            </div>
        </div>
    </Help>
)}

        </footer>
    );
}

export default Footer;
