import { useState } from "react";
import "../../styles/FormWizard.scss";

type Question = {
  id: string;
  label: string;
};

type Step = {
  id: string;
  title: string;
  questions: Question[];
  isHeader?: boolean;
};

type FormWizardProps = {
  steps: Step[];
  respostas: { [key: string]: string };
  setRespostas: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  handleDownload: () => void;
};

export default function FormWizard({
  steps,
  respostas,
  setRespostas,
  handleDownload,
}: FormWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const step = steps[currentStep];

  const handleChange = (campo: string, valor: string) => {
    setRespostas((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="form-wizard" id="form">
      <h2 className="step-title">
        {step.isHeader ? step.title : `${step.id}. ${step.title}`}
      </h2>

      <div className="step-questions">
        {step.questions.map((q) => (
          <div key={q.id} className="question-block">
            <label className="question-label" htmlFor={`textarea-${q.id}`}>
              {step.isHeader ? q.label : `${q.id} ${q.label}`}
            </label>
            <textarea
              id={`textarea-${q.id}`}
              value={respostas[q.id] || ""}
              onChange={(e) => handleChange(q.id, e.target.value)}
              className="question-input"
            />
          </div>
        ))}
      </div>

      <div className="navigation-buttons">
        {currentStep > 0 && <button onClick={prevStep}>Voltar</button>}
        {currentStep < steps.length - 1 ? (
          <button onClick={nextStep}>Avançar</button>
        ) : (
          <button className="download-button" onClick={handleDownload}>
            Finalizar
          </button>
        )}
      </div>
    </div>
  );
}
