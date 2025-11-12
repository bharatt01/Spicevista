import apedaLogo from "@/assets/apeda.png";
import fssaiLogo from "@/assets/fssai.png";
import fdaLogo from "@/assets/fda.png";
import brcLogo from "@/assets/brs.png";

const certifications = [
  { logo: apedaLogo, name: "APEDA" },
  { logo: fssaiLogo, name: "FSSAI" },
  { logo: fdaLogo, name: "FDA" },
  { logo: brcLogo, name: "BRC Food Safety" },
];

const ExportCertifications = () => {
  return (
    <section className="py-16 px-6 bg-amber-50">
      <h3 className="text-2xl font-playfair font-semibold text-amber-800 mb-8 text-center">
        Global Export Certifications
      </h3>
      <div className="flex flex-wrap justify-center gap-10">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="flex flex-col items-center w-28 bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow cursor-default"
          >
            <img
              src={cert.logo}
              alt={cert.name}
              className="h-16 mb-3 object-contain"
            />
            <span className="text-sm text-amber-900 font-semibold">
              {cert.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExportCertifications;
