import { useEffect } from "react";
import Prism from "prismjs";

import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import "prismjs/themes/prism.css";
import 'prismjs/components/prism-jsx.js'

import "./CodeBlock.css";

const CodeBlock = ({ code, language }: { code: string; language?: string }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  return (
    <pre className="line-numbers">
      <code className={language ? `language-${language}` : undefined}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;
