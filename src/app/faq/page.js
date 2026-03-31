import { DocumentPage } from "@/components/page/document-page";

export const metadata = {
  title: "FAQ",
};

export default function FaqPage() {
  return (
    <DocumentPage title="Frequently asked questions" eyebrow="Help">
      <h2>General</h2>

      <h3>What is ICAMI 2026?</h3>
      <p>
        ICAMI 2026 is the International Conference on Advanced Machine
        Intelligence, hosted at Multimedia University (MMU), Malaysia in December
        2026. It covers four thematic tracks spanning trustworthy AI, generative
        and quantum intelligence, healthcare AI, and AI for industry and smart
        systems.
      </p>

      <h3>Who can attend?</h3>
      <p>
        ICAMI welcomes researchers, practitioners, students, and industry
        professionals from around the world. You do not need to have an accepted
        paper to attend — non-author registrations are available.
      </p>

      <h3>What are the conference dates?</h3>
      <p>
        The conference is scheduled for <strong>December 2026</strong>. Exact
        dates will be announced on the{" "}
        <a className="icami-inline-link" href="/important-dates">
          Important Dates
        </a>{" "}
        page.
      </p>

      <h2>Submission</h2>

      <h3>What is the paper submission deadline?</h3>
      <p>
        The submission deadline is <strong>July 2026</strong>. Check the{" "}
        <a className="icami-inline-link" href="/important-dates">
          Important Dates
        </a>{" "}
        page for the exact date once finalized.
      </p>

      <h3>What topics are covered?</h3>
      <p>
        ICAMI 2026 features four tracks: General, Trustworthy &amp; Autonomous
        Intelligence; Generative, Quantum &amp; Scalable Intelligence; AI for
        Healthcare &amp; Intelligent Medical Systems; and AI for Industry,
        Infrastructure &amp; Smart Systems. See the{" "}
        <a className="icami-inline-link" href="/tracks">
          Tracks
        </a>{" "}
        page for detailed topic lists.
      </p>

      <h3>What format should my paper follow?</h3>
      <p>
        Submissions must follow the IEEE conference paper format. Detailed
        formatting instructions, templates, and page limits are available on
        the{" "}
        <a className="icami-inline-link" href="/call-for-papers">
          Call for Papers
        </a>{" "}
        page.
      </p>

      <h3>Can I submit work that has been published elsewhere?</h3>
      <p>
        No. All submissions must be original and not previously published or
        under review at another venue. Dual submissions will be rejected.
      </p>

      <h3>How will I be notified of the decision?</h3>
      <p>
        Authors will be notified of acceptance or rejection by{" "}
        <strong>October 2026</strong>. Notifications are sent to the
        corresponding author&apos;s email address provided during submission.
      </p>

      <h3>When is the camera-ready deadline?</h3>
      <p>
        Camera-ready papers are due in <strong>November 2026</strong>. Authors
        of accepted papers must incorporate reviewer feedback and submit the
        final version by this deadline.
      </p>

      <h2>Registration</h2>

      <h3>How do I register?</h3>
      <p>
        Registration details and the portal link will be announced on the{" "}
        <a className="icami-inline-link" href="/registration">
          Registration
        </a>{" "}
        page once available. At least one author per accepted paper must
        register for the paper to appear in the proceedings.
      </p>

      <h3>Are there different registration categories?</h3>
      <p>
        Yes. Registration categories and fee structures — including potential
        discounts for students and participants from eligible countries — are
        outlined on the{" "}
        <a className="icami-inline-link" href="/registration/fees">
          Registration Fees
        </a>{" "}
        page.
      </p>

      <h3>Can I get a refund if I cancel?</h3>
      <p>
        Cancellation and refund policies will be detailed in the registration
        portal. Please review the{" "}
        <a className="icami-inline-link" href="/registration/guidelines">
          Registration Guidelines
        </a>{" "}
        for the latest information.
      </p>

      <h2>Venue &amp; travel</h2>

      <h3>Where is the conference held?</h3>
      <p>
        ICAMI 2026 takes place at{" "}
        <strong>Multimedia University (MMU), Malaysia</strong>. Address,
        directions, and nearby accommodation options are available on the{" "}
        <a className="icami-inline-link" href="/venue">
          Venue
        </a>{" "}
        page.
      </p>

      <h3>Do I need a visa to attend?</h3>
      <p>
        Visa requirements depend on your nationality. Many countries have
        visa-free or visa-on-arrival arrangements with Malaysia. Check with your
        local Malaysian embassy or consulate for the most accurate and
        up-to-date information. If the conference offers invitation letters for
        visa applications, this will be communicated through the registration
        portal.
      </p>

      <h3>Will the conference be hybrid (online + in-person)?</h3>
      <p>
        The conference is planned as an in-person event. Any hybrid or virtual
        participation options, if introduced, will be announced on the website.
      </p>

      <h2>Publication</h2>

      <h3>Where will accepted papers be published?</h3>
      <p>
        Accepted and presented papers are planned for submission to IEEE Xplore
        Digital Library, subject to meeting IEEE&apos;s quality requirements and
        policies.
      </p>

      <h3>Will there be a best paper award?</h3>
      <p>
        Yes. Outstanding contributions will be recognized with awards. Details
        will be shared on the{" "}
        <a className="icami-inline-link" href="/awards">
          Awards
        </a>{" "}
        page.
      </p>

      <h2>Contact</h2>

      <h3>I have a question not listed here. Who do I contact?</h3>
      <p>
        Reach out to us through the appropriate channel on the{" "}
        <a className="icami-inline-link" href="/contact">
          Contact
        </a>{" "}
        page:
      </p>
      <ul>
        <li>
          General inquiries:{" "}
          <a className="icami-inline-link" href="mailto:contact@icami.net">
            contact@icami.net
          </a>
        </li>
        <li>
          Technical / website issues:{" "}
          <a className="icami-inline-link" href="mailto:tech@icami.net">
            tech@icami.net
          </a>
        </li>
        <li>
          Registration questions:{" "}
          <a className="icami-inline-link" href="mailto:reg@icami.net">
            reg@icami.net
          </a>
        </li>
        <li>
          General information:{" "}
          <a className="icami-inline-link" href="mailto:info@icami.net">
            info@icami.net
          </a>
        </li>
      </ul>
    </DocumentPage>
  );
}
