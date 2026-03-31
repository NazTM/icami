import { DocumentPage } from "@/components/page/document-page";

export const metadata = {
  title: "Sponsors",
};

export default function SponsorsPage() {
  return (
    <DocumentPage title="Sponsors & partners" eyebrow="Support">
      <p>
        Industry and institutional partners help ICAMI deliver a strong program
        and accessible attendance. Sponsorship tiers, branding opportunities,
        and exhibition space will be described in the sponsorship prospectus.
      </p>
      <p>
        For inquiries, please email the organizing committee using the address
        in the site footer.
      </p>

      <div className="mt-10 icami-card flex items-center justify-center py-20 text-center">
        <p className="font-mono text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          TBA
        </p>
      </div>
    </DocumentPage>
  );
}
