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
    <div className="preview">
      <h2>Prévia do Relatório</h2>

      {steps.map((step) => (
        <div key={step.id} className="preview-step">
          <h3>
            {step.id}. {step.title}
          </h3>

          {step.questions.map((q) => (
            <p key={q.id}>
              <strong>
                {q.id} {q.label}:
              </strong>{" "}
              {respostas[q.id] || <em>(sem resposta)</em>}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
