import { DocumentPage } from "@/components/page/document-page";
import { MarkdownContent } from "@/components/page/markdown-content";

/**
 * A DocumentPage whose prose body comes from a markdown string.
 * Pass extra JSX children after the markdown via the `after` prop.
 */
export function ContentPage({ title, eyebrow, children, after }) {
  return (
    <DocumentPage title={title} eyebrow={eyebrow}>
      <MarkdownContent>{children}</MarkdownContent>
      {after}
    </DocumentPage>
  );
}
