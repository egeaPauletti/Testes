import { useState } from "react";
import { executeCode } from "../../api/apiIDE";
import { LANGUAGE_VERSIONS } from "../../constants/constants";
import Button from "../Button";

interface OuputProps {
  language: string;
  sourceCode: string;
}

const Output: React.FC<OuputProps> = ({ language, sourceCode }) => {
  const [output, setOutput] = useState<string[] | null>(null);

  type LanguageKey = keyof typeof LANGUAGE_VERSIONS;
  const version = LANGUAGE_VERSIONS[language as LanguageKey];

  const runCode = async () => {
    try {
      const { run: result } = await executeCode(language, version, sourceCode);
      setOutput(result.output.split("\n"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[40%] h-[70%] bgThirdColor whiteColor relative">
      {output
        ? output.map((line, i) => <div key={i}>{line}</div>)
        : 'Click "Run Code" to see the output here'}
      <div className="absolute top-[5%] right-[5%]">
        <Button
          label="Run Code"
          filled
          onClick={() => {
            runCode();
          }}
        />
      </div>
    </div>
  );
};
export default Output;
