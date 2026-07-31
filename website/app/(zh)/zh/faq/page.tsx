import FaqPage from "@/components/pages/FaqPage";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("zh", "faq");

export default function Page() {
  return <FaqPage locale="zh" />;
}
