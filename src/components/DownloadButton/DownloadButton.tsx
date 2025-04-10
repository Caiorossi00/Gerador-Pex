// DownloadButton.ts
import "../../styles/DownloadButton.scss";

type DownloadButtonProps = {
  handleDownload: () => void;
};

export default function DownloadButton({
  handleDownload,
}: DownloadButtonProps) {
  return (
    <button className="download-button" onClick={handleDownload}>
      Baixar Relatório
    </button>
  );
}
