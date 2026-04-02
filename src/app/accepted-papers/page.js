import { loadContent } from "@/lib/load-content";
import { ContentPage } from "@/components/page/content-page";

export async function generateMetadata() {
  const { metaTitle, title, description } = await loadContent("accepted-papers");
  return { title: metaTitle || title, description };
}

export default async function AcceptedPapersPage() {
  const { title, eyebrow, body } = await loadContent("accepted-papers");
  return <ContentPage title={title} eyebrow={eyebrow}>{body}</ContentPage>;
}
