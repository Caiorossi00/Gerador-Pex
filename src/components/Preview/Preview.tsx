import "../../styles/Preview.scss";

type Question = {
  id: string;
  label: string;
};

type Step = {
  id: string;
  title: string;
  questions: Question[];
};

type PreviewProps = {
  steps: Step[];
  respostas: { [key: string]: string };
};

export default function Preview({ steps, respostas }: PreviewProps) {
  return (
    <div className="preview" id="relatorio-pdf">
      <h2>Prévia do Relatório</h2>

      {steps.map((step) => (
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
                  {respostas[q.id] || <em>(Resposta pendente)</em>}
                </span>
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
