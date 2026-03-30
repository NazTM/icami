import { DocumentPage } from "@/components/page/document-page";

export const metadata = {
  title: "Registration fees",
};

export default function RegistrationFeesPage() {
  return (
    <DocumentPage title="Registration fees" eyebrow="Attend">
      <p>
        ICAMI 2026 registration is planned in two windows: standard and late.
        Pricing below reflects the current fee framework and may be refined with
        final policy notes at portal launch.
      </p>

      <h2>Registration fee matrix (USD)</h2>
      <ul>
        <li>
          <strong>International (non-IEEE)</strong> — <strong>$350</strong> standard,
          <strong> $450</strong> late.
        </li>
        <li>
          <strong>Bangladesh participants</strong> — approximately
          <strong> $120-$150</strong> standard, around <strong>$250</strong> late
          (final category brackets will be published in the portal).
        </li>
        <li>
          <strong>Other categories</strong> (e.g., students, IEEE members,
          listeners/workshop-only) will be aligned to this charge framework and
          listed with exact amounts at registration opening.
        </li>
      </ul>

      <h2>Currency and payment</h2>
      <p>
        Accepted currencies, tax treatment, and the payment gateway will be
        listed here. Invoicing and institutional billing instructions will be
        provided for delegates who require them.
      </p>

      <h2>What to expect next</h2>
      <p>
        The portal will publish exact category definitions (author/student/listener),
        IEEE discount policy if applicable, and workshop bundling options. See also{" "}
        <a className="icami-inline-link" href="/registration/guidelines">
          Registration guidelines
        </a>{" "}
        and the main{" "}
        <a className="icami-inline-link" href="/registration">
          Registration
        </a>{" "}
        overview.
      </p>
    </DocumentPage>
  );
}
