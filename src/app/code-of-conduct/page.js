import { loadContent } from "@/lib/load-content";
import { ContentPage } from "@/components/page/content-page";

export async function generateMetadata() {
  const { metaTitle, title, description } = await loadContent("code-of-conduct");
  return { title: metaTitle || title, description };
}

export default async function CodeOfConductPage() {
  const { title, eyebrow, body } = await loadContent("code-of-conduct");
  return <ContentPage title={title} eyebrow={eyebrow}>{body}</ContentPage>;
}
