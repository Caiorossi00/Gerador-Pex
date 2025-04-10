import "../../styles/DownloadButton.scss";
import html2pdf from "html2pdf.js";

export default function DownloadButton() {
  const handleDownload = () => {
    const element = document.getElementById("relatorio-pdf");

    if (element) {
      const opt = {
        margin: 0.5,
        filename: "relatorio.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      };

      html2pdf().set(opt).from(element).save();
    }
  };

  return (
    <button className="download-button" onClick={handleDownload}>
      Baixar Relatório
    </button>
  );
}
