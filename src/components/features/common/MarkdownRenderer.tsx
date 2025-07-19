// ai-chat-next/src/components/features/common/MarkdownRenderer.tsx
"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <ReactMarkdown
      components={{
        ul: p => <ul className="list-disc pl-5" {...p} />,
        ol: p => <ol className="list-decimal pl-5" {...p} />,
        li: p => <li className="my-1" {...p} />,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        code: (props: any) => {
          const { inline, className, children } = props;
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              style={atomDark}
              language={match[1]}
              PreTag="div"
              customStyle={{ margin: 0, padding: "0.75rem", borderRadius: "0.5rem" }}
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className="bg-gray-700 px-1 py-0.5 rounded text-sm" {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};