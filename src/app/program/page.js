import { loadContent } from "@/lib/load-content";
import { ContentPage } from "@/components/page/content-page";

export async function generateMetadata() {
  const { metaTitle, title } = await loadContent("program");
  return { title: metaTitle || title };
}

export default async function ProgramPage() {
  const { title, eyebrow, body } = await loadContent("program");
  return <ContentPage title={title} eyebrow={eyebrow}>{body}</ContentPage>;
}
