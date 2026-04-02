import { loadContent } from "@/lib/load-content";
import { ContentPage } from "@/components/page/content-page";

export async function generateMetadata() {
  const { metaTitle, title, description } = await loadContent("registration/guidelines");
  return { title: metaTitle || title, description };
}

export default async function RegistrationGuidelinesPage() {
  const { title, eyebrow, body } = await loadContent("registration/guidelines");
  return <ContentPage title={title} eyebrow={eyebrow}>{body}</ContentPage>;
}
