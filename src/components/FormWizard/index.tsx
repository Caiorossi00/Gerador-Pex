import { useState } from "react";
import { questionSteps } from "../../data/questions";

export default function FormWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [respostas, setRespostas] = useState<{ [key: string]: string }>({});

  const step = questionSteps[currentStep];

  const handleChange = (campo: string, valor: string) => {
    setRespostas((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  };

  const nextStep = () => {
    if (currentStep < questionSteps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="form-wizard">
      <h2 className="step-title">{step.title}</h2>

      {step.questions.map((q) => (
        <div key={q.id} className="question-block">
          <label className="question-label">
            {q.id} {q.label}
          </label>
          <input
            type="text"
            value={respostas[q.id] || ""}
            onChange={(e) => handleChange(q.id, e.target.value)}
            className="question-input"
          />
        </div>
      ))}

      <div className="navigation-buttons">
        {currentStep > 0 && <button onClick={prevStep}>Voltar</button>}
        {currentStep < questionSteps.length - 1 ? (
          <button onClick={nextStep}>Avançar</button>
        ) : (
          <button onClick={() => console.log("Respostas:", respostas)}>
            Finalizar
          </button>
        )}
      </div>
    </div>
  );
}
