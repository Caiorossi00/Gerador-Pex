import { useState } from "react";
import FormWizard from "./components/FormWizard";
import Preview from "./components/Preview/Preview";
import { questionSteps } from "./data/questions";
import "./index.css";
import "./App.css";
import DownloadButton from "./components/DownloadButton/DownloadButton";

function App() {
  const [respostas, setRespostas] = useState<{ [key: string]: string }>({});

  return (
    <main className="app-container">
      <FormWizard
        steps={questionSteps}
        respostas={respostas}
        setRespostas={setRespostas}
      />

      <div className="preview-container">
        <Preview steps={questionSteps} respostas={respostas} />
        <DownloadButton />
      </div>
    </main>
  );
}

export default App;
