import FaqPage from "@/components/pages/FaqPage";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("fa", "faq");

export default function Page() {
  return <FaqPage locale="fa" />;
}
