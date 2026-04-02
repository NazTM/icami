import { loadContent } from "@/lib/load-content";
import { ContentPage } from "@/components/page/content-page";

export async function generateMetadata() {
  const { metaTitle, title, description } = await loadContent("awards");
  return { title: metaTitle || title, description };
}

export default async function AwardsPage() {
  const { title, eyebrow, body } = await loadContent("awards");
  return <ContentPage title={title} eyebrow={eyebrow}>{body}</ContentPage>;
}
