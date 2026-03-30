import { DocumentPage } from "@/components/page/document-page";

export const metadata = {
  title: "Awards",
};

export default function AwardsPage() {
  return (
    <DocumentPage title="Awards" eyebrow="Recognition">
      <p>
        ICAMI may recognize outstanding contributions through awards such as Best
        Paper, Best Student Paper, and Best Reviewer. Eligibility criteria and
        selection processes will be published before the conference.
      </p>
    </DocumentPage>
  );
}
