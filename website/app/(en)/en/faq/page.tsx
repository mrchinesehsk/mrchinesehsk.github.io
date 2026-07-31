import FaqPage from "@/components/pages/FaqPage";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("en", "faq");

export default function Page() {
  return <FaqPage locale="en" />;
}
