const appVersion = import.meta.env.VITE_APP_VERSION || "1.0.0";

function Footer() {
  return (
    <footer className="text-center bg-slate-300 text-gray-500 p-4">
      Infirmière: {appVersion}
    </footer>
  );
}

export default Footer;
