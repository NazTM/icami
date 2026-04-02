import { loadContent } from "@/lib/load-content";
import { ContentPage } from "@/components/page/content-page";

export async function generateMetadata() {
  const { metaTitle, title, description } = await loadContent("submission");
  return { title: metaTitle || title, description };
}

export default async function SubmissionPage() {
  const { title, eyebrow, body } = await loadContent("submission");
  return <ContentPage title={title} eyebrow={eyebrow}>{body}</ContentPage>;
}
