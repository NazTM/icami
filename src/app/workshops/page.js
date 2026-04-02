import { loadContent } from "@/lib/load-content";
import { ContentPage } from "@/components/page/content-page";

export async function generateMetadata() {
  const { metaTitle, title, description } = await loadContent("workshops");
  return { title: metaTitle || title, description };
}

export default async function WorkshopsPage() {
  const { title, eyebrow, body } = await loadContent("workshops");
  return <ContentPage title={title} eyebrow={eyebrow}>{body}</ContentPage>;
}
