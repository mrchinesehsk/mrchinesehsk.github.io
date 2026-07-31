import AboutPage from "@/components/pages/AboutPage";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("zh", "about");

export default function Page() {
  return <AboutPage locale="zh" />;
}
