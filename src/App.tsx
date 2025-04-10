import { useState } from "react";
import FormWizard from "./components/FormWizard";
import Preview from "./components/Preview/Preview";
import { questionSteps } from "./data/questions";
import "./index.css";
import "./App.css";
import DownloadButton from "./components/DownloadButton/DownloadButton";
// @ts-ignore
import html2pdf from "html2pdf.js";

function App() {
  const [respostas, setRespostas] = useState<{ [key: string]: string }>({});

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
    <main className="app-container">
      <FormWizard
        steps={questionSteps}
        respostas={respostas}
        setRespostas={setRespostas}
        handleDownload={handleDownload}
      />

      <div className="preview-container">
        <div id="relatorio-pdf">
          <Preview steps={questionSteps} respostas={respostas} />
        </div>
        <DownloadButton handleDownload={handleDownload} />
      </div>
    </main>
  );
}

export default App;
