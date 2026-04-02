import { loadContent } from "@/lib/load-content";
import { ContentPage } from "@/components/page/content-page";

export async function generateMetadata() {
  const { metaTitle, title } = await loadContent("code-of-conduct");
  return { title: metaTitle || title };
}

export default async function CodeOfConductPage() {
  const { title, eyebrow, body } = await loadContent("code-of-conduct");
  return <ContentPage title={title} eyebrow={eyebrow}>{body}</ContentPage>;
}
