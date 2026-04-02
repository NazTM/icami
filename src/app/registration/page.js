import { loadContent } from "@/lib/load-content";
import { ContentPage } from "@/components/page/content-page";

export async function generateMetadata() {
  const { metaTitle, title, description } = await loadContent("registration");
  return { title: metaTitle || title, description };
}

export default async function RegistrationPage() {
  const { title, eyebrow, body } = await loadContent("registration");
  return <ContentPage title={title} eyebrow={eyebrow}>{body}</ContentPage>;
}
