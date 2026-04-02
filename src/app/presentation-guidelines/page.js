import { loadContent } from "@/lib/load-content";
import { ContentPage } from "@/components/page/content-page";

export async function generateMetadata() {
  const { metaTitle, title, description } = await loadContent("presentation-guidelines");
  return { title: metaTitle || title, description };
}

export default async function PresentationGuidelinesPage() {
  const { title, eyebrow, body } = await loadContent("presentation-guidelines");
  return <ContentPage title={title} eyebrow={eyebrow}>{body}</ContentPage>;
}
