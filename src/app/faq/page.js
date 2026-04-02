import { loadContent } from "@/lib/load-content";
import { ContentPage } from "@/components/page/content-page";

export async function generateMetadata() {
  const { metaTitle, title } = await loadContent("faq");
  return { title: metaTitle || title };
}

export default async function FaqPage() {
  const { title, eyebrow, body } = await loadContent("faq");
  return <ContentPage title={title} eyebrow={eyebrow}>{body}</ContentPage>;
}
