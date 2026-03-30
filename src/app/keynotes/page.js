import { DocumentPage } from "@/components/page/document-page";

export const metadata = {
  title: "Keynotes",
};

export default function KeynotesPage() {
  return (
    <DocumentPage title="Keynote speakers" eyebrow="Program">
      <p>
        Invited keynote speakers will be listed here with affiliations, talk
        titles, and abstracts. The committee is finalizing invitations; this
        page will be updated as speakers confirm.
      </p>
    </DocumentPage>
  );
}
