import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types/dist/types/types";
import { BLOCKS } from "@contentful/rich-text-types";
import { ReactNode } from "react";

export interface LogoEntry {
  fields: {
    url: string;
    alt: string;
  };
}

export function renderRichText(richTextDocument: Document, options?: Options) {
  const replaceNewLines = (text: string) => {
    return text.split(/\r?\n/).reduce((children: ReactNode[], textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  };

  return documentToReactComponents(richTextDocument, {
    ...options,
    renderText: options?.renderText || replaceNewLines,
  });
}

export function renderRichTextParagraph(richTextDocument: Document, nodeRenderer?: (children: ReactNode) => ReactNode) {
  return renderRichText(richTextDocument, {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (nodeRenderer ? nodeRenderer(children) : <p>{children}</p>),
    },
  });
}
