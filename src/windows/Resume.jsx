import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControl } from "#components/index.js";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Use local worker from node_modules
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);

  return (
    <>
      <div id="window-header">
        <WindowControl target="resume" />
        <h2>Resume.pdf</h2>

        <a
          href="/resume.pdf"
          download="resume.pdf"
          className="cursor-pointer ml-auto"
          title="Download resume"
        >
          <Download className="icon" />
        </a>
      </div>

      <div className="resume-viewer">
        {error && <p className="text-red-500 p-4">Error: {error}</p>}
        <Document
          file="/resume.pdf"
          onLoadSuccess={({ numPages }) => {
            setNumPages(numPages);
            setError(null);
          }}
          onLoadError={(error) => {
            console.error("Error loading PDF:", error);
            setError(error.message || "Failed to load PDF");
          }}
          loading={<p className="p-4">Loading PDF...</p>}
        >
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            scale={1.2}
          />
        </Document>
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
