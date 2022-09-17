import * as React from "react";
import { SectionHeader } from "../section-header/section-header.component";
import { TTextProps } from "./text.definition";
import { TextHolder, TextWhiteHolder } from "./text.style";
import ReactMarkdown from "react-markdown";
import { ThemeProvider } from "styled-components";

export function Text({ id, className, children, color }: TTextProps) {
  // TODO: Use ThemeProvider
  if (color === "white") {
    return (
      <TextWhiteHolder>
        <ReactMarkdown>{children}</ReactMarkdown>
      </TextWhiteHolder>
    );
  }

  return (
    <TextHolder id={id}>
      <ReactMarkdown>{children}</ReactMarkdown>
    </TextHolder>
  );
}
