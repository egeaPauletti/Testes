import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import Output from "./Output";

const CodeEditor = () => {
  const [value, setValue] = useState(
    '\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Al");\n'
  );

  const [language, setLanguage] = useState("javascript");

  const ignoraErro = () => {
    setLanguage(language);
  };
  console.log(ignoraErro);

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-full w-full z-100 absolute top-0 left-0">
      <div className="h-full w-full flex justify-center items-center gap-5 ">
        <Editor
          height="70%"
          width="40%"
          language={language}
          theme="vs-dark"
          value={value}
          onChange={(value) => setValue(value || "")}
        />
        <Output language={language} sourceCode={value} />
      </div>
    </div>
  );
};

export default CodeEditor;
