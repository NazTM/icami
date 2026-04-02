import { loadContent } from "@/lib/load-content";
import { ContentPage } from "@/components/page/content-page";

export async function generateMetadata() {
  const { metaTitle, title, description } = await loadContent("camera-ready");
  return { title: metaTitle || title, description };
}

export default async function CameraReadyPage() {
  const { title, eyebrow, body } = await loadContent("camera-ready");
  return <ContentPage title={title} eyebrow={eyebrow}>{body}</ContentPage>;
}
