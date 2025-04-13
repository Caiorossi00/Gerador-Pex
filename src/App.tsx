import { useState } from "react";
import FormWizard from "./components/FormWizard";
import Preview from "./components/Preview/Preview";
import { questionSteps } from "./data/questions";
import "./index.css";
import "./App.css";
import DownloadButton from "./components/DownloadButton/DownloadButton";
// @ts-ignore
import html2pdf from "html2pdf.js";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Hero/Navbar";
import Faq from "./components/Faq/Faq";
import Apoie from "./components/Apoie/Apoie";
import Footer from "./components/Footer/Footer";

function App() {
  const [respostas, setRespostas] = useState<{ [key: string]: string }>({});

  const handleDownload = () => {
    const element = document.getElementById("relatorio-pdf");

    if (element) {
      element.classList.add("print-mode");

      const opt = {
        margin: 0.3,
        filename: "relatorio.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        autoPaging: "text",
        jsPDF: {
          unit: "in",
          format: "a4",
          orientation: "portrait",
          autoFirstPage: true,
          pageSize: "A4",
          hotfixes: ["px_scaling"],
        },
      };

      html2pdf()
        .set(opt)
        .from(element)
        .save()
        .then(() => {
          element.classList.remove("print-mode");
        });
    }
  };

  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>

      <main>
        <div className="app-container">
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
        </div>

        <div className="app-misc">
          <Faq />
          <Apoie />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
