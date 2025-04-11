import "../../styles/Preview.scss";

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

type PreviewProps = {
  steps: Step[];
  respostas: { [key: string]: string };
};

export default function Preview({ steps, respostas }: PreviewProps) {
  return (
    <div className="preview" id="relatorio-pdf">
      {steps.map((step) => {
        if (step.isHeader) {
          return (
            <div key={step.id} className="preview-header">
              <h2>{step.title}</h2>

              <div className="preview-questions-header">
                {step.questions.map((q) => (
                  <p key={q.id}>
                    <strong className="question-header">{q.label}</strong>
                    <span className="answer-header">
                      {respostas[q.id] || <em>Resposta pendente</em>}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          );
        }

        return (
          <div key={step.id} className="preview-step">
            <h3>
              {step.id}. {step.title}
            </h3>

            <div className="preview-questions">
              {step.questions.map((q) => (
                <p key={q.id}>
                  <strong className="question">
                    {q.id} {q.label}
                  </strong>
                  <br />
                  <span className="answer">
                    {respostas[q.id] || <em>Resposta pendente</em>}
                  </span>
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
